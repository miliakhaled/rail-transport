import graphene
from graphene_django_extras import DjangoFilterPaginateListField,  LimitOffsetGraphqlPagination, DjangoObjectField
from graphene.relay.node import Node
from . import types
from . import mutations


# class ClientQuery(object):
#     clients = DjangoFilterPaginateListField(
#         types.ClientType, pagination=LimitOffsetGraphqlPagination())
#     client = DjangoObjectField(types.ClientType)


# class ContactQuery(object):
#     contacts = DjangoFilterPaginateListField(
#         types.ContactType, pagination=LimitOffsetGraphqlPagination())
#     contact = DjangoObjectField(types.ContactType)


# class EmailQuery(object):
#     emails = DjangoFilterPaginateListField(
#         types.EmailType, pagination=LimitOffsetGraphqlPagination())
#     email = DjangoObjectField(types.EmailType)


# class PhoneQuery(object):
#     phones = DjangoFilterPaginateListField(
#         types.PhoneType, pagination=LimitOffsetGraphqlPagination())
#     phone = DjangoObjectField(types.PhoneType)


class Mutations(graphene.AbstractType):
    create_nested_client = mutations.CreateClientMutation.Field()
    update_nested_client = mutations.UpdateClientMutation.Field()
