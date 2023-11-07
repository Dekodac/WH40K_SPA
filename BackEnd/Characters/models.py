from django.db import models

class Character(models.Model):

    FACTION_CHOICES = [
        ('Adeptus Mechanicus', 'Adeptus Mechanicus'),
        ('Imperial Guard', 'Imperial Guard'),
        ('Space Marines', 'Space Marines'),
    ]

    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other','Other')
    ]

    char_name = models.CharField(max_length=50, unique=True, null=False)
    race = models.CharField(max_length=20, null=False)
    faction = models.CharField(max_length=50, null=False, choices=FACTION_CHOICES)
    gender = models.CharField(max_length=10, null=False, choices=GENDER_CHOICES)
    is_magical = models.BooleanField(default=False, null=False)
    char_img = models.ImageField(upload_to='character_images/', null=True)

    def __str__(self):
        return self.char_name
