# Auditoría de referencias de Mantexia y contenido técnico pendiente de adaptar

Este documento recoge todas las referencias a "Mantexia" y contenidos relacionados con servicios técnicos/eléctricos o mantenimiento industrial que deberían adaptarse a "Smart Clean" y servicios de limpieza. Incluye emails, dominios y URLs antiguas. Organizado por archivo y línea.

## Marca, SEO y dominios
- `lib/seo-advanced.ts:1-4` Utilidades de SEO mencionan Mantexia.
- `lib/seo-advanced.ts:10` `SITE_CONFIG.name` = "Mantexia".
- `lib/seo-advanced.ts:12` Descripción orientada a "mantenimiento industrial".
- `lib/seo-advanced.ts:15` `author` = "Mantexia".
- `lib/seo-advanced.ts:39` `getBaseUrl()` fallback: `https://mantexia.com`.
- `components/SEOHead.tsx:38-41` Título y descripción basados en `SITE_CONFIG` (marca Mantexia).
- `components/SEOHead.tsx:90-95` Open Graph usa `SITE_CONFIG.name` y `SITE_CONFIG.locale` de Mantexia.
- `components/SEOHead.tsx:100-105` Metas de Twitter con `@mantexia` (cuentas antiguas).
- `app/robots.ts:10` `sitemap` apunta a `https://mantexia.com/sitemap.xml`.
- `app/sitemap.ts:5` `baseUrl` = `https://mantexia.com`.
- `package.json:2` `name` = `mantexia-website`.

## SEO por páginas y keywords técnicas
- `lib/seo-config.ts:1` Comentario: "Configuración SEO para Mantexia".
- `lib/seo-config.ts:27` Comentario: "Keywords principales de Mantexia".
- `lib/seo-config.ts:42` Título home con "Mantexia - Mantenimiento Integral..." (orientado a mantenimiento/industria).
- `lib/seo-config.ts:53-55` Keywords incluyen "subcontratación electricistas", "gestora mantenimientos".
- `lib/seo-config.ts:57,64,69` Open Graph y títulos con Mantexia.
- `lib/seo-config.ts:77-91` Página Mano de Obra: títulos y keywords de "Electricistas y Técnicos".
- `lib/seo-config.ts:112-127` Página Gestión Documental: enfoque "Certificados técnicos" y PRL.
- `lib/seo-config.ts:146-158` Página Gestora de Mantenimientos: foco en mantenimiento industrial 24/7.
- `lib/seo-config.ts:182-208` Sobre Nosotros: menciones a Mantexia y obras emblemáticas.
- `lib/seo-config.ts:216-243` Casos de Éxito: referencias Nou Mestalla y Roig Arena.
- `lib/seo-config.ts:249-275` `LONG_TAIL_KEYWORDS` con términos eléctricos/técnicos.

## Structured Data (Schema.org) con Mantexia y servicios técnicos
- `lib/structured-data.ts:1` Comentario "SEO - Mantexia".
- `lib/structured-data.ts:47-63` `serviceSchemas.manoObra`: nombre, descripción y provider "Mantexia" (electricistas, obras, fábricas).
- `lib/structured-data.ts:64-79` `serviceSchemas.gestora`: mantenimiento industrial 24/7, provider "Mantexia".
- `lib/structured-data.ts:80-95` `serviceSchemas.documental`: gestión documental técnica, provider "Mantexia".
- `lib/structured-data.ts:101-126` `localBusinessSchema`: `name` "Mantexia", imagen y datos de contacto antiguos.
- `lib/structured-data.ts:102` Imagen OG apunta a `https://mantexia.com/og-image.png`.
- `lib/structured-data.ts:104` Email `mantexia@mantexia.com` (antiguo).
- `lib/structured-data.ts:134-171` FAQ con múltiples menciones a Mantexia y servicios técnicos.
- `lib/structured-data.ts:169` Texto con email antiguo `mantexia@mantexia.com` (en texto dice "mantexia@mantexia.com").

## Componentes con contenido técnico o marca Mantexia
- `components/LazyComponents.tsx:1` Comentario: "para Mantexia".
- `components/Testimonials.tsx:17` Testimonio menciona Mantexia en mantenimiento.
- `components/Testimonials.tsx:47` Testimonio: domótica y "Mantexia es sinónimo de calidad".
- `components/Testimonials.tsx:57` Testimonio: emergencias y Mantexia.
- `components/Testimonios.tsx:147-169` Clases `bg-mantexia-*`, `text-mantexia-*` (tokens de marca).
- `components/ChatBot.tsx:171-194` Detección de intents de mantenimiento, técnicos, electricistas.
- `components/ChatBot.tsx:72-80` Bloque de "Casos de Éxito" técnico (Nou Mestalla, Roig Arena, sistemas eléctricos, climatización) y teléfono antiguo.
- `components/SEOHead.tsx:100-105` Metas Twitter con `@mantexia`.

