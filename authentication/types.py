from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from raillogistic.graphene.graphene import CustomDjangoObjectType


class UserType(CustomDjangoObjectType):
    class Meta:
        name = "User"
        model = get_user_model()
