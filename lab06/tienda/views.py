from django.shortcuts import get_object_or_404, render

from .models import Categoria, Producto
# Create your views here.
def index(request):
    product_list = Producto.objects.order_by('nombre')[:10]
    categoria = Categoria.objects.all()
    context = {
        'product_list': product_list,
        'categoria': categoria
    }
    return render(request, 'index.html', context)

def producto(request, producto_id):
    producto = get_object_or_404(Producto, pk=producto_id)
    categoria = Categoria.objects.all()
    return render(request, 'producto.html', {'producto': producto,'categoria':categoria})

def categoria(request, categoria_id):
    categoria_filtrada = Producto.objects.filter(Categoria=categoria_id)
    categoria = Categoria.objects.all()
    return render(request, 'categoria.html',{'categoria': categoria,'categoria_filtrada':categoria_filtrada} )    
