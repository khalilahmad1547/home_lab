import{u as f,__tla as __tla_0}from"./index-bUuJUL5l.js";import{c as d,E as t}from"./vue-BSryv7ps.js";let h;let __tla=Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{h=function(e,a,o=1){const{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:c,isLastPage:i,next:g,prev:l}=f({total:()=>t(e).length,page:o,pageSize:()=>t(a)===-1?t(e).length:t(a)}),p=d(()=>{const s=(n.value-1)*t(a),P=s+r.value;return t(e).slice(s,P)});return{currentPage:n,currentPageSize:r,pageCount:u,isFirstPage:c,isLastPage:i,next:g,prev:l,paginatedResults:p}}});export{h as u,__tla};