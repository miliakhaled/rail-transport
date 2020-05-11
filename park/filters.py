from django_filters import FilterSet, CharFilter, LookupChoiceFilter
from django import forms
from . import models


class EngineTypeFilters(FilterSet):
    class Meta:
        fields = '__all__'
        model = models.EngineType


class EngineCapacityFilters(FilterSet):
    class Meta:
        fields = '__all__'
        model = models.EngineCapacity


class EngineModelFilters(FilterSet):
    class Meta:
        fields = '__all__'
        model = models.EngineModel


class EngineFilters(FilterSet):

    class Meta:
        fields = {
            "matricule": ('icontains', 'exact',),
            "marque": ('icontains', 'exact',),
            "year": ('icontains', 'exact',),
            "model": ('exact',),
        }
        model = models.Engine


class ChaufeurFilters(FilterSet):
    class Meta:
        fields = '__all__'
        model = models.Chaufeur
