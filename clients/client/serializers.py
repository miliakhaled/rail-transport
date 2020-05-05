from rest_framework import serializers
from . import models


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


