import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from graphene_django_extras import all_directives
import authentication.graphql
import authentication.schema


class Queries(
    authentication.graphql.ProfileQuery,
    authentication.schema.Query,
    graphene.ObjectType,

):
    dummy = graphene.String()


class Mutations(
    graphene.ObjectType,
    authentication.schema.Mutations
):
    pass


schema = graphene.Schema(auto_camelcase=False, query=Queries,
                         mutation=Mutations, directives=all_directives)
