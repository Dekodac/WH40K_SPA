from django.db import models

class Characters(models.Model):
    char_name = models.CharField(max_length=50, unique=True, null=False)
    race = models.CharField(max_length=10,null=False)
    gender = models.CharField(max_length=10,null=False)
    is_magical = models.BooleanField(default=False,null=False)
    char_img = models.ImageField(upload_to='character_images/', null=True)



    def __str__(self):
        return self.char_name
