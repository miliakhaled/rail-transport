import graphene
from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from graphene_django_extras import all_directives
import authentication.graphql
import authentication.schema
import clients.graphql as ClientGraph
import clients.schema as ClientSchema
import park.graphql as ParkGraph


class Queries(
    authentication.graphql.ProfileQuery,
    authentication.schema.Query,
    ClientGraph.ClientQuery,
    ClientGraph.ContactQuery,
    ParkGraph.EngineTypeQuery,
    ParkGraph.EngineQuery,
    ParkGraph.ChaufeurQuery,
    ParkGraph.EngineModelQuery,
    ParkGraph.EngineCapacityQuery,
    graphene.ObjectType,

):
    dummy = graphene.String()


class Mutations(
    graphene.ObjectType,
    authentication.schema.Mutations,
    ClientGraph.ClientMutations,
    ClientGraph.ContactMutations,
    ClientSchema.Mutations,
    ParkGraph.EngineTypeMutations,
    ParkGraph.EngineMutations,
    ParkGraph.ChaufeurMutations,
    ParkGraph.EngineModelMutations,
    ParkGraph.EngineCapacityMutations,
):
    pass


schema = graphene.Schema(auto_camelcase=False, query=Queries,
                         mutation=Mutations, directives=all_directives)
