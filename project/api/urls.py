from django.urls import path
from .views import card_model_list, card_model_detail

urlpatterns = [
    path('cards/', card_model_list),
    path('cards/<int:pk>/', card_model_detail),
]

