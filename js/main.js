var b=document.querySelector(".burger"),n=document.getElementById("nav");
b.addEventListener("click",function(){var o=n.classList.toggle("open");b.setAttribute("aria-expanded",o)});
n.addEventListener("click",function(e){if(e.target.tagName==="A"){n.classList.remove("open");b.setAttribute("aria-expanded","false")}});
var hd=document.querySelector("header");
function sc(){hd.classList.toggle("sc",window.scrollY>10)}sc();window.addEventListener("scroll",sc,{passive:true});
var rm=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!rm&&"IntersectionObserver" in window){
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;var t=x.target;t.classList.add("in");io.unobserve(t);setTimeout(function(){t.classList.remove("rv","in");t.style.removeProperty("--d")},1500)})},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".trust li,.card,.about>*,.prop,.steps li,details,.contact>*,section h2,section .eyebrow,.center").forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.setProperty("--d",(Math.min(i,4)*0.1)+"s");el.classList.add("rv");io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;co.unobserve(x.target);var s=x.target,m=s.textContent.match(/^(\d+)(.*)$/);if(!m)return;var end=+m[1],t0=null;(function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);s.textContent=Math.round(end*(1-Math.pow(1-p,3)))+m[2];if(p<1)requestAnimationFrame(f)})(performance.now())})},{threshold:.6});
document.querySelectorAll(".trust strong").forEach(function(s){co.observe(s)});
}
document.getElementById("cf").addEventListener("submit",function(e){
e.preventDefault();var f=e.target,d=new FormData(f);
if(!f.checkValidity()){f.reportValidity();return}
var body="Nom : "+d.get("nom")+"\nTéléphone : "+d.get("tel")+"\nE-mail : "+d.get("email")+"\nProjet : "+d.get("sujet")+"\n\n"+d.get("msg");
document.getElementById("ok").style.display="block";
window.location.href="mailto:samirlarissi@gmail.com?subject="+encodeURIComponent("Demande via le site – "+d.get("sujet"))+"&body="+encodeURIComponent(body);
});
