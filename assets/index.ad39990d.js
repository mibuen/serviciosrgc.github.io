const xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};xt();const E=document.getElementById("root"),p=t=>document.querySelector(t),c=(t,e={})=>{const o=document.createElement(t);return Object.entries(e).forEach(([n,s])=>{if(n==="class")return o.classList.add(...s);if(n==="dataset"){Object.entries(s).forEach(([r,a])=>{o.dataset[r]=a});return}if(n==="text")return o.innerText=s;if(n==="html")return o.innerHTML=s;o.setAttribute(n,s)}),o},U=`<svg width="10em" height="10em" role="status" class="inline  text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>`,yt=`<svg xmlns="http://www.w3.org/2000/svg" class="menu w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path id='hamburger' class=""  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
<path id="cross" class="hidden"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`,Lt=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-blue-700" viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>`,kt=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-teal-700" viewBox="0 0 20 20" fill="currentColor">
<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
</svg>`,Ct=`<svg width="10em" height="10em" xmlns="http://www.w3.org/2000/svg" class="inline fill-red-700" viewBox="0 0 20 20" fill="currentColor">
  <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
</svg>`,V=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
</svg>`,Tt=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg>`,jt=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
</svg>`,Et=yt;function zt(){const t=c("button");return t.classList.add("block","text-center","text-blue-200","border","rounded-lg","border-blue-200","hover:scale-110"),t.type="button",t.id="menuBtn",t.innerHTML=`${Et}`,t}function St(){const t=c("div");t.classList.add("flex","text-center","justify-between","items-center","text-blue-200","font-semibold","sm:text-lg","text-xs","space-x-2");const e=c("div");e.id="page_title",e.classList.add("grow");const o=c("div");o.id="action";const n=c("div");return n.classList.add("sm:flex","hidden"),n.innerHTML=`${V}<span class="hidden sm:inline">Rgc Ingenieria</span>`,t.append(zt(),e,o,n),t}function Mt(t,e){const o=c("a");return o.classList.add("block","px-3","py-1","font-semibold","text-blue-200","rounded","hover:bg-red-900","w-auto"),o.href=`${t}`,o.textContent=e,o}function G(){const t=c("div");return t.classList.add("text-center","text-6xl","text-orange-700","bg-orange-200"),t.innerText="Home Site Deployed",t}function $(t,e,o,n=""){const s={class:["block","text-gray-700","w-full"],for:t,text:o.toUpperCase()},r={class:["block","w-full","focus:outline-none","pl-1","text-gray-500","border","rounded","border-gray-500","focus:border-blue-500","focus-border-1","focus:ring-1","focus:ring-blue-500"],type:e,name:t,id:t,value:n},a=c("label",s),i=c("input",r);return a.append(i),a}const Ft=(t,e)=>(t.forEach(o=>{o.val===e&&(o.sel="selected")}),t);function It(t,e){return Ft(t,e).map(s=>`<option value="${s.val}" ${s.sel}>${s.title}</option>`).join("").toString()}function q(t,e,o,n){const s=c("label");s.setAttribute("for",t),s.classList.add("block","text-gray-700"),s.innerText=e;const r=c("select");return r.classList.add("block","focus:outline-none","pl-1","text-gray-500","border","rounded","border-gray-500","focus:border-blue-500","focus:border-1","focus:ring-1","focus:ring-blue-500"),r.id=t,r.name=t,r.value=n,r.classList.add("text-xl"),r.innerHTML=It(o,n),s.append(r),s}function Dt(t){const o=[{name:"save",action:"button",bGColor:"bg-teal-500",borderColor:"border-teal-800",activeColor:"active:bg-teal-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />',title:"Guardar"},{name:"search",action:"submit",bGColor:"bg-teal-500",borderColor:"border-teal-800",activeColor:"active:bg-teal-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />',title:"Search"},{name:"cancel",action:"button",bGColor:"bg-red-500",borderColor:"border-red-800",activeColor:"active:bg-red-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />',title:"Cancelar"},{name:"upload",bGColor:"bg-sky-500",borderColor:"border-sky-800",activeColor:"active:bg-sky-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />',title:"Subir"},{name:"download",bGColor:"bg-sky-500",borderColor:"border-sky-800",activeColor:"active:bg-sky-800",path:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />',title:"Bajar"}].find(u=>u.name===t);if(!o)return console.log(`no hay boton ${t}`);const n=`<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mx-auto sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">${o.path}</svg>`,{bGColor:s,title:r,borderColor:a,activeColor:i,action:l}=o;return{bGColor:s,title:r,borderColor:a,activeColor:i,icono:n,action:l}}function C(t){const e=Dt(t.type);if(!e)return;const{bGColor:o,title:n,borderColor:s,activeColor:r,icono:a,action:i}=e,l=c("button");return l.setAttribute("type",i),l.classList.add("h-12","w-12","px-2","sm:w-20","sm:h-8",o,"flex","items-center","rounded-full","border-1",s,"text-white","sm:rounded","hover:scale-110","focus:outline-none","truncate",r),l.innerHTML=`${a}<span class="mx-auto hidden sm:block truncate ">${n}</span>`,l.addEventListener("click",t.cb),l}const Q="https://projectquotteapi.herokuapp.com",J="cotizaciones",Y="cotizacion",Z="proyectos",M="proyectos/",K="proyecto/",At="findproyectos",Pt="signed",Bt="addfoto",Ht="crear_reporte",Ot="https://bucket-fotos-proyectos.s3.amazonaws.com/";function Rt(){const e=c("div",{id:"loader",class:["text-center","w-1/6","mt-16","fixed","mx-auto","inset-x-0","z-10","hidden"]});return e.innerHTML=`${U}`,e}function W(){p("#loader").classList.remove("hidden")}function X(){p("#loader").classList.add("hidden")}async function L(t,e){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)};W();const n=await fetch(`${Q}/${t}`,o);return n&&X(),n.json()}async function T(t){W();const o=await(await fetch(`${Q}/${t}`)).json();return o&&X(),o.length===1?o[0]:o}async function tt(t){const e=new FormData(t);if(!e)return t;const o=Object.fromEntries(e.entries());return console.log(o),o}const Nt=[{alert:"apendeje",bg:"bg-red-600",txt:"text-red-200"},{alert:"bien",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"exitoPry",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"upLoadGood",bg:"bg-teal-600",txt:"text-teal-200"},{alert:"wrongUpload",bg:"bg-red-600",txt:"text-red-200"}];function x(t,e,o="/"){const{bg:n,txt:s}=_t(t),r=p("#alert");return r.classList.add(n,s),r.classList.toggle("hidden"),r.innerText=e,setTimeout(()=>{r.classList.toggle("hidden"),r.classList.remove(n,s),location.hash=o},1e3)}function _t(t){return Nt.find(o=>o.alert===t)}async function Ut(t,e){const o=await tt(t);console.log("savedata",o);try{const n=e==="Nueva"?await L(J,o):await L(`${Y}/${e}`,o);if(e==="Nueva"&&o.status==="ganada"&&o.sitios>0){console.log("INSIDEIF");const r=await L(`${Z}/${n.cotizacionId}`,{});console.log("SAVETODB",r),x("bien",`se capturo${n.message}-${r.message}`);return}const s=await L(`${Z}/${n.cotizacionId}`,{});e==="Nueva"?x("bien",`Se capturo ${n.message}`):x("bien",`${n.message}`);return}catch(n){x("apendeje",n.message),console.log("ERRORSAVE",n)}}function Vt(t,e){const o=c("div");o.classList.add("flex","justify-between","mx-10","py-2");const n=C({type:"save",cb:async r=>(r.preventDefault(),Ut(t,e))}),s=C({type:"cancel",cb:()=>t.reset()});return o.append(s,n),o}function Gt(t){const e=c("h4");return e.classList.add("text-center","text-xl","text-gray-700"),e.setAttribute("value",""),e.innerText=`Cotizacion ${t}`,e}function y(t){var e=new Date(t),o=""+(e.getMonth()+1),n=""+e.getDate(),s=e.getFullYear();return o.length<2&&(o="0"+o),n.length<2&&(n="0"+n),[s,o,n].join("-")}function et(t,e,o,n){switch(t){case"ganada":o.classList.remove("hidden"),e.classList.add("hidden"),n.classList.remove("hidden");break;case"terminada":o.classList.remove("hidden"),e.classList.add("hidden"),n.remove("hidden");break;case"cancelada":o.classList.remove("hidden"),e.classList.add("hidden"),n.classList.add("hidden");break;case"pendiente":o.classList.add("hidden"),e.classList.remove("hidden"),n.classList.add("hidden")}}function k(...t){const o=c("fieldset",{class:["sm:flex","space-x-2","sm:justify-center","sm:items-center","w-auto","mx-2"]});return o.append(...t),o}const qt=[{val:"pendiente",title:"Pendiente",sel:""},{val:"ganada",title:"Ganada",sel:""},{val:"cancelada",title:"Cancelada",sel:""},{val:"terminada",title:"Terminada",sel:""}];async function F(){const t={cotizacionId:"Nueva",cliente:"",contacto:"",trabajo:"",sitios:"",cotizador:"",monto:"",status:"pendiente",emision:"",resuelta:"",pedido:""},e=location.hash==="#/modifica"?JSON.parse(localStorage.getItem("cotId")):t;return Qt(e)}async function Qt(t){const e=c("form");e.classList.add("bg-blue-100","rounded-lg","space-y-2","sm:w-2/3","p-2","rounded","mx-auto"),e.setAttribute("autocomplete","off");const o=Gt(t.cotizacionId);o.setAttribute("value",t.cotizacionId);const n=$("contacto","text","Contacto",t.contacto),s=$("cliente","text","Cliente",t.cliente),r=k(s,n),a=$("trabajo","text","Descripcion Trabajo",t.trabajo),i=$("sitios","number","Sitios",t.sitios),l=$("cotizador","text","Cotizador",t.cotizador),u=$("monto","number","Monto $",t.monto),d=k(i,u,l),f=$("pedido","text","Pedido",t.pedido),g=$("emision","date","emision",y(t.emision)),b=$("resuelta","date","Resolucion",y(t.resuelta)),m=q("status","Status",qt,t.status),w=k(m,g,b,f);e.addEventListener("change",O=>{et(O.target.value,g,b,f)}),et(t.status,g,b,f);const H=Vt(e,t.cotizacionId);return e.append(o,r,a,d,w,H),e}function Jt(t){const e=t.target.src,o=t.target.dataset.tipo,n={x:e,tipo:o};return t.dataTransfer.setData("text",JSON.stringify(n)),e}function Yt(){}function Zt(t){t.preventDefault()}function Kt(t){t.preventDefault(),this.classList.add("opacity-50")}function Wt(t){this.classList.remove("opacity-50")}function Xt(t){t.preventDefault();const e=JSON.parse(t.dataTransfer.getData("text")),o=t.target.closest("img");if(!o)return this.classList.remove("opacity-50");o.src=e.x,o.dataset.tipo=e.tipo,this.classList.remove("opacity-50")}function ot(t,e){const o=c("section");o.classList.add("w-1/6","print:hidden");const n=c("section");n.classList.add("overflow-auto","h-screen","space-y-2");const s=c("p");s.classList.add("text-center","mb-2"),s.innerText=e;const r=t.map(a=>{const i=c("figure");i.dragable=!0,i.classList.add("cursor-pointer","hover:scale-125");const l=c("img");return l.classList.add("border","border-4","border-black","rounded-xl"),l.src=`${Ot}${a}`,l.dataset.tipo=e.toLowerCase(),l.classList.add("hover:scale-125"),i.append(l),i});return n.addEventListener("mousedown",a=>{const i=a.target.closest("img");!i||(i.addEventListener("dragstart",Jt),i.addEventListener("dragend",Yt))},!0),n.append(...r),o.append(s,n),o}function te(){const t=c("section");t.classList.add("flex","flex-wrap","space-y-2");const e=c("div");e.classList.add("flex","w-full","space-x-2");const o=c("div");o.classList.add("flex","w-full","space-x-2");const n=I("Inicio 1","grupo1"),s=I("Final 1","grupo1"),r=I("Inicio 2","grupo2"),a=I("Final 2","grupo2");return e.append(n,s),o.append(r,a),t.append(e,o),t}function I(t,e){document.body.style.webkitTouchCallout="none";const o=c("figure");o.dataset.grp=e;const n=c("figcaption"),s=c("p");s.innerText=t,n.classList.add("flex","justify-between","items-center","mt-2","px-2","w-full");const r=c("img",{src:"foto.svg",class:["object-scale-down","mx-auto","h-64","mb-2"],dataset:{grp:`${e}-${t.toLowerCase().replace(/\s/g,"-")}`}}),a=C({type:"cancel",cb:()=>r.src="foto.svg"});return a.classList.add("mb-2","print:hidden"),o.classList.add("w-1/2","flex","flex-col","border-black","border-2","rounded-lg","shrink"),n.append(s,a),o.append(n,r),o.addEventListener("dragover",Zt),o.addEventListener("dragenter",Kt),o.addEventListener("dragleave",Wt),o.addEventListener("drop",Xt),o}function z(t=""){const e=p("#page_title");if(typeof t=="string")return e.innerHTML=t;if(typeof t=="object")return e.append(t)}async function nt(){const[t,e,o,n]=location.hash.split("/");ee(`${o}-${n}`);const s=await T(`${M}${o}/${n}`),{fotosEmpezar:r,fotosTerminar:a,sitio:i}=s;if(r.length<=2||a.length<=2)return x("apendeje","No Hay Fotos",`/upfotos/${o}/${n}/${i}`);const l=ot(r,"Inicio"),u=ot(a,"Final"),d=c("div"),f=c("section");f.id="creareporte",f.classList.add("mt-1","flex","px-2","space-x-2","fixed","items-start","print:justify-around","print:absolute");const g=p("#preview"),b=te();return g.addEventListener("click",w=>{window.print()}),p("#save").addEventListener("click",()=>{oe(b,o,n)}),f.append(l,b,u),d.append(f),d}function ee(t){const e=`<div class="flex justify-evenly"><p>Proyecto: ${t}</p><button type="button" id="preview" class="bg-orange-500  w-20 text-xs rounded">Preview</button></p><button type="button" id="save" class="bg-blue-500  w-20 text-xs rounded">Save</button></div>`;return z(e)}async function oe(t,e,o){const n={grupo1:{},grupo2:{}},s=t.querySelectorAll("img");console.log([...s]),[...s].forEach(l=>{const[u,d,f]=l.dataset.grp.split("-");n[u][d]=l.src});const a={cotizacionId:e,proyectoId:o,reporte:n};console.log(a);const i=await L(Ht,a);return console.log(i),location.hash=`/ver_reporte/${e}/${o}`}async function st(t){const e=await T(`${Y}/${t}`);if(e.error){x("apendeje",`Apendeje: ${e.message}`);return}return localStorage.setItem("cotId",JSON.stringify(e)),location.hash="/modifica"}const ne=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>`;function rt(t,e="..."){const o=c("div");o.classList.add("flex","border","rounded-lg","border-gray-500","mb-2");const n=c("input");n.classList.add("w-full","focus:outline-none","pl-1","text-gray-500","rounded-l-lg","border-gray-500","focus:border-blue-500","focus-border-1","focus:ring-1","focus:ring-blue-500"),n.id="search",n.autofocus=!0,n.required=!0,n.placeholder=e,n.autocomplete="off";const s=c("button");return s.innerHTML=`${ne}`,s.classList.add("h-8","w-8","bg-sky-400","rounded-r-lg","flex","items-center","justify-center","text-white"),s.addEventListener("click",t),n.addEventListener("change",t),o.append(n,s),o}function at(){const t=c("section");t.classList.add("sm:w-1/3","mx-auto");const e=()=>st(p("#search").value);return t.append(rt(e)),t}function ct(){const e=c("section",{class:["mx-2","grid","gap-2","grid-cols-1","sm:grid-cols-1","md:grid-cols-2","lg:grid-cols-3"]});return e.addEventListener("click",async o=>{if(o.target.dataset.cot){const n=o.target.dataset.cot;return await st(n)}if(o.target.dataset.cliente)return location.hash=`/cotizaciones/${o.target.dataset.cliente}`;if(o.target.dataset.sitcot){const n=o.target.dataset.sitcot;return location.hash=`/proyectosencotizacion/${n}`}if(o.target.dataset.pry)return location.hash=`/mod-proyecto/${o.target.dataset.pry}`;if(o.target.dataset.reporte){const n=o.target.dataset.reporte;location.hash=`/ver_reporte/${n}`}if(o.target.dataset.crear){const n=o.target.dataset.crear;console.log("ENDPOINT",n),location.hash=`/reporte/${n}`}if(o.target.dataset.subir){const n=o.target.dataset.subir;console.log("ENDPOINT",n),location.hash=`/upfotos/${n}`}}),e}function S(t,e){const n=c("button",{class:["text-blue-900","hover:text-white","focus:text-white","bg-blue-400","hover:bg-blue-500","focus:ring-4","focus:ring-blue-300","font-medium","rounded-full","text-xs","px-2","text-center","mx-2","mb-2","h-6","w-1/3","border-b-2","border-r-2","border-blue-900","truncate"],dataset:e});return n.innerText=t,n}function v(...t){const o=c("div",{class:["pt-2","flex","justify-between"]});return o.append(...t),o}function h(t,e){const o={class:["mx-2","mb-2","space-y-1","bg-blue-800","p-2","rounded","w-full","text-white","text-xs"]},n={text:t},s={text:e},r=c("div",o),a=c("p",n),i=c("p",s);return r.append(a,i),r}function D(){return c("section",{class:["w-full","mx-auto","space-y-2","bg-slate-200","rounded-lg","border-2","border-blue-500"]})}function se(t){const{cotizacionId:e,cliente:o,contacto:n,trabajo:s,sitios:r,cotizador:a,monto:i,status:l,emision:u,resuelta:d,pedido:f}=t,g=D(),b=v(S(`Cot: ${e}`,{cot:e}),S(`${o}`,{cliente:o}),S(`Sitios ${r}`,{sitcot:e})),m=v(h("Trabajo:",`${s}`));m.classList.add("w-full");const w=v(h("Status:",`${l}`),h("Emision",`${y(u)}`),h("Resolucion:",`${y(d)}`));return g.append(b,m,w),g}async function A(t){const e=t||"";z(e!==""?`Cotizaciones de ${e}`:"Todas las Cotizaciones ");const o=await T(`${J}/${e}`),n=o.length>0?o:[o],s=ct(),r=n.map(a=>se(a));return s.append(...r),s}function re(t){const e=D(),o=t.reporte.length,n=`${t.cotizacionId}/${t.proyectoId}/${t.sitio}`,s=o>0?"reporte":t.fotosEmpezar.length>=2&&t.fotosTerminar>=2?"crear":"subir",r=v(S(`Pry: ${t.cotizacionId}-${t.proyectoId}`,{pry:`${t.cotizacionId}/${t.proyectoId}`}),S(`Reporte(${o})`,{[s]:n})),a=v(h("Sitio",t.sitio),h("Supervisor",t.supervisor)),i=v(h("Direccion",t.direccion)),l=v(h("Status",t.status),h("Inicio",y(t.inicio))),u=v(h("Terminado",y(t.terminado)),h("Factura",t.factura));return e.append(r,a,i,l,u),e}async function it(t){const e=await T(`${M}${t}`),o=e.length>0?e:[e],n=ct(),s=o.map(r=>re(r));return z(`Trabajo: ${o[0].trabajo} <br class="sm:hidden"><span class="ml-4">Cliente: ${o[0].cliente}</span>`),n.append(...s),n}function lt(t){return c("h4",{class:["mx-2","py-1","text-center","rounded","bg-blue-800","text-white","w-1/2"],text:t})}function dt(t,e,o){t!=="terminado"?(e.classList.add("hidden"),o.classList.add("hidden")):(e.classList.remove("hidden"),o.classList.remove("hidden"))}async function ae(t,e,o){console.log("SAVEPRY",t,e);const n=await tt(o);console.log("PRYDATA",n),console.log("ENDPOINT",`${K}${t}/${e}`);try{const s=await L(`${K}${t}/${e}`,n);x("bien",`Proyecto ${t}-${e} ${s.message}`,`/proyectosencotizacion/${t}`);return}catch(s){console.log(s),x("apendeje",`Apendeje : ${s.message}`)}}const ce=[{val:"pendiente",title:"Pendiente"},{val:"proceso",title:"Proceso"},{val:"terminado",title:"Terminado"}];async function ut(){const[t,e,o,n]=location.hash.split("/");console.log("COT",o,"PRY",n);const s=await T(`${M}${o}/${n}`);console.log(s);const r=v(lt(`Proyecto: ${o}-${n}`),lt(`Cliente: ${s.cliente}`)),a=v(h("Trabajo",s.trabajo)),i=k($("sitio","text","Sitio",s.sitio),$("direccion","text","direccion",s.direccion)),l=k($("supervisor","text","supervisor",s.supervisor),q("status","Status",ce,s.status),$("inicio","date","Inicio",y(s.inicio))),u=$("terminado","date","Terminacion",y(s.terminado)),d=$("factura","text","factura",s.factura),f=k(u,d),g=v(C({type:"cancel",cb:()=>console.log("BTN")}),C({type:"save",cb:async w=>(w.preventDefault(),ae(o,n,m))})),b=D(),m=c("form");return b.classList.add("sm:w-2/3"),m.classList.add("space-y-2","p-2","mx-auto"),m.setAttribute("autocomplete","off"),m.append(i,l,f,g),m.addEventListener("change",w=>{dt(m.status.value,u,d)}),b.append(r,a,m),dt(m.status.value,u,d),b}function ie(t){const o=c("section",{class:["space-y-2"],id:"top"}),n=t.map((s,r)=>{const{cotizacionId:a,proyectoId:i,sitio:l,direccion:u}=s,d=D();d.classList.add("cursor-pointer"),d.dataset.cardnum=r,d.dataset.pry=`${a}/${i}/${l}`;const f=v(h("Proyecto",`${a}-${i}`),h("Sitio",`${l}`)),g=v(h("Direccion",`${u}`));return d.append(f,g),d});return o.append(...n),o.addEventListener("click",s=>{const r=parseInt(s.target.closest("section").dataset.cardnum,10),a=s.target.closest("section").dataset.pry;a&&location.hash.includes("fotos")&&(location.hash=`/upfotos/${a}`),a&&location.hash.includes("make_report")&&(localStorage.setItem("pry",JSON.stringify(t[r])),location.hash=`/reporte/${a}`)}),o}function P(t){const e=c("section");e.classList.add("sm:w-1/2","mx-auto");const o=async()=>{const n=p("#search").value;if(p("#top")&&p("#top").remove(),!n)return;const s=await T(`${At}?val=${n}`),r=s.length>1?s:[s],a=ie(r);e.append(a)};return e.append(rt(o)),e}function pt(t="foto",e="final",o=!1){const n=c("div");n.classList.add("flex","items-center","space-x-8","bg-blue-700","rounded-full","text-sm","h-8","pr-2");const s=c("label"),r=c("input");return r.type="radio",r.name=t,r.id=e,r.value=e,r.classList.add("w-4","h-4","accent-red-600"),r.checked=o,s.setAttribute("for",e),s.classList.add("ml-4"),s.innerText=e.toUpperCase(),n.append(s,r),n}function le(t){const e=p("figure"),o=p("#imgdiv"),n=p("#btnbar");o.classList.add("hidden"),n.classList.remove("invisible"),e.innerHTML=`<img src="${t.target.result}">`}function de(){const t=c("div");t.id="imgdiv",t.classList.add("flex","justify-center");const e=c("input");e.type="file",e.id="foto",e.name="foto",e.classList.add("hidden");const o=c("label");return o.setAttribute("for","foto"),o.innerHTML=Lt,o.classList.add("block","flex","items-center","justify-center","w-24","h-24","rounded-full","border","border-black","cursor-pointer"),e.addEventListener("change",async n=>{const s=await n.target.files[0];if(!s)return;const r=new FileReader;r.readAsDataURL(s),r.addEventListener("load",le,!1)}),o.append(e),t.append(o),t}async function ue(t,e){console.log("FILE",e.type);const o=new FormData;return Object.keys(t).forEach(n=>o.append(n,t[n])),o.append("Content-type",e.type),o.append("file",e),o}async function pe(t,e){const o={method:"POST",body:e};try{return await fetch(t,o)}catch(n){return await n.json()}}function fe(t){const e=[...t.getElementsByTagName("input")],[o]=e.filter(n=>n.checked);return o?o.value:Error("te Apendejaste falta foto tipo")}async function ge(t,e,o,n){console.log("HANDLER",n);const s={cotizacionId:t,proyectoId:e,fileName:n.name};try{const r=fe(o);if(!["empezar","terminar"].includes(r))throw Error(r.message);const a=await L(Pt,s);if(console.log(a),a.statusCode)throw Error(a.message);const{url:i,fields:l}=a,u=await ue(l,n),d=await pe(i,u);if(console.log(d),!d.ok)throw Error("error al subir foto");const f={cotizacionId:t,proyectoId:e,tipo:r,laFoto:l.key};return console.log("MONGO",f),await L(Bt,f)}catch(r){return console.log(r),r}}function ft(t,e){const o=p("figure"),n=p("#imgdiv"),s=p("#btnbar"),r=p("#upfotos");s.classList.add("invisible"),t==="positive"&&(o.innerHTML=`${kt}<p class="text-teal-700">${e}!!!</p>`),t==="negative"&&(o.innerHTML=`${Ct}<p class="text-red-700">!!!${e}</p>`),setTimeout(()=>{r.reset(),o.innerHTML=null,n.classList.remove("hidden")},1500)}async function me(t,e){const{cotizacionId:o,proyectoId:n,$radioBar:s}=e,r=new FileReader;r.readAsDataURL(t);const a=c("canvas"),i=a.getContext("2d"),l=c("img");l.id="small",l.classList.add("hidden"),r.addEventListener("load",u=>{l.src=u.target.result}),l.addEventListener("load",async u=>{const d=400,f=p("#imgcontainer"),{width:g,height:b}=u.target,m=b/g,w=g>d?d:g,H=w*m;a.width=w,a.height=H,i.drawImage(u.target,0,0,a.width,a.height);const O=i.canvas.toDataURL("image/webp"),vt=await(await fetch(O)).blob(),wt=new File([vt],"CHIQUITO.webp",{type:"image/webp"});f.innerHTML=U;const{message:R}=await ge(o,n,s,wt);R.includes("agregado")?ft("positive",R):ft("negative",R)})}function gt(){z("Captura de Fotos");const[t,e,o,n,s]=location.hash.split("/"),r=de(),a=c("figure");a.id="imgcontainer",a.classList.add("text-center","mx-auto"),a.innerHTML=null;const i=c("form");i.id="upfotos",i.autocomplete="off",i.classList.add("mx-2","mt-2","sm:w-2/3","sm:mx-auto","space-y-8","bg-blue-100","border-blue-500","text-white","rounded-lg");const l=h("Proyecto : ",`${o}-${n}`),u=h("Sitio :",decodeURI(s)),d=v(l,u),f=k(pt("foto","empezar"),pt("foto","terminar"));f.classList.add("flex","justify-center","space-x-2");const g=k(C({type:"cancel",cb:()=>{i.reset(),a.innerHTML=null,r.classList.remove("hidden"),g.classList.add("invisible")}}),C({type:"save",cb:async b=>{const m=p("#foto").files[0];await me(m,{cotizacionId:o,proyectoId:n,$radioBar:f})}}));return g.id="btnbar",g.classList.add("flex","justify-center","space-x-12","invisible"),i.append(d,f,r,a,g),i}const j={currentVal:1};function he(t,e){j.Max=t;const o={class:["flex","space-x-1","border","border-black","rounded-lg","mr-6","p-2"]},n={html:jt,id:"minus"},s={html:Tt,id:"plus"},r={class:["w-6","h-6","mb-1","rounded","text-center","text-blue-800"],id:"contador",type:"text",value:1},a=c("div",o),i=c("button",s),l=c("input",r),u=c("button",n);return i.addEventListener("click",d=>mt(d,e)),u.addEventListener("click",d=>mt(d,e)),a.append(u,l,i),a}function mt(t,e){let o=0;t.target.closest("#plus")&&(o=1),t.target.closest("#minus")&&(o=-1);const n=p("#reporte"),s=p("#fecha"),r=p("#contador"),a=be(o);n.innerText=`Reporte # ${a}`,r.value=a,s.innerText=` Fecha: ${y(e[a-1].header.createdDate)}`;for(const i in e[a-1]){if(i==="header")break;for(const l in e[a-1][i]){const u=p(`#${i}-${l}`);u.src=e[a-1][i][l]}}}function be(t){let e=j.currentVal+t;return e>j.Max&&(e=1),e<1&&(e=j.Max),j.currentVal=e,j.currentVal}function $e([t,...e]){return[t.toUpperCase(),...e].join("")}function ve(t=1,e){const o=t-1,n=c("section",{class:["space-y-2","pb-2","border-b-2","border-black"]}),s=c("p",{html:`${V} RgcIngenieria`,class:["flex","text-sm","ml-2"]}),r=c("h4",{text:"Reporte Fotografico",class:["text-lg","text-center"]}),a=N({proyecto:`${e.cotizacionId}-${e.proyectoId}`},{reporte:t},{sitio:e.sitio},{trabajo:e.trabajo}),i=N({cliente:e.cliente},{pedido:e.pedido},{contacto:e.contacto}),l=N({supervisor:e.supervisor},{factura:e.factura}),u=c("p",{id:"fecha",text:`Fecha: ${y(e.reporte[o].header.createdDate)}`,class:["text-sm","mr-2"]}),d=c("div",{class:["flex","justify-between"]});return d.append(s,u),n.append(d,r,a,i,l),n}function N(...t){const e=c("div",{class:["flex","justify-evenly"]}),o=t.map(n=>{const[s]=Object.entries(n);return c("p",{id:`${s[0]}`,class:["text-sm","truncate"],text:`${$e(s[0])}: ${s[1]}`})});return e.append(...o),e}async function ht(){const[t,e,o,n,s,r]=location.hash.split("/"),a=r?parseInt(r,10)-1:0,i=await T(`${M}${o}/${n}`),{reporte:l}=i;if(i.fotosEmpezar<2||i.fotosTerminar<2)return x("apendeje","Fotos Incompletas",`/upfotos/${o}/${n}/${s}`);if(l.length<1)return x("apendeje","No Hay reportes",`/reporte/${o}/${n}`);const u=p("#action"),d=c("section",{id:"reporte-total",class:["space-y-2","mx-2"]});return u.append(he(l.length,l)),d.append(ve(1,i),...we(l[a])),d}function we(t){const e=[];for(const o in t){if(o==="header")break;const n=c("section",{class:["flex","justify-between","space-x-2"],id:o}),s=[];for(const r in t[o]){const a=c("figure",{class:["w-1/2","border-black","border-2","rounded-lg","shrink"]}),i=c("img",{src:`${t[o][r]}`,class:["object-scale-down","mx-auto","h-64","mb-2"],id:`${o}-${r}`}),l=c("figcaption",{text:`Foto ${r.toUpperCase()} ${e.length+1}`,class:["ml-2"]});a.append(l,i),s.push(a)}n.append(...s),e.push(n)}return e}const xe=[{link:"#/",titulo:"Home",cb:G},{link:"#/cotizacion",titulo:"Nueva Cotizacion",cb:async()=>F()},{link:"#/mod-cot",titulo:"Modificar Cotizacion",cb:async()=>at()},{link:"#/modifica",titulo:"",cb:async t=>F()},{link:"#/cotizaciones",titulo:"Listado Cotizaciones",cb:(t="")=>A(t)},{link:"#/cotizacionesxcliente",titulo:"",cb:()=>A()},{link:"#/proyectosencotizacion",titulo:"",cb:t=>it(t)},{link:"#/mod-proyecto",titulo:"",cb:t=>ut()},{link:"#/fotos",titulo:"Agregar Fotos",cb:()=>P()},{link:"#/upfotos",titulo:"",cb:()=>gt()},{link:"#/make_reporte",titulo:"Reporte Final",cb:()=>P()},{link:"#/reporte",titulo:"",cb:()=>nt()},{link:"#/ver_reporte",titulo:"",cb:async()=>await ht()}];function ye(){const t=c("nav");return t.classList.add("hidden","w-auto","fixed","mt-2","left-0","bg-blue-800","space-y-2"),t.id="navLinks",xe.forEach(e=>{e.titulo!==""&&t.append(Mt(e.link,e.titulo))}),t}function Le(){const t=c("header");return t.classList.add("bg-blue-800","h-16","px-2","pt-4","fixed","inset-x-0","top-0","z-10","print:hidden"),t.append(St(),ye()),t}const _=document.getElementById("root"),ke=(t,e={})=>{const o=document.createElement(t);return Object.entries(e).forEach(([n,s])=>{if(n==="class")return o.classList.add(...s);if(n==="dataset"){Object.entries(s).forEach(([r,a])=>{o.dataset[r]=a});return}if(n==="text")return o.innerText=s;if(n==="html")return o.innerHTML=s;o.setAttribute(n,s)}),o};function Ce(t=""){const e=ke("div");return e.id="alert",e.classList.add("h-16","rounded","border","text-center","text-xl","hidden","fixed","left-1/4","top-1/4","w-1/2","z-10"),e.innerText=t,e}async function B(t){const e=c("section");return e.id="content",e.classList.add("mt-16","w-full","print:mt-0"),typeof t=="object"&&e.append(t),e}function Te(){const t=c("div");return t.classList.add("text-center","text-6xl","text-blue-500"),t.innerText="Te Chingas Not found PlaceHolder",t}const bt=[{link:"#/",titulo:"Home",cb:G},{link:"#/cotizacion",titulo:"Nueva Cotizacion",cb:async()=>F()},{link:"#/mod-cot",titulo:"Modificar Cotizacion",cb:async()=>at()},{link:"#/modifica",titulo:"",cb:async t=>F()},{link:"#/cotizaciones",titulo:"Listado Cotizaciones",cb:(t="")=>A(t)},{link:"#/cotizacionesxcliente",titulo:"",cb:()=>A()},{link:"#/proyectosencotizacion",titulo:"",cb:t=>it(t)},{link:"#/mod-proyecto",titulo:"",cb:t=>ut()},{link:"#/fotos",titulo:"Agregar Fotos",cb:()=>P()},{link:"#/upfotos",titulo:"",cb:()=>gt()},{link:"#/make_reporte",titulo:"Reporte Final",cb:()=>P()},{link:"#/reporte",titulo:"",cb:()=>nt()},{link:"#/ver_reporte",titulo:"",cb:async()=>await ht()}];async function je(t){if(t==="/"||!t)return E.append(await B(bt[0].cb()));const e=t.split("/"),o=e.length>2?`${e[0]}/${e[1]}`:t,n=bt.find(r=>r.link===o);if(e[2])return E.append(await B(await n.cb(e[2])));if(!n)return E.append(await B(Te()));const s=await B(await n.cb());return E.append(s)}const Ee=t=>t.classList.toggle("hidden"),ze=t=>Array.from(t.querySelectorAll("path")).forEach(o=>{o.classList.toggle("hidden")});function Se(){const t=p("#navLinks"),e=p("#menuBtn");E.addEventListener("click",o=>{(!t.classList.contains("hidden")||o.target.closest("#menuBtn")&&!o.target.closest("a"))&&(Ee(t),ze(e))},!0)}function $t(){return _.innerHTML=null,_.append(Le(),Rt()),_.append(Ce()),Se(),je(window.location.hash)}document.addEventListener("DOMContentLoaded",$t);window.addEventListener("hashchange",$t);
