from rest_framework import serializers
from .models import Character

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['id', 'char_name', 'race', 'faction', 'gender', 'is_magical', 'char_img']
