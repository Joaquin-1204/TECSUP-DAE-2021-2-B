from django.shortcuts import render
from django import http
from django.http import HttpResponse, response

# Create your views here.

def operaciones(request):
    return HttpResponse("Vista de Operaciones!!! ")

def suma(request,x,y):

    suma = x + y
    adicion="<html><body><h2>La suma de %s + %s = %s ." %(x,y,suma)
    return HttpResponse(adicion)

def resta(request,x,y):

    resta = x - y
    sustraccion="<html><body><h2>La resta de %s - %s = %s ." %(x,y,resta)
    return HttpResponse(sustraccion)

def multiplicacion(request,x,y):

    multiplicacion = x * y
    producto="<html><body><h2>La multiplicacion de %s * %s = %s ." %(x,y,multiplicacion)
    return HttpResponse(producto)

