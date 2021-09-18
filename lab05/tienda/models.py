from django.db import models

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length=200) #varchar(200)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    precio = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField(default=0)
    pub_date = models.DateTimeField('date published')

    def __str__(self):
        return self.nombre

class Cliente(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=300)
    dni = models.IntegerField(name= "Dni")
    telefono = models.IntegerField(name="Telefono")
    direccion = models.TextField(max_length=100)
    email = models.EmailField(name="Email")
    fecha_nacimiento = models.DateTimeField(name="Fecha de Nacimiento")
    fecha_publicacion = models.DateTimeField(name="Fecha de Publicacion")

    def __str__(self):
        return self.nombre


