import fs from 'node:fs';

const read=path=>fs.readFileSync(path,'utf8');
const failures=[];
const assert=(condition,message)=>{if(!condition)failures.push(message)};
const html=read('index.html');
const sw=read('sw.js');
const architecture=read('ARQUITECTURA_ACADEMICA_2026.md');
const evidence=read('learning-evidence.js');
const chapterAcademics=read('chapter-academics.js');
const advancedContent=read('advanced-academic-content.js');
const coreContent=read('core-academic-content.js');

const expectedAssets=[
  'manifest.webmanifest','icon-192.png','icon-512.png','design-vanguardista.css',
  'quality-fixes.js','premium-experience.css','premium-experience.js',
  'learning-evidence.css','learning-evidence.js','chapter-academics.css',
  'chapter-academics.js','core-academic-content.css','core-academic-content.js',
  'advanced-academic-content.css','advanced-academic-content.js',
  'segunda-pasada-1-5.css','segunda-pasada-1-5.js','segunda-pasada-6-10.js',
  'assessment-state.js'
];
const directlyLinkedAssets=expectedAssets.filter(asset=>asset.endsWith('.css')||asset.endsWith('.js'));

for(const asset of expectedAssets){
  assert(fs.existsSync(asset),`Falta el activo ${asset}`);
  assert(sw.includes(`./${asset}`),`sw.js no precachea ${asset}`);
}
for(const asset of directlyLinkedAssets){
  assert(html.includes(`./${asset}`),`index.html no enlaza ${asset}`);
}

const inlineStyleEnd=html.indexOf('</style>');
assert(inlineStyleEnd!==-1,'index.html no contiene el bloque de estilos base');
for(const asset of directlyLinkedAssets.filter(asset=>asset.endsWith('.css'))){
  assert(html.indexOf(`./${asset}`)>inlineStyleEnd,`${asset} debe cargarse después de los estilos base`);
}

const scriptPosition=asset=>html.indexOf(`<script src="./${asset}" defer></script>`);
for(const producer of ['chapter-academics.js','core-academic-content.js','advanced-academic-content.js','segunda-pasada-1-5.js','segunda-pasada-6-10.js']){
  assert(scriptPosition(producer)<scriptPosition('learning-evidence.js'),`${producer} debe inicializarse antes de learning-evidence.js`);
}
assert(scriptPosition('learning-evidence.js')<scriptPosition('assessment-state.js'),'assessment-state.js debe restaurar evaluaciones después de learning-evidence.js');

for(let chapter=1;chapter<=10;chapter++){
  const matches=html.match(new RegExp(`id=["']chap${chapter}["']`,'g'))||[];
  assert(matches.length===1,`chap${chapter} debe existir una sola vez; encontrados: ${matches.length}`);
}

const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(match=>match[1]);
const duplicated=[...new Set(ids.filter((id,index)=>ids.indexOf(id)!==index))];
assert(duplicated.length===0,`IDs duplicados: ${duplicated.join(', ')}`);
const anchors=[...html.matchAll(/\bhref=["']#([^"']+)["']/g)].map(match=>match[1]);
const missingAnchors=[...new Set(anchors.filter(anchor=>!ids.includes(anchor)))];
assert(missingAnchors.length===0,`Anclas sin destino: ${missingAnchors.join(', ')}`);

const manifest=JSON.parse(read('manifest.webmanifest'));
assert(manifest.icons?.some(icon=>icon.sizes==='192x192'),'Manifest sin icono 192x192');
assert(manifest.icons?.some(icon=>icon.sizes==='512x512'),'Manifest sin icono 512x512');
assert(!sw.includes('enhanceHtml'),'El service worker no debe reescribir index.html');
assert(!sw.includes('client.navigate'),'El service worker no debe forzar recargas durante activate');

const canonicalChapters={
  6:'Estrategias corporativas e internacionales',
  7:'Implementación de la estrategia',
  8:'Evaluación, control y aprendizaje estratégico',
  9:'Estrategia, innovación y transformación digital',
  10:'Integración y casos de cierre'
};
for(const [number,title] of Object.entries(canonicalChapters)){
  assert(architecture.includes(`### Capítulo ${number}`)&&architecture.includes(title),`Arquitectura del capítulo ${number} no reconciliada`);
}

assert(evidence.includes('[data-is-correct="true"]'),'La evidencia no cuenta respuestas correctas de segunda pasada');
assert(evidence.includes('quiz*20'),'La fórmula no asigna puntuación por cada acierto');
assert(chapterAcademics.includes("const KEY='ae-acad-2026-v2'")&&chapterAcademics.includes("const LEGACY_KEY='ae-acad-2026'"),'Las respuestas de arquitectura no usan un espacio versionado');
assert(advancedContent.includes("const KEY='ae-advanced-2026-v2'")&&advancedContent.includes("const LEGACY_KEY='ae-advanced-2026'"),'Las respuestas avanzadas no usan un espacio versionado');
assert(coreContent.includes("KEY='ae-core-content-2026-v2'")&&coreContent.includes("LEGACY_KEY='ae-core-content-2026'"),'Las respuestas centrales no usan un espacio versionado');
assert(html.includes('id="searchInput" type="search" aria-label='),'El buscador no tiene nombre accesible explícito');
for(let chapter=1;chapter<=10;chapter++){
  assert(html.includes(`data-note="mental${chapter}" aria-label=`),`Reflexión de bienestar ${chapter} sin nombre accesible`);
}
assert(html.includes('data-note="reflexion" aria-label='),'Reflexión final sin nombre accesible');

if(failures.length){
  console.error(`QA estático: ${failures.length} error(es)`);
  failures.forEach(item=>console.error(`- ${item}`));
  process.exit(1);
}

console.log(`QA estático: OK · ${expectedAssets.length} activos · 10 capítulos · ${ids.length} IDs únicos`);
