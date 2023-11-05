from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from datetime import date

class User(AbstractUser):
  username = models.CharField(max_length = 50, blank = True, null = False, unique = True)
  email = models.EmailField(unique = True, null = False)
  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']
  user_created_date = models.DateTimeField(auto_now_add=True)


  def __str__(self):
      return "{}".format(self.email)

