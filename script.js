const menuButton=document.getElementById("menu");
const nav=document.getElementById("nav");
menuButton.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

const modal=document.getElementById("certificateModal");
const certificateImage=document.getElementById("certificateImage");
const certificateFallback=document.getElementById("certificateFallback");
const certificateTitle=document.getElementById("certificateTitle");
function closeCertificate(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
  certificateImage.removeAttribute("src");
}
document.querySelectorAll(".certificate-card").forEach(card=>{
  card.addEventListener("click",()=>{
    certificateTitle.textContent=card.dataset.title;
    certificateFallback.hidden=true;
    certificateImage.hidden=false;
    certificateImage.src=card.dataset.image;
    certificateImage.onerror=()=>{
      certificateImage.hidden=true;
      certificateFallback.hidden=false;
    };
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
  });
});
document.getElementById("closeCertificate").addEventListener("click",closeCertificate);
modal.addEventListener("click",event=>{if(event.target===modal)closeCertificate();});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeCertificate();});
