// Preloader and reveal
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  setTimeout(()=> {
    pre.style.opacity = '0';
    pre.style.transition = 'opacity 500ms ease';
    setTimeout(()=> { pre.style.display = 'none'; reveal(); }, 520);
  }, 900);
});

function reveal(){
  document.querySelectorAll('section, .site-header, .hero-section').forEach((el,i)=>{
    setTimeout(()=> el.classList.add('visible'), i*120);
  });
}

// Typed-like small ticker (no external libs)
const phrases = ["Sleek Landing · Fast · Accessible", "Automation • WhatsApp Bots", "Design Systems & Branding"];
let idx = 0;
const typedEl = document.getElementById('typed');
if (typedEl) {
  let pIdx = 0;
  function showNext() {
    typedEl.textContent = '';
    const text = phrases[pIdx];
    let j = 0;
    const t = setInterval(()=> {
      typedEl.textContent += text[j] || '';
      j++;
      if (j > text.length) {
        clearInterval(t);
        setTimeout(()=> {
          pIdx = (pIdx+1) % phrases.length;
          showNext();
        }, 1200);
      }
    }, 28);
  }
  showNext();
}

// Smooth scroll for same-page nav
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// set year
document.getElementById('year').textContent = new Date().getFullYear();
