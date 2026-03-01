from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('catering/', views.catering, name='catering'),
    path('decoration/', views.decoration, name='decoration'),
    path('juice-hubs/', views.juice_hubs, name='juice_hubs'),
]
