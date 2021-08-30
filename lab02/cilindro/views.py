from django.shortcuts import render
import math
from math import *

# Create your views here.
def index(request):
    context = {
        'titulo' : "CALCULO DEL VOLUMEN DE UN CILINDRO",
    }
    return render(request, 'cilindro/valores.html', context)

def volumen(request):
    diametro = float(request.POST['diametro'])
    altura = float(request.POST['altura'])
    resultado = pi * math.pow(diametro/2, 2) * altura 
    context = {
        'titulo' : "Volumen de Cilindro",
        'resultado' : resultado,
    }
    return render(request, 'cilindro/volumen.html', context)