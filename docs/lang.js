/* GPLv3.0 2016 chendianbuji@gmail.com */(function(e){window.Languages=e(),(new MutationObserver(function(e){e.map(function(e){e.target!="[object HTMLBodyElement]"&&e.target!="[object HTMLScriptElement]"&&(e.removedNodes.length!=0||e.addedNodes.length!=0)&&Languages.update()})})).observe(document.querySelector("body"),{attributes:!1,childList:!0,characterData:!1,subtree:!0})})(function(){function o(){let e=new Map,n,r,i;return{init:function(){return i=document.querySelectorAll("[lang]:not(title)"),n=document.querySelectorAll("title[lang]"),function(o){t(i).forEach(function(t,n){e.has(t)||e.set(t,t.style.display),t.lang!=o?t.style.display="none":(t.style.display=e.get(t),e.delete(t))}),titles_container=n[0].parentNode,t(n).forEach(function(e,t){e.lang==o&&(titles_container.removeChild(e),titles_container.insertBefore(e,n[t==0?1:0]))}),n=document.querySelectorAll("title[lang]"),s(o),r=o}},update:function(){return function(){let n=i=document.querySelectorAll("[lang]:not(title)");t(n).forEach(function(t,n){e.has(t)||e.set(t,t.style.display),t.lang!=r?t.style.display="none":e.delete(t)});let s=new Map(e);t(n).forEach(function(e,t){s.has(e)&&s.delete(e)}),t(s).forEach(function(t,n){e.has(t)&&e.delete(t)})}}}}let e=new o,t=function(e){return Array.prototype.slice.call(e)},n=function(e,n,r){return function(i){t(n).map(function(t,n){t.lang==r&&i(t)&&(e.selectedIndex=n)})}},r=new Map;window.fakeCache=r;let i=function(e,n){let i=e.querySelectorAll("option");t(i).filter(function(e){return e.lang==n&&e.lang!=""}).map(function(e){e.value=e.value||r.get(e)||""}),t(i).filter(function(e){return e.lang!=n&&e.lang!=""}).map(function(e){r.set(e,r.get(e)||e.value||""),e.value=""})},s=function(e){let r=document.querySelectorAll("select"),s=[];t(r).map(function(r){let i=r.value,o=r.querySelectorAll("option"),u=n(r,o,e);u(function(e){return!!e.selected}),t(o).filter(function(t){return t.lang==e}).every(function(e){return e.selected==0})&&u(function(e){return!!e.getAttribute("selected")}),s.push(function(){r.value=i})}),t(r).map(function(t){i(t,e)}),s.map(function(e){e()})};return{select:e.init(),update:e.update()}});