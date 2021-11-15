from django.urls import path

from . import views

urlpatterns = [
    path('', views.index),
    path('libros',views.libros),
    path('prestamo',views.prestamo),
    path('prestamo/<int:prestamo_id>',views.prestamodetalle)
]