from raillogistic.graphene.graphene import CustomDjangoObjectType, CustomDjangoSerializerMutation, CustomConnection
import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene.relay.node import Node
from . import models
from graphene_django_extras import DjangoListObjectField, DjangoObjectField,  DjangoFilterPaginateListField,  LimitOffsetGraphqlPagination
from rest_framework import serializers
from raillogistic.graphene.CustomDjangoObjectListType import CustomDjangoListObjectType


class ClientType(CustomDjangoObjectType):
    class Meta:
        name = 'ClientType'
        model = models.Client
        filter_fields = {
            'id': ("exact",),
            'raison_social': ("exact", 'icontains'),
            'code_client': ("exact", 'icontains'),
            # 'barem': ("exact",),
        }


class ContactType(CustomDjangoObjectType):
    class Meta:
        name = 'ContactType'
        model = models.Contact
        filter_fields = '__all__'


# class EmailType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'EmailType'
# 		model = models.Email
# 		filter_fields = '__all__'


# class PhoneType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'PhoneType'
# 		model = models.Phone
# 		filter_fields = '__all__'


class ClientListType(CustomDjangoListObjectType):
    class Meta:
        name = 'ClientListType'
        model = models.Client
        filter_fields = {
            'id': ("exact",),
            'raison_social': ("exact", 'icontains'),
            'code_client': ("exact", 'icontains'),
            # 'barem': ("exact",),

        }
        pagination = LimitOffsetGraphqlPagination()


class ContactListType(CustomDjangoListObjectType):
    class Meta:
        name = 'ContactListType'
        model = models.Contact
        filter_fields = {
            'id': ('exact',),
            'nom': ('exact', 'icontains',),
            'prenom': ('exact', 'icontains',),
            'phone': ('exact', 'icontains',),
            'email': ('exact', 'icontains',),
            'client': ('exact',),
        }
        pagination = LimitOffsetGraphqlPagination()


# class EmailListType(DjangoListObjectType):
# 	class Meta:
# 		name = 'EmailListType'
# 		model = models.Email
# 		filter_fields = '__all__'
# 		pagination = LimitOffsetGraphqlPagination()


# class PhoneListType(DjangoListObjectType):
# 	class Meta:
# 		name = 'PhoneListType'
# 		model = models.Phone
# 		filter_fields = '__all__'
# 		pagination = LimitOffsetGraphqlPagination()


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Client
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = '__all__'


# class EmailSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = models.Email
# 		fields = '__all__'


# class PhoneSerializer(serializers.ModelSerializer):
# 	class Meta:
# 		model = models.Phone
# 		fields = '__all__'


class ClientMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = ClientSerializer


class ContactMutation(CustomDjangoSerializerMutation):
    class Meta:
        serializer_class = ContactSerializer


# class EmailMutation(CustomDjangoSerializerMutation):
# 	class Meta:
# 		serializer_class = EmailSerializer


# class PhoneMutation(CustomDjangoSerializerMutation):
# 	class Meta:
# 		serializer_class = PhoneSerializer


class ClientQuery(object):
    clients = DjangoFilterPaginateListField(
        ClientType, pagination=LimitOffsetGraphqlPagination(ordering="raison_social"))
    all_clients = DjangoListObjectField(ClientListType)
    client = DjangoObjectField(ClientType)


class ContactQuery(object):
    contacts = DjangoFilterPaginateListField(
        ContactType, pagination=LimitOffsetGraphqlPagination())
    all_contacts = DjangoListObjectField(ContactListType)
    contact = DjangoObjectField(ContactType)


# class EmailQuery(object):
# 	emails= DjangoFilterPaginateListField(EmailType,pagination=LimitOffsetGraphqlPagination())
# 	all_emails= DjangoListObjectField(EmailListType)
# 	email = DjangoObjectField(EmailType)


# class PhoneQuery(object):
# 	phones= DjangoFilterPaginateListField(PhoneType,pagination=LimitOffsetGraphqlPagination())
# 	all_phones= DjangoListObjectField(PhoneListType)
# 	phone = DjangoObjectField(PhoneType)


class ClientMutations(graphene.AbstractType):
    create_client = ClientMutation.CreateField()
    update_client = ClientMutation.UpdateField()
    delete_client = ClientMutation.DeleteField()


class ContactMutations(graphene.AbstractType):
    create_contact = ContactMutation.CreateField()
    update_contact = ContactMutation.UpdateField()
    delete_contact = ContactMutation.DeleteField()


# class EmailMutations(graphene.AbstractType):
# 	create_email = EmailMutation.CreateField()
# 	update_email = EmailMutation.UpdateField()
# 	delete_email = EmailMutation.DeleteField()


# class PhoneMutations(graphene.AbstractType):
# 	create_phone = PhoneMutation.CreateField()
# 	update_phone = PhoneMutation.UpdateField()
# 	delete_phone = PhoneMutation.DeleteField()
