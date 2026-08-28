# Administración Estratégica · Producto Digital 2026

## Estado de cierre

**EDICIÓN DIGITAL INDEPENDIENTE FINAL 2026 · CÓDIGO Y ARTEFACTOS CERRADOS.**

La versión final quedó integrada en `main` mediante el PR #11 y el commit de fusión `36651de933434041a4c2818e2c74891c1f22b565`. El workflow **QA estático** concluyó correctamente sobre el commit revisado.

## Resultado verificado

1. Los 10 capítulos, las capas académicas, los casos, las actividades, las evaluaciones y las referencias permanecen integrados.
2. La edición digital declara su carácter independiente y no conserva referencias UACH/FEI en `index.html` ni en el manifest.
3. Bienestar, salud mental, seguridad psicológica y liderazgo sostenible están incorporados como elementos transversales.
4. El PWA conserva manifest, iconos, service worker, 19 activos precargados y caché final `ae-2026-final-independent-v13`.
5. El QA valida 56 identificadores únicos, anclas internas, nombres accesibles, sintaxis JavaScript, manifest y activos requeridos.
6. El PDF final de 68 páginas y el paquete PWA fueron revisados, congelados y vinculados a sus huellas SHA-256 en el expediente de cierre.

## Publicación

- Repositorio público: completado.
- Pull request, revisión y fusión: completados.
- Netlify: se intentó un despliegue forzado al sitio autorizado `administracion-estrategica-gonzalez.netlify.app`.
- Resultado Netlify: el proveedor omitió el despliegue con el mensaje `Skipped due to account credit usage exceeded` (deploy `6a91e90ea8d5e25ab07fbeed`).

La edición final no tiene un defecto de compilación o de código identificado. El único bloqueo de publicación es el límite de créditos de la cuenta de Netlify; hasta que ese límite se restablezca, el alias público no debe presentarse como evidencia de la versión final fusionada.

## Regla de conservación

Una modificación posterior abre una nueva versión y exige repetir QA, recalcular las huellas de los artefactos afectados y actualizar el expediente de trazabilidad.
