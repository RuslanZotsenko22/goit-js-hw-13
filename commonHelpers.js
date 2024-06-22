import{A as u,i as p,s as g}from"./assets/vendor-3c004ab1.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(a){return a.map(({largeImageURL:s,webformatURL:r,tags:i,likes:e,views:t,comments:o,downloads:m})=>`
    <li class="gallery-card">
      <a href="${s}" class="gallery-card-link">
        <img
          class="gallery-card-img"
          src="${r}"
          alt="${i}"
          width="360"
        />
      </a>
      <ul class="image-desc-list">
        <li class="image-desc-item">
          <p class="image-desc-title">Likes</p>
          <p class="image-desc-data">${e}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Views</p>
          <p class="image-desc-data">${t}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Comments</p>
          <p class="image-desc-data">${o}</p>
        </li>
        <li class="image-desc-item">
          <p class="image-desc-title">Downloads</p>
          <p class="image-desc-data">${m}</p>
        </li>
      </ul>
    </li>
  `).join("")}const h=u.create({baseURL:"https://pixabay.com/api/",params:{key:"44449535-a1df9548b4e4ca826019364d7",q:"",image_type:"photo",orientation:"horizontal",safesearсh:!0}});async function y(a){return(await h.get("",{params:{q:a}})).data}const l=document.querySelector(".search-form"),c=document.querySelector(".gallery-list"),d=document.querySelector(".loader");l.addEventListener("submit",async a=>{a.preventDefault();const s=a.target.elements.search.value;if(!s)n("Oops","You forgot to enter a search query!"),c.innerHTML="";else{b();try{const r=await y(s);r.hits.length===0&&(c.innerHTML="",n("Sorry","there are no images matching your search query. Please try again!"));const i=f(r.hits);c.innerHTML=i,L.refresh()}catch{}q(),l.reset()}});function n(a,s){p.error({title:a,message:s,backgroundColor:"#EF4040",theme:"dark",position:"topRight"})}const L=new g(".gallery-list a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(){d.classList.remove("is-hidden")}function q(){d.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
