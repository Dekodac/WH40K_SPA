# Generated by Django 4.2.7 on 2023-11-07 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Characters', '0004_character_faction_alter_character_gender'),
    ]

    operations = [
        migrations.AlterField(
            model_name='character',
            name='race',
            field=models.CharField(max_length=20),
        ),
    ]
