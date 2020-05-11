from django.db import models

# Create your models here.
from django.db import models


class Client(models.Model):
    raison_social = models.CharField(
        unique=True, max_length=150, null=False, verbose_name="Raison Social")
    code_client = models.CharField(unique=True, max_length=20, null=False, )
    address = models.CharField(null=True, max_length=200, blank=True)
    phone = models.CharField(null=True, max_length=15, blank=True)
    fax = models.CharField(null=True, max_length=15, blank=True)
    fix = models.CharField(null=True, max_length=15, blank=True)
    NIF = models.CharField(null=True, max_length=30, blank=True)
    RC = models.CharField(null=True, max_length=30, blank=True)
    TIN = models.CharField(null=True, max_length=30, blank=True)
    email = models.EmailField(max_length=40, null=True, blank=True)
    # barem = models.ForeignKey('barem.Barem', on_delete=models.SET_NULL,
    #   null=True, blank=True, related_name="clients")

    def __str__(self):
        return f'{self.raison_social}'


class Contact(models.Model):
    nom = models.CharField(max_length=30, blank=False)
    prenom = models.CharField(max_length=30)
    fonction = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=50, blank=True, null=True)
    phone = models.CharField(max_length=50, blank=True, null=True)

    client = models.ForeignKey(
        Client, on_delete=models.CASCADE, null=False, related_name='contacts')

    def __str__(self):
        return f'{self.nom} {self.prenom}'


def props(cls):
    return [i for i in cls.__dict__.keys() if i[:1] != '_']


# class Email(models.Model):
#     email = models.EmailField(max_length=30)
#     contact = models.ForeignKey(
#         Contact, on_delete=models.CASCADE, related_name='emails')

#     def __str__(self):
#         return self.email


# class Phone(models.Model):
#     phone_types = [
#         ('MOBILE', "MOBILE"),
#         ('FIX', "FIX"),
#         ('FAX', "FAX"),
#     ]
#     number = models.CharField(max_length=30)
#     contact = models.ForeignKey(
#         Contact, on_delete=models.CASCADE, related_name='phones')

#     def __str__(self):
#         return self.number
