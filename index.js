import{a as w,S,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const q="51471509-416a43bd25f243e05adcff326",$="https://pixabay.com/api/",T=15;async function y(s,t=1){const r={key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:T,page:t};try{return(await w.get($,{params:r})).data}catch(i){throw new Error(i.message)}}const g=document.querySelector(".gallery"),h=new S(".gallery a",{captionsData:"alt",captionDelay:250});function P(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:l,downloads:d})=>{const f=e.split(",").slice(0,3).join(", ");return`
          <a class="gallery__item" href="${i}">
            <img class="gallery__image" src="${r}" alt="${f}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${o}</p>
              <p class="info-item"><b>Views:</b> ${a}</p>
              <p class="info-item"><b>Comments:</b> ${l}</p>
              <p class="info-item"><b>Downloads:</b> ${d}</p>
            </div>
          </a>
        `}).join("");g.innerHTML=t,h.refresh()}function C(s){const t=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:o,views:a,comments:l,downloads:d})=>{const f=e.split(",").slice(0,3).join(", ");return`
          <a class="gallery__item" href="${i}">
            <img class="gallery__image" src="${r}" alt="${f}" loading="lazy"/>
            <div class="gallery__info">
              <p class="info-item"><b>Likes:</b> ${o}</p>
              <p class="info-item"><b>Views:</b> ${a}</p>
              <p class="info-item"><b>Comments:</b> ${l}</p>
              <p class="info-item"><b>Downloads:</b> ${d}</p>
            </div>
          </a>
        `}).join("");g.insertAdjacentHTML("beforeend",t),h.refresh()}function E(){g.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("is-hidden"),document.querySelector(".load-more").classList.add("is-hidden")}function L(){document.querySelector(".loader").classList.add("is-hidden"),document.querySelector(".load-more").classList.remove("is-hidden")}function R(){document.querySelector(".load-more").classList.remove("is-hidden")}function _(){document.querySelector(".load-more").classList.add("is-hidden")}const u=document.querySelector(".form"),k=u.querySelector('input[name="search-text"]'),B=document.querySelector(".load-more");let m="",c=1,p=0;const v=15;u.addEventListener("submit",async s=>{s.preventDefault();const t=k.value.trim();if(t===""){n.warning({message:"The search field cannot be empty",position:"topRight",backgroundColor:"#f57676ff"});return}m=t,c=1,E(),_(),b();try{const r=await y(m,c);if(p=r.totalHits,r.hits.length===0){n.info({message:"Sorry, no images found. Try again!",position:"topRight",backgroundColor:"#f57676ff"});return}P(r.hits),u.reset(),c*v<p?R():n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#f57676ff"})}catch(r){n.error({message:"The request failed. Please try again later",position:"topRight",backgroundColor:"#f57676ff"}),console.error("API Error:",r)}finally{L()}});B.addEventListener("click",async()=>{c+=1,b();try{const s=await y(m,c);C(s.hits);const{height:t}=document.querySelector(".gallery a").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),c*v>=p&&(_(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#f57676ff"}))}catch(s){n.error({message:"Failed to load more images",position:"topRight",backgroundColor:"#f57676ff"}),console.error("Load more error:",s)}finally{L()}});
//# sourceMappingURL=index.js.map
