(()=>{
  const RESULT_KEY='ae-assessment-state-2026';
  const correctByChapter={
    1:[2,1],2:[2,2],3:[1,1],4:[1,2],5:[1,0],
    6:[1,2],7:[1,1],8:[2,1],9:[1,1],10:[1,1]
  };

  const read=key=>{
    try{return JSON.parse(localStorage.getItem(key))||{}}catch(e){return{}}
  };
  let results=read(RESULT_KEY);
  const saveResults=()=>localStorage.setItem(RESULT_KEY,JSON.stringify(results));
  const chapterNumber=element=>Number(element.closest('section[id^="chap"]')?.id.replace('chap',''));
  const legacyState=n=>read(n<=5?'ae-pass2-1-5-2026':'ae-pass2-6-10-2026');
  const correctIndex=(n,qi,qbox)=>qbox.dataset.correct!==undefined?Number(qbox.dataset.correct):correctByChapter[n]?.[qi];

  function paint(qbox,n,qi,chosen,feedback){
    const buttons=[...qbox.querySelectorAll('button[data-a]')];
    const correct=correctIndex(n,qi,qbox);
    if(!buttons.length||!Number.isInteger(correct)||!Number.isInteger(chosen))return;
    buttons.forEach(button=>{
      button.classList.remove('correct','wrong');
      button.setAttribute('aria-pressed',String(Number(button.dataset.a)===chosen));
    });
    const selected=buttons[chosen];
    if(!selected)return;
    selected.classList.add(chosen===correct?'correct':'wrong');
    if(chosen!==correct)buttons[correct]?.classList.add('correct');
    qbox.dataset.answered='true';
    qbox.dataset.isCorrect=String(chosen===correct);
    const output=qbox.querySelector('.ae-pass2-feedback');
    if(output)output.textContent=feedback||(
      chosen===correct
        ?'Respuesta guardada y correcta.'
        :'Respuesta guardada. La alternativa correcta queda resaltada para revisión.'
    );
    qbox.dispatchEvent(new CustomEvent('ae:evidence-change',{bubbles:true}));
  }

  function orderPasses(){
    document.querySelectorAll('section[id^="chap"]').forEach(chapter=>{
      const development=chapter.querySelector('.ae-core,.ae-advanced');
      const pass=chapter.querySelector('.ae-pass2');
      if(development&&pass&&development.nextElementSibling!==pass){
        development.insertAdjacentElement('afterend',pass);
      }
    });
  }

  function restore(){
    orderPasses();
    document.querySelectorAll('.ae-pass2-q').forEach(qbox=>{
      const n=chapterNumber(qbox);
      const qi=Number(qbox.dataset.q);
      if(!n||!Number.isInteger(qi))return;
      const legacy=legacyState(n);
      const chosen=legacy[`q${n}_${qi}`];
      if(chosen===undefined)return;
      const saved=results[`${n}_${qi}`];
      paint(qbox,n,qi,Number(chosen),saved?.feedback);
    });
  }

  document.addEventListener('click',event=>{
    const button=event.target.closest('.ae-pass2-q button[data-a]');
    if(!button)return;
    setTimeout(()=>{
      const qbox=button.closest('.ae-pass2-q');
      const n=chapterNumber(qbox);
      const qi=Number(qbox.dataset.q);
      const chosen=Number(button.dataset.a);
      const correct=correctIndex(n,qi,qbox);
      const feedback=qbox.querySelector('.ae-pass2-feedback')?.textContent||'';
      results[`${n}_${qi}`]={chosen,correct,feedback};
      saveResults();
      paint(qbox,n,qi,chosen,feedback);
    },0);
  });

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',restore);else restore();
})();
