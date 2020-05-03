import graphene
from raillogistic.graphene.graphene import CustomDjangoObjectType, CustomDjangoSerializerMutation, CustomConnection
from graphene_django.filter import DjangoFilterConnectionField
from graphene.relay.node import Node
from . import models
from graphene_django_extras import LimitOffsetGraphqlPagination, DjangoObjectField
from rest_framework import serializers
from raillogistic.graphene.CustomDjangoObjectListType import CustomDjangoListObjectType


class ProfileType(CustomDjangoObjectType):
    class Meta:
        name = 'ProfileType'
        model = models.Profile
        filter_fields = '__all__'


class ProfileListType(CustomDjangoListObjectType):
    class Meta:
        name = 'ProfileListType'
        model = models.Profile
        filter_fields = '__all__'
        pagination = LimitOffsetGraphqlPagination()


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Profile
        fields = '__all__'


class ProfileMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = ProfileSerializer


class ProfileQuery(object):
    #profiles= DjangoFilterPaginateListField(ProfileType,pagination=LimitOffsetGraphqlPagination())
    #all_profiles= DjangoListObjectField(ProfileListType)
    profile = DjangoObjectField(ProfileType)


class ProfileMutations(graphene.AbstractType):
    create_profile = ProfileMutation.CreateField()
    update_profile = ProfileMutation.UpdateField()
    delete_profile = ProfileMutation.DeleteField()
