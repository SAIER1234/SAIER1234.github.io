// animate.js — Scroll-triggered fade-up
(function(){
  const els=document.querySelectorAll('.fade-up');
  if(!els.length)return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
  },{rootMargin:'0px 0px -30px 0px',threshold:.08});
  els.forEach(el=>obs.observe(el));
})();
