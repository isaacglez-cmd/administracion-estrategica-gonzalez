(()=>{
  const KEY='ae-advanced-2026-v2';
  const LEGACY_KEY='ae-advanced-2026';
  let state;
  try{
    const current=localStorage.getItem(KEY);
    if(current!==null){
      state=JSON.parse(current)||{};
    }else{
      const legacy=JSON.parse(localStorage.getItem(LEGACY_KEY))||{};
      state=typeof legacy.c1==='string'?{c1:legacy.c1}:{};
      localStorage.setItem(KEY,JSON.stringify(state));
    }
  }catch(e){state={}}
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  const data={
    1:{
      title:'Pensar estratégicamente antes de planear',
      concepts:['Estrategia implica elección, renuncia y una lógica explícita de creación de valor.','Diagnóstico, elección, implementación y control forman un ciclo; confundirlos genera decisiones inconexas.','Una ventaja sólo es estratégica si importa al cliente o stakeholder relevante y puede sostenerse frente a rivales o sustitutos.'],
      error:'Error frecuente: llamar “estrategia” a cualquier meta, proyecto o lista de acciones sin explicar la lógica de valor ni los trade-offs.',
      case:'Una empresa regional quiere crecer 40% en dos años. Tiene tres opciones: abrir sucursales, digitalizar ventas o concentrarse en un nicho rentable. El presupuesto sólo permite priorizar una.',
      decision:'Elige una opción. Explica por qué es estratégica, qué renuncia implica y qué evidencia necesitarías antes de comprometer recursos.',
      feedback:'Una respuesta sólida conecta objetivo, evidencia, elección, renuncia y mecanismo de creación de valor.'
    },
    6:{
      title:'Crecer e internacionalizarse sólo crea valor cuando existe una lógica común',
      concepts:['La estrategia corporativa define en qué negocios y mercados participar, y cómo el conjunto crea más valor que cada unidad por separado.','Integración, diversificación, alianzas y modos de entrada distribuyen de manera distinta control, inversión, velocidad, aprendizaje y riesgo.','La distancia institucional, cultural y operativa puede convertir un mercado atractivo en una opción inviable para las capacidades actuales.'],
      error:'Error frecuente: elegir una adquisición, diversificación o país sólo por su potencial de ingresos, sin demostrar sinergia, capacidad de ejecución o ventaja de propiedad.',
      case:'Una empresa mexicana de alimentos evalúa entrar a Estados Unidos mediante exportación, alianza con un distribuidor o adquisición de una empresa logística. La adquisición ofrece control, pero eleva deuda y complejidad; la alianza acelera la entrada, aunque limita aprendizaje y control.',
      decision:'Selecciona una ruta de crecimiento y un modo de entrada. Compara creación de valor, inversión, control, distancia, reversibilidad y costo de coordinación.',
      feedback:'La decisión debe conectar atractivo del mercado con capacidades reales y mostrar por qué la opción elegida crea más valor que una relación contractual más simple.'
    },
    7:{
      title:'La estrategia sólo existe plenamente cuando puede ejecutarse',
      concepts:['Implementar significa alinear estructura, procesos, recursos, responsables, incentivos y cultura con la elección estratégica.','Una brecha de ejecución puede originarse en prioridades contradictorias, capacidad insuficiente, resistencia al cambio o falta de accountability.','La gestión del cambio requiere secuencia, comunicación, participación y mecanismos para aprender durante la ejecución.'],
      error:'Error frecuente: convertir la implementación en una lista de tareas sin responsables, recursos, dependencias ni criterios para resolver resistencias.',
      case:'Una empresa decide diferenciarse por rapidez y confiabilidad, pero mantiene autorizaciones centralizadas, bonos basados sólo en reducción de costos y sistemas que no comparten información entre áreas.',
      decision:'Diagnostica las tres barreras principales y diseña un plan de implementación con acciones, responsables, recursos, secuencia, indicador y riesgo de cambio.',
      feedback:'Una respuesta fuerte muestra cómo cada acción elimina una barrera concreta y cómo estructura, incentivos, procesos y cultura se refuerzan entre sí.'
    },
    9:{
      title:'Transformar digitalmente exige innovar con propósito y gobernanza',
      concepts:['La innovación estratégica modifica la propuesta de valor, el sistema de actividades o el modelo de negocio; incorporar tecnología sin cambiar decisiones no garantiza transformación.','Un portafolio debe equilibrar iniciativas incrementales, adyacentes y transformadoras según evidencia, riesgo y capacidad de aprendizaje.','Gobernanza, ética, ciberseguridad, liderazgo y bienestar determinan si la adopción digital crea valor sostenible.'],
      error:'Error frecuente: seleccionar tecnología por tendencia, automatizar un proceso defectuoso o medir transformación por número de herramientas instaladas.',
      case:'Una universidad considera invertir en analítica predictiva para identificar estudiantes en riesgo. La propuesta promete mejorar retención, pero existen dudas sobre calidad de datos, privacidad, sesgos y capacidad docente para intervenir.',
      decision:'Decide si debe pilotarse, escalarse o posponerse. Define problema, hipótesis de valor, datos necesarios, salvaguardas, responsable, criterio de éxito y condición de abandono.',
      feedback:'La respuesta debe equilibrar valor educativo, capacidad técnica, legitimidad, ética y sostenibilidad humana; una innovación responsable incluye límites y mecanismos de rendición de cuentas.'
    },
    10:{
      title:'Integrar es construir una recomendación completa y defendible',
      concepts:['Una recomendación estratégica conecta dirección, evidencia externa e interna, elección, implementación, control e innovación.','La coherencia exige que actividades, recursos, responsables e indicadores respondan a la misma lógica de valor.','El cierre no elimina la incertidumbre: explicita supuestos, señales tempranas y decisiones de adaptación.'],
      error:'Error frecuente: presentar un diagnóstico extenso y concluir con recomendaciones genéricas que no asignan recursos, renuncias, responsables ni criterios de éxito.',
      case:'Una empresa familiar de Chihuahua busca crecer internacionalmente sin perder control, enfrenta presión de costos, capacidad digital limitada y dependencia de pocos clientes. Debe elegir una prioridad para los próximos veinticuatro meses.',
      decision:'Formula una recomendación ejecutiva que conecte diagnóstico, alternativa descartada, elección, plan de implementación, indicadores, riesgo, supuesto crítico y señal de revisión.',
      feedback:'Una respuesta madura mantiene trazabilidad de principio a fin: cada acción debe responder a una evidencia y cada indicador debe permitir confirmar, corregir o abandonar la elección.'
    }
  };

  function inject(){
    const chapters=[...document.querySelectorAll('section[id],article[id]')]
      .filter(x=>/^chap\d+$/i.test(x.id)).slice(0,10);
    [1,6,7,9,10].forEach(n=>{
      const ch=chapters[n-1];
      const d=data[n];
      if(!ch||!d||ch.querySelector('.ae-advanced'))return;
      const box=document.createElement('div');
      box.className='ae-advanced';
      box.innerHTML=`<div class="ae-acad-kicker">DESARROLLO ACADÉMICO · ${String(n).padStart(2,'0')}</div><h3>${d.title}</h3><div class="ae-advanced-grid"><div class="ae-advanced-card"><b>Ideas que deben quedar conectadas</b><ul>${d.concepts.map(x=>`<li>${x}</li>`).join('')}</ul><div class="ae-error">${d.error}</div></div><div class="ae-advanced-card"><b>Criterio de dominio</b><p>No basta definir conceptos: el estudiante debe reconocer cuándo aplican, qué evidencia los sustenta y qué decisión cambian.</p><div class="ae-synthesis">La respuesta final debe mostrar causalidad, criterios y trade-offs, no sólo opinión.</div></div></div><div class="ae-case"><b>Mini-caso para decidir</b><p>${d.case}</p></div><div class="ae-decision"><b>Decisión guiada</b><p>${d.decision}</p><textarea aria-label="Decisión guiada del capítulo ${n}" placeholder="Construye tu decisión y justificación…"></textarea><div class="ae-feedback"><b>Retroalimentación esperada:</b> ${d.feedback}</div></div>`;
      const acad=ch.querySelector('.ae-acad');
      (acad||ch.querySelector('.banner,.head')||ch.firstElementChild)?.insertAdjacentElement('afterend',box);
      const ta=box.querySelector('textarea');
      const key='c'+n;
      ta.value=state[key]||'';
      ta.addEventListener('input',()=>{state[key]=ta.value;save()});
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();
