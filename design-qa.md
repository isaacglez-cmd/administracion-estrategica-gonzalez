# Design QA - Edición editorial 2026

## Evidencia de comparación

- Fuente visual principal: `/workspace/scratch/6bd108060f0d/tmp/pdfs/mapa/page-01.jpg`.
- Fuente visual interior: `/workspace/scratch/6bd108060f0d/tmp/pdfs/mapa/page-04.jpg`.
- Implementación: `http://terminal.local:4173/#portada` y `http://terminal.local:4173/#chap1`.
- Capturas de implementación: capturas inline del Cloud Browser de esta sesión; la superficie de navegador no expone una ruta local para su archivo binario.
- Escritorio: viewport CSS de 1363 x 936 px, DPR 1; área útil del documento de 1348 px, sin desbordamiento horizontal.
- Móvil: iframe de control con viewport de 390 x 844 px, área cliente de 375 px, DPR 1 y ancho de documento de 375 px; sin desbordamiento horizontal.
- Estado: portada, capítulo 1, buscador, panel Mi aprendizaje y pestaña Flashcards.

## Comparación completa

La portada fuente y la implementación se compararon juntas en una misma entrada visual. La implementación conserva los atributos que definen el referente: fondo verde casi negro, título sans serif de gran escala, etiquetas doradas, reglas finas, marco editorial, imagen narrativa y densidad sobria. La composición se adapta intencionalmente de una página vertical a un libro web con navegación persistente.

La página interior fuente y el capítulo 1 se compararon también en una misma entrada visual. La jerarquía de capítulo, las líneas divisorias, los rótulos dorados, el texto marfil y las superficies verde oscuro mantienen el mismo ritmo editorial sin copiar contenido ni elementos de marca del referente.

No fue necesario un recorte adicional: título, rótulos, imagen, metadatos y tarjetas eran legibles en las comparaciones de viewport completo. La portada móvil sí se revisó de manera enfocada a 390 x 844 px.

## Superficies de fidelidad

- Tipografía: jerarquía sans serif compacta para títulos, serif para lectura editorial y pesos ópticos diferenciados. No hay cortes en escritorio ni móvil.
- Espaciado y ritmo: marco perimetral, divisores delgados, márgenes consistentes y bloques con densidad cercana al referente. No hay solapamientos ni desbordamiento horizontal.
- Color: verde profundo, marfil, dorado antiguo y acento lima coherentes en portada, capítulos, ejercicios y paneles.
- Imagen: ilustración raster original en WebP optimizado, nítida y correctamente recortada; representa territorio, industria, logística, energía y conexión internacional. No sustituye activos visibles con dibujos HTML o SVG.
- Contenido: se conserva el texto académico, los autores, los capítulos y las herramientas interactivas. El PDF aportó únicamente dirección visual.

## Pruebas funcionales

- Navegación Portada -> Presentación -> Capítulo 1: aprobada.
- Búsqueda de “PESTEL”: aprobada, con resultados relevantes.
- Panel Mi aprendizaje: apertura y cierre aprobados.
- Flashcards: pestaña y contenido aprobados.
- Vista móvil: panel y flashcards aprobados.
- Consola de la aplicación: 0 errores originados en `terminal.local`.
- QA estático: 21 activos, 10 capítulos y 56 identificadores únicos.

## Historial de iteración

1. P2 - El título de portada invadía la imagen en escritorio. Se redujo la escala máxima, se amplió la columna editorial y se ajustaron márgenes. Evidencia posterior: título completo en cuatro líneas, sin invasión.
2. P2 - El título y los controles superiores se cortaban a 390 px. Se compactó la barra, se ocultaron dos acciones redundantes en móvil y se recalibró el título. Evidencia posterior: ancho de título 303 px dentro del viewport, tres acciones visibles y cero desbordamiento.
3. P2 - Tarjetas académicas dinámicas conservaban fondo blanco. Se unificaron `ae-acad`, `ae-pass2` y evidencias con el sistema verde editorial. Evidencia posterior: 0 tarjetas blancas en la muestra del capítulo 1.

## Hallazgos finales

No quedan hallazgos P0, P1 o P2. Como refinamiento P3 opcional, una futura edición podría incorporar una familia tipográfica licenciada o autoalojada; la selección actual prioriza disponibilidad offline y estabilidad de la PWA.

final result: passed
