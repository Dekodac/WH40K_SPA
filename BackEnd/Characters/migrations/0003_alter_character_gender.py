# Generated by Django 4.2.7 on 2023-11-05 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Characters', '0002_rename_characters_character'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='gender',
            field=models.CharField(choices=[('Male', 'Male'), ('Female', 'Female')], max_length=10),
        ),
    ]
