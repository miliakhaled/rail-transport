# coding: utf-8

from django.http import HttpResponse
from django.views.generic import View
from raillogistic.reporting.utils import render_to_pdf
import json
from django.conf import settings
import os
from Transport.settings import BASE_DIR
from django.http import HttpResponse
from django.template.loader import render_to_string
from weasyprint import HTML, CSS
import tempfile
from django.shortcuts import render
from raillogistic.reporting.pdf_generator import PdfGenerator
from num2words import num2words
from django.contrib.auth.decorators import login_required


# @login_required(login_url="/login/")
# def pdf(request, **kwargs):
#     data = get_facture(kwargs['id'])
#     main = render_to_string('report/document.html', data)
#     header = render_to_string('report/header.html', {"client": data['client'],
#                                                      "numero": data['facture'].numero, "date": data['facture'].date, "state": "PAYEE" if data['facture'].state == "P" else "IMPAYEE"})
#     footer = render_to_string('report/footer.html')
#     annexes = []
#     for a in data['annexes']:
#         annex = render_to_string('report/annex.html',
#                                  {"annex": a, "details": a.detail(), "units": a.units(), "prices": a.prices(), "numero": a.facture.numero})
#         annex_doc = HTML(string=annex).render()
#         annexes.append(annex_doc)

#     generator = PdfGenerator(main, header, footer,
#                              base_url=os.path.join(BASE_DIR, 'build'), )
#     result = generator.render_pdf(annexes)
#     response = HttpResponse(content_type='application/pdf;')
#     content = 'inline; filename=facture.pdf'
#     download = request.GET.get("download")

#     if download:
#         content = "attachment; filename='facture.pdf'"
#     response['Content-Disposition'] = content
#     response['Content-Transfer-Encoding'] = 'binary'
#     with tempfile.NamedTemporaryFile(delete=True) as output:
#         output.write(result)
#         output.flush()
#         output = open(output.name, 'br')
#         response.write(output.read())
#     return response
