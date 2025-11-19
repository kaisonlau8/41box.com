(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}})();const s=[{id:1,brand:"Volkswagen",model:"Golf R-Line",year:2022,price:"$17,000",image:"https://i.111666.best/image/2g9cbJ1hgB9nVR4O55H0Vi.png",mileage:"12,000 km",transmission:"Automatic",fuel:"Petrol"},{id:2,brand:"Honda",model:"CR-V",year:2021,price:"$19,500",image:"https://i.111666.best/image/6m5fjBJrx0FTjKXTVQXbTe.png",mileage:"25,000 km",transmission:"CVT",fuel:"Petrol"},{id:3,brand:"Toyota",model:"RAV-4",year:2023,price:"$18,300",image:"https://i.111666.best/image/dMYlaxMc5E67xqSgW0WLWS.png",mileage:"5,000 km",transmission:"Automatic",fuel:"Hybrid"},{id:4,brand:"Mazda",model:"CX-5",year:2020,price:"$16,800",image:"https://i.111666.best/image/A5W3RmI4AQD5CC8OS0bm9V.png",mileage:"35,000 km",transmission:"Automatic",fuel:"Petrol"},{id:5,brand:"Volkswagen",model:"Taos",year:2023,price:"$11,000",image:"https://i.111666.best/image/CdBTQzPxLioJkP6SoPeQ80.png",mileage:"28,000 km",transmission:"Automatic",fuel:"Petrol"},{id:6,brand:"Honda",model:"VEZEL",year:2019,price:"$9,800",image:"https://i.111666.best/image/1nFK05FUEQ4YnScqcsDr4x.png",mileage:"40,000 km",transmission:"Manual",fuel:"Petrol"},{id:7,brand:"Mazda",model:"ATENZA",year:2022,price:"$12,100",image:"https://i.111666.best/image/DlPjX5NIrY8vIHSVsjKyYI.png",mileage:"40,000 km",transmission:"Manual",fuel:"Petrol"}];function m(e){return`
    <div class="car-card">
      <img src="${e.image}" alt="${e.brand} ${e.model}" class="car-image" loading="lazy">
      <div class="car-info">
        <div class="car-brand">${e.brand}</div>
        <h3 class="car-model">${e.model}</h3>
        <div class="car-price">${e.price}</div>
        <div class="car-specs">
          <span>${e.year}</span>
          <span>•</span>
          <span>${e.mileage}</span>
          <span>•</span>
          <span>${e.fuel}</span>
        </div>
      </div>
    </div>
  `}const l=document.getElementById("featured-cars");if(l){const e=s.slice(0,3);l.innerHTML=e.map(m).join("")}const u=document.getElementById("inventory-grid"),d=document.querySelectorAll("#filters button");u&&(c(s),d.forEach(e=>{e.addEventListener("click",()=>{d.forEach(a=>a.classList.remove("active")),e.classList.add("active");const r=e.dataset.filter,n=r==="all"?s:s.filter(a=>a.brand===r);c(n)})}));function c(e){u.innerHTML=e.map(m).join("")}
