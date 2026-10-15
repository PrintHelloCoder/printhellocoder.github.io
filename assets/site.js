const records=[
 ['index.html','Variable Data Printing Guides','Overview, workflow and reference handbook'],
 ['variable-data-printing.html','Variable Data Printing Explained','Personalization, databases, PDF/VT, templates and merge fields'],
 ['first-campaign.html','Create Your First Variable Printing Campaign','Campaign planning, audience, artwork, proofing and mailing'],
 ['konica-minolta.html','Konica Minolta Variable Data Printing','AccurioPro, AccurioPress, controllers and production workflow'],
 ['brother.html','Brother Variable Data Printing','P-touch Editor, labels, CSV, Word and office printing'],
 ['hp.html','HP Variable Data Printing','SmartStream Designer, Indigo, office printers and personalized images'],
 ['compare-printers.html','Compare Printers for Variable Data Printing','Printer costs, economics, selection and outsourcing'],
 ['marketing.html','Personalized Print for Marketing','Marketing campaigns, ROI, measurement, ABM and research'],
 ['letters-envelopes-labels.html','Print Letters, Envelopes and Mailing Labels','Mail merge, inserting, address matching and lettershop services'],
 ['automation.html','Automate Variable Printing With Code','JavaScript, HTML, PDF, QR codes, data validation and automation']
];
const siteRoot=new URL('../',document.currentScript.src);
records.forEach(r=>{r[0]=new URL(r[0]==='index.html'?'./':r[0].replace(/\.html$/,'/'),siteRoot).href;});
const form=document.querySelector('.search'),input=document.querySelector('#search'),results=document.querySelector('#search-results');
function search(){const q=input.value.trim().toLowerCase();results.replaceChildren();if(!q){results.hidden=true;return}const matches=records.filter(r=>q.split(/\s+/).every(t=>r.join(' ').toLowerCase().includes(t)));for(const r of matches){const a=document.createElement('a');a.href=r[0];a.textContent=r[1];const s=document.createElement('small');s.textContent=r[2];a.append(s);results.append(a)}if(!matches.length){const p=document.createElement('p');p.textContent='No matching article. Try “labels”, “HP”, or “marketing”.';results.append(p)}results.hidden=false;}
form.addEventListener('submit',e=>{e.preventDefault();search()});input.addEventListener('input',search);input.addEventListener('keydown',e=>{if(e.key==='Escape')results.hidden=true});document.addEventListener('click',e=>{if(!form.contains(e.target))results.hidden=true});document.querySelector('#print-page')?.addEventListener('click',()=>window.print());
const menu=document.querySelector('.navigation');if(window.matchMedia('(max-width:750px)').matches)menu.open=false;
if('IntersectionObserver'in window){const o=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('.toc a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}},{rootMargin:'-5% 0px -65% 0px'});document.querySelectorAll('article section').forEach(s=>o.observe(s));}
