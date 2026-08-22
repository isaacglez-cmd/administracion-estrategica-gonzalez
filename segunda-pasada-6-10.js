(()=>{
  const KEY='ae-pass2-6-10-2026';
  let state;
  try{state=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){state={}}
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  const chapters=[...document.querySelectorAll('section[id],article[id]')]
    .filter(x=>/^chap\d+$/i.test(x.id)).slice(0,10);
  const data={
    6:{
      title:'Segunda pasada · Estrategias corporativas e internacionales',
      diagnostic:'El capítulo debe conectar alcance corporativo, creación de valor, selección de mercado y modo de entrada sin confundir crecimiento con ventaja.',
      case:'Una empresa de alimentos de Chihuahua considera exportar a Estados Unidos, asociarse con un distribuidor o adquirir una empresa logística. Tiene marca regional sólida, capital limitado y poca experiencia regulatoria internacional.',
      prompt:'Selecciona una ruta de crecimiento y un modo de entrada. Compara sinergia, inversión, control, distancia, reversibilidad y riesgo. Explica qué alternativa descartas y por qué.',
      bridge:'Conecta con el capítulo 7: la ruta elegida sólo será viable si estructura, recursos, procesos e incentivos pueden ejecutarla.',
      rubric:['Lógica de creación de valor explícita.','Mercado y modo de entrada evaluados por criterios.','Control, inversión y distancia comparados.','Alternativa descartada con justificación.','Riesgo y condición de reversión identificados.'],
      qs:[
        ['¿Qué justifica mejor una diversificación?',['Aumentar ingresos sin importar el costo','Crear valor conjunto mediante capacidades o sinergias verificables','Imitar a una empresa más grande','Reducir el número de indicadores'],1,'Diversificar sólo tiene sentido estratégico cuando el conjunto crea más valor que las unidades separadas.'],
        ['¿Qué modo de entrada suele ofrecer mayor control y compromiso de recursos?',['Exportación indirecta','Licenciamiento','Inversión directa o adquisición','Venta ocasional por internet'],2,'La inversión directa ofrece mayor control, pero también exige más recursos y exposición al riesgo.']
      ]
    },
    7:{
      title:'Segunda pasada · Implementación de la estrategia',
      diagnostic:'El capítulo debe convertir una elección estratégica en estructura, responsabilidades, recursos, incentivos, procesos y gestión del cambio.',
      case:'Una empresa promete rapidez y confiabilidad, pero conserva autorizaciones centralizadas, bonos basados sólo en reducción de costos y sistemas aislados entre ventas y operaciones.',
      prompt:'Diagnostica tres brechas de implementación y diseña una secuencia de acciones con responsables, recursos, indicador, dependencia y riesgo de resistencia.',
      bridge:'Conecta con el capítulo 8: la implementación necesita indicadores que permitan distinguir avance, desviación y aprendizaje.',
      rubric:['Brechas vinculadas con la estrategia elegida.','Acciones con responsable y recurso.','Secuencia y dependencias visibles.','Incentivos y cultura considerados.','Indicadores y riesgos de cambio definidos.'],
      qs:[
        ['¿Qué evidencia muestra mejor una brecha de implementación?',['La visión es breve','Los incentivos premian conductas contrarias a la estrategia','Existen muchos competidores','La empresa tiene un logotipo antiguo'],1,'Una brecha aparece cuando estructura, procesos, capacidades o incentivos contradicen la elección estratégica.'],
        ['¿Qué fortalece un plan de cambio?',['Anunciar todas las acciones al final','Asignar responsables, secuencia, recursos y espacios de retroalimentación','Eliminar indicadores','Evitar explicar las razones'],1,'La implementación requiere accountability, recursos y aprendizaje durante la transición.']
      ]
    },
    8:{
      title:'Segunda pasada · Evaluación, control y aprendizaje',
      diagnostic:'El capítulo debe usar Balanced Scorecard y señales leading/lagging para interpretar desviaciones y decidir entre corregir ejecución o revisar la estrategia.',
      case:'Una organización cumple ventas, pero el costo de adquisición aumenta, la retención cae y la rotación del personal se acelera. El resultado financiero todavía parece favorable.',
      prompt:'Diseña un tablero causal con cuatro objetivos. Define indicadores leading y lagging, metas, umbrales y responsables. Explica qué señal exige corrección operativa y cuál cuestiona un supuesto estratégico.',
      bridge:'Conecta con el capítulo 9: el aprendizaje del control debe orientar qué innovaciones probar, escalar o detener.',
      rubric:['Relaciones causales entre perspectivas.','Indicadores vinculados con objetivos.','Leading y lagging diferenciados.','Umbrales de revisión explícitos.','Decisión correctiva o adaptativa justificada.'],
      qs:[
        ['¿Cuál es un indicador leading?',['Utilidad anual ya obtenida','Retención del año anterior','Tiempo de respuesta que anticipa satisfacción futura','Resultado financiero cerrado'],2,'Un indicador leading ofrece una señal anticipada sobre un resultado posterior.'],
        ['¿Cuándo debe revisarse la estrategia y no sólo la ejecución?',['Cuando una tarea se retrasa un día','Cuando evidencia consistente invalida un supuesto central','Cuando falta una firma menor','Cuando cambia el formato del reporte'],1,'Si el supuesto que sostenía la elección deja de ser válido, corregir sólo la ejecución resulta insuficiente.']
      ]
    },
    9:{
      title:'Segunda pasada · Innovación y transformación digital',
      diagnostic:'El capítulo debe distinguir digitalización de transformación y evaluar valor, capacidades, adopción, gobernanza, ética y sostenibilidad humana.',
      case:'Una universidad propone analítica predictiva para identificar estudiantes en riesgo. La iniciativa promete mejorar retención, pero existen dudas sobre datos, privacidad, sesgos y capacidad de intervención.',
      prompt:'Decide si debe pilotarse, escalarse o posponerse. Define hipótesis de valor, datos, salvaguardas, responsable, indicador, criterio de abandono y efecto sobre estudiantes y docentes.',
      bridge:'Conecta con el capítulo 10: la innovación elegida debe integrarse con el diagnóstico, la implementación, el control y la recomendación ejecutiva final.',
      rubric:['Problema y valor esperado definidos.','Capacidades y adopción evaluadas.','Riesgos éticos y humanos tratados.','Piloto e indicador coherentes.','Criterio de escala o abandono explícito.'],
      qs:[
        ['¿Qué distingue mejor una transformación digital?',['Comprar nuevas computadoras','Cambiar la lógica de valor, decisiones o actividades mediante capacidades digitales','Abrir una cuenta en redes sociales','Digitalizar un formulario sin modificar el proceso'],1,'La transformación altera cómo se crea y entrega valor; la mera incorporación de tecnología puede ser sólo digitalización.'],
        ['¿Qué debe incluir un piloto responsable?',['Sólo una fecha de lanzamiento','Hipótesis, métrica, salvaguardas y criterio para detener o escalar','La tecnología más costosa','El mayor número posible de usuarios'],1,'Un piloto aprende con límites explícitos y protege a los actores afectados.']
      ]
    },
    10:{
      title:'Segunda pasada · Integración y casos de cierre',
      diagnostic:'El capítulo debe demostrar trazabilidad completa entre dirección, evidencia, diagnóstico, elección, implementación, control, innovación y aprendizaje.',
      case:'Una empresa familiar de Chihuahua desea crecer internacionalmente sin perder control. Enfrenta presión de costos, capacidad digital limitada y dependencia de pocos clientes. Sólo puede financiar una prioridad estratégica durante veinticuatro meses.',
      prompt:'Presenta una recomendación ejecutiva con diagnóstico, alternativa descartada, elección, trade-off, plan de implementación, responsables, indicadores, riesgo, supuesto crítico y señal de revisión.',
      bridge:'Cierra el ciclo: la recomendación debe poder comunicarse, ejecutarse, medirse y revisarse sin perder su lógica de creación de valor.',
      rubric:['Diagnóstico basado en evidencia.','Elección y renuncia coherentes.','Implementación con responsables y recursos.','Indicadores conectados con la decisión.','Supuestos, riesgos y aprendizaje explícitos.'],
      qs:[
        ['¿Qué hace integradora a una recomendación estratégica?',['Que incluya todos los modelos disponibles','Que conecte evidencia, elección, ejecución y control mediante una misma lógica','Que sea muy extensa','Que elimine la incertidumbre'],1,'Integrar significa conservar trazabilidad y coherencia desde el diagnóstico hasta el aprendizaje.'],
        ['¿Para qué sirve una señal temprana en el caso final?',['Para sustituir la estrategia','Para detectar si un supuesto crítico empieza a fallar','Para eliminar responsables','Para medir sólo resultados pasados'],1,'La señal temprana permite revisar una elección antes de que el daño sea irreversible.']
      ]
    }
  };

  function render(n,d){
    const ch=chapters[n-1];
    if(!ch||ch.querySelector('.ae-pass2'))return;
    const box=document.createElement('section');
    box.className='ae-pass2';
    box.innerHTML=`<div class="ae-pass2-kicker">SEGUNDA PASADA ACADÉMICA · CAPÍTULO ${n}</div><h3>${d.title}</h3><div class="ae-pass2-grid"><div class="ae-pass2-card"><b>Qué debe lograr este capítulo</b><p>${d.diagnostic}</p></div><div class="ae-pass2-card"><b>Rúbrica de revisión</b><ul>${d.rubric.map(x=>`<li>${x}</li>`).join('')}</ul></div></div><div class="ae-pass2-lab"><h4>Caso de decisión</h4><p>${d.case}</p><p><strong>Producto:</strong> ${d.prompt}</p><textarea aria-label="Producto de segunda pasada capítulo ${n}" placeholder="Desarrolla tu decisión con evidencia, criterios, supuestos y consecuencias…"></textarea></div><div class="ae-pass2-link"><strong>Conexión entre capítulos:</strong> ${d.bridge}</div><div class="ae-pass2-quiz">${d.qs.map((q,qi)=>`<div class="ae-pass2-q" data-q="${qi}" data-correct="${q[2]}"><p>${qi+1}. ${q[0]}</p>${q[1].map((a,ai)=>`<button type="button" data-a="${ai}">${a}</button>`).join('')}<div class="ae-pass2-feedback" aria-live="polite"></div></div>`).join('')}</div><div class="ae-pass2-rubric"><strong>Criterio de revisión:</strong> el capítulo no se considera sólido si el estudiante puede contestar por intuición sin usar conceptos, evidencia, trade-offs o relaciones causales.</div>`;
    const anchor=ch.querySelector('.ae-core,.ae-advanced,.ae-acad')||ch.querySelector('.banner,.head')||ch.firstElementChild;
    anchor?.insertAdjacentElement('afterend',box);
    const ta=box.querySelector('textarea');
    const key='c'+n;
    ta.value=state[key]||'';
    ta.addEventListener('input',()=>{state[key]=ta.value;save()});
    box.querySelectorAll('.ae-pass2-q').forEach((qbox,qi)=>{
      qbox.querySelectorAll('button').forEach(button=>{
        button.onclick=()=>{
          qbox.querySelectorAll('button').forEach(x=>x.classList.remove('correct','wrong'));
          const chosen=Number(button.dataset.a);
          const correct=d.qs[qi][2];
          button.classList.add(chosen===correct?'correct':'wrong');
          if(chosen!==correct)qbox.querySelectorAll('button')[correct].classList.add('correct');
          qbox.dataset.answered='true';
          qbox.dataset.isCorrect=String(chosen===correct);
          qbox.querySelector('.ae-pass2-feedback').textContent=d.qs[qi][3];
          state[`q${n}_${qi}`]=chosen;
          save();
        };
      });
    });
  }

  function run(){Object.entries(data).forEach(([n,d])=>render(Number(n),d))}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
