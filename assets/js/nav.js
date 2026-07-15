// nav.js — Scroll-aware header + active nav + mobile menu
(function(){
  const header=document.getElementById('site-header');
  const nav=document.getElementById('header-nav');
  const btn=document.getElementById('mobile-menu-btn');
  const links=document.querySelectorAll('.header-nav a[data-section]');

  // Sticky header shadow on scroll
  if(header){
    window.addEventListener('scroll',()=>{
      header.classList.toggle('scrolled',window.scrollY>10);
    });
  }

  // Active nav link via IntersectionObserver
  if(links.length){
    const ids=Array.from(links).map(l=>l.getAttribute('data-section'));
    const obs=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          links.forEach(l=>l.classList.toggle('active',l.getAttribute('data-section')===e.target.id));
        }
      });
    },{rootMargin:'-15% 0px -75% 0px',threshold:0});
    ids.forEach(id=>{const s=document.getElementById(id);if(s)obs.observe(s)});
  }

  // Mobile menu toggle
  if(btn&&nav){
    btn.addEventListener('click',()=>nav.classList.toggle('open'));
    links.forEach(l=>l.addEventListener('click',()=>{if(window.innerWidth<=768)nav.classList.remove('open')}));
  }
})();
