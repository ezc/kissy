/*
Copyright 2011, KISSY UI Library v1.30dev
MIT Licensed
build time: Dec 27 12:04
*/
KISSY.add("dom/attr",function(r,c,u,v){function E(m,g){g=A[g]||g;var h=G[g];return h&&h.get?h.get(m,g):m[g]}u=document.documentElement;var C=!u.hasAttribute,y=u.textContent===v?"innerText":"textContent",o=c._nodeName,n=c._isElementNode,s=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,w=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea)?$/i,q=/:|^on/,l=/\r/g,k={},t={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1,scrollTop:1,scrollLeft:1},B={tabindex:{get:function(m){var g=m.getAttributeNode("tabindex");return g&&g.specified?parseInt(g.value,10):w.test(m.nodeName)||j.test(m.nodeName)&&m.href?0:v}},style:{get:function(m){return m.style.cssText},set:function(m,g){m.style.cssText=g}}},A={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},z={get:function(m,g){return c.prop(m,g)?g.toLowerCase():v},set:function(m,g,h){if(g===false)c.removeAttr(m,h);else{g=A[h]||h;if(g in m)m[g]=true;m.setAttribute(h,h.toLowerCase())}return h}},G={},F={},H={option:{get:function(m){var g=m.attributes.value;return!g||g.specified?m.value:m.text}},select:{get:function(m){var g=m.selectedIndex,h=m.options;m=m.type==="select-one";if(g<0)return null;else if(m)return c.val(h[g]);g=[];m=0;for(var a=
h.length;m<a;++m)h[m].selected&&g.push(c.val(h[m]));return g},set:function(m,g){var h=r.makeArray(g);r.each(m.options,function(a){a.selected=r.inArray(c.val(a),h)});if(!h.length)m.selectedIndex=-1;return h}}};if(C){F={get:function(m,g){var h;return(h=m.getAttributeNode(g))&&h.nodeValue!==""?h.nodeValue:v},set:function(m,g,h){var a=m.getAttributeNode(h);if(a)a.nodeValue=g;else try{var e=m.ownerDocument.createAttribute(h);e.value=g;m.setAttributeNode(e)}catch(d){return m.setAttribute(h,g,0)}}};k=A;
B.tabIndex=B.tabindex;r.each(["href","src","width","height","colSpan","rowSpan"],function(m){B[m]={get:function(g){g=g.getAttribute(m,2);return g===null?v:g}}});H.button=B.value=F}r.each(["radio","checkbox"],function(m){H[m]={get:function(g){return g.getAttribute("value")===null?"on":g.value},set:function(g,h){if(r.isArray(h))return g.checked=r.inArray(c.val(g),h)}}});r.mix(c,{prop:function(m,g,h){if(r.isPlainObject(g))for(var a in g)c.prop(m,a,g[a]);else{m=c.query(m);g=A[g]||g;var e=G[g];if(h!==
v)m.each(function(d){if(e&&e.set)e.set(d,h,g);else d[g]=h});else if(m.length)return E(m[0],g)}},hasProp:function(m,g){for(var h=c.query(m),a=0;a<h.length;a++)if(E(h[a],g)!==v)return true;return false},removeProp:function(m,g){g=A[g]||g;c.query(m).each(function(h){try{h[g]=v;delete h[g]}catch(a){}})},attr:function(m,g,h,a){if(r.isPlainObject(g)){a=h;for(var e in g)g.hasOwnProperty(e)&&c.attr(m,e,g[e],a)}else if(g=r.trim(g)){if(a&&t[g])return c[g](m,h);g=g.toLowerCase();if(a&&t[g])return c[g](m,h);
m=c.query(m);if(h===v)return c.__attr(m[0],g);else m.each(function(d){c.__attr(d,g,h)})}},__attr:function(m,g,h){if(n(m)){g=k[g]||g;var a;a=o(m,"form")?F:s.test(g)?z:q.test(g)?F:B[g];if(h===v){if(a&&a.get)return a.get(m,g);m=m.getAttribute(g);return m===null?v:m}else a&&a.set?a.set(m,h,g):m.setAttribute(g,""+h)}},removeAttr:function(m,g){g=g.toLowerCase();g=k[g]||g;c.query(m).each(function(h){if(n(h)){var a;h.removeAttribute(g);if(s.test(g)&&(a=A[g]||g)in h)h[a]=false}})},hasAttr:C?function(m,g){g=
g.toLowerCase();for(var h=c.query(m),a=0;a<h.length;a++){var e=h[a].getAttributeNode(g);if(e&&e.specified)return true}return false}:function(m,g){for(var h=c.query(m),a=0;a<h.length;a++)if(h[a].hasAttribute(g))return true;return false},val:function(m,g){var h,a;if(g===v){var e=c.get(m);if(e){if((h=H[e.nodeName.toLowerCase()]||H[e.type])&&"get"in h&&(a=h.get(e,"value"))!==v)return a;a=e.value;return typeof a==="string"?a.replace(l,""):a==null?"":a}}else c.query(m).each(function(d){if(d.nodeType===
1){var b=g;if(b==null)b="";else if(typeof b==="number")b+="";else if(r.isArray(b))b=r.map(b,function(f){return b==null?"":f+""});h=H[d.nodeName.toLowerCase()]||H[d.type];if(!h||!("set"in h)||h.set(d,b,"value")===v)d.value=b}})},text:function(m,g){if(g===v){var h=c.get(m);if(n(h))return h[y]||"";else if(c._nodeTypeIs(h,c.TEXT_NODE))return h.nodeValue;return v}else c.query(m).each(function(a){if(n(a))a[y]=g;else if(c._nodeTypeIs(a,c.TEXT_NODE))a.nodeValue=g})}});return c},{requires:["./base","ua"]});
KISSY.add("dom/base",function(r,c,u){function v(y,o){return y&&y.nodeType===o}var E={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},C={_isCustomDomain:function(y){y=y||window;var o=y.document.domain;y=y.location.hostname;return o!=y&&o!="["+y+"]"},_genEmptyIframeSrc:function(y){y=y||window;if(c.ie&&C._isCustomDomain(y))return"javascript:void(function(){"+
encodeURIComponent("document.open();document.domain='"+y.document.domain+"';document.close();")+"}())"},_NODE_TYPE:E,_isElementNode:function(y){return v(y,C.ELEMENT_NODE)},_getWin:function(y){return y&&"scrollTo"in y&&y.document?y:v(y,C.DOCUMENT_NODE)?y.defaultView||y.parentWindow:y===u||y===null?window:false},_nodeTypeIs:v,_isNodeList:function(y){return y&&!y.nodeType&&y.item&&!y.setTimeout},_nodeName:function(y,o){return y&&y.nodeName.toLowerCase()===o.toLowerCase()}};r.mix(C,E);return C},{requires:["ua"]});
KISSY.add("dom/class",function(r,c,u){function v(n){return(C+n+C).replace(o,C)}function E(n,s,w,j){if(!(s=r.trim(s)))return j?false:u;n=c.query(n);var q=n.length,l=s.split(y);s=[];for(var k=0;k<l.length;k++){var t=r.trim(l[k]);t&&s.push(t)}for(k=0;k<q;k++){l=n[k];if(c._isElementNode(l)){l=w(l,s,s.length);if(l!==u)return l}}if(j)return false;return u}var C=" ",y=/[\.\s]\s*\.?/,o=/[\n\t]/g;r.mix(c,{__hasClass:function(n,s){var w=n.className;if(w){w=v(w);return w.indexOf(C+s+C)>-1}else return false},
hasClass:function(n,s){return E(n,s,function(w,j,q){if(w=w.className){w=v(w);for(var l=0,k=true;l<q;l++)if(w.indexOf(C+j[l]+C)<0){k=false;break}if(k)return true}},true)},addClass:function(n,s){E(n,s,function(w,j,q){var l=w.className;if(l){var k=v(l);l=l;for(var t=0;t<q;t++)if(k.indexOf(C+j[t]+C)<0)l+=C+j[t];w.className=r.trim(l)}else w.className=s},u)},removeClass:function(n,s){E(n,s,function(w,j,q){var l=w.className;if(l)if(q){l=v(l);for(var k=0,t;k<q;k++)for(t=C+j[k]+C;l.indexOf(t)>=0;)l=l.replace(t,
C);w.className=r.trim(l)}else w.className=""},u)},replaceClass:function(n,s,w){c.removeClass(n,s);c.addClass(n,w)},toggleClass:function(n,s,w){var j=r.isBoolean(w),q;E(n,s,function(l,k,t){for(var B=0,A;B<t;B++){A=k[B];q=j?!w:c.hasClass(l,A);c[q?"removeClass":"addClass"](l,A)}},u)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(r,c,u,v){function E(a){var e=r.require("event");e&&e.detach(a);c.removeData(a)}function C(a,e,d){if(w(e,c.DOCUMENT_FRAGMENT_NODE)){e=e.childNodes;d=d.childNodes;for(var b=0;e[b];){d[b]&&C(a,e[b],d[b]);b++}}else if(j(e)){e=e.getElementsByTagName("*");d=d.getElementsByTagName("*");for(b=0;e[b];){d[b]&&a(e[b],d[b]);b++}}}function y(a,e){var d=r.require("event");if(!(j(e)&&!c.hasData(a))){var b=c.data(a),f;for(f in b)c.data(e,f,b[f]);if(d){d._removeData(e);d._clone(a,e)}}}
function o(a,e){e.clearAttributes&&e.clearAttributes();e.mergeAttributes&&e.mergeAttributes(a);var d=e.nodeName.toLowerCase(),b=a.childNodes;if(d==="object"&&!e.childNodes.length)for(d=0;d<b.length;d++)e.appendChild(b[d].cloneNode(true));else if(d==="input"&&(a.type==="checkbox"||a.type==="radio")){if(a.checked)e.defaultChecked=e.checked=a.checked;if(e.value!==a.value)e.value=a.value}else if(d==="option")e.selected=a.defaultSelected;else if(d==="input"||d==="textarea")e.defaultValue=a.defaultValue;
e.removeAttribute(c.__EXPANDO)}function n(a,e){var d=null,b,f;if(a&&(a.push||a.item)&&a[0]){e=e||a[0].ownerDocument;d=e.createDocumentFragment();a=r.makeArray(a);b=0;for(f=a.length;b<f;b++)d.appendChild(a[b])}return d}var s=document;u=u.ie;var w=c._nodeTypeIs,j=c._isElementNode,q=r.isString,l=s.createElement("div"),k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,t=/<([\w:]+)/,B=/^\s+/,A=u&&u<9,z=/<|&#?\w+;/,G=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;r.mix(c,{create:function(a,e,d,
b){if(j(a)||w(a,c.TEXT_NODE))return c.clone(a);var f=null;if(!q(a))return f;if(b===v)b=true;if(b)a=r.trim(a);if(!a)return f;b=c._creators;var i,p;d=d||s;var x,D="div";if(z.test(a))if(x=G.exec(a))f=d.createElement(x[1]);else{a=a.replace(k,"<$1></$2>");if((x=t.exec(a))&&(i=x[1]))D=i.toLowerCase();i=(b[D]||b.div)(a,d);if(A&&(p=a.match(B)))i.insertBefore(d.createTextNode(p[0]),i.firstChild);a=i.childNodes;if(a.length===1)f=a[0].parentNode.removeChild(a[0]);else if(a.length)f=n(a,d)}else f=d.createTextNode(a);
f=f;if(r.isPlainObject(e))if(j(f))c.attr(f,e,true);else w(f,c.DOCUMENT_FRAGMENT_NODE)&&c.attr(f.childNodes,e,true);return f},_creators:{div:function(a,e){var d=e&&e!=s?e.createElement("div"):l;d.innerHTML="m<div>"+a+"</div>";return d.lastChild}},html:function(a,e,d,b){a=c.query(a);var f=a[0];if(f)if(e===v)return j(f)?f.innerHTML:null;else{var i=false;e+="";if(!e.match(/<(?:script|style)/i)&&(!A||!e.match(B))&&!g[(e.match(t)||["",""])[1].toLowerCase()])try{a.each(function(x){if(j(x)){E(x.getElementsByTagName("*"));
x.innerHTML=e}});i=true}catch(p){}if(!i){e=c.create(e,0,f.ownerDocument,false);a.each(function(x){if(j(x)){c.empty(x);c.append(e,x,d)}})}b&&b()}},remove:function(a,e){c.query(a).each(function(d){if(!e&&j(d)){var b=d.getElementsByTagName("*");E(b);E(d)}d.parentNode&&d.parentNode.removeChild(d)})},clone:function(a,e,d,b){a=c.get(a);if(!a)return null;var f=a.cloneNode(e);if(j(a)||w(a,c.DOCUMENT_FRAGMENT_NODE)){j(a)&&o(a,f);e&&C(o,a,f)}if(d){y(a,f);e&&b&&C(y,a,f)}return f},empty:function(a){c.query(a).each(function(e){c.remove(e.childNodes)})},
_nl2frag:n});var F=c._creators,H=c.create,m=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,g={option:"select",optgroup:"select",area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},h;for(h in g)(function(a){F[h]=function(e,d){return H("<"+a+">"+e+"</"+a+">",null,d)}})(g[h]);if(u<8)F.tbody=function(a,e){var d=H("<table>"+a+"</table>",null,e),b=d.children.tags("tbody")[0];d.children.length>1&&b&&!m.test(a)&&
b.parentNode.removeChild(b);return d};r.mix(F,{thead:F.tbody,tfoot:F.tbody,caption:F.tbody,colgroup:F.tbody});return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(r,c,u){var v=window,E="_ks_data_"+r.now(),C={},y={},o={};o.applet=1;o.object=1;o.embed=1;var n={hasData:function(j,q){if(j)if(q!==u){if(q in j)return true}else if(!r.isEmptyObject(j))return true;return false}},s={hasData:function(j,q){if(j==v)return s.hasData(y,q);return n.hasData(j[E],q)},data:function(j,q,l){if(j==v)return s.data(y,q,l);var k=j[E];if(l!==u){k=j[E]=j[E]||{};k[q]=l}else if(q!==u)return k&&k[q];else return k=j[E]=j[E]||{}},removeData:function(j,q){if(j==
v)return s.removeData(y,q);var l=j[E];if(l)if(q!==u){delete l[q];r.isEmptyObject(l)&&s.removeData(j,u)}else try{delete j[E]}catch(k){j[E]=null}}},w={hasData:function(j,q){var l=j[E];if(!l)return false;return n.hasData(C[l],q)},data:function(j,q,l){if(!o[j.nodeName.toLowerCase()]){var k=j[E];k||(k=j[E]=r.guid());j=C[k];if(l!==u){j=C[k]=C[k]||{};j[q]=l}else if(q!==u)return j&&j[q];else return j=C[k]=C[k]||{}}},removeData:function(j,q){var l=j[E];if(l){var k=C[l];if(k)if(q!==u){delete k[q];r.isEmptyObject(k)&&
w.removeData(j,u)}else{delete C[l];try{delete j[E]}catch(t){}j.removeAttribute&&j.removeAttribute(E)}}}};r.mix(c,{__EXPANDO:E,hasData:function(j,q){for(var l=false,k=c.query(j),t=0;t<k.length;t++)if(l=(l=k[t])&&l.nodeType?w.hasData(l,q):s.hasData(l,q))break;return l},data:function(j,q,l){if(r.isPlainObject(q))for(var k in q)c.data(j,k,q[k]);else if(l===u)if((j=c.get(j))&&j.nodeType)return w.data(j,q,l);else{if(j)return s.data(j,q,l)}else c.query(j).each(function(t){t&&t.nodeType?w.data(t,q,l):s.data(t,
q,l)})},removeData:function(j,q){c.query(j).each(function(l){l&&l.nodeType?w.removeData(l,q):s.removeData(l,q)})}});return c},{requires:["./base"]});KISSY.add("dom",function(r,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
KISSY.add("dom/insertion",function(r,c,u){function v(k){for(var t=0;t<k.length;t++){var B=k[t];if(B.nodeType==u.DOCUMENT_FRAGMENT_NODE)v(B.childNodes);else if(n(B,"input")){if(B.type==="checkbox"||B.type==="radio")B.defaultChecked=B.checked}else if(w(B)){B=B.getElementsByTagName("input");for(var A=0;A<B.length;A++)v(B[A])}}}function E(k,t){var B=[],A,z,G;for(A=0;k[A];A++){z=k[A];G=z.nodeName.toLowerCase();if(z.nodeType==u.DOCUMENT_FRAGMENT_NODE)B.push.apply(B,E(s(z.childNodes),t));else if(G==="script"&&
(!z.type||j.test(z.type))){z.parentNode&&z.parentNode.removeChild(z);t&&t.push(z)}else{if(w(z)&&!o.test(G)){G=[];var F,H,m=z.getElementsByTagName("script");for(H=0;H<m.length;H++){F=m[H];(!F.type||j.test(F.type))&&G.push(F)}k.splice.apply(k,[A+1,0].concat(G))}B.push(z)}}return B}function C(k){if(k.src)r.getScript(k.src);else(k=r.trim(k.text||k.textContent||k.innerHTML||""))&&r.globalEval(k)}function y(k,t,B,A){k=u.query(k);if(A)A=[];k=E(k,A);c.ie<8&&v(k);t=u.query(t);var z=k.length,G=t.length;if(!(!z&&
(!A||!A.length)||!G)){k=u._nl2frag(k);var F;if(G>1)F=u.clone(k,true);for(var H=0;H<G;H++){var m=t[H];if(z){var g=H>0?u.clone(F,true):k;B(g,m)}A&&A.length&&r.each(A,C)}}}var o=/^(?:button|input|object|select|textarea)$/i,n=u._nodeName,s=r.makeArray,w=u._isElementNode,j=/\/(java|ecma)script/i;r.mix(u,{insertBefore:function(k,t,B){y(k,t,function(A,z){z.parentNode&&z.parentNode.insertBefore(A,z)},B)},insertAfter:function(k,t,B){y(k,t,function(A,z){z.parentNode&&z.parentNode.insertBefore(A,z.nextSibling)},
B)},appendTo:function(k,t,B){y(k,t,function(A,z){z.appendChild(A)},B)},prependTo:function(k,t,B){y(k,t,function(A,z){z.insertBefore(A,z.firstChild)},B)}});var q={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},l;for(l in q)u[l]=u[q[l]];return u},{requires:["ua","./create"]});
KISSY.add("dom/offset",function(r,c,u,v){function E(g){var h,a=0;h=0;var e=o.body,d=q(g[B]);if(g[m]){h=g[m]();a=h[A];h=h[z];g=n&&o.documentMode!=9&&(l?s.clientTop:e.clientTop)||0;a-=n&&o.documentMode!=9&&(l?s.clientLeft:e.clientLeft)||0;h-=g;if(u.mobile=="apple"){a-=c[F](d);h-=c[H](d)}}return{left:a,top:h}}function C(g,h){var a={left:0,top:0},e=q(g[B]),d=g;h=h||e;do{var b;if(e==h){var f=d;b=E(f);f=q(f[B]);b.left+=c[F](f);b.top+=c[H](f);b=b}else b=E(d);b=b;a.left+=b.left;a.top+=b.top}while(e&&e!=h&&
(d=e.frameElement)&&(e=e.parent));return a}var y=window,o=document,n=u.ie,s=o.documentElement,w=c._isElementNode,j=c._nodeTypeIs,q=c._getWin,l=o.compatMode==="CSS1Compat",k=Math.max,t=parseInt,B="ownerDocument",A="left",z="top",G=r.isNumber,F="scrollLeft",H="scrollTop",m="getBoundingClientRect";r.mix(c,{offset:function(g,h,a){if(h===v){g=c.get(g);var e;if(g)e=C(g,a);return e}c.query(g).each(function(d){if(c.css(d,"position")==="static")d.style.position="relative";var b=C(d),f={},i,p;for(p in h){i=
t(c.css(d,p),10)||0;f[p]=i+h[p]-b[p]}c.css(d,f)})},scrollIntoView:function(g,h,a,e,d){if(g=c.get(g)){if(h)h=c.get(h);if(!h)h=g.ownerDocument;if(d!==true){e=e===v?true:!!e;a=a===v?true:!!a}if(j(h,c.DOCUMENT_NODE))h=q(h);var b=!!q(h);d=c.offset(g);var f=c.outerHeight(g);g=c.outerWidth(g);var i,p,x,D;if(b){b=h;p=c.height(b);i=c.width(b);D={left:c.scrollLeft(b),top:c.scrollTop(b)};b={left:d[A]-D[A],top:d[z]-D[z]};d={left:d[A]+g-(D[A]+i),top:d[z]+f-(D[z]+p)};D=D}else{i=c.offset(h);p=h.clientHeight;x=h.clientWidth;
D={left:c.scrollLeft(h),top:c.scrollTop(h)};b={left:d[A]-i[A]-(t(c.css(h,"borderLeftWidth"))||0),top:d[z]-i[z]-(t(c.css(h,"borderTopWidth"))||0)};d={left:d[A]+g-(i[A]+x+(t(c.css(h,"borderRightWidth"))||0)),top:d[z]+f-(i[z]+p+(t(c.css(h,"borderBottomWidth"))||0))}}if(b.top<0||d.top>0)if(a===true)c.scrollTop(h,D.top+b.top);else if(a===false)c.scrollTop(h,D.top+d.top);else b.top<0?c.scrollTop(h,D.top+b.top):c.scrollTop(h,D.top+d.top);if(e)if(b.left<0||d.left>0)if(a===true)c.scrollLeft(h,D.left+b.left);
else if(a===false)c.scrollLeft(h,D.left+d.left);else b.left<0?c.scrollLeft(h,D.left+b.left):c.scrollLeft(h,D.left+d.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});r.each(["Left","Top"],function(g,h){var a="scroll"+g;c[a]=function(e,d){if(G(e))return arguments.callee(y,e);e=c.get(e);var b,f=q(e);if(f)if(d!==v){d=parseFloat(d);var i=g=="Left"?d:c.scrollLeft(f),p=g=="Top"?d:c.scrollTop(f);f.scrollTo(i,p)}else{b=f["page"+(h?"Y":"X")+"Offset"];if(!G(b)){f=f.document;b=f.documentElement[a];
G(b)||(b=f.body[a])}}else if(w(e))if(d!==v)e[a]=parseFloat(d);else b=e[a];return b}});r.each(["Width","Height"],function(g){c["doc"+g]=function(h){h=c.get(h);h=q(h).document;return k(h.documentElement["scroll"+g],h.body["scroll"+g],c["viewport"+g](h))};c["viewport"+g]=function(h){h=c.get(h);var a="client"+g;h=q(h).document;var e=h.body,d=h.documentElement[a];return h.compatMode==="CSS1Compat"&&d||e&&e[a]||d}});return c},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(r,c,u){function v(a,e){var d,b,f=typeof a==="string";if(e===u)b=[w];else b=e===u?[w]:v(e,u);var i=b;if(f){a=G(a);if(i.length==1&&a)d=C(a,i[0])}else if(q(a))if(i.length==1&&i[0]==w)d=a;if(!d){d=[];if(a){for(b=0;b<i.length;b++)B.apply(d,E(a,i[b]));if(d.length>1&&(i.length>1||f&&a.indexOf(z)>-1))g(d)}}d.each=function(p){var x,D;for(D=0;D<this.length;D++){x=this[D];if(p(x,D)===false)break}};return d}function E(a,e){var d=[];if((d=typeof a==="string")&&a.match(m)||!d)d=
y(a,e);else{if(d&&a.indexOf(z)>-1){d=[];var b,f=a.split(/\s*,\s*/);for(b=0;b<f.length;b++)B.apply(d,E(f[b],e));d=d}else{d=[];(b=r.require("sizzle"))&&b(a,e,d);d=d}d=d}return d=d}function C(a,e){var d,b,f,i;if(H.test(a))d=(b=n(a.slice(1),e))?[b]:[];else if(f=m.exec(a)){b=f[1];i=f[2];f=f[3];if(e=b?n(b,e):e)if(f)if(!b||a.indexOf(A)!=-1)d=[].concat(h(f,i,e));else{if((b=n(b,e))&&c.__hasClass(b,f))d=[b]}else if(i)d=s(i,e);d=d||[]}return d}function y(a,e){var d;if(typeof a==="string")d=C(a,e)||[];else if(a&&
(q(a)||k(a)))d=j(a,function(b){return o(b,e)});else if(a&&o(a,e))d=[a];return d}function o(a,e){if(!a)return false;if(e==w)return true;return c.__contains(e,a)}function n(a,e){var d=e;if(e.nodeType!==c.DOCUMENT_NODE)d=e.ownerDocument;d=d.getElementById(a);if(!(d&&d.id===a))if(d&&d.parentNode)if(c.__attr(d,"id")!==a)d=c.filter(F,"#"+a,e)[0]||null;else o(d,e)||(d=null);else d=null;return d}function s(a,e){return e&&l(e.getElementsByTagName(a))||[]}var w=document,j=r.filter,q=r.isArray,l=r.makeArray,
k=c._isNodeList,t=c._nodeName,B=Array.prototype.push,A=" ",z=",",G=r.trim,F="*",H=/^#[\w-]+$/,m=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,g=r.noop;(function(){var a,e,d=true;[0,0].sort(function(){d=false;return 0});g=function(b){if(a){e=d;b.sort(a);if(e)for(var f=1,i=b.length;f<i;)if(b[f]===b[f-1])b.splice(f,1);else f++}return b};a=w.documentElement.compareDocumentPosition?function(b,f){if(b==f){e=true;return 0}if(!b.compareDocumentPosition||!f.compareDocumentPosition)return b.compareDocumentPosition?
-1:1;return b.compareDocumentPosition(f)&4?-1:1}:function(b,f){if(b==f){e=true;return 0}else if(b.sourceIndex&&f.sourceIndex)return b.sourceIndex-f.sourceIndex}})();(function(){var a=w.createElement("div");a.appendChild(w.createComment(""));if(a.getElementsByTagName(F).length>0)s=function(e,d){var b=l(d.getElementsByTagName(e));if(e===F){for(var f=[],i=0,p;p=b[i++];)p.nodeType===1&&f.push(p);b=f}return b}})();var h=w.getElementsByClassName?function(a,e,d){if(!d)return[];a=d.getElementsByClassName(a);
var b=0,f=a.length,i;if(e&&e!==F)for(d=[];b<f;++b){i=a[b];t(i,e)&&d.push(i)}else d=l(a);return d}:w.querySelectorAll?function(a,e,d){return d&&l(d.querySelectorAll((e?e:"")+"."+a))||[]}:function(a,e,d){if(!d)return[];e=d.getElementsByTagName(e||F);d=[];for(var b=0,f=e.length,i;b<f;++b){i=e[b];c.__hasClass(i,a)&&d.push(i)}return d};r.mix(c,{query:v,get:function(a,e){return v(a,e)[0]||null},unique:g,filter:function(a,e,d){a=v(a,d);d=r.require("sizzle");var b,f,i,p,x=[];if(typeof e==="string"&&(e=G(e))&&
(b=m.exec(e))){i=b[1];f=b[2];p=b[3];if(i){if(i&&!f&&!p)e=function(D){return c.__attr(D,"id")===i}}else e=function(D){var I=true,J=true;if(f)I=t(D,f);if(p)J=c.__hasClass(D,p);return J&&I}}if(r.isFunction(e))x=r.filter(a,e);else if(e&&d)x=d.matches(e,a);return x},test:function(a,e,d){a=v(a,d);return a.length&&c.filter(a,e,d).length===a.length}});return c},{requires:["./base"]});
KISSY.add("dom/style-ie",function(r,c,u,v){if(!u.ie)return c;var E=document,C=E.documentElement,y=v._CUSTOM_STYLES,o=/^-?\d+(?:px)?$/i,n=/^-?\d/,s=/opacity=([^)]*)/,w=/alpha\([^)]*\)/i;y.backgroundPosition={get:function(l,k){return k?l.currentStyle.backgroundPositionX+" "+l.currentStyle.backgroundPositionY:l.style.backgroundPosition}};try{if(C.style.opacity==null)y.opacity={get:function(l,k){return s.test((k&&l.currentStyle?l.currentStyle.filter:l.style.filter)||"")?parseFloat(RegExp.$1)/100+"":k?
"1":""},set:function(l,k){k=parseFloat(k);var t=l.style,B=l.currentStyle,A=isNaN(k)?"":"alpha(opacity="+k*100+")",z=r.trim(B&&B.filter||t.filter||"");t.zoom=1;if(k>=1&&r.trim(z.replace(w,""))===""){t.removeAttribute("filter");if(B&&!B.filter)return}t.filter=w.test(z)?z.replace(w,A):z+(z?", ":"")+A}}}catch(j){}u=u.ie==8;var q={};q.thin=u?"1px":"2px";q.medium=u?"3px":"4px";q.thick=u?"5px":"6px";r.each(["","Top","Left","Right","Bottom"],function(l){var k="border"+l+"Width",t="border"+l+"Style";y[k]=
{get:function(B,A){var z=A?B.currentStyle:0,G=z&&String(z[k])||undefined;if(G&&G.indexOf("px")<0)G=q[G]&&z[t]!=="none"?q[G]:0;return G}}});if(!(E.defaultView||{}).getComputedStyle&&C.currentStyle)c._getComputedStyle=function(l,k){k=c._cssProps[k]||k;var t=l.currentStyle&&l.currentStyle[k];if(!o.test(t)&&n.test(t)){var B=l.style,A=B.left,z=l.runtimeStyle&&l.runtimeStyle.left;if(z)l.runtimeStyle.left=l.currentStyle.left;B.left=k==="fontSize"?"1em":t||0;t=B.pixelLeft+"px";B.left=A;if(z)l.runtimeStyle.left=
z}return t===""?"auto":t};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(r,c,u,v){function E(b){return b.replace(A,z)}function C(b,f,i){var p={},x;for(x in f){p[x]=b[j][x];b[j][x]=f[x]}i.call(b);for(x in f)b[j][x]=p[x]}function y(b,f,i){var p;if(b.nodeType===3||b.nodeType===8||!(p=b[j]))return v;f=E(f);var x,D=m[f];f=g[f]||f;if(i!==v){if(i===null||i===F)i=F;else if(!isNaN(Number(i))&&!B[f])i+=H;if(D&&D.set)i=D.set(b,i);if(i!==v)try{b[j][f]=i}catch(I){}return v}else{if(!(D&&"get"in D&&(x=D.get(b,false))!==v))x=p[f];return x===v?"":x}}function o(b,
f,i){if(r.isWindow(b))return f==q?c.viewportWidth(b):c.viewportHeight(b);else if(b.nodeType==9)return f==q?c.docWidth(b):c.docHeight(b);var p=f===q?["Left","Right"]:["Top","Bottom"],x=f===q?b.offsetWidth:b.offsetHeight;if(x>0){i!=="border"&&r.each(p,function(D){i||(x-=parseFloat(c.css(b,"padding"+D))||0);if(i==="margin")x+=parseFloat(c.css(b,i+D))||0;else x-=parseFloat(c.css(b,"border"+D+"Width"))||0});return x}x=c._getComputedStyle(b,f);if(x==null||Number(x)<0)x=b.style[f]||0;x=parseFloat(x)||0;
i&&r.each(p,function(D){x+=parseFloat(c.css(b,"padding"+D))||0;if(i!=="padding")x+=parseFloat(c.css(b,"border"+D+"Width"))||0;if(i==="margin")x+=parseFloat(c.css(b,i+D))||0});return x}var n=document,s=n.documentElement,w=u.ie,j="style",q="width",l="display"+r.now(),k=parseInt,t=/^-?\d+(?:px)?$/i,B={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},A=/-([a-z])/ig,z=function(b,f){return f.toUpperCase()},G=/([A-Z]|^ms)/g,F="",H="px",m={},g={},h={};if(s[j].cssFloat!==
v)g["float"]="cssFloat";else if(s[j].styleFloat!==v)g["float"]="styleFloat";var a,e;r.mix(c,{_camelCase:E,_CUSTOM_STYLES:m,_cssProps:g,_getComputedStyle:function(b,f){var i="",p,x=b.ownerDocument;f=f.replace(G,"-$1").toLowerCase();if(p=x.defaultView.getComputedStyle(b,null))i=p.getPropertyValue(f)||p[f];if(i==""&&!c.__contains(x.documentElement,b)){f=g[f]||f;i=b[j][f]}return i},style:function(b,f,i){if(r.isPlainObject(f))for(var p in f)c.style(b,p,f[p]);else if(i===v){b=c.get(b);p="";if(b)p=y(b,f,
i);return p}else c.query(b).each(function(x){y(x,f,i)})},css:function(b,f,i){if(r.isPlainObject(f))for(var p in f)c.css(b,p,f[p]);else{f=E(f);p=m[f];if(i===v){b=c.get(b);i="";if(b)if(!(p&&"get"in p&&(i=p.get(b,true))!==v))i=c._getComputedStyle(b,f);return i===v?"":i}else c.style(b,f,i)}},show:function(b){c.query(b).each(function(f){f[j].display=c.data(f,l)||F;if(c.css(f,"display")==="none"){var i;a:{i=f.tagName.toLowerCase();var p,x;if(!h[i]){p=n.body||n.documentElement;x=n.createElement(i);c.prepend(x,
p);var D=c.css(x,"display");p.removeChild(x);if(D==="none"||D===""){if(a)c.prepend(a,p);else{a=n.createElement("iframe");a.frameBorder=a.width=a.height=0;c.prepend(a,p);if(x=c._genEmptyIframeSrc())a.src=x}if(!e||!a.createElement)try{e=a.contentWindow.document;e.write((n.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><head>"+(u.ie&&c._isCustomDomain()?"<script>document.domain = '"+n.domain+"';<\/script>":"")+"</head><body>");e.close()}catch(I){i="block";break a}x=e.createElement(i);e.body.appendChild(x);
D=c.css(x,"display");p.removeChild(a)}h[i]=D}i=h[i]}c.data(f,l,i);f[j].display=i}})},hide:function(b){c.query(b).each(function(f){var i=f[j],p=i.display;if(p!=="none"){p&&c.data(f,l,p);i.display="none"}})},toggle:function(b){c.query(b).each(function(f){c.css(f,"display")==="none"?c.show(f):c.hide(f)})},addStyleSheet:function(b,f,i){if(r.isString(b)){i=f;f=b;b=window}b=c.get(b);b=c._getWin(b).document;var p;if(i&&(i=i.replace("#",F)))p=c.get("#"+i,b);if(!p){p=c.create("<style>",{id:i},b);c.get("head",
b).appendChild(p);if(p.styleSheet)p.styleSheet.cssText=f;else p.appendChild(b.createTextNode(f))}},unselectable:function(b){c.query(b).each(function(f){if(u.gecko)f[j].MozUserSelect="none";else if(u.webkit)f[j].KhtmlUserSelect="none";else if(u.ie||u.opera){var i=0,p=f.getElementsByTagName("*");for(f.setAttribute("unselectable","on");f=p[i++];)switch(f.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:f.setAttribute("unselectable","on")}}})},innerWidth:0,
innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});r.each([q,"height"],function(b){c["inner"+(b.charAt(0).toUpperCase()+b.substring(1))]=function(f){return(f=c.get(f))?o(f,b,"padding"):null};c["outer"+(b.charAt(0).toUpperCase()+b.substring(1))]=function(f,i){var p=c.get(f);return p?o(p,b,i?"margin":"border"):null};c[b]=function(f,i){var p=c.css(f,b,i);if(p)p=parseFloat(p);return p}});var d={position:"absolute",visibility:"hidden",display:"block"};r.each(["height","width"],function(b){m[b]=
{get:function(f,i){var p;if(i){if(f.offsetWidth!==0)p=o(f,b);else C(f,d,function(){p=o(f,b)});return p+"px"}},set:function(f,i){if(t.test(i)){i=parseFloat(i);if(i>=0)return i+"px"}else return i}}});r.each(["left","top"],function(b){m[b]={get:function(f,i){if(i){var p=c._getComputedStyle(f,b);if(p==="auto"){p=0;if(r.inArray(c.css(f,"position"),["absolute","fixed"])){p=f[b==="left"?"offsetLeft":"offsetTop"];if(w&&document.documentMode!=9||u.opera)p-=f.offsetParent&&f.offsetParent["client"+(b=="left"?
"Left":"Top")]||0;p=p-(k(c.css(f,"margin-"+b))||0)}p+="px"}return p}}}});return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(r,c,u){function v(o,n,s,w,j,q){if(!(o=c.get(o)))return null;if(n===0)return o;q||(o=o[s]);if(!o)return null;j=j&&c.get(j)||null;if(n===u)n=1;q=[];var l=r.isArray(n),k,t;if(r.isNumber(n)){k=0;t=n;n=function(){return++k===t}}for(;o&&o!=j;){if(y(o)&&E(o,n)&&(!w||w(o))){q.push(o);if(!l)break}o=o[s]}return l?q:q[0]||null}function E(o,n){if(!n)return true;if(r.isArray(n))for(var s=0;s<n.length;s++){if(c.test(o,n[s]))return true}else if(c.test(o,n))return true;return false}
function C(o,n,s){var w=[];var j=o=c.get(o);if(o&&s)j=o.parentNode;if(j){s=0;for(j=j.firstChild;j;j=j.nextSibling)if(y(j)&&j!==o&&(!n||c.test(j,n)))w[s++]=j}return w}var y=c._isElementNode;r.mix(c,{closest:function(o,n,s){return v(o,n,"parentNode",function(w){return w.nodeType!=c.DOCUMENT_FRAGMENT_NODE},s,true)},parent:function(o,n,s){return v(o,n,"parentNode",function(w){return w.nodeType!=c.DOCUMENT_FRAGMENT_NODE},s)},first:function(o,n){var s=c.get(o);return v(s&&s.firstChild,n,"nextSibling",u,
u,true)},last:function(o,n){var s=c.get(o);return v(s&&s.lastChild,n,"previousSibling",u,u,true)},next:function(o,n){return v(o,n,"nextSibling",u)},prev:function(o,n){return v(o,n,"previousSibling",u)},siblings:function(o,n){return C(o,n,true)},children:function(o,n){return C(o,n,u)},__contains:document.documentElement.contains?function(o,n){if(o.nodeType==c.TEXT_NODE)return false;var s;if(n.nodeType==c.TEXT_NODE){n=n.parentNode;s=true}else if(n.nodeType==c.DOCUMENT_NODE)return false;else s=o!==n;
return s&&(o.contains?o.contains(n):true)}:document.documentElement.compareDocumentPosition?function(o,n){return!!(o.compareDocumentPosition(n)&16)}:0,contains:function(o,n){o=c.get(o);n=c.get(n);if(o&&n)return c.__contains(o,n)},equals:function(o,n){o=c.query(o);n=c.query(n);if(o.length!=n.length)return false;for(var s=o.length;s>=0;s--)if(o[s]!=n[s])return false;return true}});return c},{requires:["./base"]});
