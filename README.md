# Portfolio Web — Práctica 1 (10/10)

Este proyecto cumple todos los requisitos solicitados: HTML5 + CSS3 semánticos, responsive (móvil y escritorio), JavaScript para **menú** y **popup de cookies**, tipografías **locales** (2), política de privacidad, 3 proyectos, CV, contacto y blog opcional. Incluye además guía para GitHub Pages y memoria lista para exportar a PDF.

## Estructura
```
.
├─ index.html
├─ projects.html
├─ cv.html
├─ contact.html
├─ blog.html
├─ privacy.html
└─ assets/
   ├─ css/styles.css
   ├─ js/{main.js,cookies.js}
   ├─ img/{hero.svg,project1.svg,project2.svg,project3.svg}
   └─ fonts/{Inter-*, Merriweather-*}  ← coloca aquí los archivos de fuentes
```

## Tipografías locales (requisito)
- **Inter** (OFL, local): coloca `Inter-Regular.woff2` y `Inter-Regular.woff` en `assets/fonts/`
- **Merriweather** (OFL, local): coloca `Merriweather-Regular.woff2` y `Merriweather-Regular.woff` en `assets/fonts/`

> Descarga desde Font Squirrel o los repos oficiales. No uses Google Fonts enlazado; deben cargarse **localmente**. Ya están declaradas en `styles.css` con `@font-face`.

## Imágenes libres
Las imágenes incluidas son **placeholders SVG** propios. Puedes reemplazarlas por imágenes de Unsplash/Pexels/Pixabay (libres de derechos).

## GitHub
1. Crea el repo y haz el primer commit **antes de empezar**.
2. Sube cambios pequeños y frecuentes (mínimo 8–10 commits).
3. Publica en **GitHub Pages** (Settings → Pages → Branch: `main`/`docs` o `root`).

## Hosting alternativo
- Netlify o Vercel (deploy con arrastrar y soltar).

## Accesibilidad
- Menú accesible con `aria-expanded` y foco visible.
- Contraste alto y tamaños de toque adecuados.

## Cómo exportar la memoria a PDF
Abre `MEMORIA-ENTREGA.html` en el navegador y **Imprimir → Guardar como PDF** (A4).
"# portfolio-practica" 
