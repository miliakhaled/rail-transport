from . import serializers
from raillogistic.graphene.graphene import CustomDjangoSerializerMutation
from graphene_django_cud.mutations import DjangoCreateMutation, DjangoBatchCreateMutation, DjangoUpdateMutation, DjangoPatchMutation
from . import models


class CreateContactMutations(DjangoBatchCreateMutation):
    class Meta:
        type_name = "CreateContactInput"
        model = models.Contact
        required_fields = ('nom', 'prenom',)
        # use_type_name = "ContactType"


class CreateClientMutation(DjangoCreateMutation):
    class Meta:
        model = models.Client
        type_name = 'CreateClientInput'
        required_fields = ('raison_social', 'code_client',)
        many_to_one_extras = {
            'contacts': {
                'add': {'type': 'auto'},
            }
        }


class UpdateContactMutations(DjangoUpdateMutation):
    class Meta:
        type_name = "UpdateContactInput"
        model = models.Contact
        required_fields = ('nom', 'prenom',)
        # use_type_name = "ContactType"


class UpdateClientMutation(DjangoUpdateMutation):
    class Meta:
        model = models.Client
        type_name = 'UpdateClientInput'
        required_fields = ('raison_social', 'code_client',)
        many_to_one_extras = {
            'contacts': {
                'exact': {'type': 'auto'},
            }
        }
