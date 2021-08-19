from django import http
from django.shortcuts import render
from django.http import HttpResponse, response
# Create your views here.
def index(request):
    return HttpResponse("Respuesta Desde la vista de encuestas!")

def detalle(request,pregunta_id):
    return HttpResponse("Estas viendo la pregunta %s." % pregunta_id)

def resultados(request,pregunta_id):
    response = "Estas viendo los resultados de la pregunta %s." 
    return HttpResponse(response % pregunta_id)

def votar(request, pregunta_id):
    respuesta = "Estas votando por la pregunta " + str(pregunta_id)
    return HttpResponse(respuesta)

