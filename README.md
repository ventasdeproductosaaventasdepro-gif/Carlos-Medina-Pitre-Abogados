# Carlos Medina Pitre & Abogados — Sitio web informativo

Página web estática de una sola vista (landing page) para el despacho
**Carlos Medina Pitre & Abogados**. Presenta el despacho, sus áreas de
práctica y los canales de contacto (correo, WhatsApp e Instagram).

## Estructura del proyecto

```
├── index.html              # Página principal (todo el contenido del sitio)
├── styles.css              # Estilos del sitio
├── script.js                # Menú móvil, copiar correo y año del footer
├── assets/
│   ├── logo-mark.png              # Isotipo (fondo transparente) — uso en fondos claros
│   ├── logo-mark-white.png        # Isotipo en blanco — uso en fondos oscuros
│   ├── logo-horizontal.png        # Logo horizontal — uso en fondos claros
│   └── logo-horizontal-white.png  # Logo horizontal en blanco — uso en fondos oscuros
└── README.md
```

> **Nota:** no se incluyeron `admin.html` / `admin.js` porque este sitio es
> puramente informativo (no gestiona datos ni requiere un panel de
> administración). Si en el futuro se necesita, por ejemplo, un formulario
> de contacto con backend o gestión de contenido, se pueden agregar en ese
> momento.

## Cómo publicarlo con GitHub Pages

1. Sube estos archivos a un repositorio de GitHub (puede ser la raíz del
   repositorio o una carpeta `/docs`).
2. Ve a **Settings → Pages** en el repositorio.
3. En **Source**, selecciona la rama (por ejemplo `main`) y la carpeta
   raíz (`/`).
4. Guarda. GitHub publicará el sitio en una URL del tipo:
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

No requiere backend, build ni dependencias: es HTML, CSS y JavaScript
puro, así que funciona tal cual en GitHub Pages, Netlify, Vercel o
cualquier hosting estático.

## Personalización rápida

- **Colores y tipografía:** definidos como variables al inicio de
  `styles.css` (bloque `:root`).
- **Textos:** todo el contenido (quiénes somos, áreas de práctica,
  contacto) está directamente en `index.html`.
- **WhatsApp:** el enlace usa el formato `https://wa.me/57XXXXXXXXXX`
  (número actual: `+57 301 388 3620`). Aparece tanto en el botón del
  encabezado/contacto como en el botón flotante inferior derecho.
- **Correo:** el botón "Copiar correo" usa la API del portapapeles del
  navegador (con respaldo para navegadores antiguos), definida en
  `script.js`.
