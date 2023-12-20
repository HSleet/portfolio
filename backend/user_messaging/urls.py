from django.urls import path
from .views import MessageView

urlpatterns = [
    path('send-message/', MessageView.as_view(), name='send-message'),
]