const bt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};bt();const j=document.getElementById("root"),r=t=>document.createElement(t),f=t=>document.querySelector(t),ht=`<svg width="10em" height="10em" role="status" class="inline  text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>`,vt=`<svg xmlns="http://www.w3.org/2000/svg" class="menu w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path id='hamburger' class=""  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
<path id="cross" class="hidden"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`,$t=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-blue-700" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>`,yt=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-teal-700" viewBox="0 0 20 20" fill="currentColor">
<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>`,xt=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-red-700" viewBox="0 0 20 20" fill="currentColor">
  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
</svg>`,R=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>`,wt=vt;function Lt(){const t=r("button");return t.classList.add("block","text-center","text-blue-200","border","rounded-lg","border-blue-200","hover:scale-110"),t.id="menuBtn",t.innerHTML=`${wt}`,t}function kt(){const t=r("div");t.classList.add("flex","text-center","justify-between","items-center","text-blue-200","font-semibold","sm:text-lg","text-xs","space-x-2");const e=r("div");e.id="page_title",e.classList.add("grow");const o=r("div");return o.classList.add("sm:flex","hidden"),o.innerHTML=`${R}<span class="hidden sm:inline">Rgc Ingenieria</span>`,t.append(Lt(),e,o),t}function Ct(t,e){const o=r("a");return o.classList.add("block","px-3","py-1","font-semibold","text-blue-200","rounded","hover:bg-red-900","w-auto"),o.href=`${t}`,o.textContent=e,o}function N(){const t=r("div");return t.classList.add("text-center","text-6xl","text-orange-700","bg-orange-200"),t.innerText="Home Site Deployed",t}function h(t,e,o,n=""){const s=r("label");s.classList.add("block","text-gray-700","w-full"),s.setAttribute("for",t),s.innerText=o.replace(/\w\S*/g,i=>i.replace(/^\w/,c=>c.toUpperCase()));const a=r("input");return a.type=e,a.name=t,a.id=t,a.classList.add("block","w-full","focus:outline-none","pl-1","text-gray-500","border","rounded","border-gray-500","focus:border-blue-500","focus-border-1","focus:ring-1","focus:ring-blue-500"),a.value=n,s.append(a),s}const Tt=(t,e)=>(t.forEach(o=>{o.val===e&&(o.sel="selected")}),t);function St(t,e){return Tt(t,e).map(s=>`<option value="${s.val}" ${s.sel}>${s.title}</option>`).join("").toString()}function q(t,e,o,n){const s=r("label");s.setAttribute("for",t),s.classList.add("block","text-gray-700"),s.innerText=e;const a=r("select");return a.classList.add("block","focus:outline-none","pl-1","text-gray-500","border","rounded","border-gray-500","focus:border-blue-500","focus:border-1","focus:ring-1","focus:ring-blue-500"),a.id=t,a.name=t,a.value=n,a.classList.add("text-xl"),a.innerHTML=St(o,n),s.append(a),s}function Et(t){const o=[{name:"save",action:"button",bGColor:"bg-teal-500",borderColor:"border-teal-800",activeColor:"active:bg-teal-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />',title:"Guardar"},{name:"search",action:"submit",bGColor:"bg-teal-500",borderColor:"border-teal-800",activeColor:"active:bg-teal-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',title:"Search"},{name:"cancel",action:"button",bGColor:"bg-red-500",borderColor:"border-red-800",activeColor:"active:bg-red-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />',title:"Cancelar"},{name:"upload",bGColor:"bg-sky-500",borderColor:"border-sky-800",activeColor:"active:bg-sky-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />',title:"Subir"},{name:"download",bGColor:"bg-sky-500",borderColor:"border-sky-800",activeColor:"active:bg-sky-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />',title:"Bajar"}].find(d=>d.name===t);if(!o)return console.log(`no hay boton ${t}`);const n=`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">${o.path}</svg>`,{bGColor:s,title:a,borderColor:i,activeColor:c,action:l}=o;return{bGColor:s,title:a,borderColor:i,activeColor:c,icono:n,action:l}}function k(t){const e=Et(t.type);if(!e)return;const{bGColor:o,title:n,borderColor:s,activeColor:a,icono:i,action:c}=e,l=r("button");return l.setAttribute("type",c),l.classList.add("h-12","w-12","px-2","sm:w-20","sm:h-8",o,"flex","items-center","rounded-full","border-1",s,"text-white","sm:rounded","hover:scale-110","focus:outline-none","truncate",a),l.innerHTML=`${i}<span class="mx-auto hidden sm:block truncate ">${n}</span>`,l.addEventListener("click",t.cb),l}const G="https://projectquotteapi.herokuapp.com",U="cotizaciones",_="cotizacion",Q="proyectos",V="proyectos/",J="proyecto/",jt="findproyectos",zt="signed",Y="addfoto",It="https://bucket-fotos-proyectos.s3.amazonaws.com/";async function x(t,e){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)};return(await fetch(`${G}/${t}`,o)).json()}async function T(t){const o=await(await fetch(`${G}/${t}`)).json();return o.length===1?o[0]:o}async function Z(t){const e=new FormData(t);if(!e)return t;const o=Object.fromEntries(e.entries());return console.log(o),o}const Ft=[{alert:"apendeje",bg:"bg-red-600",txt:"text-red-200"},{alert:"bien",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"exitoPry",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"upLoadGood",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"wrongUpload",bg:"bg-red-600",txt:"text-red-200"}];function C(t,e,o="/"){const{alert:n,bg:s,txt:a}=Mt(t),i=f("#alert");return console.log("ALERTA",i),i.classList.add(s,a),i.classList.toggle("invisible"),i.innerHTML=`${e}`,setTimeout(()=>{i.classList.toggle("invisible"),i.classList.remove(s,a),location.hash=o},2e3)}function Mt(t){return Ft.find(o=>o.alert===t)}async function At(t,e){const o=await Z(t);console.log("savedata",o);try{const n=e==="Nueva"?await x(U,o):await x(`${_}/${e}`,o);if(e==="Nueva"&&o.status==="ganada"&&o.sitios>0){console.log("INSIDEIF");const a=await x(`${Q}/${n.cotizacionId}`,{});console.log("SAVETODB",a),C("bien",`se capturo${n.message}-${a.message}`);return}const s=await x(`${Q}/${n.cotizacionId}`,{});e==="Nueva"?C("bien",`Se capturo ${n.message}`):C("bien",`${n.message}`);return}catch(n){C("apendeje",n.message),console.log("ERRORSAVE",n)}}function Pt(t,e){const o=r("div");o.classList.add("flex","justify-between","mx-10","py-2");const n=k({type:"save",cb:async a=>(a.preventDefault(),At(t,e))}),s=k({type:"cancel",cb:()=>t.reset()});return o.append(s,n),o}function Dt(t){const e=r("h4");return e.classList.add("text-center","text-xl","text-gray-700"),e.setAttribute("value",""),e.innerText=`Cotizacion ${t}`,e}function w(t){var e=new Date(t),o=""+(e.getMonth()+1),n=""+e.getDate(),s=e.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[s,o,n].join("-")}function W(t,e,o,n){switch(t){case"ganada":o.classList.remove("hidden"),e.classList.add("hidden"),n.classList.remove("hidden");break;case"terminada":o.classList.remove("hidden"),e.classList.add("hidden"),n.remove("hidden");break;case"cancelada":o.classList.remove("hidden"),e.classList.add("hidden"),n.classList.add("hidden");break;case"pendiente":o.classList.add("hidden"),e.classList.remove("hidden"),n.classList.add("hidden")}}function L(...t){const e=r("fieldset");return e.classList.add("sm:flex","space-x-2","sm:justify-center","sm:space-x-12","sm:items-center","w-auto","mx-2"),e.append(...t),e}const Ot=[{val:"pendiente",title:"Pendiente",sel:""},{val:"ganada",title:"Ganada",sel:""},{val:"cancelada",title:"Cancelada",sel:""},{val:"terminada",title:"Terminada",sel:""}];async function z(){const t={cotizacionId:"Nueva",cliente:"",contacto:"",trabajo:"",sitios:"",cotizador:"",monto:"",status:"pendiente",emision:"",resuelta:"",pedido:""},e=location.hash==="#/modifica"?JSON.parse(localStorage.getItem("cotId")):t;return Ht(e)}async function Ht(t){const e=r("form");e.classList.add("bg-blue-100","rounded-lg","space-y-2","sm:w-2/3","p-2","rounded","mx-auto"),e.setAttribute("autocomplete","off");const o=Dt(t.cotizacionId);o.setAttribute("value",t.cotizacionId);const n=h("contacto","text","Contacto",t.contacto),s=h("cliente","text","Cliente",t.cliente),a=L(s,n),i=h("trabajo","text","Descripcion Trabajo",t.trabajo),c=h("sitios","number","Sitios",t.sitios),l=h("cotizador","text","Cotizador",t.cotizador),d=h("monto","number","Monto $",t.monto),u=L(c,d,l),g=h("pedido","text","Pedido",t.pedido),p=h("emision","date","emision",w(t.emision)),$=h("resuelta","date","Resolucion",w(t.resuelta)),m=q("status","Status",Ot,t.status),y=L(m,p,$,g);e.addEventListener("change",D=>{W(D.target.value,p,$,g)}),W(t.status,p,$,g);const P=Pt(e,t.cotizacionId);return e.append(o,a,i,u,y,P),e}function Bt(t){const e=t.target.src,o=t.target.dataset.tipo,n={x:e,tipo:o};return t.dataTransfer.setData("text",JSON.stringify(n)),e}function Rt(){}function Nt(t){t.preventDefault()}function qt(t){t.preventDefault(),this.classList.add("opacity-50")}function Gt(t){this.classList.remove("opacity-50")}function Ut(t){t.preventDefault();const e=JSON.parse(t.dataTransfer.getData("text")),o=t.target.closest("img");if(!o)return this.classList.remove("opacity-50");o.src=e.x,o.dataset.tipo=e.tipo,this.classList.remove("opacity-50")}function K(t,e){const o=r("section");o.classList.add("w-1/6","print:hidden");const n=r("section");n.classList.add("overflow-auto","h-screen","space-y-2");const s=r("p");s.classList.add("text-center","mb-2"),s.innerText=e;const a=t.map(i=>{const c=r("figure");c.dragable=!0,c.classList.add("cursor-pointer","hover:scale-125");const l=r("img");return l.classList.add("border","border-4","border-black","rounded-xl"),l.src=`${It}${i}`,l.dataset.tipo=e.toLowerCase(),l.classList.add("hover:scale-125"),c.append(l),c});return n.addEventListener("mousedown",i=>{const c=i.target.closest("img");!c||(c.addEventListener("dragstart",Bt),c.addEventListener("dragend",Rt))},!0),n.append(...a),o.append(s,n),o}function _t(){const t=r("section");t.classList.add("flex","flex-wrap","space-y-2");const e=r("div");e.classList.add("flex","w-full","space-x-2");const o=r("div");o.classList.add("flex","w-full","space-x-2");const n=I("Foto Inicio 1","g1"),s=I("Foto Final 1","g1"),a=I("Foto Inicio 2","g2"),i=I("Foto Final 2","g2");return e.append(n,s),o.append(a,i),t.append(e,o),t}function I(t,e){document.body.style.webkitTouchCallout="none";const o=r("figure");o.dataset.grp=e;const n=r("figcaption");n.innerText=t;const s=r("img");s.src="foto.svg",s.classList.add("object-scale-down","mx-auto","h-64");const a=k({type:"cancel",cb:()=>s.src="foto.svg"});return a.classList.add("mb-2","print:hidden"),o.classList.add("w-1/2","h-72","flex","flex-col","justify-start","items-center","border-black","border-2","rounded-lg","shrink"),o.append(n,s,a),o.addEventListener("dragover",Nt),o.addEventListener("dragenter",qt),o.addEventListener("dragleave",Gt),o.addEventListener("drop",Ut),o}function S(t=""){const e=f("#page_title");e.innerHTML=t}function Qt(t){const{cotizacionId:e,proyectoId:o,sitio:n,factura:s,supervisor:a}=t,{trabajo:i,cliente:c,pedido:l,contacto:d}=t.proyectos_ready,u=r("header");return u.classList.add("print:block","mb-2","pb-2","h-18","hidden","text-sm"),u.innerHTML=`	<div class="flex">${R}<p>RgcIngenieria</p>
 </div>
 <p class="mx-auto text-xl text-center">Reporte Fotografico</p>
  <div class="flex-col mx-4 space-y-2 mt-4 pb-2 border-b border-black">
    <div class="flex justify-between ">
      <p>Sitio: <span class="underline">${n}</span></p>

      <p>Trabajo: <span class="underline">${i}</span></p>
    </div>
    <div class="flex justify-between">
      <p>Cliente: <span class="underline">${c}</span></p>
      <p>Pedido: <span class="underline">${l}</span></p>
      <p>Attn: <span class="underline">${d}</span></p>
    </div>
    <div class="flex justify-between">
      <p>
        Supervisor: <span class="underline">${a}</span>
      </p>
      <p>Factura:<span class="underline"></span>${s}</p>
      <p>Proyecto:<span class="underline">${e}-${o}</span></p>
    </div>
  </div>`,u}async function X(){const t=JSON.parse(localStorage.getItem("pry")),{cotizacionId:e,proyectoId:o}=t;Vt(`${e}-${o}`);const{empezar:n,terminar:s}=t,a=K(n,"Inicio"),i=K(s,"Final"),c=r("div"),l=r("section");l.id="creareporte",l.classList.add("mt-1","flex","px-2","space-x-2","fixed","items-start","print:justify-around","print:absolute");const d=f("#preview"),u=_t();return d.addEventListener("click",p=>{window.print()}),f("#save").addEventListener("click",()=>{Jt(e,o,u)}),l.append(a,u,i),c.append(Qt(t),l),c}function Vt(t){const e=`<div class="flex justify-evenly"><p>Proyecto${t}</p><button type="button" id="preview" class="bg-orange-500  w-20 text-xs rounded">Preview</button></p><button type="button" id="save" class="bg-blue-500  w-20 text-xs rounded">Save</button></div>`;return S(e)}function tt(t){const e={};return t.forEach(o=>{const n=o.querySelector("figcaption").innerText.includes("Inicio")?"inicio":"final",s=o.querySelector("img").src;if(!s.includes("foto.svg")){const a=s.split("/"),i=`${a[3]}/${a[4]}`;e[n]=i}}),e}async function Jt(t,e,o){const n=[],s=Array.from(o.querySelectorAll('[data-grp="g1"]')),a=tt(s);Object.keys(a).length>=2&&n.push(a);const i=Array.from(o.querySelectorAll('[data-grp="g2"]')),c=tt(i);Object.keys(c).length>=2&&n.push(c);const l={cotizacionId:t,proyectoId:e,reporte:n},{message:d}=await x(Y,l);return d}async function et(t){const e=await T(`${_}/${t}`);if(e.error){C("apendeje",`Apendeje: ${e.message}`);return}return localStorage.setItem("cotId",JSON.stringify(e)),location.hash="/modifica"}const Yt=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>`;function ot(t){const e=r("div");e.classList.add("flex","border","rounded-lg","border-gray-500","mb-2");const o=r("input");o.classList.add("w-full","focus:outline-none","pl-1","text-gray-500","rounded-l-lg","border-gray-500","focus:border-blue-500","focus-border-1","focus:ring-1","focus:ring-blue-500"),o.id="search",o.autofocus=!0,o.required=!0,o.placeholder="Sitio o Direccion del proyecto....",o.autocomplete="off";const n=r("button");return n.innerHTML=`${Yt}`,n.classList.add("h-12","w-12","bg-sky-400","rounded-r-lg","flex","items-center","justify-center","text-white"),n.addEventListener("click",t),o.addEventListener("change",t),e.append(o,n),e}function nt(){const t=r("section");t.classList.add("sm:w-1/3","mx-auto");const e=()=>et(f("#search").value);return t.append(ot(e)),t}function st(){const t=r("section");return t.classList.add("mx-2","grid","gap-2","grid-cols-1","sm:grid-cols-1","md:grid-cols-2","lg:grid-cols-3"),t.addEventListener("click",async e=>{if(e.target.dataset.cot){const o=e.target.dataset.cot;return await et(o)}if(e.target.dataset.cliente)return console.log("GET COTIZACIONES POR CLIENTE",e.target.dataset.cliente),location.hash=`/cotizaciones/${e.target.dataset.cliente}`;if(e.target.dataset.sitcot){const o=e.target.dataset.sitcot;return console.log("GET Proyectos en Cotizacion",e.target.dataset.sitcot),location.hash=`/proyectosencotizacion/${o}`}if(e.target.dataset.pry){const[o,n]=e.target.dataset.pry.split("/");return console.log("COT",o,"PRY",n),location.hash=`/mod-proyecto/${e.target.dataset.pry}`}if(e.target.dataset.fotos){const o=e.target.dataset.fotos;if(o)return location.hash=`/upfotos/${o}`}}),t}function E(t,e){const o=`${Object.keys(e)[0]}`,n=r("button");return n.classList.add("text-blue-900","hover:text-white","focus:text-white","bg-blue-400","hover:bg-blue-500","focus:ring-4","focus:ring-blue-300","font-medium","rounded-full","text-xs","px-2","text-center","mx-2","mb-2","h-6","w-1/3","border-b-2","border-r-2","border-blue-900","truncate"),n.dataset[o]=e[o],n.innerHTML=t,n}function v(...t){const e=r("div");return e.classList.add("pt-2","flex","justify-between","text-sm"),e.append(...t),e}function b(t,e){const o=r("div");o.classList.add("mx-2","mb-2","space-y-1","bg-blue-800","p-2","rounded","w-full","text-white","text-xs");const n=r("p"),s=r("p");return n.innerText=t,s.innerText=e,o.append(n,s),o}function F(){const t=r("section");return t.classList.add("w-full","mx-auto","space-y-2","bg-slate-200","rounded-lg","border-2","border-blue-500"),t}function Zt(t){const{cotizacionId:e,cliente:o,contacto:n,trabajo:s,sitios:a,cotizador:i,monto:c,status:l,emision:d,resuelta:u,pedido:g}=t,p=F(),$=v(E(`Cot: ${e}`,{cot:e}),E(`${o}`,{cliente:o}),E(`Sitios ${a}`,{sitcot:e})),m=v(b("Trabajo:",`${s}`));m.classList.add("w-full");const y=v(b("Status:",`${l}`),b("Emision",`${w(d)}`),b("Resolucion:",`${w(u)}`));return p.append($,m,y),p}async function M(t){const e=t||"";S(e!==""?`Cotizaciones de ${e}`:"Todas las Cotizaciones ");const o=await T(`${U}/${e}`),n=o.length>0?o:[o],s=st(),a=n.map(i=>Zt(i));return s.append(...a),s}function Wt(t){const e=F(),o=v(E(`Pry: ${t.cotizacionId}-${t.proyectoId}`,{pry:`${t.cotizacionId}/${t.proyectoId}`}),E(`Fotos(${t.fotos})`,{fotos:`${t.cotizacionId}/${t.proyectoId}/${t.sitio}`})),n=v(b("Sitio",t.sitio),b("Supervisor",t.supervisor)),s=v(b("Direccion",t.direccion)),a=v(b("Status",t.status),b("Inicio",w(t.inicio))),i=v(b("Terminado",w(t.terminado)),b("Factura",t.factura));return e.append(o,n,s,a,i),e}async function at(t){console.log("PARAM en GRIDPROYECTOS",t);const e=await T(`${V}${t}`),o=e.length>0?e:[e];console.log("ALLPROY",o);const n=st(),s=o.map(a=>Wt(a));return S(`Trabajo: ${o[0].trabajo} <br class="sm:hidden"><span class="ml-4">Cliente: ${o[0].cliente}</span>`),n.append(...s),n}function it(t){const e=r("h4");return e.classList.add("mx-2","py-1","text-center","rounded","bg-blue-800","text-white","w-1/2"),e.innerText=t,e}function rt(t,e,o){t!=="terminado"?(e.classList.add("hidden"),o.classList.add("hidden")):(e.classList.remove("hidden"),o.classList.remove("hidden"))}async function Kt(t,e,o){console.log("SAVEPRY",t,e);const n=await Z(o);console.log("PRYDATA",n),console.log("ENDPOINT",`${J}${t}/${e}`);try{const s=await x(`${J}${t}/${e}`,n);C("bien",`Proyecto ${t}-${e} ${s.message}`,`/proyectosencotizacion/${t}`);return}catch(s){console.log(s),C("apendeje",`Apendeje : ${s.message}`)}}const Xt=[{val:"pendiente",title:"Pendiente"},{val:"proceso",title:"Proceso"},{val:"terminado",title:"Terminado"}];async function ct(){const[t,e,o,n]=location.hash.split("/");console.log("COT",o,"PRY",n);const s=await T(`${V}${o}/${n}`);console.log(s);const a=v(it(`Proyecto: ${o}-${n}`),it(`Cliente: ${s.cliente}`)),i=v(b("Trabajo",s.trabajo)),c=L(h("sitio","text","Sitio",s.sitio),h("direccion","text","direccion",s.direccion)),l=L(h("supervisor","text","supervisor",s.supervisor),q("status","Status",Xt,s.status),h("inicio","date","Inicio",w(s.inicio))),d=h("terminado","date","Terminacion",w(s.terminado)),u=h("factura","text","factura",s.factura),g=L(d,u),p=v(k({type:"cancel",cb:()=>console.log("BTN")}),k({type:"save",cb:async y=>(y.preventDefault(),Kt(o,n,m))})),$=F(),m=r("form");return $.classList.add("sm:w-2/3"),m.classList.add("space-y-2","p-2","mx-auto"),m.setAttribute("autocomplete","off"),m.append(c,l,g,p),m.addEventListener("change",y=>{rt(m.status.value,d,u)}),$.append(a,i,m),rt(m.status.value,d,u),$}function te(t){const e=r("section");e.id="top",e.classList.add("space-y-2");const o=t.map((n,s)=>{const{cotizacionId:a,proyectoId:i,sitio:c,direccion:l}=n,d=F();d.classList.add("cursor-pointer"),d.dataset.cardnum=s,d.dataset.pry=`${a}/${i}/${c}`;const u=v(b("Proyecto",`${a}-${i}`),b("Sitio",`${c}`)),g=v(b("Direccion",`${l}`));return d.append(u,g),d});return e.append(...o),e.addEventListener("click",n=>{const s=parseInt(n.target.closest("section").dataset.cardnum,10);console.log(s,typeof s),console.log(t[s]);const a=n.target.closest("section").dataset.pry;a&&location.hash.includes("fotos")&&(location.hash=`/upfotos/${a}`),a&&location.hash.includes("make_report")&&(localStorage.setItem("pry",JSON.stringify(t[s])),location.hash=`/reporte/${a}`)}),e}function A(t){console.log(t);const e=r("section");e.classList.add("sm:w-1/2","mx-auto");const o=async()=>{const n=f("#search").value;if(f("#top")&&f("#top").remove(),!n)return;const s=await T(`${jt}?val=${n}`),a=s.length>1?s:[s],i=te(a);e.append(i)};return e.append(ot(o)),e}function lt(t="foto",e="final",o=!1){const n=r("div");n.classList.add("flex","items-center","space-x-8","bg-blue-700","rounded-full","text-sm","h-8","pr-2");const s=r("label"),a=r("input");return a.type="radio",a.name=t,a.id=e,a.value=e,a.classList.add("w-4","h-4","accent-red-600"),a.checked=o,s.setAttribute("for",e),s.classList.add("ml-4"),s.innerText=e.toUpperCase(),n.append(s,a),n}function ee(t){const e=f("figure"),o=f("#imgdiv"),n=f("#btnbar");o.classList.add("hidden"),n.classList.remove("invisible"),e.innerHTML=`<img src="${t.target.result}">`}function oe(){const t=r("div");t.id="imgdiv",t.classList.add("flex","justify-center");const e=r("input");e.type="file",e.id="foto",e.name="foto",e.classList.add("hidden");const o=r("label");return o.setAttribute("for","foto"),o.innerHTML=$t,o.classList.add("block","flex","items-center","justify-center","w-24","h-24","rounded-full","border","border-black","cursor-pointer"),e.addEventListener("change",async n=>{const s=await n.target.files[0];if(!s)return;const a=new FileReader;a.readAsDataURL(s),a.addEventListener("load",ee,!1)}),o.append(e),t.append(o),t}async function ne(t,e){console.log("FILE",e.type);const o=new FormData;return Object.keys(t).forEach(n=>o.append(n,t[n])),o.append("Content-type",e.type),o.append("file",e),o}async function se(t,e){const o={method:"POST",body:e};try{return await fetch(t,o)}catch(n){return await n.json()}}function ae(t){const e=Array.from(t.getElementsByTagName("input")),[o]=e.filter(n=>n.checked);return o?o.value:Error("te Apendejaste falta foto tipo")}async function ie(t,e,o,n){console.log("HANDLER",n);const s={cotizacionId:t,proyectoId:e,fileName:n.name};try{const a=ae(o);if(!["empezar","terminar"].includes(a))throw Error(a.message);const i=await x(zt,s);if(console.log(i),i.statusCode)throw Error(i.message);const{url:c,fields:l}=i,d=await ne(l,n),u=await se(c,d);if(console.log(u),!u.ok)throw Error("error al subir foto");const g={cotizacionId:t,proyectoId:e,tipo:a,laFoto:l.key};return console.log("MONGO",g),await x(Y,g)}catch(a){return console.log(a),a}}function dt(t,e){const o=f("figure"),n=f("#imgdiv"),s=f("#btnbar"),a=f("#upfotos");s.classList.add("invisible"),t==="positive"&&(o.innerHTML=`${yt}<p class="text-teal-700">${e}!!!</p>`),t==="negative"&&(o.innerHTML=`${xt}<p class="text-red-700">!!!${e}</p>`),setTimeout(()=>{a.reset(),o.innerHTML=null,n.classList.remove("hidden")},1500)}async function re(t,e){const{cotizacionId:o,proyectoId:n,$radioBar:s}=e,a=new FileReader;a.readAsDataURL(t);const i=r("canvas"),c=i.getContext("2d"),l=r("img");l.id="small",l.classList.add("hidden"),a.addEventListener("load",d=>{l.src=d.target.result}),l.addEventListener("load",async d=>{const u=400,g=f("#imgcontainer"),{width:p,height:$}=d.target,m=$/p,y=p>u?u:p,P=y*m;i.width=y,i.height=P,c.drawImage(d.target,0,0,i.width,i.height);const D=c.canvas.toDataURL("image/webp"),gt=await(await fetch(D)).blob(),mt=new File([gt],"CHIQUITO.webp",{type:"image/webp"});g.innerHTML=ht;const{message:O}=await ie(o,n,s,mt);O.includes("agregado")?dt("positive",O):dt("negative",O)})}function ut(){S("Captura de Fotos");const[t,e,o,n,s]=location.hash.split("/"),a=oe(),i=r("figure");i.id="imgcontainer",i.classList.add("text-center","mx-auto"),i.innerHTML=null;const c=r("form");c.id="upfotos",c.autocomplete="off",c.classList.add("mx-2","mt-2","sm:w-2/3","sm:mx-auto","space-y-8","bg-blue-100","border-blue-500","text-white","rounded-lg");const l=b("Proyecto : ",`${o}-${n}`),d=b("Sitio :",decodeURI(s)),u=v(l,d),g=L(lt("foto","empezar"),lt("foto","terminar"));g.classList.add("flex","justify-center","space-x-2");const p=L(k({type:"cancel",cb:()=>{c.reset(),i.innerHTML=null,a.classList.remove("hidden"),p.classList.add("invisible")}}),k({type:"save",cb:async $=>{const m=f("#foto").files[0];await re(m,{cotizacionId:o,proyectoId:n,$radioBar:g})}}));return p.id="btnbar",p.classList.add("flex","justify-center","space-x-12","invisible"),c.append(u,g,a,i,p),c}const ce=[{link:"#/",titulo:"Home",cb:N},{link:"#/cotizacion",titulo:"Nueva Cotizacion",cb:async()=>z()},{link:"#/mod-cot",titulo:"Modificar Cotizacion",cb:async()=>nt()},{link:"#/modifica",titulo:"",cb:async t=>z()},{link:"#/cotizaciones",titulo:"Listado Cotizaciones",cb:t=>M(t)},{link:"#/cotizacionesxcliente",titulo:"",cb:()=>M()},{link:"#/proyectosencotizacion",titulo:"",cb:t=>at(t)},{link:"#/mod-proyecto",titulo:"",cb:t=>ct()},{link:"#/fotos",titulo:"Agregar Fotos",cb:()=>A("fotos")},{link:"#/upfotos",titulo:"",cb:()=>ut()},{link:"#/make_reporte",titulo:"Reporte Final",cb:()=>A("make_reporte")},{link:"#/reporte",titulo:"",cb:()=>X()}];function le(){const t=r("nav");return t.classList.add("hidden","w-auto","fixed","mt-2","left-0","bg-blue-800","space-y-2"),t.id="navLinks",ce.forEach(e=>{e.titulo!==""&&t.append(Ct(e.link,e.titulo))}),t}function de(){const t=r("header");return t.classList.add("bg-blue-800","h-16","px-2","pt-4","fixed","inset-x-0","top-0","z-10","print:hidden"),t.append(kt(),le()),t}const H=document.getElementById("root"),ue=t=>document.createElement(t);function pe(t=""){const e=ue("div");return e.id="alert",e.classList.add("h-16","rounded","border","text-center","text-xl","invisible","fixed","left-1/4","top-1/4","w-1/2","z-10"),e.innerText=t,e}async function B(t){const e=r("section");return e.id="content",e.classList.add("mt-16","w-full","print:mt-0"),e.append(t),e}function fe(){const t=r("div");return t.classList.add("text-center","text-6xl","text-blue-500"),t.innerText="Te Chingas Not found PlaceHolder",t}const pt=[{link:"#/",titulo:"Home",cb:N},{link:"#/cotizacion",titulo:"Nueva Cotizacion",cb:async()=>z()},{link:"#/mod-cot",titulo:"Modificar Cotizacion",cb:async()=>nt()},{link:"#/modifica",titulo:"",cb:async t=>z()},{link:"#/cotizaciones",titulo:"Listado Cotizaciones",cb:t=>M(t)},{link:"#/cotizacionesxcliente",titulo:"",cb:()=>M()},{link:"#/proyectosencotizacion",titulo:"",cb:t=>at(t)},{link:"#/mod-proyecto",titulo:"",cb:t=>ct()},{link:"#/fotos",titulo:"Agregar Fotos",cb:()=>A("fotos")},{link:"#/upfotos",titulo:"",cb:()=>ut()},{link:"#/make_reporte",titulo:"Reporte Final",cb:()=>A("make_reporte")},{link:"#/reporte",titulo:"",cb:()=>X()}];async function ge(t){if(t==="/"||!t)return j.append(await B(pt[0].cb()));const e=t.split("/"),o=e.length>2?`${e[0]}/${e[1]}`:t,n=pt.find(s=>s.link===o);return n?j.append(await B(await n.cb(e[2]))):j.append(await B(fe()))}const me=t=>t.classList.toggle("hidden"),be=t=>Array.from(t.querySelectorAll("path")).forEach(o=>{o.classList.toggle("hidden")});function he(){const t=f("#navLinks"),e=f("#menuBtn");j.addEventListener("click",o=>{(!t.classList.contains("hidden")||o.target.closest("#menuBtn")&&!o.target.closest("a"))&&(me(t),be(e))},!0)}function ft(){return H.innerHTML=null,H.append(de()),H.append(pe()),he(),ge(window.location.hash)}document.addEventListener("DOMContentLoaded",ft);window.addEventListener("hashchange",ft);
