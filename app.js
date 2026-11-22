(function(){
const pages=[['index.html','Home'],['about.html','About'],['products.html','Products'],['solutions.html','Solutions'],['technology.html','Technology'],['contact.html','Contact']];
const cur=(location.pathname.split('/').pop()||'index.html').toLowerCase();
const nav=document.createElement('nav');
nav.innerHTML=`<div class="pill"><a href="index.html" class="logo"><i>⚡</i>BIOENERGY</a><button class="burger" aria-label="Menu">☰</button><div class="nl">${pages.slice(0,5).map(p=>`<a href="${p[0]}" class="${p[0]===cur?'act':''}">${p[1]}</a>`).join('')}</div><a href="contact.html" class="btn lime">Get Started</a></div>`;
document.body.prepend(nav);
nav.querySelector('.burger').onclick=()=>nav.querySelector('.nl').classList.toggle('o');
const f=document.createElement('footer');
f.innerHTML=`<div class="w"><div class="ft"><div><h4>Pioneering clean heat and power from organic waste.</h4><a href="mailto:info@bioenergy.co.in">info@bioenergy.co.in</a><a href="tel:+919327536669">+91 93275 36669</a><a href="tel:+918949714218">+91 89497 14218</a></div>
<div><h5>Pages</h5>${pages.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div>
<div><h5>Highlights</h5><a href="technology.html">1500°C furnace</a><a href="solutions.html">Stubble to energy</a><a href="products.html">Plastic recycling</a><a href="about.html">Gold Medal, IIGP-2013</a></div></div></div><div class="fg" aria-hidden="true">BIOENERGY</div>`;
document.body.appendChild(f);
const wa=document.createElement('a');wa.className='wa';wa.href='https://wa.me/919327536669';wa.setAttribute('aria-label','WhatsApp');wa.textContent='💬';document.body.appendChild(wa);
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const t=document.getElementById('t'),fu=document.getElementById('fuel');
if(t){const fm=n=>Math.round(n).toLocaleString('en-IN');const calc=()=>{const d=+t.value,y=d*330;document.getElementById('tv').textContent=d;document.getElementById('r1').textContent=fm(y*3.5);document.getElementById('r2').textContent=fm(y*+fu.value);document.getElementById('r3').textContent=fm(y);document.getElementById('r4').textContent=fm(y*+fu.value*45)};t.oninput=fu.onchange=calc;calc()}
const form=document.getElementById('cform');
if(form)form.onsubmit=e=>{e.preventDefault();form.innerHTML='<div class="thanks"><div class="ok">✓</div><h3>Thank you!</h3><p style="color:#6b6d66;margin-top:8px">Demo form: connect to email / CRM on the live site.</p></div>'};
})();
