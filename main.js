(()=>{"use strict";const e=()=>{const e=document.querySelector("#fn").value,t=document.querySelector("#de").value,n=document.querySelector("#priority").value,o=document.querySelector("#date").value,d=document.querySelector("body"),r=document.querySelector("form");console.log("Clicked!"),d.removeChild(r),console.log(((e,t="",n,o,d=[])=>({name:e,date:t,description:n,urgency:o,list:d}))(e,o,t,n))};document.querySelector("#new-project").addEventListener("click",(()=>{const t=document.createElement("br");var n=document.createElement("form");const o=document.createElement("label");o.setAttribute("for","fn"),o.textContent="Project Name";var d=document.createElement("input");d.setAttribute("type","text"),d.id="fn",d.setAttribute("name","FullName"),d.setAttribute("placeholder","Project Name");const r=document.createElement("label");r.setAttribute("for","de"),r.textContent="Project Description";var c=document.createElement("input");c.setAttribute("type","textarea"),c.setAttribute("name","Description"),c.id="de",c.setAttribute("placeholder","Description (optional)"),c.setAttribute("rows","5"),c.setAttribute("cols","40");const l=document.createElement("label");l.textContent="Date",l.setAttribute("for","date");var a=document.createElement("input");a.setAttribute("type","date"),a.id="date";const i=document.createElement("label");i.setAttribute("for","priority"),i.textContent="Priority";var u=document.createElement("select");u.id="priority";const p=document.createElement("option"),m=document.createTextNode("Low");p.appendChild(m),p.setAttribute("value","Low");const s=document.createElement("option"),C=document.createTextNode("Normal");s.appendChild(C),s.setAttribute("value","Med");const b=document.createElement("option"),h=document.createTextNode("Urgent");b.appendChild(h),b.setAttribute("value","High"),u.appendChild(p),u.appendChild(s),u.appendChild(b);var y=document.createElement("button");y.textContent="Create",y.addEventListener("click",e),n.appendChild(o),n.appendChild(d),n.appendChild(t.cloneNode()),n.appendChild(r),n.appendChild(c),n.appendChild(t.cloneNode()),n.appendChild(l),n.appendChild(a),n.appendChild(t.cloneNode()),n.appendChild(i),n.appendChild(u),n.appendChild(t.cloneNode()),n.appendChild(y),document.getElementsByTagName("body")[0].appendChild(n)}))})();