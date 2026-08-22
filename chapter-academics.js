(()=>{
  const profiles=[
    ['Fundamento estratégico','Distinguir estrategia de planeación operativa; conectar diagnóstico, elección, implementación y control; argumentar cómo se crea y sostiene valor.','Explica qué decisión sería estratégica en una organización real y qué evidencia necesitarías antes de tomarla.'],
    ['Dirección estratégica','Evaluar propósito, misión, visión y objetivos; detectar formulaciones vagas; construir objetivos verificables y coherentes.','Reescribe una misión, una visión y tres objetivos para que formen un sistema coherente de dirección.'],
    ['Entorno externo','Aplicar PESTEL y Cinco Fuerzas; separar señal de evidencia; priorizar impactos e incertidumbre; derivar implicaciones estratégicas.','Selecciona tres señales externas, susténtalas y explica qué decisión cambiaría cada una.'],
    ['Diagnóstico interno','Relacionar actividades, recursos y capacidades; aplicar Cadena de Valor y VRIO; construir un FODA basado en evidencia.','Identifica una capacidad potencialmente distintiva y demuestra, con VRIO, si puede sostener una ventaja.'],
    ['Elección competitiva','Comparar costo, diferenciación y enfoque; reconocer trade-offs; evaluar coherencia entre propuesta de valor y sistema de actividades.','Elige una posición competitiva para un caso y justifica también qué actividades NO debería realizar la organización.'],
    ['Estrategias corporativas e internacionales','Evaluar integración, diversificación, alianzas, mercados y modos de entrada; distinguir crecimiento de creación de valor; analizar control, distancia, riesgo y complejidad.','Compara dos rutas de crecimiento internacional y decide cuál crea más valor después de considerar control, inversión, distancia y costos de coordinación.'],
    ['Implementación de la estrategia','Traducir la elección estratégica en estructura, procesos, responsables, recursos, incentivos, cultura y gestión del cambio.','Diagnostica una brecha de implementación y diseña un plan con responsables, recursos, secuencia, indicadores y gestión del cambio.'],
    ['Evaluación, control y aprendizaje','Construir objetivos e indicadores mediante Balanced Scorecard; interpretar desviaciones; distinguir métricas leading y lagging; revisar supuestos y adaptar la estrategia.','Diseña un tablero causal y define qué señal exigiría corregir la ejecución o revisar la estrategia.'],
    ['Innovación y transformación digital','Evaluar portafolios de innovación, capacidades digitales, modelos de negocio, adopción, gobernanza y riesgos humanos o éticos.','Prioriza una inversión digital y explica su lógica de valor, capacidades requeridas, riesgo ético y criterio para detenerla o escalarla.'],
    ['Integración y casos de cierre','Conectar dirección, diagnóstico, elección, implementación, control, innovación y aprendizaje en una recomendación ejecutiva coherente.','Resuelve un caso integrador y presenta una recomendación con evidencia, trade-offs, responsables, indicadores y supuestos que deberán vigilarse.']
  ];
  const KEY='ae-acad-2026-v2';
  const LEGACY_KEY='ae-acad-2026';
  let data;
  try{
    const current=localStorage.getItem(KEY);
    if(current!==null){
      data=JSON.parse(current)||{};
    }else{
      const legacy=JSON.parse(localStorage.getItem(LEGACY_KEY))||{};
      data={};
      ['c1','c2','c3','c4','c5'].forEach(key=>{if(typeof legacy[key]==='string')data[key]=legacy[key]});
      localStorage.setItem(KEY,JSON.stringify(data));
    }
  }catch(e){data={}}
  const save=()=>localStorage.setItem(KEY,JSON.stringify(data));

  function run(){
    const chapters=[...document.querySelectorAll('section[id],article[id]')]
      .filter(x=>/^chap\d+$/i.test(x.id)).slice(0,10);
    chapters.forEach((ch,i)=>{
      if(ch.querySelector('.ae-acad'))return;
      const p=profiles[i]||profiles[0];
      const title=ch.querySelector('h1,h2,.banner h2,.head h2')?.textContent.trim()||`Capítulo ${i+1}`;
      const box=document.createElement('div');
      box.className='ae-acad';
      box.innerHTML=`<div class="ae-acad-kicker">ARQUITECTURA DE APRENDIZAJE · ${String(i+1).padStart(2,'0')}</div><h3>${title}</h3><div class="ae-acad-grid"><div class="ae-acad-card"><b>Resultados de aprendizaje</b><p>${p[1]}</p></div><div class="ae-acad-card"><b>Prueba de dominio</b><p>Comprender no basta: debes poder explicar, aplicar, justificar y transferir la decisión a un contexto distinto.</p></div></div><div class="ae-acad-task"><b>Reto de transferencia</b><p>${p[2]}</p><textarea aria-label="Respuesta al reto de transferencia del capítulo ${i+1}" placeholder="Construye aquí tu respuesta con evidencia y razonamiento…"></textarea><small>Se guarda automáticamente en este dispositivo.</small></div>`;
      const anchor=ch.querySelector('.banner,.head')||ch.firstElementChild;
      anchor?.insertAdjacentElement('afterend',box);
      const ta=box.querySelector('textarea');
      const key='c'+(i+1);
      ta.value=data[key]||'';
      ta.addEventListener('input',()=>{data[key]=ta.value;save()});
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
