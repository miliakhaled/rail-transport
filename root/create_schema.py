import sys
from inspect import isclass
import ast
import os.path
import sys


def lines(length):
    return ["\n" for e in range(length)]


def checkExistance(app, filename):
    if(os.path.exists(f"{app}/{filename}_default.py")):
        res = input(
            f"The file {filename}_default.py already exists, do you want to replace it (y/n):")
        if res == "y":
            return False
        else:
            return True
    else:
        return False


def createImports(app, models):
    if checkExistance(app, "types") == False:
        imports = open(f"{app}/graphql.py", 'w+')

        # for Types
        imports.writelines(["from raillogistic.graphene.graphene import CustomDjangoObjectType,CustomDjangoSerializerMutation, CustomConnection\n", "import graphene\n", "from graphene_django.filter import DjangoFilterConnectionField\n",
                            "from graphene.relay.node import Node\n"])
        imports.write("from . import models\n")
        imports.write("from . import filters\n")
        imports.write("from graphene_django_extras import DjangoListObjectType,DjangoListObjectField, DjangoObjectField, DjangoFilterPaginateListField,  LimitOffsetGraphqlPagination\n")
        imports.write(
            "from raillogistic.graphene.CustomDjangoObjectListType import CustomDjangoListObjectType\n")
        imports.write("from rest_framework import serializers\n")
        imports.writelines(lines(2))

        imports.close()


def createFilters(app, models):
            # types.py
    filters = open(f"{app}/filters.py", 'w+')
    filters.write('from django_filters import FilterSet\n')
    filters.write('from . import models\n')
    for model in models:
        filters.write(f"class {model}Filters(FilterSet):\n")
        filters.write(f"\tclass Meta:\n")
        filters.write(f"\t\tfields = '__all__'\n")
        filters.write(f"\t\tmodel = models.{model} \n")
    filters.close()


def createTypes(app, models):
            # types.py
    types = open(f"{app}/graphql.py", 'a+')
    # imports
    imports = f"from . import models\n"
    # types.write(imports)
    # types.writelines(["from raillogistic.graphenegraphene import CustomDjangoObjectType, CustomConnection\n", "import graphene\n"
    #                  ])

    for model in models:
        types.write(f"class {model}Type(CustomDjangoObjectType):\n")
        types.write(f"\tclass Meta:\n")
        types.write(f"\t\tname = '{model}Type'\n")
        types.write(f"\t\tmodel = models.{model} \n")
        # types.write("\t\tfilter_fields = '__all__'\n")
        types.write(f"\t\tfilterset_class = filters.{model}Filters\n")
        #types.write(f"\t\tinterfaces = (graphene.relay.Node,)\n")
        #types.write(f"\t\tconnection_class = CustomConnection\n")
        types.write("\n\n")

    for model in models:
        types.write(f"class {model}ListType(CustomDjangoListObjectType):\n")
        types.write(f"\tclass Meta:\n")
        types.write(f"\t\tname = '{model}ListType'\n")
        types.write(f"\t\tmodel = models.{model} \n")
        types.write(f"\t\tfilterset_class = filters.{model}Filters\n")
        types.write("\t\tpagination = LimitOffsetGraphqlPagination()\n")
        #types.write(f"\t\tinterfaces = (graphene.relay.Node,)\n")
        #types.write(f"\t\tconnection_class = CustomConnection\n")
        types.write("\n\n")
    print(
        f"\x1b[5;30;42m...... file {app}/types.py has been created\x1b[0m ")
    print("\n")


def createSerializers(app, models):
    # Serializers
    serializers = open(f"{app}/graphql.py", 'a+')
    # serializers.writelines(["from rest_framework import serializers\n",
    #                        "from . import models\n"])
    serializers.writelines(lines(2))
    for model in models:
        serializers.write(
            f"class {model}Serializer(serializers.ModelSerializer):\n")
        serializers.write(f"\tclass Meta:\n")
        serializers.write(f"\t\tmodel = models.{model}\n")
        serializers.write(f"\t\tfields = '__all__'\n")
        serializers.writelines(lines(2))
    print(
        f"\x1b[5;30;42m...... file {app}/serializers.py has been created\x1b[0m ")
    print("\n")


def createMutaions(app, models):
    # Mutations
    mutations = open(f"{app}/graphql.py", "a+")
    # mutations.writelines(["from . import serializers\n",
    #                      "from raillogistic.graphenegraphene import CustomDjangoSerializerMutation\n"])
    mutations.writelines(lines(2))
    for model in models:
        mutations.write(
            f"class {model}Mutation(CustomDjangoSerializerMutation):\n")
        mutations.write("\tclass Meta:\n")
        mutations.write(
            f"\t\tserializer_class = {model}Serializer \n")
        mutations.writelines(lines(2))
    print(
        f"\x1b[5;30;42m...... file {app}/mutations.py has been created\x1b[0m ")
    print("\n")


def createSchema(app, models):
    # Schemas
    schema = open(f"{app}/graphql.py", "a+")
    # schema.writelines(["import graphene\n",
    #                    "from graphene_django.filter import DjangoFilterConnectionField\n",
    #                    "from graphene.relay.node import Node\n",
    #                    "from . import types\n",
    #                    "from . import mutations\n"])

    schema.writelines(lines(2))
    # queries
    for model in models:
        schema.write(f"class {model}Query(object):\n")
        schema.write(
            f"\t{model.lower()}s= DjangoFilterPaginateListField({model}Type,pagination=LimitOffsetGraphqlPagination())\n")
        schema.write(
            f"\tall_{model.lower()}s= DjangoListObjectField({model}ListType)\n")
        schema.write(
            f"\t{model.lower()} = DjangoObjectField({model}Type)\n")
        schema.writelines(lines(2))

    for model in models:
        schema.write(
            f"class {model}Mutations(graphene.AbstractType):\n")
        schema.write(
            f'\tcreate_{model.lower()} = {model}Mutation.CreateField()\n')
        schema.write(
            f'\tupdate_{model.lower()} = {model}Mutation.UpdateField()\n')
        schema.write(
            f'\tdelete_{model.lower()} = {model}Mutation.DeleteField()\n')
        schema.writelines(lines(2))
    print(
        f"\x1b[5;30;42m...... file {app}/schema.py has been created\x1b[0m ")
    print("\n")


app = input("app name: ")
file = open(f"{app}/models.py", "r")
source = file.read()
p = ast.parse(source)
models = [node.name for node in ast.walk(p) if isinstance(node, ast.ClassDef)]
models[:] = (value for value in models if value != 'Meta')
createImports(app, models)
createTypes(app, models)
createFilters(app, models)
createSerializers(app, models)
createMutaions(app, models)
createSchema(app, models)
