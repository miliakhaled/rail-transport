from . import models
from custom.graphene import CustomDjangoObjectType, CustomConnection
import graphene
# class ClientType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'ClientType'
# 		model = models.Client 
# 		filter_fields = {
# 			'id':("exact",),
# 			'raison_social':("exact",'icontains'),
# 			'code_client':("exact",'icontains'),
# 		}
# 		#interfaces = (graphene.relay.Node,)
# 		#connection_class = CustomConnection


# class ContactType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'ContactType'
# 		model = models.Contact 
# 		filter_fields = '__all__'
# 		#interfaces = (graphene.relay.Node,)
# 		#connection_class = CustomConnection


# class EmailType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'EmailType'
# 		model = models.Email 
# 		filter_fields = '__all__'
# 		#interfaces = (graphene.relay.Node,)
# 		#connection_class = CustomConnection


# class PhoneType(CustomDjangoObjectType):
# 	class Meta:
# 		name = 'PhoneType'
# 		model = models.Phone 
# 		filter_fields = '__all__'
# 		#interfaces = (graphene.relay.Node,)
# 		#connection_class = CustomConnection


