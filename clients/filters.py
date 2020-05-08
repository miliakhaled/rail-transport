from django_filters import FilterSet
from . import models


class ClientFilters(FilterSet):
    class Meta:
        model = models.Client
        fields = {
            'id': ("exact",),
            'raison_social': ("exact", 'icontains'),
            'code_client': ("exact", 'icontains'),
            # 'barem': ("exact",),
        }
