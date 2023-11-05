from django.db import models

class Character(models.Model):

    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]

    char_name = models.CharField(max_length=50, unique=True, null=False)
    race = models.CharField(max_length=10, null=False)
    gender = models.CharField(max_length=10, null=False, choices=GENDER_CHOICES)
    is_magical = models.BooleanField(default=False, null=False)
    char_img = models.ImageField(upload_to='character_images/', null=True)

    def __str__(self):
        return self.char_name

