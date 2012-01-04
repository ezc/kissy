/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jan 4 20:29
*/
KISSY.add("dom/attr",function(s,c,u,z){function D(q,f){f=B[f]||f;var h=F[f];return h&&h.get?h.get(q,f):q[f]}u=document.documentElement;var E=!u.hasAttribute,t=u.textContent===z?"innerText":"textContent",C=c._nodeName,l=c._isElementNode,r=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,w=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea)?$/i,m=/:|^on/,o=/\r/g,p={},x={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1,scrollTop:1,scrollLeft:1},y={tabindex:{get:function(q){var f=q.getAttributeNode("tabindex");return f&&f.specified?parseInt(f.value,10):w.test(q.nodeName)||j.test(q.nodeName)&&q.href?0:z}},style:{get:function(q){return q.style.cssText},set:function(q,f){q.style.cssText=f}}},B={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},A={get:function(q,f){return c.prop(q,f)?f.toLowerCase():z},set:function(q,f,h){if(f===false)c.removeAttr(q,h);else{f=B[h]||h;if(f in q)q[f]=true;q.setAttribute(h,h.toLowerCase())}return h}},F={},G={},H={option:{get:function(q){var f=q.attributes.value;return!f||f.specified?q.value:q.text}},select:{get:function(q){var f=q.selectedIndex,h=q.options;q=q.type==="select-one";if(f<0)return null;else if(q)return c.val(h[f]);f=[];q=0;for(var e=
h.length;q<e;++q)h[q].selected&&f.push(c.val(h[q]));return f},set:function(q,f){var h=s.makeArray(f);s.each(q.options,function(e){e.selected=s.inArray(c.val(e),h)});if(!h.length)q.selectedIndex=-1;return h}}};if(E){G={get:function(q,f){var h;return(h=q.getAttributeNode(f))&&h.nodeValue!==""?h.nodeValue:z},set:function(q,f,h){var e=q.getAttributeNode(h);if(e)e.nodeValue=f;else try{var i=q.ownerDocument.createAttribute(h);i.value=f;q.setAttributeNode(i)}catch(k){return q.setAttribute(h,f,0)}}};p=B;
y.tabIndex=y.tabindex;s.each(["href","src","width","height","colSpan","rowSpan"],function(q){y[q]={get:function(f){f=f.getAttribute(q,2);return f===null?z:f}}});H.button=y.value=G}s.each(["radio","checkbox"],function(q){H[q]={get:function(f){return f.getAttribute("value")===null?"on":f.value},set:function(f,h){if(s.isArray(h))return f.checked=s.inArray(c.val(f),h)}}});s.mix(c,{prop:function(q,f,h){q=c.query(q);if(s.isPlainObject(f))for(var e in f)c.prop(q,e,f[e]);else{f=B[f]||f;var i=F[f];if(h!==
z)q.each(function(k){if(i&&i.set)i.set(k,h,f);else k[f]=h});else if(q.length)return D(q[0],f)}},hasProp:function(q,f){for(var h=c.query(q),e=0;e<h.length;e++)if(D(h[e],f)!==z)return true;return false},removeProp:function(q,f){f=B[f]||f;c.query(q).each(function(h){try{h[f]=z;delete h[f]}catch(e){}})},attr:function(q,f,h,e){var i=c.query(q);if(s.isPlainObject(f)){e=h;for(var k in f)f.hasOwnProperty(k)&&c.attr(i,k,f[k],e)}else if(f=s.trim(f)){if(e&&x[f])return c[f](q,h);f=f.toLowerCase();if(e&&x[f])return c[f](q,
h);f=p[f]||f;var a;q=i[0];a=r.test(f)?A:m.test(f)?G:y[f];if(h===z){if(q){if(C(q,"form"))a=G;if(a&&a.get)return a.get(q,f);i=q.getAttribute(f);return i===null?z:i}}else i.each(function(b){if(C(b,"form"))a=G;a&&a.set?a.set(b,h,f):b.setAttribute(f,""+h)})}},removeAttr:function(q,f){f=f.toLowerCase();f=p[f]||f;c.query(q).each(function(h){if(l(h)){var e;h.removeAttribute(f);if(r.test(f)&&(e=B[f]||f)in h)h[e]=false}})},hasAttr:E?function(q,f){f=f.toLowerCase();for(var h=c.query(q),e=0;e<h.length;e++){var i=
h[e].getAttributeNode(f);if(i&&i.specified)return true}return false}:function(q,f){for(var h=c.query(q),e=0;e<h.length;e++)if(h[e].hasAttribute(f))return true;return false},val:function(q,f){var h,e;if(f===z){var i=c.get(q);if(i){if((h=H[i.nodeName.toLowerCase()]||H[i.type])&&"get"in h&&(e=h.get(i,"value"))!==z)return e;e=i.value;return typeof e==="string"?e.replace(o,""):e==null?"":e}}else c.query(q).each(function(k){if(k.nodeType===1){var a=f;if(a==null)a="";else if(typeof a==="number")a+="";else if(s.isArray(a))a=
s.map(a,function(b){return a==null?"":b+""});h=H[k.nodeName.toLowerCase()]||H[k.type];if(!h||!("set"in h)||h.set(k,a,"value")===z)k.value=a}})},text:function(q,f){if(f===z){var h=c.get(q);if(l(h))return h[t]||"";else if(c._nodeTypeIs(h,c.TEXT_NODE))return h.nodeValue;return z}else c.query(q).each(function(e){if(l(e))e[t]=f;else if(c._nodeTypeIs(e,c.TEXT_NODE))e.nodeValue=f})}});return c},{requires:["./base","ua"]});
KISSY.add("dom/base",function(s,c,u){function z(t,C){return t&&t.nodeType===C}var D={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},E={_isCustomDomain:function(t){t=t||window;var C=t.document.domain;t=t.location.hostname;return C!=t&&C!="["+t+"]"},_genEmptyIframeSrc:function(t){t=t||window;if(c.ie&&E._isCustomDomain(t))return"javascript:void(function(){"+
encodeURIComponent("document.open();document.domain='"+t.document.domain+"';document.close();")+"}())"},_NODE_TYPE:D,_isElementNode:function(t){return z(t,E.ELEMENT_NODE)},_getWin:function(t){return t&&"scrollTo"in t&&t.document?t:z(t,E.DOCUMENT_NODE)?t.defaultView||t.parentWindow:t===u||t===null?window:false},_nodeTypeIs:z,_isNodeList:function(t){return t&&!t.nodeType&&t.item&&!t.setTimeout},_nodeName:function(t,C){return t&&t.nodeName.toLowerCase()===C.toLowerCase()}};s.mix(E,D);return E},{requires:["ua"]});
KISSY.add("dom/class",function(s,c,u){function z(t,C,l,r){if(!(C=s.trim(C)))return r?false:u;t=c.query(t);var w=t.length,j=C.split(D);C=[];for(var m=0;m<j.length;m++){var o=s.trim(j[m]);o&&C.push(o)}for(m=0;m<w;m++){j=t[m];if(c._isElementNode(j)){j=l(j,C,C.length);if(j!==u)return j}}if(r)return false;return u}var D=/[\.\s]\s*\.?/,E=/[\n\t]/g;s.mix(c,{hasClass:function(t,C){return z(t,C,function(l,r,w){if(l=l.className){l=(" "+l+" ").replace(E," ");for(var j=0,m=true;j<w;j++)if(l.indexOf(" "+r[j]+
" ")<0){m=false;break}if(m)return true}},true)},addClass:function(t,C){z(t,C,function(l,r,w){var j=l.className;if(j){var m=(" "+j+" ").replace(E," ");j=j;for(var o=0;o<w;o++)if(m.indexOf(" "+r[o]+" ")<0)j+=" "+r[o];l.className=s.trim(j)}else l.className=C},u)},removeClass:function(t,C){z(t,C,function(l,r,w){var j=l.className;if(j)if(w){j=(" "+j+" ").replace(E," ");for(var m=0,o;m<w;m++)for(o=" "+r[m]+" ";j.indexOf(o)>=0;)j=j.replace(o," ");l.className=s.trim(j)}else l.className=""},u)},replaceClass:function(t,
C,l){c.removeClass(t,C);c.addClass(t,l)},toggleClass:function(t,C,l){var r=s.isBoolean(l),w;z(t,C,function(j,m,o){for(var p=0,x;p<o;p++){x=m[p];w=r?!l:c.hasClass(j,x);c[w?"removeClass":"addClass"](j,x)}},u)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(s,c,u,z){function D(e){var i=s.require("event");i&&i.detach(e);c.removeData(e)}function E(e,i,k){if(w(i,c.DOCUMENT_FRAGMENT_NODE)){i=i.childNodes;k=k.childNodes;for(var a=0;i[a];){k[a]&&E(e,i[a],k[a]);a++}}else if(j(i)){i=i.getElementsByTagName("*");k=k.getElementsByTagName("*");for(a=0;i[a];){k[a]&&e(i[a],k[a]);a++}}}function t(e,i){var k=s.require("event");if(!(j(i)&&!c.hasData(e))){var a=c.data(e),b;for(b in a)c.data(i,b,a[b]);if(k){k._removeData(i);k._clone(e,i)}}}
function C(e,i){i.clearAttributes&&i.clearAttributes();i.mergeAttributes&&i.mergeAttributes(e);var k=i.nodeName.toLowerCase(),a=e.childNodes;if(k==="object"&&!i.childNodes.length)for(k=0;k<a.length;k++)i.appendChild(a[k].cloneNode(true));else if(k==="input"&&(e.type==="checkbox"||e.type==="radio")){if(e.checked)i.defaultChecked=i.checked=e.checked;if(i.value!==e.value)i.value=e.value}else if(k==="option")i.selected=e.defaultSelected;else if(k==="input"||k==="textarea")i.defaultValue=e.defaultValue;
i.removeAttribute(c.__EXPANDO)}function l(e,i){var k=null,a,b;if(e&&(e.push||e.item)&&e[0]){i=i||e[0].ownerDocument;k=i.createDocumentFragment();e=s.makeArray(e);a=0;for(b=e.length;a<b;a++)k.appendChild(e[a])}return k}var r=document;u=u.ie;var w=c._nodeTypeIs,j=c._isElementNode,m=s.isString,o=r.createElement("div"),p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,x=/<([\w:]+)/,y=/^\s+/,B=u&&u<9,A=/<|&#?\w+;/,F=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;s.mix(c,{create:function(e,i,k,
a){var b=null;if(!e)return b;if(e.nodeType)return c.clone(e);if(!m(e))return b;if(a===z)a=true;if(a)e=s.trim(e);a=c._creators;var d,g;k=k||r;var n,v="div";if(A.test(e))if(n=F.exec(e))b=k.createElement(n[1]);else{e=e.replace(p,"<$1></$2>");if((n=x.exec(e))&&(d=n[1]))v=d.toLowerCase();d=(a[v]||a.div)(e,k);if(B&&(g=e.match(y)))d.insertBefore(k.createTextNode(g[0]),d.firstChild);e=d.childNodes;if(e.length===1)b=e[0].parentNode.removeChild(e[0]);else if(e.length)b=l(e,k)}else b=k.createTextNode(e);b=b;
if(s.isPlainObject(i))if(j(b))c.attr(b,i,true);else w(b,c.DOCUMENT_FRAGMENT_NODE)&&c.attr(b.childNodes,i,true);return b},_creators:{div:function(e,i){var k=i&&i!=r?i.createElement("div"):o;k.innerHTML="m<div>"+e+"</div>";return k.lastChild}},html:function(e,i,k,a){e=c.query(e);var b=e[0];if(b)if(i===z)return j(b)?b.innerHTML:null;else{var d=false;i+="";if(!i.match(/<(?:script|style)/i)&&(!B||!i.match(y))&&!f[(i.match(x)||["",""])[1].toLowerCase()])try{e.each(function(n){if(j(n)){D(n.getElementsByTagName("*"));
n.innerHTML=i}});d=true}catch(g){}if(!d){i=c.create(i,0,b.ownerDocument,false);e.each(function(n){if(j(n)){c.empty(n);c.append(i,n,k)}})}a&&a()}},remove:function(e,i){c.query(e).each(function(k){if(!i&&j(k)){var a=k.getElementsByTagName("*");D(a);D(k)}k.parentNode&&k.parentNode.removeChild(k)})},clone:function(e,i,k,a){e=c.get(e);if(!e)return null;var b=e.cloneNode(i);if(j(e)||w(e,c.DOCUMENT_FRAGMENT_NODE)){j(e)&&C(e,b);i&&E(C,e,b)}if(k){t(e,b);i&&a&&E(t,e,b)}return b},empty:function(e){c.query(e).each(function(i){c.remove(i.childNodes)})},
_nl2frag:l});var G=c._creators,H=c.create,q=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,f={option:"select",optgroup:"select",area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},h;for(h in f)(function(e){G[h]=function(i,k){return H("<"+e+">"+i+"</"+e+">",null,k)}})(f[h]);if(u<8)G.tbody=function(e,i){var k=H("<table>"+e+"</table>",null,i),a=k.children.tags("tbody")[0];k.children.length>1&&a&&!q.test(e)&&
a.parentNode.removeChild(a);return k};s.mix(G,{thead:G.tbody,tfoot:G.tbody,caption:G.tbody,colgroup:G.tbody});return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(s,c,u){var z=window,D="_ks_data_"+s.now(),E={},t={},C={};C.applet=1;C.object=1;C.embed=1;var l={hasData:function(j,m){if(j)if(m!==u){if(m in j)return true}else if(!s.isEmptyObject(j))return true;return false}},r={hasData:function(j,m){if(j==z)return r.hasData(t,m);return l.hasData(j[D],m)},data:function(j,m,o){if(j==z)return r.data(t,m,o);var p=j[D];if(o!==u){p=j[D]=j[D]||{};p[m]=o}else if(m!==u)return p&&p[m];else return p=j[D]=j[D]||{}},removeData:function(j,m){if(j==
z)return r.removeData(t,m);var o=j[D];if(m!==u){delete o[m];s.isEmptyObject(o)&&r.removeData(j)}else try{delete j[D]}catch(p){j[D]=u}}},w={hasData:function(j,m){var o=j[D];if(!o)return false;return l.hasData(E[o],m)},data:function(j,m,o){if(C[j.nodeName.toLowerCase()])return u;var p=j[D];if(!p){if(m!==u&&o===u)return u;p=j[D]=s.guid()}j=E[p];if(o!==u){j=E[p]=E[p]||{};j[m]=o}else if(m!==u)return j&&j[m];else return j=E[p]=E[p]||{}},removeData:function(j,m){var o=j[D],p;if(o){p=E[o];if(m!==u){delete p[m];
s.isEmptyObject(p)&&w.removeData(j)}else{delete E[o];try{delete j[D]}catch(x){j[D]=u}j.removeAttribute&&j.removeAttribute(D)}}}};s.mix(c,{__EXPANDO:D,hasData:function(j,m){for(var o=false,p=c.query(j),x=0;x<p.length;x++){o=p[x];if(o=o.nodeType?w.hasData(o,m):r.hasData(o,m))break}return o},data:function(j,m,o){j=c.query(j);var p=j[0];if(s.isPlainObject(m)){for(var x in m)c.data(j,x,m[x]);return u}if(o===u){if(p)return p.nodeType?w.data(p,m,o):r.data(p,m,o)}else j.each(function(y){y.nodeType?w.data(y,
m,o):r.data(y,m,o)});return u},removeData:function(j,m){c.query(j).each(function(o){o.nodeType?w.removeData(o,m):r.removeData(o,m)})}});return c},{requires:["./base"]});KISSY.add("dom",function(s,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
KISSY.add("dom/insertion",function(s,c,u){function z(p){for(var x=0;x<p.length;x++){var y=p[x];if(y.nodeType==u.DOCUMENT_FRAGMENT_NODE)z(y.childNodes);else if(l(y,"input")){if(y.type==="checkbox"||y.type==="radio")y.defaultChecked=y.checked}else if(w(y)){y=y.getElementsByTagName("input");for(var B=0;B<y.length;B++)z(y[B])}}}function D(p,x){var y=[],B,A,F;for(B=0;p[B];B++){A=p[B];F=A.nodeName.toLowerCase();if(A.nodeType==u.DOCUMENT_FRAGMENT_NODE)y.push.apply(y,D(r(A.childNodes),x));else if(F==="script"&&
(!A.type||j.test(A.type))){A.parentNode&&A.parentNode.removeChild(A);x&&x.push(A)}else{if(w(A)&&!C.test(F)){F=[];var G,H,q=A.getElementsByTagName("script");for(H=0;H<q.length;H++){G=q[H];(!G.type||j.test(G.type))&&F.push(G)}p.splice.apply(p,[B+1,0].concat(F))}y.push(A)}}return y}function E(p){if(p.src)s.getScript(p.src);else(p=s.trim(p.text||p.textContent||p.innerHTML||""))&&s.globalEval(p)}function t(p,x,y,B){p=u.query(p);if(B)B=[];p=D(p,B);c.ie<8&&z(p);x=u.query(x);var A=p.length,F=x.length;if(!(!A&&
(!B||!B.length)||!F)){p=u._nl2frag(p);var G;if(F>1)G=u.clone(p,true);for(var H=0;H<F;H++){var q=x[H];if(A){var f=H>0?u.clone(G,true):p;y(f,q)}B&&B.length&&s.each(B,E)}}}var C=/^(?:button|input|object|select|textarea)$/i,l=u._nodeName,r=s.makeArray,w=u._isElementNode,j=/\/(java|ecma)script/i;s.mix(u,{insertBefore:function(p,x,y){t(p,x,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,A)},y)},insertAfter:function(p,x,y){t(p,x,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,A.nextSibling)},
y)},appendTo:function(p,x,y){t(p,x,function(B,A){A.appendChild(B)},y)},prependTo:function(p,x,y){t(p,x,function(B,A){A.insertBefore(B,A.firstChild)},y)}});var m={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},o;for(o in m)u[o]=u[m[o]];return u},{requires:["ua","./create"]});
KISSY.add("dom/offset",function(s,c,u,z){function D(f){var h,e=0;h=0;var i=C.body,k=m(f[y]);if(f[q]){h=f[q]();e=h[B];h=h[A];f=l&&C.documentMode!=9&&(o?r.clientTop:i.clientTop)||0;e-=l&&C.documentMode!=9&&(o?r.clientLeft:i.clientLeft)||0;h-=f;if(u.mobile=="apple"){e-=c[G](k);h-=c[H](k)}}return{left:e,top:h}}function E(f,h){var e={left:0,top:0},i=m(f[y]),k=f;h=h||i;do{var a;if(i==h){var b=k;a=D(b);b=m(b[y]);a.left+=c[G](b);a.top+=c[H](b);a=a}else a=D(k);a=a;e.left+=a.left;e.top+=a.top}while(i&&i!=h&&
(k=i.frameElement)&&(i=i.parent));return e}var t=window,C=document,l=u.ie,r=C.documentElement,w=c._isElementNode,j=c._nodeTypeIs,m=c._getWin,o=C.compatMode==="CSS1Compat",p=Math.max,x=parseInt,y="ownerDocument",B="left",A="top",F=s.isNumber,G="scrollLeft",H="scrollTop",q="getBoundingClientRect";s.mix(c,{offset:function(f,h,e){if(h===z){f=c.get(f);var i;if(f)i=E(f,e);return i}c.query(f).each(function(k){if(c.css(k,"position")==="static")k.style.position="relative";var a=E(k),b={},d,g;for(g in h){d=
x(c.css(k,g),10)||0;b[g]=d+h[g]-a[g]}c.css(k,b)})},scrollIntoView:function(f,h,e,i,k){if(f=c.get(f)){if(h)h=c.get(h);if(!h)h=f.ownerDocument;if(k!==true){i=i===z?true:!!i;e=e===z?true:!!e}if(j(h,c.DOCUMENT_NODE))h=m(h);var a=!!m(h);k=c.offset(f);var b=c.outerHeight(f);f=c.outerWidth(f);var d,g,n,v;if(a){a=h;g=c.height(a);d=c.width(a);v={left:c.scrollLeft(a),top:c.scrollTop(a)};a={left:k[B]-v[B],top:k[A]-v[A]};k={left:k[B]+f-(v[B]+d),top:k[A]+b-(v[A]+g)};v=v}else{d=c.offset(h);g=h.clientHeight;n=h.clientWidth;
v={left:c.scrollLeft(h),top:c.scrollTop(h)};a={left:k[B]-d[B]-(x(c.css(h,"borderLeftWidth"))||0),top:k[A]-d[A]-(x(c.css(h,"borderTopWidth"))||0)};k={left:k[B]+f-(d[B]+n+(x(c.css(h,"borderRightWidth"))||0)),top:k[A]+b-(d[A]+g+(x(c.css(h,"borderBottomWidth"))||0))}}if(a.top<0||k.top>0)if(e===true)c.scrollTop(h,v.top+a.top);else if(e===false)c.scrollTop(h,v.top+k.top);else a.top<0?c.scrollTop(h,v.top+a.top):c.scrollTop(h,v.top+k.top);if(i)if(a.left<0||k.left>0)if(e===true)c.scrollLeft(h,v.left+a.left);
else if(e===false)c.scrollLeft(h,v.left+k.left);else a.left<0?c.scrollLeft(h,v.left+a.left):c.scrollLeft(h,v.left+k.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});s.each(["Left","Top"],function(f,h){var e="scroll"+f;c[e]=function(i,k){if(F(i))return arguments.callee(t,i);i=c.get(i);var a,b=m(i);if(b)if(k!==z){k=parseFloat(k);var d=f=="Left"?k:c.scrollLeft(b),g=f=="Top"?k:c.scrollTop(b);b.scrollTo(d,g)}else{a=b["page"+(h?"Y":"X")+"Offset"];if(!F(a)){b=b.document;a=b.documentElement[e];
F(a)||(a=b.body[e])}}else if(w(i))if(k!==z)i[e]=parseFloat(k);else a=i[e];return a}});s.each(["Width","Height"],function(f){c["doc"+f]=function(h){h=c.get(h);h=m(h).document;return p(h.documentElement["scroll"+f],h.body["scroll"+f],c["viewport"+f](h))};c["viewport"+f]=function(h){h=c.get(h);var e="client"+f;h=m(h).document;var i=h.body,k=h.documentElement[e];return h.compatMode==="CSS1Compat"&&k||i&&i[e]||k}});return c},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(s,c,u){function z(a){var b,d;for(d=0;d<this.length;d++){b=this[d];if(a(b,d)===false)break}}function D(a,b){var d,g,n=typeof a==="string",v=b===u&&(g=1)?[o]:D(b,u);if(a)if(n){a=q(a);if(v.length==1&&a)d=t(a,v[0])}else if(g&&(a.nodeType||a.setTimeout))d=[a];else{if(g&&x(a))d=a}else d=[];if(!d){d=[];if(a){for(g=0;g<v.length;g++)F.apply(d,E(a,v[g]));if(d.length>1&&(v.length>1||n&&a.indexOf(H)>-1))i(d)}}d.each=z;return d}function E(a,b){var d=[];if((d=typeof a==="string")&&
a.match(e)||!d)d=C(a,b);else{if(d&&a.indexOf(H)>-1){d=[];var g,n=a.split(/\s*,\s*/);for(g=0;g<n.length;g++)F.apply(d,E(n[g],b));d=d}else{d=[];(g=s.require("sizzle"))&&g(a,b,d);d=d}d=d}return d=d}function t(a,b){var d,g,n,v;if(h.test(a))d=(g=r(a.slice(1),b))?[g]:[];else if(n=e.exec(a)){g=n[1];v=n[2];n=n[3];if(b=g?r(g,b):b)if(n)if(!g||a.indexOf(G)!=-1)d=[].concat(k(n,v,b));else{if((g=r(g,b))&&j(g,n))d=[g]}else if(v)d=w(v,b);d=d||[]}return d}function C(a,b){var d;if(typeof a==="string")d=t(a,b)||[];
else if(x(a)||B(a))d=p(a,function(g){return l(g,b)});else if(l(a,b))d=[a];return d}function l(a,b){if(!a)return false;if(b==o)return true;return c.contains(b,a)}function r(a,b){var d=b;if(b.nodeType!==c.DOCUMENT_NODE)d=b.ownerDocument;d=d.getElementById(a);if(!(d&&d.id===a))if(d&&d.parentNode)if(m(d,a))l(d,b)||(d=null);else d=c.filter(f,"#"+a,b)[0]||null;else d=null;return d}function w(a,b){return b&&y(b.getElementsByTagName(a))||[]}function j(a,b){var d;return(d=a.className)&&(" "+d+" ").indexOf(" "+
b+" ")!==-1}function m(a,b){var d=a.getAttributeNode("id");return d&&d.nodeValue===b}var o=document,p=s.filter,x=s.isArray,y=s.makeArray,B=c._isNodeList,A=c._nodeName,F=Array.prototype.push,G=" ",H=",",q=s.trim,f="*",h=/^#[\w-]+$/,e=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,i=s.noop;(function(){var a,b,d=true;[0,0].sort(function(){d=false;return 0});i=function(g){if(a){b=d;g.sort(a);if(b)for(var n=1,v=g.length;n<v;)if(g[n]===g[n-1])g.splice(n,1);else n++}return g};a=o.documentElement.compareDocumentPosition?
function(g,n){if(g==n){b=true;return 0}if(!g.compareDocumentPosition||!n.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(n)&4?-1:1}:function(g,n){if(g==n){b=true;return 0}else if(g.sourceIndex&&n.sourceIndex)return g.sourceIndex-n.sourceIndex}})();(function(){var a=o.createElement("div");a.appendChild(o.createComment(""));if(a.getElementsByTagName(f).length>0)w=function(b,d){var g=y(d.getElementsByTagName(b));if(b===f){for(var n=[],v=0,I;I=g[v++];)I.nodeType===
1&&n.push(I);g=n}return g}})();var k=o.getElementsByClassName?function(a,b,d){if(!d)return[];a=d.getElementsByClassName(a);var g=0,n=a.length,v;if(b&&b!==f)for(d=[];g<n;++g){v=a[g];A(v,b)&&d.push(v)}else d=y(a);return d}:o.querySelectorAll?function(a,b,d){return d&&y(d.querySelectorAll((b?b:"")+"."+a))||[]}:function(a,b,d){if(!d)return[];b=d.getElementsByTagName(b||f);d=[];for(var g=0,n=b.length,v;g<n;++g){v=b[g];j(v,a)&&d.push(v)}return d};s.mix(c,{query:D,get:function(a,b){return D(a,b)[0]||null},
unique:i,filter:function(a,b,d){a=D(a,d);d=s.require("sizzle");var g,n,v,I,K=[];if(typeof b==="string"&&(b=q(b))&&(g=e.exec(b))){v=g[1];n=g[2];I=g[3];if(v){if(v&&!n&&!I)b=function(J){return m(J,v)}}else b=function(J){var L=true,M=true;if(n)L=A(J,n);if(I)M=j(J,I);return M&&L}}if(s.isFunction(b))K=s.filter(a,b);else if(b&&d)K=d.matches(b,a);return K},test:function(a,b,d){a=D(a,d);return a.length&&c.filter(a,b,d).length===a.length}});return c},{requires:["./base"]});
KISSY.add("dom/style-ie",function(s,c,u,z){if(!u.ie)return c;var D=document,E=D.documentElement,t=z._CUSTOM_STYLES,C=/^-?\d+(?:px)?$/i,l=/^-?\d/,r=/opacity=([^)]*)/,w=/alpha\([^)]*\)/i;t.backgroundPosition={get:function(o,p){return p?o.currentStyle.backgroundPositionX+" "+o.currentStyle.backgroundPositionY:o.style.backgroundPosition}};try{if(E.style.opacity==null)t.opacity={get:function(o,p){return r.test((p&&o.currentStyle?o.currentStyle.filter:o.style.filter)||"")?parseFloat(RegExp.$1)/100+"":p?
"1":""},set:function(o,p){p=parseFloat(p);var x=o.style,y=o.currentStyle,B=isNaN(p)?"":"alpha(opacity="+p*100+")",A=s.trim(y&&y.filter||x.filter||"");x.zoom=1;if(p>=1&&s.trim(A.replace(w,""))===""){x.removeAttribute("filter");if(y&&!y.filter)return}x.filter=w.test(A)?A.replace(w,B):A+(A?", ":"")+B}}}catch(j){}u=u.ie==8;var m={};m.thin=u?"1px":"2px";m.medium=u?"3px":"4px";m.thick=u?"5px":"6px";s.each(["","Top","Left","Right","Bottom"],function(o){var p="border"+o+"Width",x="border"+o+"Style";t[p]=
{get:function(y,B){var A=B?y.currentStyle:0,F=A&&String(A[p])||undefined;if(F&&F.indexOf("px")<0)F=m[F]&&A[x]!=="none"?m[F]:0;return F}}});if(!(D.defaultView||{}).getComputedStyle&&E.currentStyle)c._getComputedStyle=function(o,p){p=c._cssProps[p]||p;var x=o.currentStyle&&o.currentStyle[p];if(!C.test(x)&&l.test(x)){var y=o.style,B=y.left,A=o.runtimeStyle&&o.runtimeStyle.left;if(A)o.runtimeStyle.left=o.currentStyle.left;y.left=p==="fontSize"?"1em":x||0;x=y.pixelLeft+"px";y.left=B;if(A)o.runtimeStyle.left=
A}return x===""?"auto":x};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(s,c,u,z){function D(a){return a.replace(B,A)}function E(a,b,d){var g={},n;for(n in b){g[n]=a[j][n];a[j][n]=b[n]}d.call(a);for(n in b)a[j][n]=g[n]}function t(a,b,d){var g;if(a.nodeType===3||a.nodeType===8||!(g=a[j]))return z;b=D(b);var n,v=q[b];b=f[b]||b;if(d!==z){if(d===null||d===G)d=G;else if(!isNaN(Number(d))&&!y[b])d+=H;if(v&&v.set)d=v.set(a,d);if(d!==z)try{a[j][b]=d}catch(I){}return z}else{if(!(v&&"get"in v&&(n=v.get(a,false))!==z))n=g[b];return n===z?"":n}}function C(a,
b,d){if(s.isWindow(a))return b==m?c.viewportWidth(a):c.viewportHeight(a);else if(a.nodeType==9)return b==m?c.docWidth(a):c.docHeight(a);var g=b===m?["Left","Right"]:["Top","Bottom"],n=b===m?a.offsetWidth:a.offsetHeight;if(n>0){d!=="border"&&s.each(g,function(v){d||(n-=parseFloat(c.css(a,"padding"+v))||0);if(d==="margin")n+=parseFloat(c.css(a,d+v))||0;else n-=parseFloat(c.css(a,"border"+v+"Width"))||0});return n}n=c._getComputedStyle(a,b);if(n==null||Number(n)<0)n=a.style[b]||0;n=parseFloat(n)||0;
d&&s.each(g,function(v){n+=parseFloat(c.css(a,"padding"+v))||0;if(d!=="padding")n+=parseFloat(c.css(a,"border"+v+"Width"))||0;if(d==="margin")n+=parseFloat(c.css(a,d+v))||0});return n}var l=document,r=l.documentElement,w=u.ie,j="style",m="width",o="display"+s.now(),p=parseInt,x=/^-?\d+(?:px)?$/i,y={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},B=/-([a-z])/ig,A=function(a,b){return b.toUpperCase()},F=/([A-Z]|^ms)/g,G="",H="px",q={},f={},h={};if(r[j].cssFloat!==
z)f["float"]="cssFloat";else if(r[j].styleFloat!==z)f["float"]="styleFloat";var e,i;s.mix(c,{_camelCase:D,_CUSTOM_STYLES:q,_cssProps:f,_getComputedStyle:function(a,b){var d="",g,n=a.ownerDocument;b=b.replace(F,"-$1").toLowerCase();if(g=n.defaultView.getComputedStyle(a,null))d=g.getPropertyValue(b)||g[b];if(d==""&&!c.contains(n.documentElement,a)){b=f[b]||b;d=a[j][b]}return d},style:function(a,b,d){var g=c.query(a);a=g[0];if(s.isPlainObject(b))for(var n in b)g.each(function(v){t(v,n,b[n])});else if(d===
z){g="";if(a)g=t(a,b,d);return g}else g.each(function(v){t(v,b,d)})},css:function(a,b,d){var g=c.query(a);a=g[0];if(s.isPlainObject(b))for(var n in b)g.each(function(I){t(I,n,b[n])});else{b=D(b);var v=q[b];if(d===z){g="";if(a)if(!(v&&"get"in v&&(g=v.get(a,true))!==z))g=c._getComputedStyle(a,b);return g===z?"":g}else g.each(function(I){t(I,b,d)})}},show:function(a){c.query(a).each(function(b){b[j].display=c.data(b,o)||G;if(c.css(b,"display")==="none"){var d;a:{d=b.tagName.toLowerCase();var g,n;if(!h[d]){g=
l.body||l.documentElement;n=l.createElement(d);c.prepend(n,g);var v=c.css(n,"display");g.removeChild(n);if(v==="none"||v===""){if(e)c.prepend(e,g);else{e=l.createElement("iframe");e.frameBorder=e.width=e.height=0;c.prepend(e,g);if(n=c._genEmptyIframeSrc())e.src=n}if(!i||!e.createElement)try{i=e.contentWindow.document;i.write((l.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><head>"+(u.ie&&c._isCustomDomain()?"<script>document.domain = '"+l.domain+"';<\/script>":"")+"</head><body>");i.close()}catch(I){d=
"block";break a}n=i.createElement(d);i.body.appendChild(n);v=c.css(n,"display");g.removeChild(e)}h[d]=v}d=h[d]}c.data(b,o,d);b[j].display=d}})},hide:function(a){c.query(a).each(function(b){var d=b[j],g=d.display;if(g!=="none"){g&&c.data(b,o,g);d.display="none"}})},toggle:function(a){c.query(a).each(function(b){c.css(b,"display")==="none"?c.show(b):c.hide(b)})},addStyleSheet:function(a,b,d){if(s.isString(a)){d=b;b=a;a=window}a=c.get(a);a=c._getWin(a).document;var g;if(d&&(d=d.replace("#",G)))g=c.get("#"+
d,a);if(!g){g=c.create("<style>",{id:d},a);c.get("head",a).appendChild(g);if(g.styleSheet)g.styleSheet.cssText=b;else g.appendChild(a.createTextNode(b))}},unselectable:function(a){c.query(a).each(function(b){if(u.gecko)b[j].MozUserSelect="none";else if(u.webkit)b[j].KhtmlUserSelect="none";else if(u.ie||u.opera){var d=0,g=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=g[d++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable",
"on")}}})},innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});s.each([m,"height"],function(a){c["inner"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b){return(b=c.get(b))?C(b,a,"padding"):null};c["outer"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b,d){var g=c.get(b);return g?C(g,a,d?"margin":"border"):null};c[a]=function(b,d){var g=c.css(b,a,d);if(g)g=parseFloat(g);return g}});var k={position:"absolute",visibility:"hidden",display:"block"};s.each(["height",
"width"],function(a){q[a]={get:function(b,d){var g;if(d){if(b.offsetWidth!==0)g=C(b,a);else E(b,k,function(){g=C(b,a)});return g+"px"}},set:function(b,d){if(x.test(d)){d=parseFloat(d);if(d>=0)return d+"px"}else return d}}});s.each(["left","top"],function(a){q[a]={get:function(b,d){if(d){var g=c._getComputedStyle(b,a);if(g==="auto"){g=0;if(s.inArray(c.css(b,"position"),["absolute","fixed"])){g=b[a==="left"?"offsetLeft":"offsetTop"];if(w&&document.documentMode!=9||u.opera)g-=b.offsetParent&&b.offsetParent["client"+
(a=="left"?"Left":"Top")]||0;g=g-(p(c.css(b,"margin-"+a))||0)}g+="px"}return g}}}});return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(s,c,u){function z(l,r,w,j,m,o){if(!(l=c.get(l)))return null;if(r===0)return l;o||(l=l[w]);if(!l)return null;m=m&&c.get(m)||null;if(r===u)r=1;o=[];var p=s.isArray(r),x,y;if(s.isNumber(r)){x=0;y=r;r=function(){return++x===y}}for(;l&&l!=m;){if(t(l)&&D(l,r)&&(!j||j(l))){o.push(l);if(!p)break}l=l[w]}return p?o:o[0]||null}function D(l,r){if(!r)return true;if(s.isArray(r))for(var w=0;w<r.length;w++){if(c.test(l,r[w]))return true}else if(c.test(l,r))return true;return false}
function E(l,r,w){var j=[];var m=l=c.get(l);if(l&&w)m=l.parentNode;if(m){w=0;for(m=m.firstChild;m;m=m.nextSibling)if(t(m)&&m!==l&&(!r||c.test(m,r)))j[w++]=m}return j}var t=c._isElementNode,C=document.documentElement.contains?function(l,r){if(l.nodeType==c.TEXT_NODE)return false;var w;if(r.nodeType==c.TEXT_NODE){r=r.parentNode;w=true}else if(r.nodeType==c.DOCUMENT_NODE)return false;else w=l!==r;return w&&(l.contains?l.contains(r):true)}:document.documentElement.compareDocumentPosition?function(l,r){return!!(l.compareDocumentPosition(r)&
16)}:0;s.mix(c,{closest:function(l,r,w){return z(l,r,"parentNode",function(j){return j.nodeType!=c.DOCUMENT_FRAGMENT_NODE},w,true)},parent:function(l,r,w){return z(l,r,"parentNode",function(j){return j.nodeType!=c.DOCUMENT_FRAGMENT_NODE},w)},first:function(l,r){var w=c.get(l);return z(w&&w.firstChild,r,"nextSibling",u,u,true)},last:function(l,r){var w=c.get(l);return z(w&&w.lastChild,r,"previousSibling",u,u,true)},next:function(l,r){return z(l,r,"nextSibling",u)},prev:function(l,r){return z(l,r,"previousSibling",
u)},siblings:function(l,r){return E(l,r,true)},children:function(l,r){return E(l,r,u)},contains:function(l,r){l=c.get(l);r=c.get(r);if(l&&r)return C(l,r)},equals:function(l,r){l=c.query(l);r=c.query(r);if(l.length!=r.length)return false;for(var w=l.length;w>=0;w--)if(l[w]!=r[w])return false;return true}});return c},{requires:["./base"]});
