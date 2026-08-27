(function(){
  var body=document.body;
  // mobile menu
  document.querySelectorAll('[data-mm-open]').forEach(function(e){e.addEventListener('click',function(){body.classList.add('mm-on');});});
  document.querySelectorAll('[data-mm-close]').forEach(function(e){e.addEventListener('click',function(){body.classList.remove('mm-on');});});
  document.querySelectorAll('.mobile-menu a').forEach(function(a){a.addEventListener('click',function(){body.classList.remove('mm-on');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')body.classList.remove('mm-on');});

  // header scroll state (only for transparent hero header, not .solid)
  var hd=document.querySelector('header.site');
  if(hd&&!hd.classList.contains('solid')){
    var onScroll=function(){hd.classList.toggle('scrolled',window.scrollY>40);};
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  }

  // reveal
  var els=[].slice.call(document.querySelectorAll('[data-reveal]'));
  if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(function(e){e.classList.add('in');});return;}
  var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:0.14,rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){io.observe(e);});
})();
