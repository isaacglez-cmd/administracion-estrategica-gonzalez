(()=>{
  const KEY='ae-evidence-2026';
  let state;
  try{state=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){state={}}
  state.conf=state.conf||{};
  const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
  const chapters=[...document.querySelectorAll('section[id],article[id]')]
    .filter(x=>/^chap\d+$/i.test(x.id)).slice(0,10);
  const getAnswers=chapter=>[...chapter.querySelectorAll('textarea')]
    .filter(field=>field.value.trim().length>=20).length;
  const getChecks=chapter=>[...chapter.querySelectorAll('input[type="checkbox"]')]
    .filter(field=>field.checked).length;
  const getQuiz=chapter=>chapter.querySelectorAll('.ae-pass2-q[data-is-correct="true"]').length;
  const evidence=chapter=>{
    const answers=getAnswers(chapter);
    const checks=getChecks(chapter);
    const quiz=getQuiz(chapter);
    const score=Math.min(100,(answers?35:0)+(checks?25:0)+Math.min(40,quiz*20));
    return{answers,checks,quiz,score};
  };

  function inject(){
    chapters.forEach((chapter,index)=>{
      if(chapter.querySelector('.ae-evidence'))return;
      const box=document.createElement('div');
      box.className='ae-evidence';
      box.innerHTML=`<h3>Evidencia de aprendizaje</h3><div class="ae-master"><i></i></div><div class="ae-evidence-grid"><div class="ae-evidence-card"><b data-a>0</b><span>RESPUESTAS DESARROLLADAS</span></div><div class="ae-evidence-card"><b data-c>0</b><span>ACTIVIDADES MARCADAS</span></div><div class="ae-evidence-card"><b data-q>0</b><span>ACIERTOS REGISTRADOS</span></div></div><div class="ae-selfcheck" role="group" aria-label="Autoevaluación del capítulo"><button type="button" data-v="1">Necesito repasar</button><button type="button" data-v="2">Puedo explicarlo con apoyo</button><button type="button" data-v="3">Puedo aplicarlo a un caso nuevo</button></div><div class="ae-evidence-note">El porcentaje requiere una respuesta desarrollada, una actividad marcada y dos aciertos de la evaluación del capítulo. No sustituye la evaluación docente.</div>`;
      chapter.appendChild(box);
      const update=()=>{
        const current=evidence(chapter);
        box.querySelector('[data-a]').textContent=current.answers;
        box.querySelector('[data-c]').textContent=current.checks;
        box.querySelector('[data-q]').textContent=current.quiz;
        box.querySelector('.ae-master i').style.width=current.score+'%';
        box.querySelectorAll('[data-v]').forEach(button=>button.setAttribute('aria-pressed',String(Number(button.dataset.v)===state.conf[index])));
      };
      box.querySelectorAll('[data-v]').forEach(button=>{
        button.onclick=()=>{state.conf[index]=Number(button.dataset.v);save();update()};
      });
      chapter.addEventListener('input',update);
      chapter.addEventListener('change',update);
      chapter.addEventListener('ae:evidence-change',update);
      chapter.addEventListener('click',()=>setTimeout(update,50));
      update();
    });
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',inject);else inject();
})();
