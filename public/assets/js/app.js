const IMG=new Proxy({},{get:(_,k)=>`assets/img/${k}.webp`});
const fmt=n=>Math.round(n).toLocaleString('en-US');
const aed=n=>'AED '+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});

/* ---------- data ---------- */

/* ---------- lead sources ---------- */

(function(){
  const el=document.getElementById('srcbars');const max=SRC[0][1];
  el.innerHTML=SRC.map(([n,v])=>{const w=Math.max(v/max*100,1.2);return `<div class="b"><span>${n}</span><div class="bm"><i style="--w:${w}%"></i></div><span>${fmt(v)}</span></div>`}).join('');
})();

/* ---------- CRM usage: [month, active people, people with a login, notes logged] ---------- */

(function(){
  const el=document.getElementById('usebars');
  el.innerHTML=USE.map(([m,a,t])=>{const p=Math.round(a/t*100);return `<div class="b"><span>${m}<small>${a} of ${t}</small></span><div class="bm"><i style="--w:${p}%"></i></div><span>${p}%</span></div>`}).join('');
})();

/* ---------- chart ---------- */
(function(){
  const W=980,H=380,pl=56,pr=10,pt=34,pb=44;
  const max=260000, cw=(W-pl-pr)/M.length;
  let s=`<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Monthly revenue and marketing spend, Feb to Oct 2026">`;
  for(let i=0;i<=4;i++){const v=max/4*i,y=pt+(H-pt-pb)*(1-v/max);
    s+=`<line x1="${pl}" x2="${W-pr}" y1="${y}" y2="${y}" stroke="#ececf0"/><text x="${pl-8}" y="${y+4}" font-size="11" fill="#86868b" text-anchor="end">${v?Math.round(v/1000)+'k':'0'}</text>`}
  M.forEach((d,i)=>{
    const x=pl+i*cw+cw*.14,bw=cw*.34;
    const h1=(H-pt-pb)*d.rv/max,h2=(H-pt-pb)*d.sp/max,yb=H-pb;
    s+=`<rect class="bar" x="${x}" y="${yb-h1}" width="${bw}" height="${h1}" rx="5" fill="#0071e3"/>`;
    s+=`<rect class="bar s" x="${x+bw+4}" y="${yb-h2}" width="${bw}" height="${h2}" rx="5" fill="#c7c7cc"/>`;
    s+=`<text x="${x+bw+2}" y="${yb-h1-8}" font-size="12.5" font-weight="700" fill="#1d1d1f" text-anchor="middle">${(d.rv/d.sp).toFixed(1)}x</text>`;
    s+=`<text x="${x+bw+2}" y="${H-pb+20}" font-size="12.5" fill="#6e6e73" text-anchor="middle">${d.m}</text>`;
  });
  s+='</svg>';document.getElementById('chartsvg').innerHTML=s;
})();

/* ---------- month cards ---------- */
(function(){
  const el=document.getElementById('mrail');
  el.innerHTML=M.map((d,i)=>`<div class="mcard"><h4>${FULL[i]} 2026</h4><div class="rev">${aed(d.rv).replace('.00','')}</div><div class="small">revenue</div>
   <div class="row"><span>Marketing spend</span><b>${aed(d.sp).replace('.00','')}</b></div>
   <div class="row"><span>Migration revenue</span><b>${fmt(d.mig)}</b></div>
   <div class="row"><span>Other departments</span><b>${fmt(d.rv-d.mig)}</b></div>
   <span class="x">${(d.rv/d.sp).toFixed(2)}x ROI</span></div>`).join('');
})();
function rail(id,dir){const r=document.getElementById(id);r.scrollBy({left:dir*320,behavior:'smooth'})}

/* ---------- dept table ---------- */
(function(){
  const sum=k=>M.reduce((a,d)=>a+d[k],0);
  const T=sum('rv');
  const D=[['Migration','mig'],['Licensing','lic'],['Recruitment','rec'],['360Future Academy','ac'],['Study Abroad','sa']];
  let h='<tr><th>Department</th><th>Revenue (AED)</th><th>Share</th><th></th></tr>';
  D.forEach(([n,k])=>{const v=sum(k),p=v/T*100;h+=`<tr><td>${n}</td><td>${fmt(v)}</td><td>${p.toFixed(1)}%</td><td><div class="bm"><i style="--w:${p}%"></i></div></td></tr>`});
  h+=`<tr class="tot"><td>Total</td><td>${fmt(T)}</td><td>100%</td><td></td></tr>`;
  document.getElementById('deptable').innerHTML=h;
})();

