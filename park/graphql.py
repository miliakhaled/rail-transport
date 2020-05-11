from raillogistic.graphene.graphene import CustomDjangoObjectType, CustomDjangoSerializerMutation, CustomConnection
import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene.relay.node import Node
from . import models
from . import filters
from graphene_django_extras import DjangoListObjectType, DjangoListObjectField, DjangoObjectField, DjangoFilterPaginateListField,  LimitOffsetGraphqlPagination
from raillogistic.graphene.CustomDjangoObjectListType import CustomDjangoListObjectType
from rest_framework import serializers


class EngineTypeType(CustomDjangoObjectType):
    class Meta:
        name = 'EngineTypeType'
        model = models.EngineType
        filterset_class = filters.EngineTypeFilters


class EngineCapacityType(CustomDjangoObjectType):
    class Meta:
        name = 'EngineCapacityType'
        model = models.EngineCapacity
        filterset_class = filters.EngineCapacityFilters


class EngineModelType(CustomDjangoObjectType):
    class Meta:
        name = 'EngineModelType'
        model = models.EngineModel
        filterset_class = filters.EngineModelFilters

    designation = graphene.String()


class EngineType(CustomDjangoObjectType):
    class Meta:
        name = 'EngineType'
        model = models.Engine
        filterset_class = filters.EngineFilters


class ChaufeurType(CustomDjangoObjectType):
    class Meta:
        name = 'ChaufeurType'
        model = models.Chaufeur
        filterset_class = filters.ChaufeurFilters


class EngineTypeListType(CustomDjangoListObjectType):
    class Meta:
        name = 'EngineTypeListType'
        model = models.EngineType
        filterset_class = filters.EngineTypeFilters
        pagination = LimitOffsetGraphqlPagination()


class EngineCapacityListType(CustomDjangoListObjectType):
    class Meta:
        name = 'EngineCapacityListType'
        model = models.EngineCapacity
        filterset_class = filters.EngineCapacityFilters
        pagination = LimitOffsetGraphqlPagination()


class EngineModelListType(CustomDjangoListObjectType):
    class Meta:
        name = 'EngineModelListType'
        model = models.EngineModel
        filterset_class = filters.EngineModelFilters
        pagination = LimitOffsetGraphqlPagination()


class EngineListType(CustomDjangoListObjectType):
    class Meta:
        name = 'EngineListType'
        model = models.Engine
        filterset_class = filters.EngineFilters
        pagination = LimitOffsetGraphqlPagination()


class ChaufeurListType(CustomDjangoListObjectType):
    class Meta:
        name = 'ChaufeurListType'
        model = models.Chaufeur
        filterset_class = filters.ChaufeurFilters
        pagination = LimitOffsetGraphqlPagination()


class EngineTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EngineType
        fields = '__all__'


class EngineCapacitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EngineCapacity
        fields = '__all__'


class EngineModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EngineModel
        fields = '__all__'


class EngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Engine
        fields = '__all__'


class ChaufeurSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chaufeur
        fields = '__all__'


class EngineTypeMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = EngineTypeSerializer


class EngineCapacityMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = EngineCapacitySerializer


class EngineModelMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = EngineModelSerializer


class EngineMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = EngineSerializer


class ChaufeurMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = ChaufeurSerializer


class EngineTypeQuery(object):
    enginetypes = DjangoFilterPaginateListField(
        EngineTypeType, pagination=LimitOffsetGraphqlPagination())
    all_enginetypes = DjangoListObjectField(EngineTypeListType)
    enginetype = DjangoObjectField(EngineTypeType)


class EngineCapacityQuery(object):
    enginecapacitys = DjangoFilterPaginateListField(
        EngineCapacityType, pagination=LimitOffsetGraphqlPagination())
    all_enginecapacitys = DjangoListObjectField(EngineCapacityListType)
    enginecapacity = DjangoObjectField(EngineCapacityType)


class EngineModelQuery(object):
    enginemodels = DjangoFilterPaginateListField(
        EngineModelType, pagination=LimitOffsetGraphqlPagination())
    all_enginemodels = DjangoListObjectField(EngineModelListType)
    enginemodel = DjangoObjectField(EngineModelType)


class EngineQuery(object):
    engines = DjangoFilterPaginateListField(
        EngineType, pagination=LimitOffsetGraphqlPagination())
    all_engines = DjangoListObjectField(EngineListType)
    engine = DjangoObjectField(EngineType)


class ChaufeurQuery(object):
    chaufeurs = DjangoFilterPaginateListField(
        ChaufeurType, pagination=LimitOffsetGraphqlPagination())
    all_chaufeurs = DjangoListObjectField(ChaufeurListType)
    chaufeur = DjangoObjectField(ChaufeurType)


class EngineTypeMutations(graphene.AbstractType):
    create_enginetype = EngineTypeMutation.CreateField()
    update_enginetype = EngineTypeMutation.UpdateField()
    delete_enginetype = EngineTypeMutation.DeleteField()


class EngineCapacityMutations(graphene.AbstractType):
    create_enginecapacity = EngineCapacityMutation.CreateField()
    update_enginecapacity = EngineCapacityMutation.UpdateField()
    delete_enginecapacity = EngineCapacityMutation.DeleteField()


class EngineModelMutations(graphene.AbstractType):
    create_enginemodel = EngineModelMutation.CreateField()
    update_enginemodel = EngineModelMutation.UpdateField()
    delete_enginemodel = EngineModelMutation.DeleteField()


class EngineMutations(graphene.AbstractType):
    create_engine = EngineMutation.CreateField()
    update_engine = EngineMutation.UpdateField()
    delete_engine = EngineMutation.DeleteField()


class ChaufeurMutations(graphene.AbstractType):
    create_chaufeur = ChaufeurMutation.CreateField()
    update_chaufeur = ChaufeurMutation.UpdateField()
    delete_chaufeur = ChaufeurMutation.DeleteField()
