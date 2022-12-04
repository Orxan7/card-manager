from rest_framework import serializers, routers
from .models import CardModel


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardModel
        fields = "__all__"
