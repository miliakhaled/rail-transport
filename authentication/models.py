from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.SET_NULL, null=True, related_name="profile")
    photo = models.ImageField(upload_to='build/profiles')
    job = models.CharField(max_length=200, default="")

    def __str__(self):
        return f"{self.user.username}"