## Páginas con texto, rutas y elementos heredados
- `app/trabaja-con-nosotros/page.tsx:25` Título "Únete al Equipo Mantexia".
- `app/trabaja-con-nosotros/page.tsx:42` Párrafo: "En Mantexia somos... Mano de Obra, Gestión Documental, Gestora".
- `app/trabaja-con-nosotros/page.tsx:45-212` Uso extensivo de clases `mantexia-*` (tokens de marca).
- `app/gestion-documental/page.tsx:9` SEO usa `getSEOConfig('gestionDocumental')` (términos técnicos PRL/certificados).
- `app/gestion-documental/page.tsx:62-64` `hero-mantexia` y `mantexia-overlay` (naming de hero).
- `app/gestion-documental/page.tsx:97-112` Métricas con `mantexia-*`.
- `app/mano-obra/page.tsx:8` SEO usa `getSEOConfig('manoObra')` (electricistas/técnicos).
- `app/mano-obra/page.tsx:74` Alt de imagen: "Técnicos electricistas especializados...".
- `app/mano-obra/page.tsx:69-91` `hero-mantexia` y overlay.
- `app/limpieza-industrial/page.tsx:8` SEO usa `getSEOConfig('gestoraMantenimientos')` (mantenimiento) para una página de limpieza.
- `app/sitemap.ts:34-50` Rutas slugs heredados: `/mano-obra`, `/gestora-mantenimientos`, `/gestion-documental`.
- `components/Header.tsx:50-54` Menú servicios enlaza a rutas heredadas `/mano-obra` y `/gestion-documental`.
- `components/Footer.tsx:41-54` Menú servicios muestra nombres adaptados pero mantiene rutas heredadas.
- `app/casos-exito/page.tsx:115-120` Hero con `mantexia-overlay` y branding.

## Estilos, tokens y configuraciones de marca (Mantexia)
- `app/globals.css:9-13` Variables CSS `--mantexia-*` (colores y gradients de marca).
- `app/globals.css:45-55` Utilidades `.btn-mantexia-*`.
- `app/globals.css:61-81` Clases `section-mantexia`, `card-mantexia`, `hero-mantexia`, `mantexia-overlay`.
- `app/globals.css:326` Sombras con `--mantexia-primary-rgb`.
- `tailwind.config.js:14-28` Paleta `mantexia` (typo como "mantexia"), tokens de color de marca.
- `tailwind.config.js:43-45` Background images `mantexia-*`.
- `app/viewport.ts:8` `themeColor` azul de marca (`#2563eb`).

## Emails, dominios y URLs antiguas
- `lib/structured-data.ts:102` Imagen OG: `https://mantexia.com/og-image.png` (dominio antiguo).
- `lib/structured-data.ts:104` Email: `mantexia@mantexia.com`.
- `lib/structured-data.ts:169` Texto menciona email antiguo `mantexia@mantexia.com`.
- `lib/seo-advanced.ts:39` Fallback URL: `https://mantexia.com`.
- `app/robots.ts:10` `sitemap` en dominio `mantexia.com`.
- `app/sitemap.ts:5` `baseUrl` `https://mantexia.com`.
- `components/SEOHead.tsx:100-101` `twitter:site` y `twitter:creator` = `@mantexia`.

## Otros indicios a revisar
- `public/og-image.png` Usado como OG; revisar si la imagen es marca Mantexia.
- `public/logo.webp` Verificar si corresponde a Smart Clean.
- `app/not-found.tsx:104-111` Botones con clases `btn-mantexia-*` y estilos de marca.
- `lib/performance.ts:1` Comentario "Mantexia website" (solo texto, pero referencia de marca).
- `lib/accessibility.ts:2` Comentario referencia Mantexia.
- `lib/final-optimizations.ts:2` Comentario referencia Mantexia.

## Recomendación de adaptación (sin ejecutar cambios)
- Sustituir `SITE_CONFIG` y dominios (`mantexia.com`) por `limpiezassmartclean.com`.
- Actualizar `SEO_PAGES` y `LONG_TAIL_KEYWORDS` a términos de limpieza (oficinas, comunidades, industrial), eliminar eléctricos/técnicos.
- Reemplazar `serviceSchemas` (manoObra, gestora, documental) por servicios de limpieza equivalentes y provider Smart Clean.
- Renombrar rutas heredadas (`/mano-obra`, `/gestora-mantenimientos`, `/gestion-documental`) a slugs de servicios de limpieza.
- Actualizar tokens/clases `mantexia-*` y variables CSS a nomenclatura de Smart Clean.
- Revisar `components/ChatBot.tsx` para eliminar casos técnicos (Nou Mestalla, sistemas eléctricos) y alinear con portfolio de limpieza.
- Corregir emails y cuentas sociales (`@mantexia`) a las de Smart Clean.

