# Raíz Estudio

Web de Raíz Estudio, estudio de interiorismo residencial. Sitio estático con [Astro](https://astro.build), navegación con transiciones de página (View Transitions), scroll suave con [Lenis](https://lenis.darkroom.engineering) y animaciones con [GSAP](https://gsap.com).

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`          |
| `npm run build`   | Genera el sitio de producción en `./dist/`          |
| `npm run preview` | Sirve el build de producción en local               |
| `npx astro check` | Comprobación de tipos                               |

El primer `build` optimiza todas las imágenes (AVIF + WebP en varios tamaños) y tarda unos minutos; los siguientes reutilizan la caché.

## Estructura

```text
src/
├── assets/
│   ├── fonts/        Newsreader (display) y DM Sans, subconjunto español, autoalojadas
│   └── images/       Fotos locales de proyectos y proceso (se optimizan en el build)
├── components/
│   ├── home/         Secciones de la portada
│   ├── layout/       Cabecera + menú, pie, cursor, fuentes, logo
│   ├── projects/     Tarjeta de proyecto y visor de galería
│   └── ui/           Piezas reutilizables: Media, Button, PageHero, Faq, Marquee…
├── data/             Contenido: proyectos, servicios, equipo, testimonios, datos de contacto
├── layouts/          BaseLayout (SEO, Open Graph, transiciones, preferencia de movimiento)
├── lib/              Utilidades (resolución de imágenes, títulos de entrada)
├── pages/            Rutas del sitio
├── scripts/          Comportamiento en cliente (un único bundle, ver abajo)
└── styles/global.css Sistema de diseño: tokens, tipografía, botones, estados de animación
```

## Contenido

- **Proyectos**: `src/data/projects.ts`. La primera imagen de cada proyecto es la portada. Las imágenes pueden ser URLs remotas o rutas locales relativas a `src/assets/images` (p. ej. `/projects/project_2/project2_1.webp`). Marca `featured: true` para que aparezca en la portada.
- **Textos del estudio** (servicios, proceso, equipo, valores, testimonios, marcas): `src/data/studio.ts`.
- **Contacto, navegación y redes**: `src/data/site.ts`.

Las imágenes nuevas van en `src/assets/images/` (no en `public/`) para que Astro genere sus versiones optimizadas.

## Formulario de contacto

Define la variable de entorno `PUBLIC_FORM_ENDPOINT` con la URL de un servicio de formularios (por ejemplo Formspree) para recibir los envíos. Sin ella:

- con JavaScript, el formulario muestra una confirmación **simulada**;
- sin JavaScript, abre el cliente de correo del visitante.

## Mapa

El mapa de `/contacto` usa Leaflet con teselas de OpenStreetMap y solo se descarga cuando entra en pantalla. Para tráfico alto, conviene pasar a un proveedor con clave (MapTiler, Stadia, CARTO) cambiando la URL en `src/scripts/contact.ts`.

## Animación y accesibilidad

- Los elementos se animan mediante atributos (`data-reveal`, `data-split`, `data-words`, `data-media-reveal`, `data-parallax`, `data-draw`); ver `src/scripts/animations.ts`.
- Las entradas de cabecera (`data-intro`, títulos con `introLines`) son CSS puro: empiezan en el primer pintado y no retrasan el LCP.
- Se respeta `prefers-reduced-motion` y el pie incluye un interruptor «Animaciones» que se recuerda entre visitas.
- Sin JavaScript todo el contenido es visible.
- `src/scripts/lifecycle.ts` monta cada módulo al cargar el DOM y lo desmonta antes de cada navegación, de modo que no quedan listeners ni ScrollTriggers huérfanos.
