from django.urls import path

from . import views

urlpatterns = [
    path('', views.operaciones, name='operacion'),
    path('sumar/<int:x>/<int:y>/',views.suma,name='adicion'),
    path('restar/<int:x>/<int:y>/',views.resta,name='sustracción'),
    path('multiplicar/<int:x>/<int:y>/',views.multiplicacion,name='producto'),
]
