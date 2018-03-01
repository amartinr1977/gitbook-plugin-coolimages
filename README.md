# Plugin for GitBook: coolimages 

Este plugin va a permitir al usuario final dejar un aspecto más __cool__ a las imagenes en relación a como quedan usando el **mardown** por defecto.

## ¿Qué aspecto tiene?

El aspecto que tendrían los diálogos que incorparía el **Plugin coolimages** en tu **GitBook** sería similar al siguiente:

![Ejemplo de como quedaría una imagen Cool](https://github.com/amartinr1977/gitbook-plugin-coolimages/blob/master/assets/images/example-coolimage.png?raw=true)

## ¿Cómo hacer uso del Plugin?

Para hacer uso de este **Plugin de GitBook** tan sólo tienes que editar el archivo **book.json** de tu GitBook y añadir el siguiente campo:

```json
{
    "plugins": [
        "coolimages"
    ]
}
```

Una vez configurado el archivo anterior tan sólo será necesario hacer uso del plugin como se muestra a continuación.

## Ejemplos de uso:

Las siguientes imágenes y trozos de código muestran como hacer uso del plugin en tu **GitBook**:

### Cool Image Tipo1

```
{% coolimages_type1 url_image="../img/ruta-imagen-gitbook.png" %} 
    Texto de la imagen<br>otro texto
{% endcoolimages_type1 %}
```

Su aspecto resultante sería:

![Ejemplo de como quedaría una imagen Cool](https://github.com/amartinr1977/gitbook-plugin-coolimages/blob/master/assets/images/example-coolimage.png?raw=true)

### Cool Image Tipo1

```
{% coolimages_type2 url_image="../img/ruta-imagen-gitbook.png" %} 
    Texto de la imagen<br>otro texto
{% endcoolimages_type2 %}
```

Su aspecto resultante sería:

![Ejemplo de como quedaría una imagen Cool](https://github.com/amartinr1977/gitbook-plugin-coolimages/blob/master/assets/images/example-coolimage_type2.png?raw=true)


