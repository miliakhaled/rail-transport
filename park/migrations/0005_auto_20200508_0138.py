# Generated by Django 3.0.1 on 2020-05-08 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('park', '0004_engine_capacity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='enginecapacity',
            name='value',
            field=models.FloatField(unique=True, verbose_name='Capacité'),
        ),
    ]
