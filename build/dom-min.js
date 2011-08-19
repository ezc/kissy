/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 19 22:01
*/
KISSY.add("dom/attr",function(m,d,r,q){function u(k,f){f=A[f]||f;var g=B[f];return g&&g.get?g.get(k,f):k[f]}r=document.documentElement;var y=!r.hasAttribute,v=r.textContent===q?"innerText":"textContent",h=d._isElementNode,j=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,p=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,i=/:|^on/,n=/\r/g,o={},t={val:1,css:1,html:1,text:1,data:1,width:1,height:1,offset:1},w=
{tabindex:{get:function(k){var f=k.getAttributeNode("tabindex");return f&&f.specified?parseInt(f.value,10):p.test(k.nodeName)||s.test(k.nodeName)&&k.href?0:q}},style:{get:function(k){return k.style.cssText},set:function(k,f){k.style.cssText=f}}},A={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
D={get:function(k,f){return d.prop(k,f)?f.toLowerCase():q},set:function(k,f,g){if(f===false)d.removeAttr(k,g);else{f=A[g]||g;if(f in k)k[f]=true;k.setAttribute(g,g.toLowerCase())}return g}},B={},z={},C={option:{get:function(k){var f=k.attributes.value;return!f||f.specified?k.value:k.text}},select:{get:function(k){var f=k.selectedIndex,g=k.options;k=k.type==="select-one";if(f<0)return null;else if(k)return d.val(g[f]);f=[];k=0;for(var a=g.length;k<a;++k)g[k].selected&&f.push(d.val(g[k]));return f},
set:function(k,f){var g=m.makeArray(f);m.each(k.options,function(a){a.selected=m.inArray(d.val(a),g)});if(!g.length)k.selectedIndex=-1;return g}}};if(y){z={get:function(k,f){var g;return(g=k.getAttributeNode(f))&&g.nodeValue!==""?g.nodeValue:q},set:function(k,f,g){if(k=k.getAttributeNode(g))k.nodeValue=f}};o=A;w.tabIndex=w.tabindex;m.each(["href","src","width","height","colSpan","rowSpan"],function(k){w[k]={get:function(f){f=f.getAttribute(k,2);return f===null?q:f}}});C.button=w.value=z}m.each(["radio",
"checkbox"],function(k){C[k]={get:function(f){return f.getAttribute("value")===null?"on":f.value},set:function(f,g){if(m.isArray(g))return f.checked=m.inArray(d.val(f),g)}}});m.mix(d,{prop:function(k,f,g){if(m.isPlainObject(f))for(var a in f)d.prop(k,a,f[a]);else{k=d.query(k);f=A[f]||f;var b=B[f];if(g!==q)m.each(k,function(c){if(b&&b.set)b.set(c,g,f);else c[f]=g});else if(k.length)return u(k[0],f)}},hasProp:function(k,f){for(var g=d.query(k),a=0;a<g.length;a++)if(u(g[a],f)!==q)return true;return false},
removeProp:function(k,f){f=A[f]||f;d.query(k).each(function(g){try{g[f]=q;delete g[f]}catch(a){}})},attr:function(k,f,g,a){if(m.isPlainObject(f)){a=g;for(var b in f)d.attr(k,b,f[b],a)}else if(f=m.trim(f)){f=f.toLowerCase();if(a&&t[f])return d[f](k,g);f=o[f]||f;var c;c=j.test(f)?D:i.test(f)?z:w[f];if(g===q){k=d.get(k);if(h(k)){if(k.nodeName.toLowerCase()=="form")c=z;if(c&&c.get)return c.get(k,f);k=k.getAttribute(f);return k===null?q:k}}else m.each(d.query(k),function(e){if(h(e))c&&c.set?c.set(e,g,
f):e.setAttribute(f,""+g)})}},removeAttr:function(k,f){f=f.toLowerCase();f=o[f]||f;m.each(d.query(k),function(g){if(h(g)){var a;g.removeAttribute(f);if(j.test(f)&&(a=A[f]||f)in g)g[a]=false}})},hasAttr:y?function(k,f){f=f.toLowerCase();for(var g=d.query(k),a=0;a<g.length;a++){var b=g[a].getAttributeNode(f);if(b&&b.specified)return true}return false}:function(k,f){for(var g=d.query(k),a=0;a<g.length;a++)if(g[a].hasAttribute(f))return true;return false},val:function(k,f){var g,a;if(f===q){var b=d.get(k);
if(b){if((g=C[b.nodeName.toLowerCase()]||C[b.type])&&"get"in g&&(a=g.get(b,"value"))!==q)return a;a=b.value;return typeof a==="string"?a.replace(n,""):m.isNullOrUndefined(a)?"":a}}else d.query(k).each(function(c){if(c.nodeType===1){var e=f;if(m.isNullOrUndefined(e))e="";else if(typeof e==="number")e+="";else if(m.isArray(e))e=m.map(e,function(l){return m.isNullOrUndefined(e)?"":l+""});g=C[c.nodeName.toLowerCase()]||C[c.type];if(!g||!("set"in g)||g.set(c,e,"value")===q)c.value=e}})},text:function(k,
f){if(f===q){var g=d.get(k);if(h(g))return g[v]||"";else if(d._nodeTypeIs(g,3))return g.nodeValue;return q}else m.each(d.query(k),function(a){if(h(a))a[v]=f;else if(d._nodeTypeIs(a,3))a.nodeValue=f})}});return d},{requires:["./base","ua"]});
KISSY.add("dom/base",function(m,d){function r(u,y){return u&&u.nodeType===y}var q={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12,_isElementNode:function(u){return r(u,1)},_getWin:function(u){return u&&"scrollTo"in u&&u.document?u:r(u,9)?u.defaultView||u.parentWindow:u===d||u===null?window:false},_nodeTypeIs:r,_isNodeList:function(u){return u&&
!u.nodeType&&u.item&&!u.setTimeout}};q.TEXT_NODE=3;return q});
KISSY.add("dom/class",function(m,d,r){function q(v,h,j,p){if(!(h=m.trim(h)))return p?false:r;v=d.query(v);var s=v.length,i=h.split(u);h=[];for(var n=0;n<i.length;n++){var o=m.trim(i[n]);o&&h.push(o)}for(n=0;n<s;n++){i=v[n];if(d._isElementNode(i)){i=j(i,h,h.length);if(i!==r)return i}}if(p)return false;return r}var u=/[\.\s]\s*\.?/,y=/[\n\t]/g;m.mix(d,{hasClass:function(v,h){return q(v,h,function(j,p,s){if(j=j.className){j=(" "+j+" ").replace(y," ");for(var i=0,n=true;i<s;i++)if(j.indexOf(" "+p[i]+
" ")<0){n=false;break}if(n)return true}},true)},addClass:function(v,h){q(v,h,function(j,p,s){var i=j.className;if(i){var n=(" "+i+" ").replace(y," ");i=i;for(var o=0;o<s;o++)if(n.indexOf(" "+p[o]+" ")<0)i+=" "+p[o];j.className=m.trim(i)}else j.className=h},r)},removeClass:function(v,h){q(v,h,function(j,p,s){var i=j.className;if(i)if(s){i=(" "+i+" ").replace(y," ");for(var n=0,o;n<s;n++)for(o=" "+p[n]+" ";i.indexOf(o)>=0;)i=i.replace(o," ");j.className=m.trim(i)}else j.className=""},r)},replaceClass:function(v,
h,j){d.removeClass(v,h);d.addClass(v,j)},toggleClass:function(v,h,j){var p=m.isBoolean(j),s;q(v,h,function(i,n,o){for(var t=0,w;t<o;t++){w=n[t];s=p?!j:d.hasClass(i,w);d[s?"removeClass":"addClass"](i,w)}},r)}});return d},{requires:["dom/base"]});
KISSY.add("dom/create",function(m,d,r,q){function u(a,b){if(m.isPlainObject(b))if(i(a))d.attr(a,b,true);else a.nodeType==d.DOCUMENT_FRAGMENT_NODE&&m.each(a.childNodes,function(c){d.attr(c,b,true)});return a}function y(a,b){var c=null,e,l;if(a&&(a.push||a.item)&&a[0]){b=b||a[0].ownerDocument;c=b.createDocumentFragment();if(a.item)a=m.makeArray(a);e=0;for(l=a.length;e<l;e++)c.appendChild(a[e])}return c}function v(a,b,c,e){if(c){var l=m.guid("ks-tmp-"),x=RegExp(w);b+='<span id="'+l+'"></span>';m.available(l,
function(){var E=d.get("head"),F,G,H,I,J,K;for(x.lastIndex=0;F=x.exec(b);)if((H=(G=F[1])?G.match(D):false)&&H[2]){F=j.createElement("script");F.src=H[2];if((I=G.match(B))&&I[2])F.charset=I[2];F.async=true;E.appendChild(F)}else if((K=F[2])&&K.length>0)m.globalEval(K);(J=j.getElementById(l))&&d.remove(J);m.isFunction(e)&&e()});h(a,b)}else{h(a,b);m.isFunction(e)&&e()}}function h(a,b){b=(b+"").replace(w,"");try{a.innerHTML=b}catch(c){for(;a.firstChild;)a.removeChild(a.firstChild);b&&a.appendChild(d.create(b))}}
var j=document,p=r.ie,s=d._nodeTypeIs,i=d._isElementNode,n=j.createElement("div"),o=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,t=/<(\w+)/,w=/<script([^>]*)>([^<]*(?:(?!<\/script>)<[^<]*)*)<\/script>/ig,A=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,D=/\ssrc=(['"])(.*?)\1/i,B=/\scharset=(['"])(.*?)\1/i;m.mix(d,{create:function(a,b,c){if(s(a,1)||s(a,3)){b=a;c=b.cloneNode(true);if(r.ie<8)c.innerHTML=b.innerHTML;return c}if(!(a=m.trim(a)))return null;var e=null,l=d._creators,x,E="div",
F;if(x=A.exec(a))e=(c||j).createElement(x[1]);else{a=a.replace(o,"<$1></$2>");if((x=t.exec(a))&&(F=x[1]))E=F.toLowerCase();a=(l[E]||l.div)(a,c).childNodes;if(a.length===1)e=a[0].parentNode.removeChild(a[0]);else if(a.length)e=y(a,c||j)}return u(e,b)},_creators:{div:function(a,b){var c=b?b.createElement("div"):n;c.innerHTML="m<div>"+a+"</div>";return c.lastChild}},html:function(a,b,c,e){if(b===q){a=d.get(a);if(i(a))return a.innerHTML}else m.each(d.query(a),function(l){i(l)&&v(l,b,c,e)})},remove:function(a,
b){m.each(d.query(a),function(c){if(!b&&c.nodeType==d.ELEMENT_NODE){d.removeData(c.getElementsByTagName("*"));d.removeData(c)}c.parentNode&&c.parentNode.removeChild(c)})},_nl2frag:y});if(p||r.gecko||r.webkit){var z=d._creators,C=d.create,k=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,f={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"},g;for(g in f)(function(a){z[g]=function(b,c){return C("<"+a+">"+b+"</"+a+">",null,c)}})(f[g]);if(p<8)z.tbody=function(a,
b){var c=C("<table>"+a+"</table>",null,b),e=c.children.tags("tbody")[0];c.children.length>1&&e&&!k.test(a)&&e.parentNode.removeChild(e);return c};m.mix(z,{optgroup:z.option,th:z.td,thead:z.tbody,tfoot:z.tbody,caption:z.tbody,colgroup:z.tbody})}return d},{requires:["./base","ua"]});
KISSY.add("dom/data",function(m,d,r){var q=window,u="_ks_data_"+m.now(),y={},v={},h={};h.applet=1;h.object=1;h.embed=1;var j={hasData:function(i,n){if(i)if(n!==r){if(n in i)return true}else if(!m.isEmptyObject(i))return true;return false}},p={hasData:function(i,n){if(i==q)return p.hasData(v,n);return j.hasData(i[u],n)},data:function(i,n,o){if(i==q)return p.data(v,n,o);var t=i[u];if(o!==r){t=i[u]=i[u]||{};t[n]=o}else if(n!==r)return t&&t[n];else return t=i[u]=i[u]||{}},removeData:function(i,n){if(i==
q)return p.removeData(v,n);var o=i[u];if(o)if(n!==r){delete o[n];m.isEmptyObject(o)&&p.removeData(i,r)}else delete i[u]}},s={hasData:function(i,n){var o=i[u];if(!o)return false;return j.hasData(y[o],n)},data:function(i,n,o){if(!h[i.nodeName.toLowerCase()]){var t=i[u];t||(t=i[u]=m.guid());i=y[t];if(o!==r){i=y[t]=y[t]||{};i[n]=o}else if(n!==r)return i&&i[n];else return i=y[t]=y[t]||{}}},removeData:function(i,n){var o=i[u];if(o){var t=y[o];if(t)if(n!==r){delete t[n];m.isEmptyObject(t)&&s.removeData(i,
r)}else{delete y[o];try{delete i[u]}catch(w){}i.removeAttribute&&i.removeAttribute(u)}}}};m.mix(d,{hasData:function(i,n){var o=false;d.query(i).each(function(t){o=t&&t.nodeType?o||s.hasData(t,n):o||p.hasData(t,n)});return o},data:function(i,n,o){if(m.isPlainObject(n))for(var t in n)d.data(i,t,n[t]);else if(o===r)return(i=d.get(i))&&i.nodeType?s.data(i,n,o):p.data(i,n,o);else d.query(i).each(function(w){w&&w.nodeType?s.data(w,n,o):p.data(w,n,o)})},removeData:function(i,n){d.query(i).each(function(o){o&&
o.nodeType?s.removeData(o,n):p.removeData(o,n)})}});return d},{requires:["./base"]});
KISSY.add("dom/insertion",function(m,d){function r(v,h,j){v=d.query(v);h=d.query(h);if(v=q(v)){var p;if(h.length>1)p=v.cloneNode(true);for(var s=0;s<h.length;s++){var i=h[s],n=s>0?p.cloneNode(true):v;j(n,i)}}}var q=d._nl2frag;m.mix(d,{insertBefore:function(v,h){r(v,h,function(j,p){p.parentNode&&p.parentNode.insertBefore(j,p)})},insertAfter:function(v,h){r(v,h,function(j,p){p.parentNode&&p.parentNode.insertBefore(j,p.nextSibling)})},appendTo:function(v,h){r(v,h,function(j,p){p.appendChild(j)})},prependTo:function(v,
h){r(v,h,function(j,p){p.insertBefore(j,p.firstChild)})}});var u={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},y;for(y in u)d[y]=d[u[y]];return d},{requires:["./create"]});
KISSY.add("dom/offset",function(m,d,r,q){function u(f){var g,a=0;g=0;var b=h.body,c=n(f[A]);if(f[k]){g=f[k]();a=g[D];g=g[B];f=j&&h.documentMode!=9&&(o?p.clientTop:b.clientTop)||0;a-=j&&h.documentMode!=9&&(o?p.clientLeft:b.clientLeft)||0;g-=f;if(r.mobile=="apple"){a-=d[z](c);g-=d[C](c)}}return{left:a,top:g}}function y(f,g){var a={left:0,top:0},b=n(f[A]),c=f;g=g||b;do{var e;if(b==g){var l=c;e=u(l);l=n(l[A]);e.left+=d[z](l);e.top+=d[C](l);e=e}else e=u(c);e=e;a.left+=e.left;a.top+=e.top}while(b&&b!=g&&
(c=b.frameElement)&&(b=b.parent));return a}var v=window,h=document,j=r.ie,p=h.documentElement,s=d._isElementNode,i=d._nodeTypeIs,n=d._getWin,o=h.compatMode==="CSS1Compat",t=Math.max,w=parseInt,A="ownerDocument",D="left",B="top",z="scrollLeft",C="scrollTop",k="getBoundingClientRect";m.mix(d,{offset:function(f,g,a){if((f=d.get(f))&&f[A]){if(g===q)return y(f,a);f=f;if(d.css(f,"position")==="static")f.style.position="relative";a=y(f);var b={},c,e;for(e in g){c=w(d.css(f,e),10)||0;b[e]=c+g[e]-a[e]}d.css(f,
b)}},scrollIntoView:function(f,g,a,b){if((f=d.get(f))&&f[A]){b=b===q?true:!!b;a=a===q?true:!!a;if(!g||(g=d.get(g))===v)f.scrollIntoView(a);else{if(i(g,9))g=n(g);var c=!!n(g),e=d.offset(f),l=c?{left:d.scrollLeft(g),top:d.scrollTop(g)}:d.offset(g),x={left:e[D]-l[D],top:e[B]-l[B]};e=c?d.viewportHeight(g):g.clientHeight;l=c?d.viewportWidth(g):g.clientWidth;var E=d[z](g),F=d[C](g),G=E+l,H=F+e,I=f.offsetHeight;f=f.offsetWidth;var J=x.left+E-(c?0:w(d.css(g,"borderLeftWidth"))||0);c=x.top+F-(c?0:w(d.css(g,
"borderTopWidth"))||0);x=J+f;var K=c+I,L,M;if(I>e||c<F||a)L=c;else if(K>H)L=K-e;if(b)if(f>l||J<E||a)M=J;else if(x>G)M=x-l;d[C](g,L);d[z](g,M)}}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});m.each(["Left","Top"],function(f,g){var a="scroll"+f;d[a]=function(b,c){if(m.isNumber(b))arguments.callee(v,b);else{b=d.get(b);var e=0,l=n(b);if(l){if(c!==q){e=f=="Left"?c:d.scrollLeft(l);var x=f=="Top"?c:d.scrollTop(l);l.scrollTo(e,x)}e=l.document;e=l[g?"pageYOffset":"pageXOffset"]||e.documentElement[a]||
e.body[a]}else if(s(b=d.get(b)))e=c===q?b[a]:b[a]=c;return c===q?e:q}}});m.each(["Width","Height"],function(f){d["doc"+f]=function(g){g=d.get(g);g=n(g).document;return t(g.documentElement["scroll"+f],g.body["scroll"+f],d["viewport"+f](g))};d["viewport"+f]=function(g){g=d.get(g);var a="inner"+f;g=n(g);var b=g.document;return a in g?g[a]:o?b.documentElement["client"+f]:b.body["client"+f]}});return d},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(m,d,r){function q(a,b){var c=[],e;e=b===r?[s]:q(b,r);o(e,function(l){D.apply(c,u(a,l))});if(m.isString(a)&&a.indexOf(",")>-1||e.length>1)f(c);c.each=m.bind(o,r,c);return c}function u(a,b){var c=[];n("sizzle");if(z(a))a=m.trim(a);if(z(a)&&a.indexOf(",")>-1)c=y(a,b);else{if(z(a)&&!k.exec(String(a))){c=a;var e=[],l=n("sizzle");l&&l(c,b,e);c=e}else c=v(a,b);c=c}return c=c}function y(a,b){var c=[],e=a.split(",");o(e,function(l){D.apply(c,u(l,b))});return c}function v(a,
b){var c,e,l=[],x;if(z(a))if(C.test(a)){if(e=j(a.slice(1),b))l=[e]}else{if(c=k.exec(a)){e=c[1];x=c[2];c=c[3];if(b=e?j(e,b):b)if(c)if(!e||a.indexOf(B)!=-1)l=[].concat(g(c,x,b));else{if((e=j(e,b))&&d.hasClass(e,c))l=[e]}else if(x)l=p(x,b)}}else if(a&&(t(a)||A(a)))l=i(a,function(E){return h(E,b)});else if(a)if(h(a,b))l=[a];return l}function h(a,b){if(!a)return false;if(b==s)return true;return d.__contains(b,a)}function j(a,b){if(!b)return null;var c=b;if(b.nodeType!==9)c=b.ownerDocument;c=c.getElementById(a);
if(!h(c,b))return null;return c}function p(a,b){return b&&w(b.getElementsByTagName(a))||[]}var s=document,i=m.filter,n=m.require,o=m.each,t=m.isArray,w=m.makeArray,A=d._isNodeList,D=Array.prototype.push,B=" ",z=m.isString,C=/^#[\w-]+$/,k=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,f;(function(){var a,b,c=true;[0,0].sort(function(){c=false;return 0});f=function(e){if(a){b=c;e.sort(a);if(b)for(var l=1,x=e.length;l<x;)if(e[l]===e[l-1])e.splice(l,1);else l++}return e};a=s.documentElement.compareDocumentPosition?
function(e,l){if(e==l){b=true;return 0}if(!e.compareDocumentPosition||!l.compareDocumentPosition)return e.compareDocumentPosition?-1:1;return e.compareDocumentPosition(l)&4?-1:1}:function(e,l){if(e==l){b=true;return 0}else if(e.sourceIndex&&l.sourceIndex)return e.sourceIndex-l.sourceIndex}})();(function(){var a=s.createElement("div");a.appendChild(s.createComment(""));if(a.getElementsByTagName("*").length>0)p=function(b,c){var e=w(c.getElementsByTagName(b));if(b==="*"){for(var l=[],x=0,E;E=e[x++];)E.nodeType===
1&&l.push(E);e=l}return e}})();var g=s.getElementsByClassName?function(a,b,c){if(!c)return[];c=a=w(c.getElementsByClassName(a));var e=0,l=a.length,x;if(b&&b!=="*")for(c=w();e<l;++e){x=a[e];x.nodeName.toLowerCase()==b.toLowerCase()&&c.push(x)}return c}:s.querySelectorAll?function(a,b,c){return c&&w(c.querySelectorAll((b?b:"")+"."+a))||[]}:function(a,b,c){if(!c)return[];b=w(c.getElementsByTagName(b||"*"));c=[];for(var e=0,l=b.length,x;e<l;++e){x=b[e];d.hasClass(x,a)&&c.push(x)}return c};m.mix(d,{query:q,
get:function(a,b){return q(a,b)[0]||null},unique:f,filter:function(a,b,c){a=q(a,c);c=n("sizzle");var e,l,x,E=[];if(z(b)&&(e=k.exec(b))&&!e[1]){l=e[2];x=e[3];b=function(F){var G=true,H=true;if(l)G=F.nodeName.toLowerCase()==l.toLowerCase();if(x)H=d.hasClass(F,x);return H&&G}}if(m.isFunction(b))E=m.filter(a,b);else if(b&&c)E=c.matches(b,a);return E},test:function(a,b,c){a=q(a,c);return a.length&&d.filter(a,b,c).length===a.length}});return d},{requires:["dom/base"]});
KISSY.add("dom/style-ie",function(m,d,r,q){if(!r.ie)return d;var u=document,y=u.documentElement,v=q._CUSTOM_STYLES,h=/^-?\d+(?:px)?$/i,j=/^-?\d/,p=/opacity=([^)]*)/,s=/alpha\([^)]*\)/i;try{if(m.isNullOrUndefined(y.style.opacity))v.opacity={get:function(o,t){return p.test((t&&o.currentStyle?o.currentStyle.filter:o.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(o,t){t=parseFloat(t);var w=o.style,A=o.currentStyle,D=isNaN(t)?"":"alpha(opacity="+t*100+")",B=A&&A.filter||w.filter||
"";w.zoom=1;if(t>=1&&m.trim(B.replace(s,""))===""){w.removeAttribute("filter");if(A&&!A.filter)return}w.filter=s.test(B)?B.replace(s,D):B+", "+D}}}catch(i){}r=r.ie==8;var n={};n.thin=r?"1px":"2px";n.medium=r?"3px":"4px";n.thick=r?"5px":"6px";m.each(["","Top","Left","Right","Bottom"],function(o){var t="border"+o+"Width",w="border"+o+"Style";v[t]={get:function(A,D){var B=D?A.currentStyle:0,z=B&&String(B[t])||undefined;if(z&&z.indexOf("px")<0)z=n[z]&&B[w]!=="none"?n[z]:0;return z}}});if(!(u.defaultView||
{}).getComputedStyle&&y.currentStyle)d._getComputedStyle=function(o,t){t=d._cssProps[t]||t;var w=o.currentStyle&&o.currentStyle[t];if(!h.test(w)&&j.test(w)){var A=o.style,D=A.left,B=o.runtimeStyle&&o.runtimeStyle.left;if(B)o.runtimeStyle.left=o.currentStyle.left;A.left=t==="fontSize"?"1em":w||0;w=A.pixelLeft+"px";A.left=D;if(B)o.runtimeStyle.left=B}return w===""?"auto":w};return d},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(m,d,r,q){function u(a,b,c){var e={},l;for(l in b){e[l]=a[s][l];a[s][l]=b[l]}c.call(a);for(l in b)a[s][l]=e[l]}function y(a,b,c){var e;if(a.nodeType===3||a.nodeType===8||!(e=a[s]))return q;b=b.replace(w,A);var l,x=C[b];b=k[b]||b;if(c!==q){if(c===null||c===B)c=B;else if(!isNaN(Number(c))&&!t[b])c+=z;if(x&&x.set)c=x.set(a,c);if(c!==q)try{a[s][b]=c}catch(E){}return q}else{if(!(x&&"get"in x&&(l=x.get(a,false))!==q))l=e[b];return l===q?"":l}}function v(a,b){if(m.isWindow(a))return b==
i?d.viewportWidth(a):d.viewportHeight(a);else if(a.nodeType==9)return b==i?d.docWidth(a):d.docHeight(a);var c=b===i?a.offsetWidth:a.offsetHeight;m.each(b===i?["Left","Right"]:["Top","Bottom"],function(e){c-=parseFloat(d.css(a,"padding"+e))||0;c-=parseFloat(d.css(a,"border"+e+"Width"))||0});return c}var h=document,j=h.documentElement,p=r.ie,s="style",i="width",n=parseInt,o=/^-?\d+(?:px)?$/i,t={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},w=/-([a-z])/ig,A=function(a,
b){return b.toUpperCase()},D=/([A-Z]|^ms)/g,B="",z="px",C={},k={},f={};if(j[s].cssFloat!==q)k["float"]="cssFloat";else if(j[s].styleFloat!==q)k["float"]="styleFloat";m.mix(d,{_CUSTOM_STYLES:C,_cssProps:k,_getComputedStyle:function(a,b){var c="",e={},l=a.ownerDocument;b=b.replace(D,"-$1").toLowerCase();if(e=l.defaultView.getComputedStyle(a,null))c=e.getPropertyValue(b)||e[b];if(c==""&&!d.__contains(l.documentElement,a)){b=k[b]||b;c=a[s][b]}return c},style:function(a,b,c){if(m.isPlainObject(b))for(var e in b)d.style(a,
e,b[e]);else if(c===q){if(a=d.get(a))return y(a,b,c)}else d.query(a).each(function(l){y(l,b,c)})},css:function(a,b,c){if(m.isPlainObject(b))for(var e in b)d.css(a,e,b[e]);else{b=b.replace(w,A);e=C[b];if(c===q){a=d.get(a);c="";if(!(e&&"get"in e&&(c=e.get(a,true))!==q))c=d._getComputedStyle(a,b);return c===q?"":c}else d.style(a,b,c)}},show:function(a){d.query(a).each(function(b){b[s].display=d.data(b,"display")||B;if(d.css(b,"display")==="none"){var c=b.tagName,e=f[c],l;if(!e){l=h.createElement(c);
h.body.appendChild(l);e=d.css(l,"display");d.remove(l);f[c]=e}d.data(b,"display",e);b[s].display=e}})},hide:function(a){d.query(a).each(function(b){var c=b[s],e=c.display;if(e!=="none"){e&&d.data(b,"display",e);c.display="none"}})},toggle:function(a){d.query(a).each(function(b){d.css(b,"display")==="none"?d.show(b):d.hide(b)})},addStyleSheet:function(a,b,c){if(m.isString(a)){c=b;b=a;a=window}a=d.get(a);a=d._getWin(a).document;var e;if(c&&(c=c.replace("#",B)))e=d.get("#"+c,a);if(!e){e=d.create("<style>",
{id:c},a);d.get("head",a).appendChild(e);if(e.styleSheet)e.styleSheet.cssText=b;else e.appendChild(a.createTextNode(b))}},unselectable:function(a){d.query(a).each(function(b){if(r.gecko)b[s].MozUserSelect="none";else if(r.webkit)b[s].KhtmlUserSelect="none";else if(r.ie||r.opera){var c=0,e=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=e[c++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable",
"on")}}})}});m.each([i,"height"],function(a){d[a]=function(b,c){var e=d.css(b,a,c);if(e)e=parseFloat(e);return e}});var g={position:"absolute",visibility:"hidden",display:"block"};m.each(["height","width"],function(a){C[a]={get:function(b,c){var e;if(c){if(b.offsetWidth!==0)e=v(b,a);else u(b,g,function(){e=v(b,a)});return e+"px"}},set:function(b,c){if(o.test(c)){c=parseFloat(c);if(c>=0)return c+"px"}else return c}}});m.each(["left","top"],function(a){C[a]={get:function(b,c){if(c){var e=d._getComputedStyle(b,
a);if(e==="auto"){e=0;if(m.inArray(d.css(b,"position"),["absolute","fixed"])){e=b[a==="left"?"offsetLeft":"offsetTop"];if(p&&document.documentMode!=9||r.opera)e-=b.offsetParent["client"+(a=="left"?"Left":"Top")]||0;e=e-(n(d.css(b,"margin-"+a))||0)}}return e}}}});return d},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(m,d,r){function q(h,j,p,s,i,n){if(!(h=d.get(h)))return null;if(j===0)return h;n||(h=h[p]);if(!h)return null;i=i&&d.get(i)||null;if(j===r)j=1;n=[];var o=m.isArray(j),t,w;if(m.isNumber(j)){t=0;w=j;j=function(){return++t===w}}for(;h&&h!=i;){if(v(h)&&u(h,j)&&(!s||s(h))){n.push(h);if(!o)break}h=h[p]}return o?n:n[0]||null}function u(h,j){if(!j)return true;if(m.isArray(j))for(var p=0;p<j.length;p++){if(d.test(h,j[p]))return true}else if(d.test(h,j))return true;return false}
function y(h,j,p){var s=[];var i=h=d.get(h);if(h&&p)i=h.parentNode;if(i){p=0;for(i=i.firstChild;i;i=i.nextSibling)if(v(i)&&i!==h&&(!j||d.test(i,j)))s[p++]=i}return s}var v=d._isElementNode;m.mix(d,{closest:function(h,j,p){return q(h,j,"parentNode",function(s){return s.nodeType!=d.DOCUMENT_FRAGMENT_NODE},p,true)},parent:function(h,j,p){return q(h,j,"parentNode",function(s){return s.nodeType!=d.DOCUMENT_FRAGMENT_NODE},p)},first:function(h,j){var p=d.get(h);if(!p||!p.firstChild)return null;return q(p.firstChild,
j,"nextSibling",r,r,true)},last:function(h,j){var p=d.get(h);if(!p||!p.lastChild())return null;return q(p.lastChild,j,"previousSibling",r,r,true)},next:function(h,j){return q(h,j,"nextSibling",r)},prev:function(h,j){return q(h,j,"previousSibling",r)},siblings:function(h,j){return y(h,j,true)},children:function(h,j){return y(h,j,r)},__contains:document.documentElement.contains?function(h,j){if(h.nodeType==d.TEXT_NODE)return false;var p;if(j.nodeType==d.TEXT_NODE){j=j.parentNode;p=true}else if(j.nodeType==
d.DOCUMENT_NODE)return false;else p=h!==j;return p&&(h.contains?h.contains(j):true)}:document.documentElement.compareDocumentPosition?function(h,j){return!!(h.compareDocumentPosition(j)&16)}:0,contains:function(h,j){h=d.get(h);j=d.get(j);return d.__contains(h,j)},equals:function(h,j){h=d.query(h);j=d.query(j);if(h.length!=j.length)return false;for(var p=h.length;p>=0;p--)if(h[p]!=j[p])return false;return true}});return d},{requires:["./base"]});
KISSY.add("dom",function(m,d){return d},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
