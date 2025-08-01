import{a as S,S as q,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const $="51471509-416a43bd25f243e05adcff326",T="https://pixabay.com/api/",P=15;async function b(s,t=1){const r={key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:t};try{return(await S.get(T,{params:r})).data}catch(i){throw new Error(i.message)}}const h=document.querySelector(".gallery"),L=new q(".gallery a",{captionsData:"alt",captionDelay:250});function C(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:d,downloads:f})=>{const u=e.split(",").slice(0,3).join(", ");return`
          <a class="gallery__item" href="${i}">
            <img class="gallery__image" src="${r}" alt="${u}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${o}</p>
              <p class="info-item"><b>Views:</b> ${a}</p>
              <p class="info-item"><b>Comments:</b> ${d}</p>
              <p class="info-item"><b>Downloads:</b> ${f}</p>
            </div>
          </a>
        `}).join("");h.innerHTML=t,L.refresh()}function E(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:d,downloads:f})=>{const u=e.split(",").slice(0,3).join(", ");return`
          <a class="gallery__item" href="${i}">
            <img class="gallery__image" src="${r}" alt="${u}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${o}</p>
              <p class="info-item"><b>Views:</b> ${a}</p>
              <p class="info-item"><b>Comments:</b> ${d}</p>
              <p class="info-item"><b>Downloads:</b> ${f}</p>
            </div>
          </a>
        `}).join("");h.insertAdjacentHTML("beforeend",t),L.refresh()}function R(){h.innerHTML=""}function _(){document.querySelector(".loader").classList.remove("is-hidden"),document.querySelector(".load-more").classList.add("is-hidden")}function w(){document.querySelector(".loader").classList.add("is-hidden")}function v(){document.querySelector(".load-more").classList.remove("is-hidden")}function m(){document.querySelector(".load-more").classList.add("is-hidden")}const p=document.querySelector(".form"),k=p.querySelector('input[name="search-text"]'),B=document.querySelector(".load-more");let g="",n=1,l=0;const y=15;p.addEventListener("submit",async s=>{s.preventDefault();const t=k.value.trim();if(t===""){c.warning({message:"The search field cannot be empty",position:"topRight",backgroundColor:"#f57676ff"});return}g=t,n=1,R(),m(),_();try{const r=await b(g,n);if(l=r.totalHits,r.hits.length===0){c.info({message:"Sorry, no images found. Try again!",position:"topRight",backgroundColor:"#f57676ff"});return}C(r.hits),p.reset(),n*y<l?v():c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#f57676ff"})}catch(r){c.error({message:"The request failed. Please try again later",position:"topRight",backgroundColor:"#f57676ff"}),console.error("API Error:",r)}finally{w()}});B.addEventListener("click",async()=>{n+=1,_();try{const s=await b(g,n);E(s.hits);const{height:t}=document.querySelector(".gallery a").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),n*y>=l&&(m(),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#f57676ff"}))}catch(s){c.error({message:"Failed to load more images",position:"topRight",backgroundColor:"#f57676ff"}),console.error("Load more error:",s)}finally{w()}n*y<l?v():m()});
//# sourceMappingURL=index.js.map
