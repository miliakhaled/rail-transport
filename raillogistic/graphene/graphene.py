from graphene_django import types
from graphene import Int
import graphene
from graphene_django_extras import DjangoSerializerMutation
from graphene.relay.node import to_global_id
from raillogistic.graphene.CustomSerializerMutation import DjangoSerializerMutation

from graphene_django_extras.types import DjangoObjectType
from graphene_django.registry import Registry


class CustomDjangoObjectType(types.DjangoObjectType):
    class Meta:
        abstract = True

    rowid = Int()

    def resolve_rowid(self, info):
        return self.id


class CustomConnection(graphene.Connection):
    class Meta:
        abstract = True

    total_count = Int()

    def resolve_total_count(self, info):
        return self.length


class CustomDjangoSerializerMutation(DjangoSerializerMutation):

    class Meta:
        abstract = True

    global_id = graphene.String()

    @classmethod
    def perform_mutate(cls, obj, info):
        resp = {cls._meta.output_field_name: obj, "ok": True, "errors": None}
        global_id = to_global_id(
            id=obj.id, type="{}Type".format(type(obj).__name__))
        return cls(**resp, global_id=global_id)
