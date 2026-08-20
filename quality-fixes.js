(()=>{
  const clean=s=>(s||'').replace(/\s+/g,' ').trim();
  document.querySelectorAll('.exercise-card textarea,.exercise-card input[type="text"]').forEach((field,i)=>{
    if(!field.id) field.id=`workbook-field-${i+1}`;
    if(field.getAttribute('aria-label')||field.getAttribute('aria-labelledby')) return;
    const card=field.closest('.exercise-card');
    let label=null;
    const prev=field.previousElementSibling;
    if(prev&&prev.matches('label.field-label')) label=prev;
    if(!label&&card) label=card.querySelector('label.field-label');
    if(label){
      label.setAttribute('for',field.id);
      if(!label.id) label.id=`workbook-label-${i+1}`;
      field.setAttribute('aria-labelledby',label.id);
      return;
    }
    const title=card?.querySelector('h4');
    const prompt=card?.querySelector('p');
    const name=clean([title?.textContent,prompt?.textContent].filter(Boolean).join('. '))||`Respuesta del ejercicio ${i+1}`;
    field.setAttribute('aria-label',name);
  });
  document.querySelectorAll('button').forEach(btn=>{
    if(!btn.getAttribute('aria-label')&&!clean(btn.textContent)&&btn.title) btn.setAttribute('aria-label',btn.title);
  });
  document.documentElement.classList.add('quality-a11y-ready');
})();
