from django.db import models

# Create your models here.


class EngineType(models.Model):
    designation = models.CharField(max_length=100, null=False)

    def __str__(self):
        return f"{self.designation}"
    """
    models.CharField(choices=[
        ('camion','Camion'),
        ('forgonnette','Fourgonnette'),
        ('fourgon','Fourgon'),
        ('porte_engin','Port Engin'),
        ('camion_extensible','Camion Extensible')
    ])
    """


class EngineCapacity(models.Model):
    value = models.FloatField(
        verbose_name="Capacité")
    unit = models.CharField(choices=[
        ('T', 'T'),
        ('M', 'M')
    ], max_length=5, verbose_name="Unité", null=False, default="T")

    def __str__(self):
        return f"{self.value}{self.unit}"

    class Meta:
        unique_together = ('unit', 'value')


class EngineModel(models.Model):
    engine_type = models.ForeignKey(
        'park.EngineType', on_delete=models.PROTECT, null=False, related_name="types")
    capacity = models.ForeignKey(
        'park.EngineCapacity', on_delete=models.PROTECT, null=True, related_name="capacities")

    @property
    def designation(self):
        return f"{self.engine_type} {self.capacity}"

    def __str__(self):
        return f"{self.engine_type} {self.capacity}"


class Engine(models.Model):
    model = models.ForeignKey(
        'park.EngineModel', on_delete=models.PROTECT, null=False, related_name="models")

    matricule = models.CharField(max_length=100, null=False, unique=True)
    marque = models.CharField(max_length=100, null=True,)
    nature = models.CharField(max_length=50, null=True,)
    year = models.IntegerField(verbose_name="année", null=True)


class Chaufeur(models.Model):
    nom = models.CharField(max_length=100, null=False)
    prenom = models.CharField(max_length=100, null=False)
    can_drive = models.ManyToManyField('park.EngineType')

    def __str__(self):
        return f"{self.nom} {self.prenom}"
