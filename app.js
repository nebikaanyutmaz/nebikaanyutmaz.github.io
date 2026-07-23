
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const lang=()=>localStorage.getItem('lang')||'tr';
function applyLanguage(code=lang()){
  localStorage.setItem('lang',code); document.documentElement.lang=code;
  $$('[data-i18n]').forEach(el=>{const v=window.TRANSLATIONS?.[code]?.[el.dataset.i18n]; if(v) el.textContent=v;});
  const b=$('#langBtn'); if(b) b.textContent=code==='tr'?'EN':'TR';
}
document.addEventListener('DOMContentLoaded',()=>{
  applyLanguage();
  $('#langBtn')?.addEventListener('click',()=>applyLanguage(lang()==='tr'?'en':'tr'));
  $('#themeBtn')?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('theme',document.body.classList.contains('light')?'light':'dark')});
  if(localStorage.getItem('theme')==='light') document.body.classList.add('light');
  $('#menuBtn')?.addEventListener('click',()=>$('#navLinks')?.classList.toggle('open'));
  const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
  $$('.fade-in').forEach(e=>obs.observe(e));
});
