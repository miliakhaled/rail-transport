from django.contrib import admin
from . import models
# Register your models here.

admin.site.register(models.Chaufeur)
admin.site.register(models.EngineModel)
admin.site.register(models.EngineCapacity)
admin.site.register(models.EngineType)
