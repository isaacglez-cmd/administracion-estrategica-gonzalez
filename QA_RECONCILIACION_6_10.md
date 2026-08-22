# QA de reconciliación · Capítulos 6–10

## Alcance
Verificación estática de la reconciliación curricular, segunda pasada, evidencias, accesibilidad y carga directa de módulos.

## Comprobaciones superadas
- Los diez identificadores de capítulo existen una sola vez.
- Los 56 identificadores de `index.html` son únicos.
- Las anclas internas tienen destino válido.
- Los ocho archivos JavaScript del proyecto y los módulos nuevos superan validación de sintaxis.
- El manifest es JSON válido e incluye iconos 192×192 y 512×512.
- Los 19 activos requeridos existen y están incluidos en el precache.
- Los módulos CSS y JavaScript académicos están enlazados directamente desde `index.html`.
- Los activos enlazados responden HTTP 200 en servidor local.
- El service worker ya no reescribe el HTML ni fuerza recargas durante `activate`.
- La arquitectura documental conserva la secuencia original de los capítulos 6–10.
- Existe segunda pasada académica para los capítulos 1–10.
- La evidencia contabiliza aciertos de las evaluaciones por capítulo.
- Las respuestas seleccionadas pueden restaurarse después de recargar.
- Los controles estáticos que no cubre `quality-fixes.js` ya tienen nombre accesible explícito.
- Los 41 controles restantes del cuaderno reciben nombre programático mediante `quality-fixes.js`.

## Validación todavía pendiente
- Revisión visual en navegador real.
- Navegación completa con teclado y lector de pantalla.
- Prueba funcional de las veinte preguntas de segunda pasada.
- Persistencia real después de cerrar y volver a abrir el navegador.
- Instalación, actualización y apertura offline bajo HTTPS.
- Validación en iPhone y Android.
- Revisión docente de dificultad, pertinencia y claridad de los capítulos 6–10.

## Estado
**LISTO PARA PR Y REVISIÓN, NO LISTO PARA EDICIÓN FINAL NI DESPLIEGUE DE PRODUCCIÓN.**
