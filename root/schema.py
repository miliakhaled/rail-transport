import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from graphene_django_extras import all_directives
import authentication.graphql
import authentication.schema
import clients.graphql as ClientGraph
import clients.schema as ClientSchema


class Queries(
    authentication.graphql.ProfileQuery,
    authentication.schema.Query,
    ClientGraph.ClientQuery,
    ClientGraph.ContactQuery,
    graphene.ObjectType,

):
    dummy = graphene.String()


class Mutations(
    graphene.ObjectType,
    authentication.schema.Mutations,
    ClientGraph.ClientMutations,
    ClientGraph.ContactMutations,
    ClientSchema.Mutations
):
    pass


schema = graphene.Schema(auto_camelcase=False, query=Queries,
                         mutation=Mutations, directives=all_directives)
