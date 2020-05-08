# Generated by Django 3.0.1 on 2020-05-08 00:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='EngineCapacity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.DecimalField(decimal_places=3, max_digits=4, verbose_name='Capacité')),
                ('unit', models.CharField(max_length=5, verbose_name='Unité')),
            ],
        ),
        migrations.CreateModel(
            name='EngineType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('designation', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Engine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('matricule', models.CharField(max_length=100, unique=True)),
                ('model', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='models', to='park.EngineType')),
            ],
        ),
        migrations.CreateModel(
            name='Chaufeur',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('vehicule', models.ManyToManyField(to='park.Engine')),
            ],
        ),
    ]
