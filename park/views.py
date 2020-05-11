from django.apps import apps
import json
from . import models
from django.http import HttpResponse
from django.shortcuts import redirect
from django.contrib.auth.models import User
import xlwt
from django.db.models import ForeignKey


def export(request):

    if request.GET:
        app_name = request.GET.get('app_name', '')
        model_name = request.GET.get('model_name', '')
        if not app_name or not model_name:
            return redirect('/')
        model = apps.get_model(app_name, model_name)

        filename = request.GET.get('filename', '')
        items = request.GET.get('items', '')
        selection = request.GET.get('selection', '')
        page = int(request.GET.get('page', ''))
        rowPerPage = int(request.GET.get('rowPerPage', ''))
        fields = request.GET.get('fields', '')

        if not fields:
            return redirect('/')

        headers = request.GET.get('headers', '')
        # helpers = json.loads(request.GET.get('helpers'])
        variables = request.GET.get('variables', '')
        response = HttpResponse(content_type='application/ms-excel')
        response['Content-Disposition'] = f'attachment; filename="{filename}.xls"'
        wb = xlwt.Workbook(encoding='utf-8')
        ws = wb.add_sheet(filename)
        # Sheet header, first row
        row_num = 0
        font_style = xlwt.XFStyle()
        font_style.font.bold = True
        columns = headers.split(',')
        for col_num in range(len(fields.split(','))):
            ws.write(row_num, col_num, columns[col_num], font_style)

        # Sheet body, remaining rows
        font_style = xlwt.XFStyle()

        if items == "displayed":
            if selection == "filter":
                rows = model.objects.filter(**json.loads(variables)).all(
                )[page*rowPerPage: page*rowPerPage+rowPerPage].values_list(*fields.split(','))
            else:
                rows = model.objects.all(
                )[page*rowPerPage: page*rowPerPage+rowPerPage].values_list(*fields.split(','))
        else:
            if selection == "filter":

                rows = model.objects.filter(**json.loads(variables)).all(
                ).values_list(*fields.split(','))
            else:
                rows = model.objects.all(
                ).values_list(*fields.split(','))

        for row in rows:
            row_num += 1
            for col_num in range(len(row)):
                field_name = fields.split(',')[col_num]
                if isinstance(model._meta.get_field(field_name), ForeignKey):
                    value = getattr(model.objects.get(
                        pk=row[col_num]), field_name).__str__()
                    ws.write(row_num, col_num, value, font_style)
                else:
                    ws.write(row_num, col_num,
                             row[col_num], font_style)
        wb.save(response)
        return response
    return redirect('/')

# if isinstance(model._meta.get_field(
#                         fields.split(',')[col_num]), ForeignKey):
#                     print(model.objects.get(
#                         pk=row[col_num]).__str__())
#                     value = model.objects.get(
#                         pk=row[col_num]).__str__()
#                     ws.write(row_num, col_num, value, font_style)
#                 else:
#                     ws.write(row_num, col_num,
#                              row[col_num], font_style)