/* ---------- leads to clients ----------
   CONV: [month, marketing spend AED, leads that reached the CRM, clients]  (leads and clients counted by the month the lead was created)
   DEPT: [department, spend AED, leads, clients], Apr - Oct 2026.  DEPT_ALL: [total spend AED, all leads, all clients] for the same months. */

(function(){
  const row=(n,sp,l,c,cls)=>`<tr${cls?' class="'+cls+'"':''}><td>${n}<small>AED ${fmt(Math.round(sp))}</small></td><td>${fmt(l)}</td><td>${fmt(c)}</td><td>${(c/l*100).toFixed(1)}%</td><td>${(sp/l).toFixed(2)}</td><td>${fmt(Math.round(sp/c))}</td></tr>`;
  let h='<tr><th>Department</th><th>Leads</th><th>Clients</th><th>Client rate</th><th>Per lead</th><th>Per client</th></tr>';
  DEPT.forEach(([n,sp,l,c])=>{h+=row(n,sp,l,c)});
  h+=row('All departments',DEPT_ALL[0],DEPT_ALL[1],DEPT_ALL[2],'tot');
  document.getElementById('convtable').innerHTML=h;
  const el=document.getElementById('cplbars'),max=Math.max(...CONV.map(d=>d[1]/d[2]));
  el.innerHTML=CONV.map(([m,sp,l])=>{const v=sp/l;return `<div class="b"><span>${m}<small>${fmt(l)}</small></span><div class="bm"><i style="--w:${v/max*100}%"></i></div><span>${v.toFixed(2)}</span></div>`}).join('');
})();

/* ---------- AI calling (Tidyhire), from Zoho CRM as of 12 Nov 2026 ----------
   cost: total Tidyhire bill in AED for Aug - 12 Nov. Leave null until the invoice is in Zoho Books. Then the cost card shows cost per call, lead and client. */

function renderAI(){
  const bars=(id,list,pct)=>{const max=Math.max(...list.map(x=>x[1]));document.getElementById(id).innerHTML=list.map(([n,v])=>`<div class="b"><span>${n}</span><div class="bm"><i style="--w:${Math.max(v/max*100,1.2)}%"></i></div><span>${fmt(v)}${pct?'<small>'+(v/AI.leads*100).toFixed(1).replace('.0','')+'%</small>':''}</span></div>`).join('')};
  bars('aibars',AI.outcomes,true);bars('aimonths',AI.months,false);
  const el=document.getElementById('aicost'),c=AI.cost,cl=AI.outcomes[AI.outcomes.length-1][1];
  el.innerHTML=c==null
   ?`<h3>Cost</h3><p class="cap" style="font-size:16px;margin-top:8px">Tidyhire's bill is not recorded in Zoho yet. There is no Tidyhire vendor or AI-calling expense account in Zoho Books. When the invoice total is added, this card shows the cost per call, per lead and per client.</p>`
   :`<h3>Cost</h3><div class="grid g4" style="margin-top:14px"><div><div class="big" style="font-size:34px">${aed(c).replace('.00','')}</div><p class="cap">total, Aug – 12 Nov</p></div><div><div class="big" style="font-size:34px">${aed(c/AI.calls)}</div><p class="cap">per call</p></div><div><div class="big" style="font-size:34px">${aed(c/AI.leads)}</div><p class="cap">per lead called</p></div><div><div class="big" style="font-size:34px">${aed(c/cl).replace('.00','')}</div><p class="cap">per client (${cl})</p></div></div>`;
}
renderAI();

/* ---------- systems ---------- */

(function(){
  document.getElementById('sysgrid').innerHTML=SYS.map(([img,t,a,r])=>`
   <div class="sys rv"><div class="thumb" data-lb="${img}" data-cap="${t}"><img src="${IMG[img]}" alt="${t} screenshot" loading="lazy"></div>
   <h4>${t}</h4><div class="act"><b>Action</b> · ${a}</div><div class="res"><b>Result</b> · ${r}</div></div>`).join('');
})();

/* ---------- SOPs ---------- */

