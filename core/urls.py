from django.urls import path
from django_distill import distill_path
from . import views

urlpatterns = [
    distill_path('', views.home, name='home', distill_file='index.html'),
    distill_path('catering/', views.catering, name='catering', distill_file='catering/index.html'),
    distill_path('decoration/', views.decoration, name='decoration', distill_file='decoration/index.html'),
    distill_path('juice-hubs/', views.juice_hubs, name='juice_hubs', distill_file='juice-hubs/index.html'),
]
