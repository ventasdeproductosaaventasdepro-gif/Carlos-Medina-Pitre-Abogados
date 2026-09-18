# Carlos Medina Pitre & Abogados — Sitio web

Página estática (HTML, CSS y JavaScript puro). No requiere instalación, build ni servidor:
funciona en GitHub Pages, Netlify, Vercel o cualquier hosting.

## Estructura

```
├── index.html              Contenido del sitio
├── styles.css              Estilos (variables de color y tipografía al inicio, bloque :root)
├── script.js               Menú móvil, copiar correo, año del pie de página
├── README.md
└── assets/
    ├── logo/               Logos (horizontal, emblema, versiones blancas para fondo oscuro)
    ├── img/                Ilustraciones de portada, "Quiénes somos" y de cada área de práctica
    ├── fonts/              Newsreader y Public Sans, alojadas localmente (no dependen de Google)
    ├── favicon-32.png, favicon-192.png, apple-touch-icon.png
    └── og-image.png        Imagen para la vista previa al compartir el enlace
```

## Publicar en GitHub Pages

1. Suba **todo el contenido de esta carpeta** (incluida `assets/`) a la raíz de un repositorio.
2. En **Settings → Pages**, elija la rama `main` y la carpeta `/ (root)`.
3. Guarde. El sitio quedará en `https://<usuario>.github.io/<repositorio>/`.

> Importante: la carpeta `assets/` debe subirse junto con `index.html`. Si falta o cambia de
> nombre, los logos y las imágenes no cargarán.

## Personalización

- **Colores y tipografía:** variables al inicio de `styles.css`.
- **Textos, teléfono y correo:** directamente en `index.html`.
- **WhatsApp:** los enlaces usan `https://wa.me/573013883620` con un mensaje inicial. Para cambiar el
  mensaje, edite el texto después de `?text=` (codificado para URL).
- **Imágenes:** las ilustraciones son vectoriales (SVG). Para usar fotografías reales, reemplace el
  archivo correspondiente en `assets/img/` conservando la proporción (4:3 en las áreas, 4:5 en portada
  y "Quiénes somos") y actualice el `src` en `index.html`.

## Vista previa al compartir el enlace

Cuando el sitio tenga su dirección definitiva, descomente en `index.html` la etiqueta `og:image` y
reemplace `SU-DOMINIO` por el dominio real. Con eso, WhatsApp y redes sociales mostrarán la imagen
`assets/og-image.png` al compartir el enlace.

## Nota sobre los logos

Los logos entregados son PNG. Se recortaron y se separó el emblema (CM) para el favicon y los usos
pequeños. Si necesita usar el logo en tamaños grandes (pendones, papelería), conviene contar con la
versión vectorial (SVG, AI o PDF) del diseñador.