(function(){
  document.getElementById('sopgrid').innerHTML=SOP.map(([n,t,b])=>`<div class="sop rv"><button aria-expanded="false"><span class="no">SOP ${n}</span><span class="t">${t}</span><span class="pl">+</span></button><div class="body"><p>${b}</p></div></div>`).join('');
  document.querySelectorAll('.sop button').forEach(b=>b.addEventListener('click',()=>{
    const s=b.parentElement,o=s.classList.toggle('open'),body=s.querySelector('.body');
    body.style.maxHeight=o?body.scrollHeight+'px':'0';b.setAttribute('aria-expanded',o);
  }));
})();

/* ---------- problems ---------- */

document.getElementById('problems').innerHTML=PROB.map(([t,p,s])=>`<div class="card rv"><h3 style="font-size:19px">${t}</h3><p class="cap" style="margin-top:8px"><b>Problem</b> · ${p}</p><p class="cap"><b style="color:var(--green)">What I did</b> · ${s}</p></div>`).join('');

/* ---------- reports ---------- */

document.getElementById('reportgrid').innerHTML=REP.map(([t,a,r])=>`<div class="card rv"><h3>${t}</h3><div class="ar-pair"><div><em>Action</em>${a}</div><div><em>Result</em>${r}</div></div></div>`).join('');

/* ---------- plan ---------- */

Object.entries(PLAN).forEach(([k,list])=>{document.getElementById(k).innerHTML=list.map(([t,d],i)=>`<div><span>${String(i+1).padStart(2,'0')}</span><b>${t}</b><br>${d}</div>`).join('')});
document.querySelectorAll('#tabs button').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('#tabs button').forEach(x=>x.classList.toggle('on',x===b));
  document.querySelectorAll('.plan').forEach(p=>p.classList.toggle('on',p.id===b.dataset.t));
}));

/* ---------- lightbox ---------- */
const lb=document.getElementById('lb');
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-lb]');
  if(t){document.getElementById('lbimg').src=IMG[t.dataset.lb];document.getElementById('lbimg').alt=t.dataset.cap||'';document.getElementById('lbcap').textContent=t.dataset.cap||'';lb.classList.add('on')}
  else if(e.target.closest('#lb')||e.target.id==='lb'){lb.classList.remove('on')}
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('on')});

/* ---------- reveal + count up ---------- */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el){
  const end=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),pre=el.dataset.pre||'',post=el.dataset.post||'';
  if(reduce){el.textContent=pre+end.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+post;return}
  const t0=performance.now(),dur=1600;
  (function f(t){const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,4);
    el.textContent=pre+(end*e).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+post;
    if(p<1)requestAnimationFrame(f)})(t0);
}
const io=new IntersectionObserver(es=>es.forEach(en=>{
  if(!en.isIntersecting)return;const el=en.target;el.classList.add('in');
  el.querySelectorAll('[data-count]').forEach(countUp);
  if(el.dataset.count)countUp(el);
  io.unobserve(el);
}),{threshold:.18});
document.querySelectorAll('.rv,.chartbox,.bars').forEach(el=>io.observe(el));
document.querySelectorAll('.bars').forEach(b=>{new IntersectionObserver((es,o)=>{es.forEach(e=>{if(e.isIntersecting){b.querySelectorAll('.bm').forEach(x=>x.classList.add('in'));o.disconnect()}})},{threshold:.2}).observe(b)});
document.querySelectorAll('.tablewrap').forEach(b=>{new IntersectionObserver((es,o)=>{es.forEach(e=>{if(e.isIntersecting){b.querySelectorAll('.bm').forEach(x=>x.classList.add('in'));o.disconnect()}})},{threshold:.2}).observe(b)});

/* ---------- nav, progress, pinned flow ---------- */
const nav=document.getElementById('nav'),prog=document.getElementById('prog');
const darks=[...document.querySelectorAll('[data-dark]')];
const steps=[...document.querySelectorAll('#steps .step')],pin=document.getElementById('automation');
function onScroll(){
  const h=document.documentElement,sc=h.scrollTop||document.body.scrollTop;
  prog.style.width=(sc/(h.scrollHeight-h.clientHeight)*100)+'%';
  const y=sc+24;nav.classList.toggle('on-dark',darks.some(d=>{const r=d.getBoundingClientRect(),top=r.top+sc;return y>=top&&y<top+r.height}));
  const r=pin.getBoundingClientRect(),total=r.height-innerHeight;
  const p=innerWidth<=600?1:Math.min(Math.max(-r.top/total,0),1);
  const n=innerWidth<=600?steps.length:Math.min(steps.length,Math.floor(p*(steps.length+.4))+(p>0?1:0));
  steps.forEach((s,i)=>s.classList.toggle('on',i<n));
}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);onScroll();
