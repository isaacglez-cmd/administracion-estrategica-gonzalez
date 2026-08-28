# QA final de reconciliación · Capítulos 1–10

## Alcance

Verificación del cierre curricular, editorial, interactivo y PWA de la edición digital independiente 2026.

## Comprobaciones superadas

- Los diez identificadores de capítulo existen una sola vez.
- Los 56 identificadores de `index.html` son únicos.
- Las anclas internas tienen destino válido.
- Los archivos JavaScript superan la validación de sintaxis.
- El manifest es JSON válido e incluye iconos 192×192 y 512×512.
- Los 19 activos requeridos existen y están incluidos en el precache.
- Los módulos académicos CSS y JavaScript se cargan directamente desde `index.html`.
- Los activos enlazados respondieron HTTP 200 en servidor local.
- La arquitectura documental conserva la secuencia de los capítulos 1–10.
- Existe segunda pasada académica para los diez capítulos.
- Las evaluaciones, respuestas y evidencias conservan mecanismos de persistencia local.
- Los controles del cuaderno tienen nombre programático.
- `index.html` y `manifest.webmanifest` no conservan referencias UACH/FEI.
- La edición declara su carácter independiente e incorpora bienestar y liderazgo sostenible.
- `npm test` aprobó localmente y el workflow remoto **QA estático** aprobó el commit del PR #11.
- El árbol remoto revisado coincide exactamente con el árbol local validado.

## Control de publicación

- PR: <https://github.com/isaacglez-cmd/administracion-estrategica-gonzalez/pull/11>
- Commit fusionado en `main`: `36651de933434041a4c2818e2c74891c1f22b565`
- Deploy Netlify solicitado: `6a91e90ea8d5e25ab07fbeed`
- Respuesta de Netlify: `Skipped due to account credit usage exceeded`.

## Validaciones condicionadas al restablecimiento de Netlify

- Confirmar por HTTP que el alias de producción sirve el mismo `index.html`, manifest, service worker e iconos de `main`.
- Repetir la prueba de instalación, actualización y apertura offline bajo HTTPS.
- Completar la matriz física de iPhone/iPad y Android.

Estas verificaciones no están bloqueadas por código pendiente, sino porque el proveedor rechazó publicar el artefacto final por límite de créditos.

## Estado

**EDICIÓN FINAL EN CÓDIGO, PDF Y PAQUETE PWA. REPOSITORIO CERRADO. PUBLICACIÓN NETLIFY BLOQUEADA POR CRÉDITOS DE LA CUENTA.**
