/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jan 5 21:11
*/
KISSY.add("dom/attr",function(s,c,u,y){function D(p,f){f=B[f]||f;var i=F[f];return i&&i.get?i.get(p,f):p[f]}u=document.documentElement;var E=!u.hasAttribute,t=u.textContent===y?"innerText":"textContent",C=c._nodeName,n=c._isElementNode,r=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,x=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea)?$/i,o=/:|^on/,q=/\r/g,m={},v={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1,scrollTop:1,scrollLeft:1},z={tabindex:{get:function(p){var f=p.getAttributeNode("tabindex");return f&&f.specified?parseInt(f.value,10):x.test(p.nodeName)||j.test(p.nodeName)&&p.href?0:y}},style:{get:function(p){return p.style.cssText},set:function(p,f){p.style.cssText=f}}},B={hidefocus:"hideFocus",tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",
frameborder:"frameBorder",contenteditable:"contentEditable"},A={get:function(p,f){return c.prop(p,f)?f.toLowerCase():y},set:function(p,f,i){if(f===false)c.removeAttr(p,i);else{f=B[i]||i;if(f in p)p[f]=true;p.setAttribute(i,i.toLowerCase())}return i}},F={},G={},H={option:{get:function(p){var f=p.attributes.value;return!f||f.specified?p.value:p.text}},select:{get:function(p){var f=p.selectedIndex,i=p.options;p=p.type==="select-one";if(f<0)return null;else if(p)return c.val(i[f]);f=[];p=0;for(var e=
i.length;p<e;++p)i[p].selected&&f.push(c.val(i[p]));return f},set:function(p,f){var i=s.makeArray(f);s.each(p.options,function(e){e.selected=s.inArray(c.val(e),i)});if(!i.length)p.selectedIndex=-1;return i}}};if(E){G={get:function(p,f){var i;return(i=p.getAttributeNode(f))&&i.nodeValue!==""?i.nodeValue:y},set:function(p,f,i){var e=p.getAttributeNode(i);if(e)e.nodeValue=f;else try{var h=p.ownerDocument.createAttribute(i);h.value=f;p.setAttributeNode(h)}catch(k){return p.setAttribute(i,f,0)}}};m=B;
z.tabIndex=z.tabindex;s.each(["href","src","width","height","colSpan","rowSpan"],function(p){z[p]={get:function(f){f=f.getAttribute(p,2);return f===null?y:f}}});H.button=z.value=G}s.each(["radio","checkbox"],function(p){H[p]={get:function(f){return f.getAttribute("value")===null?"on":f.value},set:function(f,i){if(s.isArray(i))return f.checked=s.inArray(c.val(f),i)}}});s.mix(c,{prop:function(p,f,i){p=c.query(p);if(s.isPlainObject(f))for(var e in f)c.prop(p,e,f[e]);else{f=B[f]||f;e=F[f];if(i!==y)for(var h=
p.length-1;h>=0;h--){var k=p[h];if(e&&e.set)e.set(k,i,f);else k[f]=i}else if(p.length)return D(p[0],f)}},hasProp:function(p,f){for(var i=c.query(p),e=0;e<i.length;e++)if(D(i[e],f)!==y)return true;return false},removeProp:function(p,f){f=B[f]||f;for(var i=c.query(p),e=i.length-1;e>=0;e--){var h=i[e];try{h[f]=y;delete h[f]}catch(k){}}},attr:function(p,f,i,e){var h=c.query(p);if(s.isPlainObject(f)){e=i;for(var k in f)f.hasOwnProperty(k)&&c.attr(h,k,f[k],e)}else if(f=s.trim(f)){if(e&&v[f])return c[f](p,
i);f=f.toLowerCase();if(e&&v[f])return c[f](p,i);f=m[f]||f;e=h[0];p=r.test(f)?A:o.test(f)?G:z[f];if(i===y){if(e){if(C(e,"form"))p=G;if(p&&p.get)return p.get(e,f);f=e.getAttribute(f);return f===null?y:f}}else for(k=h.length-1;k>=0;k--){e=h[k];if(C(e,"form"))p=G;p&&p.set?p.set(e,i,f):e.setAttribute(f,""+i)}}},removeAttr:function(p,f){f=f.toLowerCase();f=m[f]||f;var i=c.query(p),e,h;for(h=i.length-1;h>=0;h--){e=i[h];if(n(e)){var k;e.removeAttribute(f);if(r.test(f)&&(k=B[f]||f)in e)e[k]=false}}},hasAttr:E?
function(p,f){f=f.toLowerCase();for(var i=c.query(p),e=0;e<i.length;e++){var h=i[e].getAttributeNode(f);if(h&&h.specified)return true}return false}:function(p,f){for(var i=c.query(p),e=0;e<i.length;e++)if(i[e].hasAttribute(f))return true;return false},val:function(p,f){var i,e;if(f===y){var h=c.get(p);if(h){if((i=H[h.nodeName.toLowerCase()]||H[h.type])&&"get"in i&&(e=i.get(h,"value"))!==y)return e;e=h.value;return typeof e==="string"?e.replace(q,""):e==null?"":e}}else{e=c.query(p);var k;for(k=e.length-
1;k>=0;k--){h=e[k];if(h.nodeType!==1)break;var a=f;if(a==null)a="";else if(typeof a==="number")a+="";else if(s.isArray(a))a=s.map(a,function(b){return b==null?"":b+""});i=H[h.nodeName.toLowerCase()]||H[h.type];if(!i||!("set"in i)||i.set(h,a,"value")===y)h.value=a}}},text:function(p,f){if(f===y){var i=c.get(p);if(n(i))return i[t]||"";else if(c._nodeTypeIs(i,c.TEXT_NODE))return i.nodeValue;return y}else{var e=c.query(p),h;for(h=e.length-1;h>=0;h--){i=e[h];if(n(i))i[t]=f;else if(c._nodeTypeIs(i,c.TEXT_NODE))i.nodeValue=
f}}}});return c},{requires:["./base","ua"]});
KISSY.add("dom/base",function(s,c,u){function y(t,C){return t&&t.nodeType===C}var D={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},E={_isCustomDomain:function(t){t=t||window;var C=t.document.domain;t=t.location.hostname;return C!=t&&C!="["+t+"]"},_genEmptyIframeSrc:function(t){t=t||window;if(c.ie&&E._isCustomDomain(t))return"javascript:void(function(){"+
encodeURIComponent("document.open();document.domain='"+t.document.domain+"';document.close();")+"}())"},_NODE_TYPE:D,_isElementNode:function(t){return y(t,E.ELEMENT_NODE)},_getWin:function(t){return t&&"scrollTo"in t&&t.document?t:y(t,E.DOCUMENT_NODE)?t.defaultView||t.parentWindow:t===u||t===null?window:false},_nodeTypeIs:y,_isNodeList:function(t){return t&&!t.nodeType&&t.item&&!t.setTimeout},_nodeName:function(t,C){return t&&t.nodeName.toLowerCase()===C.toLowerCase()}};s.mix(E,D);return E},{requires:["ua"]});
KISSY.add("dom/class",function(s,c,u){function y(t,C,n,r){if(!(C=s.trim(C)))return r?false:u;t=c.query(t);var x=t.length,j=C.split(D);C=[];for(var o=0;o<j.length;o++){var q=s.trim(j[o]);q&&C.push(q)}for(o=0;o<x;o++){j=t[o];if(c._isElementNode(j)){j=n(j,C,C.length);if(j!==u)return j}}if(r)return false;return u}var D=/[\.\s]\s*\.?/,E=/[\n\t]/g;s.mix(c,{hasClass:function(t,C){return y(t,C,function(n,r,x){if(n=n.className){n=(" "+n+" ").replace(E," ");for(var j=0,o=true;j<x;j++)if(n.indexOf(" "+r[j]+
" ")<0){o=false;break}if(o)return true}},true)},addClass:function(t,C){y(t,C,function(n,r,x){var j=n.className;if(j){var o=(" "+j+" ").replace(E," ");j=j;for(var q=0;q<x;q++)if(o.indexOf(" "+r[q]+" ")<0)j+=" "+r[q];n.className=s.trim(j)}else n.className=C},u)},removeClass:function(t,C){y(t,C,function(n,r,x){var j=n.className;if(j)if(x){j=(" "+j+" ").replace(E," ");for(var o=0,q;o<x;o++)for(q=" "+r[o]+" ";j.indexOf(q)>=0;)j=j.replace(q," ");n.className=s.trim(j)}else n.className=""},u)},replaceClass:function(t,
C,n){c.removeClass(t,C);c.addClass(t,n)},toggleClass:function(t,C,n){var r=s.isBoolean(n),x;y(t,C,function(j,o,q){for(var m=0,v;m<q;m++){v=o[m];x=r?!n:c.hasClass(j,v);c[x?"removeClass":"addClass"](j,v)}},u)}});return c},{requires:["dom/base"]});
KISSY.add("dom/create",function(s,c,u,y){function D(e){var h=s.require("event");h&&h.detach(e);c.removeData(e)}function E(e,h,k){if(x(h,c.DOCUMENT_FRAGMENT_NODE)){h=h.childNodes;k=k.childNodes;for(var a=0;h[a];){k[a]&&E(e,h[a],k[a]);a++}}else if(j(h)){h=h.getElementsByTagName("*");k=k.getElementsByTagName("*");for(a=0;h[a];){k[a]&&e(h[a],k[a]);a++}}}function t(e,h){var k=s.require("event");if(!(j(h)&&!c.hasData(e))){var a=c.data(e),b;for(b in a)c.data(h,b,a[b]);if(k){k._removeData(h);k._clone(e,h)}}}
function C(e,h){h.clearAttributes&&h.clearAttributes();h.mergeAttributes&&h.mergeAttributes(e);var k=h.nodeName.toLowerCase(),a=e.childNodes;if(k==="object"&&!h.childNodes.length)for(k=0;k<a.length;k++)h.appendChild(a[k].cloneNode(true));else if(k==="input"&&(e.type==="checkbox"||e.type==="radio")){if(e.checked)h.defaultChecked=h.checked=e.checked;if(h.value!==e.value)h.value=e.value}else if(k==="option")h.selected=e.defaultSelected;else if(k==="input"||k==="textarea")h.defaultValue=e.defaultValue;
h.removeAttribute(c.__EXPANDO)}function n(e,h){var k=null,a,b;if(e&&(e.push||e.item)&&e[0]){h=h||e[0].ownerDocument;k=h.createDocumentFragment();e=s.makeArray(e);a=0;for(b=e.length;a<b;a++)k.appendChild(e[a])}return k}var r=document;u=u.ie;var x=c._nodeTypeIs,j=c._isElementNode,o=s.isString,q=r.createElement("div"),m=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,v=/<([\w:]+)/,z=/^\s+/,B=u&&u<9,A=/<|&#?\w+;/,F=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;s.mix(c,{create:function(e,h,k,
a){var b=null;if(!e)return b;if(e.nodeType)return c.clone(e);if(!o(e))return b;if(a===y)a=true;if(a)e=s.trim(e);a=c._creators;var d,g;k=k||r;var l,w="div";if(A.test(e))if(l=F.exec(e))b=k.createElement(l[1]);else{e=e.replace(m,"<$1></$2>");if((l=v.exec(e))&&(d=l[1]))w=d.toLowerCase();d=(a[w]||a.div)(e,k);if(B&&(g=e.match(z)))d.insertBefore(k.createTextNode(g[0]),d.firstChild);e=d.childNodes;if(e.length===1)b=e[0].parentNode.removeChild(e[0]);else if(e.length)b=n(e,k)}else b=k.createTextNode(e);b=b;
if(s.isPlainObject(h))if(j(b))c.attr(b,h,true);else x(b,c.DOCUMENT_FRAGMENT_NODE)&&c.attr(b.childNodes,h,true);return b},_creators:{div:function(e,h){var k=h&&h!=r?h.createElement("div"):q;k.innerHTML="m<div>"+e+"</div>";return k.lastChild}},html:function(e,h,k,a){e=c.query(e);var b=e[0];if(b)if(h===y)return j(b)?b.innerHTML:null;else{var d=false,g,l;h+="";if(!h.match(/<(?:script|style)/i)&&(!B||!h.match(z))&&!f[(h.match(v)||["",""])[1].toLowerCase()])try{for(g=e.length-1;g>=0;g--){l=e[g];if(j(l)){D(l.getElementsByTagName("*"));
l.innerHTML=h}}d=true}catch(w){}if(!d){h=c.create(h,0,b.ownerDocument,false);for(g=e.length-1;g>=0;g--){l=e[g];if(j(l)){c.empty(l);c.append(h,l,k)}}}a&&a()}},remove:function(e,h){var k,a=c.query(e),b;for(b=a.length-1;b>=0;b--){k=a[b];if(!h&&j(k)){var d=k.getElementsByTagName("*");D(d);D(k)}k.parentNode&&k.parentNode.removeChild(k)}},clone:function(e,h,k,a){e=c.get(e);if(!e)return null;var b=e.cloneNode(h);if(j(e)||x(e,c.DOCUMENT_FRAGMENT_NODE)){j(e)&&C(e,b);h&&E(C,e,b)}if(k){t(e,b);h&&a&&E(t,e,b)}return b},
empty:function(e){e=c.query(e);var h,k;for(k=e.length-1;k>=0;k--){h=e[k];c.remove(h.childNodes)}},_nl2frag:n});var G=c._creators,H=c.create,p=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,f={option:"select",optgroup:"select",area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},i;for(i in f)(function(e){G[i]=function(h,k){return H("<"+e+">"+h+"</"+e+">",null,k)}})(f[i]);if(u<8)G.tbody=function(e,
h){var k=H("<table>"+e+"</table>",null,h),a=k.children.tags("tbody")[0];k.children.length>1&&a&&!p.test(e)&&a.parentNode.removeChild(a);return k};s.mix(G,{thead:G.tbody,tfoot:G.tbody,caption:G.tbody,colgroup:G.tbody});return c},{requires:["./base","ua"]});
KISSY.add("dom/data",function(s,c,u){var y=window,D="_ks_data_"+s.now(),E={},t={},C={};C.applet=1;C.object=1;C.embed=1;var n={hasData:function(j,o){if(j)if(o!==u){if(o in j)return true}else if(!s.isEmptyObject(j))return true;return false}},r={hasData:function(j,o){if(j==y)return r.hasData(t,o);return n.hasData(j[D],o)},data:function(j,o,q){if(j==y)return r.data(t,o,q);var m=j[D];if(q!==u){m=j[D]=j[D]||{};m[o]=q}else if(o!==u)return m&&m[o];else return m=j[D]=j[D]||{}},removeData:function(j,o){if(j==
y)return r.removeData(t,o);var q=j[D];if(o!==u){delete q[o];s.isEmptyObject(q)&&r.removeData(j)}else try{delete j[D]}catch(m){j[D]=u}}},x={hasData:function(j,o){var q=j[D];if(!q)return false;return n.hasData(E[q],o)},data:function(j,o,q){if(C[j.nodeName.toLowerCase()])return u;var m=j[D];if(!m){if(o!==u&&q===u)return u;m=j[D]=s.guid()}j=E[m];if(q!==u){j=E[m]=E[m]||{};j[o]=q}else if(o!==u)return j&&j[o];else return j=E[m]=E[m]||{}},removeData:function(j,o){var q=j[D],m;if(q){m=E[q];if(o!==u){delete m[o];
s.isEmptyObject(m)&&x.removeData(j)}else{delete E[q];try{delete j[D]}catch(v){j[D]=u}j.removeAttribute&&j.removeAttribute(D)}}}};s.mix(c,{__EXPANDO:D,hasData:function(j,o){for(var q=false,m=c.query(j),v=0;v<m.length;v++){q=m[v];if(q=q.nodeType?x.hasData(q,o):r.hasData(q,o))break}return q},data:function(j,o,q){j=c.query(j);var m=j[0];if(s.isPlainObject(o)){for(var v in o)c.data(j,v,o[v]);return u}if(q===u){if(m)return m.nodeType?x.data(m,o,q):r.data(m,o,q)}else for(v=j.length-1;v>=0;v--){m=j[v];m.nodeType?
x.data(m,o,q):r.data(m,o,q)}return u},removeData:function(j,o){var q=c.query(j),m,v;for(v=q.length-1;v>=0;v--){m=q[v];m.nodeType?x.removeData(m,o):r.removeData(m,o)}}});return c},{requires:["./base"]});KISSY.add("dom",function(s,c){return c},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
KISSY.add("dom/insertion",function(s,c,u){function y(m){for(var v=0;v<m.length;v++){var z=m[v];if(z.nodeType==u.DOCUMENT_FRAGMENT_NODE)y(z.childNodes);else if(n(z,"input")){if(z.type==="checkbox"||z.type==="radio")z.defaultChecked=z.checked}else if(x(z)){z=z.getElementsByTagName("input");for(var B=0;B<z.length;B++)y(z[B])}}}function D(m,v){var z=[],B,A,F;for(B=0;m[B];B++){A=m[B];F=A.nodeName.toLowerCase();if(A.nodeType==u.DOCUMENT_FRAGMENT_NODE)z.push.apply(z,D(r(A.childNodes),v));else if(F==="script"&&
(!A.type||j.test(A.type))){A.parentNode&&A.parentNode.removeChild(A);v&&v.push(A)}else{if(x(A)&&!C.test(F)){F=[];var G,H,p=A.getElementsByTagName("script");for(H=0;H<p.length;H++){G=p[H];(!G.type||j.test(G.type))&&F.push(G)}m.splice.apply(m,[B+1,0].concat(F))}z.push(A)}}return z}function E(m){if(m.src)s.getScript(m.src);else(m=s.trim(m.text||m.textContent||m.innerHTML||""))&&s.globalEval(m)}function t(m,v,z,B){m=s.makeArray(m);if(B)B=[];m=D(m,B);c.ie<8&&y(m);v=u.query(v);var A=m.length,F=v.length;
if(!(!A&&(!B||!B.length)||!F)){m=u._nl2frag(m);var G;if(F>1){G=u.clone(m,true);v=s.makeArray(v)}for(var H=0;H<F;H++){var p=v[H];if(A){var f=H>0?u.clone(G,true):m;z(f,p)}B&&B.length&&s.each(B,E)}}}var C=/^(?:button|input|object|select|textarea)$/i,n=u._nodeName,r=s.makeArray,x=u._isElementNode,j=/\/(java|ecma)script/i;s.mix(u,{insertBefore:function(m,v,z){t(m,v,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,A)},z)},insertAfter:function(m,v,z){t(m,v,function(B,A){A.parentNode&&A.parentNode.insertBefore(B,
A.nextSibling)},z)},appendTo:function(m,v,z){t(m,v,function(B,A){A.appendChild(B)},z)},prependTo:function(m,v,z){t(m,v,function(B,A){A.insertBefore(B,A.firstChild)},z)}});var o={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},q;for(q in o)u[q]=u[o[q]];return u},{requires:["ua","./create"]});
KISSY.add("dom/offset",function(s,c,u,y){function D(f){var i,e=0;i=0;var h=C.body,k=o(f[z]);if(f[p]){i=f[p]();e=i[B];i=i[A];f=n&&C.documentMode!=9&&(q?r.clientTop:h.clientTop)||0;e-=n&&C.documentMode!=9&&(q?r.clientLeft:h.clientLeft)||0;i-=f;if(u.mobile=="apple"){e-=c[G](k);i-=c[H](k)}}return{left:e,top:i}}function E(f,i){var e={left:0,top:0},h=o(f[z]),k=f;i=i||h;do{var a;if(h==i){var b=k;a=D(b);b=o(b[z]);a.left+=c[G](b);a.top+=c[H](b);a=a}else a=D(k);a=a;e.left+=a.left;e.top+=a.top}while(h&&h!=i&&
(k=h.frameElement)&&(h=h.parent));return e}var t=window,C=document,n=u.ie,r=C.documentElement,x=c._isElementNode,j=c._nodeTypeIs,o=c._getWin,q=C.compatMode==="CSS1Compat",m=Math.max,v=parseInt,z="ownerDocument",B="left",A="top",F=s.isNumber,G="scrollLeft",H="scrollTop",p="getBoundingClientRect";s.mix(c,{offset:function(f,i,e){if(i===y){f=c.get(f);var h;if(f)h=E(f,e);return h}e=c.query(f);for(h=e.length-1;h>=0;h--){f=f=e[h];var k=i;if(c.css(f,"position")==="static")f.style.position="relative";var a=
E(f),b={},d=void 0,g=void 0;for(g in k){d=v(c.css(f,g),10)||0;b[g]=d+k[g]-a[g]}c.css(f,b)}},scrollIntoView:function(f,i,e,h,k){if(f=c.get(f)){if(i)i=c.get(i);if(!i)i=f.ownerDocument;if(k!==true){h=h===y?true:!!h;e=e===y?true:!!e}if(j(i,c.DOCUMENT_NODE))i=o(i);var a=!!o(i);k=c.offset(f);var b=c.outerHeight(f);f=c.outerWidth(f);var d,g,l,w;if(a){a=i;g=c.height(a);d=c.width(a);w={left:c.scrollLeft(a),top:c.scrollTop(a)};a={left:k[B]-w[B],top:k[A]-w[A]};k={left:k[B]+f-(w[B]+d),top:k[A]+b-(w[A]+g)};w=
w}else{d=c.offset(i);g=i.clientHeight;l=i.clientWidth;w={left:c.scrollLeft(i),top:c.scrollTop(i)};a={left:k[B]-d[B]-(v(c.css(i,"borderLeftWidth"))||0),top:k[A]-d[A]-(v(c.css(i,"borderTopWidth"))||0)};k={left:k[B]+f-(d[B]+l+(v(c.css(i,"borderRightWidth"))||0)),top:k[A]+b-(d[A]+g+(v(c.css(i,"borderBottomWidth"))||0))}}if(a.top<0||k.top>0)if(e===true)c.scrollTop(i,w.top+a.top);else if(e===false)c.scrollTop(i,w.top+k.top);else a.top<0?c.scrollTop(i,w.top+a.top):c.scrollTop(i,w.top+k.top);if(h)if(a.left<
0||k.left>0)if(e===true)c.scrollLeft(i,w.left+a.left);else if(e===false)c.scrollLeft(i,w.left+k.left);else a.left<0?c.scrollLeft(i,w.left+a.left):c.scrollLeft(i,w.left+k.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});s.each(["Left","Top"],function(f,i){var e="scroll"+f;c[e]=function(h,k){if(F(h))return arguments.callee(t,h);h=c.get(h);var a,b=o(h);if(b)if(k!==y){k=parseFloat(k);var d=f=="Left"?k:c.scrollLeft(b),g=f=="Top"?k:c.scrollTop(b);b.scrollTo(d,g)}else{a=b["page"+(i?"Y":
"X")+"Offset"];if(!F(a)){b=b.document;a=b.documentElement[e];F(a)||(a=b.body[e])}}else if(x(h))if(k!==y)h[e]=parseFloat(k);else a=h[e];return a}});s.each(["Width","Height"],function(f){c["doc"+f]=function(i){i=c.get(i);i=o(i).document;return m(i.documentElement["scroll"+f],i.body["scroll"+f],c["viewport"+f](i))};c["viewport"+f]=function(i){i=c.get(i);var e="client"+f;i=o(i).document;var h=i.body,k=i.documentElement[e];return i.compatMode==="CSS1Compat"&&k||h&&h[e]||k}});return c},{requires:["./base",
"ua"]});
KISSY.add("dom/selector",function(s,c,u){function y(a){var b,d;for(d=0;d<this.length;d++){b=this[d];if(a(b,d)===false)break}}function D(a,b){var d,g,l=typeof a==="string",w=b===u&&(g=1)?[q]:D(b,u);if(a)if(l){a=p(a);if(w.length==1&&a)d=t(a,w[0])}else if(g&&(a.nodeType||a.setTimeout||s.isFunction(a)))d=[a];else if(g&&v(a))d=a;else{if(g&&"length"in a)return a}else d=[];if(!d){d=[];if(a){for(g=0;g<w.length;g++)F.apply(d,E(a,w[g]));if(d.length>1&&(w.length>1||l&&a.indexOf(H)>-1))h(d)}}d.each=y;return d}
function E(a,b){var d=[];if((d=typeof a==="string")&&a.match(e)||!d)d=C(a,b);else{if(d&&a.indexOf(H)>-1){d=[];var g,l=a.split(/\s*,\s*/);for(g=0;g<l.length;g++)F.apply(d,E(l[g],b));d=d}else{d=[];(g=s.require("sizzle"))&&g(a,b,d);d=d}d=d}return d=d}function t(a,b){var d,g,l,w;if(i.test(a))d=(g=r(a.slice(1),b))?[g]:[];else if(l=e.exec(a)){g=l[1];w=l[2];l=l[3];if(b=g?r(g,b):b)if(l)if(!g||a.indexOf(G)!=-1)d=[].concat(k(l,w,b));else{if((g=r(g,b))&&j(g,l))d=[g]}else if(w)d=x(w,b);d=d||[]}return d}function C(a,
b){var d;if(typeof a==="string")d=t(a,b)||[];else if(v(a)||B(a))d=m(a,function(g){return n(g,b)});else if(n(a,b))d=[a];return d}function n(a,b){if(!a)return false;if(b==q)return true;return c.contains(b,a)}function r(a,b){var d=b;if(b.nodeType!==c.DOCUMENT_NODE)d=b.ownerDocument;d=d.getElementById(a);if(!(d&&d.id===a))if(d&&d.parentNode)if(o(d,a))n(d,b)||(d=null);else d=c.filter(f,"#"+a,b)[0]||null;else d=null;return d}function x(a,b){return b&&z(b.getElementsByTagName(a))||[]}function j(a,b){var d;
return(d=a.className)&&(" "+d+" ").indexOf(" "+b+" ")!==-1}function o(a,b){var d=a.getAttributeNode("id");return d&&d.nodeValue===b}var q=document,m=s.filter,v=s.isArray,z=s.makeArray,B=c._isNodeList,A=c._nodeName,F=Array.prototype.push,G=" ",H=",",p=s.trim,f="*",i=/^#[\w-]+$/,e=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,h=s.noop;(function(){var a,b,d=true;[0,0].sort(function(){d=false;return 0});h=function(g){if(a){b=d;g.sort(a);if(b)for(var l=1,w=g.length;l<w;)if(g[l]===g[l-1])g.splice(l,1);
else l++}return g};a=q.documentElement.compareDocumentPosition?function(g,l){if(g==l){b=true;return 0}if(!g.compareDocumentPosition||!l.compareDocumentPosition)return g.compareDocumentPosition?-1:1;return g.compareDocumentPosition(l)&4?-1:1}:function(g,l){if(g==l){b=true;return 0}else if(g.sourceIndex&&l.sourceIndex)return g.sourceIndex-l.sourceIndex}})();(function(){var a=q.createElement("div");a.appendChild(q.createComment(""));if(a.getElementsByTagName(f).length>0)x=function(b,d){var g=z(d.getElementsByTagName(b));
if(b===f){for(var l=[],w=0,I;I=g[w++];)I.nodeType===1&&l.push(I);g=l}return g}})();var k=q.getElementsByClassName?function(a,b,d){if(!d)return[];a=d.getElementsByClassName(a);var g=0,l=a.length,w;if(b&&b!==f)for(d=[];g<l;++g){w=a[g];A(w,b)&&d.push(w)}else d=z(a);return d}:q.querySelectorAll?function(a,b,d){return d&&z(d.querySelectorAll((b?b:"")+"."+a))||[]}:function(a,b,d){if(!d)return[];b=d.getElementsByTagName(b||f);d=[];for(var g=0,l=b.length,w;g<l;++g){w=b[g];j(w,a)&&d.push(w)}return d};s.mix(c,
{query:D,get:function(a,b){return D(a,b)[0]||null},unique:h,filter:function(a,b,d){a=D(a,d);d=s.require("sizzle");var g,l,w,I,J=[];if(typeof b==="string"&&(b=p(b))&&(g=e.exec(b))){w=g[1];l=g[2];I=g[3];if(w){if(w&&!l&&!I)b=function(K){return o(K,w)}}else b=function(K){var L=true,M=true;if(l)L=A(K,l);if(I)M=j(K,I);return M&&L}}if(s.isFunction(b))J=s.filter(a,b);else if(b&&d)J=d.matches(b,a);return J},test:function(a,b,d){a=D(a,d);return a.length&&c.filter(a,b,d).length===a.length}});return c},{requires:["./base"]});
KISSY.add("dom/style-ie",function(s,c,u,y){if(!u.ie)return c;var D=document,E=D.documentElement,t=y._CUSTOM_STYLES,C=/^-?\d+(?:px)?$/i,n=/^-?\d/,r=/opacity=([^)]*)/,x=/alpha\([^)]*\)/i;t.backgroundPosition={get:function(q,m){return m?q.currentStyle.backgroundPositionX+" "+q.currentStyle.backgroundPositionY:q.style.backgroundPosition}};try{if(E.style.opacity==null)t.opacity={get:function(q,m){return r.test((m&&q.currentStyle?q.currentStyle.filter:q.style.filter)||"")?parseFloat(RegExp.$1)/100+"":m?
"1":""},set:function(q,m){m=parseFloat(m);var v=q.style,z=q.currentStyle,B=isNaN(m)?"":"alpha(opacity="+m*100+")",A=s.trim(z&&z.filter||v.filter||"");v.zoom=1;if(m>=1&&s.trim(A.replace(x,""))===""){v.removeAttribute("filter");if(z&&!z.filter)return}v.filter=x.test(A)?A.replace(x,B):A+(A?", ":"")+B}}}catch(j){}u=u.ie==8;var o={};o.thin=u?"1px":"2px";o.medium=u?"3px":"4px";o.thick=u?"5px":"6px";s.each(["","Top","Left","Right","Bottom"],function(q){var m="border"+q+"Width",v="border"+q+"Style";t[m]=
{get:function(z,B){var A=B?z.currentStyle:0,F=A&&String(A[m])||undefined;if(F&&F.indexOf("px")<0)F=o[F]&&A[v]!=="none"?o[F]:0;return F}}});if(!(D.defaultView||{}).getComputedStyle&&E.currentStyle)c._getComputedStyle=function(q,m){m=c._cssProps[m]||m;var v=q.currentStyle&&q.currentStyle[m];if(!C.test(v)&&n.test(v)){var z=q.style,B=z.left,A=q.runtimeStyle&&q.runtimeStyle.left;if(A)q.runtimeStyle.left=q.currentStyle.left;z.left=m==="fontSize"?"1em":v||0;v=z.pixelLeft+"px";z.left=B;if(A)q.runtimeStyle.left=
A}return v===""?"auto":v};return c},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(s,c,u,y){function D(a){return a.replace(B,A)}function E(a,b,d){var g={},l;for(l in b){g[l]=a[j][l];a[j][l]=b[l]}d.call(a);for(l in b)a[j][l]=g[l]}function t(a,b,d){var g;if(a.nodeType===3||a.nodeType===8||!(g=a[j]))return y;b=D(b);var l,w=p[b];b=f[b]||b;if(d!==y){if(d===null||d===G)d=G;else if(!isNaN(Number(d))&&!z[b])d+=H;if(w&&w.set)d=w.set(a,d);if(d!==y)try{a[j][b]=d}catch(I){}return y}else{if(!(w&&"get"in w&&(l=w.get(a,false))!==y))l=g[b];return l===y?"":l}}function C(a,
b,d){if(s.isWindow(a))return b==o?c.viewportWidth(a):c.viewportHeight(a);else if(a.nodeType==9)return b==o?c.docWidth(a):c.docHeight(a);var g=b===o?["Left","Right"]:["Top","Bottom"],l=b===o?a.offsetWidth:a.offsetHeight;if(l>0){d!=="border"&&s.each(g,function(w){d||(l-=parseFloat(c.css(a,"padding"+w))||0);if(d==="margin")l+=parseFloat(c.css(a,d+w))||0;else l-=parseFloat(c.css(a,"border"+w+"Width"))||0});return l}l=c._getComputedStyle(a,b);if(l==null||Number(l)<0)l=a.style[b]||0;l=parseFloat(l)||0;
d&&s.each(g,function(w){l+=parseFloat(c.css(a,"padding"+w))||0;if(d!=="padding")l+=parseFloat(c.css(a,"border"+w+"Width"))||0;if(d==="margin")l+=parseFloat(c.css(a,d+w))||0});return l}var n=document,r=n.documentElement,x=u.ie,j="style",o="width",q="display"+s.now(),m=parseInt,v=/^-?\d+(?:px)?$/i,z={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},B=/-([a-z])/ig,A=function(a,b){return b.toUpperCase()},F=/([A-Z]|^ms)/g,G="",H="px",p={},f={},i={};if(r[j].cssFloat!==
y)f["float"]="cssFloat";else if(r[j].styleFloat!==y)f["float"]="styleFloat";var e,h;s.mix(c,{_camelCase:D,_CUSTOM_STYLES:p,_cssProps:f,_getComputedStyle:function(a,b){var d="",g,l=a.ownerDocument;b=b.replace(F,"-$1").toLowerCase();if(g=l.defaultView.getComputedStyle(a,null))d=g.getPropertyValue(b)||g[b];if(d==""&&!c.contains(l.documentElement,a)){b=f[b]||b;d=a[j][b]}return d},style:function(a,b,d){a=c.query(a);var g=a[0];if(s.isPlainObject(b))for(var l in b)for(g=a.length-1;g>=0;g--)t(a[g],l,b[l]);
else if(d===y){l="";if(g)l=t(g,b,d);return l}else for(g=a.length-1;g>=0;g--)t(a[g],b,d)},css:function(a,b,d){a=c.query(a);var g=a[0];if(s.isPlainObject(b))for(var l in b)for(g=a.length-1;g>=0;g--)t(a[g],l,b[l]);else{b=D(b);l=p[b];if(d===y){d="";if(g)if(!(l&&"get"in l&&(d=l.get(g,true))!==y))d=c._getComputedStyle(g,b);return d===y?"":d}else for(g=a.length-1;g>=0;g--)t(a[g],b,d)}},show:function(a){a=c.query(a);var b,d;for(d=a.length-1;d>=0;d--){b=a[d];b[j].display=c.data(b,q)||G;if(c.css(b,"display")===
"none"){var g;a:{g=b.tagName.toLowerCase();var l=void 0,w=void 0;if(!i[g]){l=n.body||n.documentElement;w=n.createElement(g);c.prepend(w,l);var I=c.css(w,"display");l.removeChild(w);if(I==="none"||I===""){if(e)c.prepend(e,l);else{e=n.createElement("iframe");e.frameBorder=e.width=e.height=0;c.prepend(e,l);w=void 0;if(w=c._genEmptyIframeSrc())e.src=w}if(!h||!e.createElement)try{h=e.contentWindow.document;h.write((n.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><head>"+(u.ie&&c._isCustomDomain()?
"<script>document.domain = '"+n.domain+"';<\/script>":"")+"</head><body>");h.close()}catch(J){g="block";break a}w=h.createElement(g);h.body.appendChild(w);I=c.css(w,"display");l.removeChild(e)}i[g]=I}g=i[g]}c.data(b,q,g);b[j].display=g}}},hide:function(a){a=c.query(a);var b,d;for(d=a.length-1;d>=0;d--){b=a[d];var g=b[j],l=g.display;if(l!=="none"){l&&c.data(b,q,l);g.display="none"}}},toggle:function(a){a=c.query(a);var b,d;for(d=a.length-1;d>=0;d--){b=a[d];c.css(b,"display")==="none"?c.show(b):c.hide(b)}},
addStyleSheet:function(a,b,d){if(s.isString(a)){d=b;b=a;a=window}a=c.get(a);a=c._getWin(a).document;var g;if(d&&(d=d.replace("#",G)))g=c.get("#"+d,a);if(!g){g=c.create("<style>",{id:d},a);c.get("head",a).appendChild(g);if(g.styleSheet)g.styleSheet.cssText=b;else g.appendChild(a.createTextNode(b))}},unselectable:function(a){a=c.query(a);var b,d;for(d=a.length-1;d>=0;d--){b=a[d];if(u.gecko)b[j].MozUserSelect="none";else if(u.webkit)b[j].KhtmlUserSelect="none";else if(u.ie||u.opera){var g=0,l=b.getElementsByTagName("*");
for(b.setAttribute("unselectable","on");b=l[g++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable","on")}}}},innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});s.each([o,"height"],function(a){c["inner"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b){return(b=c.get(b))?C(b,a,"padding"):null};c["outer"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b,d){var g=c.get(b);return g?C(g,
a,d?"margin":"border"):null};c[a]=function(b,d){var g=c.css(b,a,d);if(g)g=parseFloat(g);return g}});var k={position:"absolute",visibility:"hidden",display:"block"};s.each(["height","width"],function(a){p[a]={get:function(b,d){var g;if(d){if(b.offsetWidth!==0)g=C(b,a);else E(b,k,function(){g=C(b,a)});return g+"px"}},set:function(b,d){if(v.test(d)){d=parseFloat(d);if(d>=0)return d+"px"}else return d}}});s.each(["left","top"],function(a){p[a]={get:function(b,d){if(d){var g=c._getComputedStyle(b,a);if(g===
"auto"){g=0;if(s.inArray(c.css(b,"position"),["absolute","fixed"])){g=b[a==="left"?"offsetLeft":"offsetTop"];if(x&&document.documentMode!=9||u.opera)g-=b.offsetParent&&b.offsetParent["client"+(a=="left"?"Left":"Top")]||0;g=g-(m(c.css(b,"margin-"+a))||0)}g+="px"}return g}}}});return c},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(s,c,u){function y(n,r,x,j,o,q){if(!(n=c.get(n)))return null;if(r===0)return n;q||(n=n[x]);if(!n)return null;o=o&&c.get(o)||null;if(r===u)r=1;q=[];var m=s.isArray(r),v,z;if(s.isNumber(r)){v=0;z=r;r=function(){return++v===z}}for(;n&&n!=o;){if(t(n)&&D(n,r)&&(!j||j(n))){q.push(n);if(!m)break}n=n[x]}return m?q:q[0]||null}function D(n,r){if(!r)return true;if(s.isArray(r))for(var x=0;x<r.length;x++){if(c.test(n,r[x]))return true}else if(c.test(n,r))return true;return false}
function E(n,r,x){var j=[];var o=n=c.get(n);if(n&&x)o=n.parentNode;if(o){x=0;for(o=o.firstChild;o;o=o.nextSibling)if(t(o)&&o!==n&&(!r||c.test(o,r)))j[x++]=o}return j}var t=c._isElementNode,C=document.documentElement.contains?function(n,r){if(n.nodeType==c.TEXT_NODE)return false;var x;if(r.nodeType==c.TEXT_NODE){r=r.parentNode;x=true}else if(r.nodeType==c.DOCUMENT_NODE)return false;else x=n!==r;return x&&(n.contains?n.contains(r):true)}:document.documentElement.compareDocumentPosition?function(n,r){return!!(n.compareDocumentPosition(r)&
16)}:0;s.mix(c,{closest:function(n,r,x){return y(n,r,"parentNode",function(j){return j.nodeType!=c.DOCUMENT_FRAGMENT_NODE},x,true)},parent:function(n,r,x){return y(n,r,"parentNode",function(j){return j.nodeType!=c.DOCUMENT_FRAGMENT_NODE},x)},first:function(n,r){var x=c.get(n);return y(x&&x.firstChild,r,"nextSibling",u,u,true)},last:function(n,r){var x=c.get(n);return y(x&&x.lastChild,r,"previousSibling",u,u,true)},next:function(n,r){return y(n,r,"nextSibling",u)},prev:function(n,r){return y(n,r,"previousSibling",
u)},siblings:function(n,r){return E(n,r,true)},children:function(n,r){return E(n,r,u)},contains:function(n,r){n=c.get(n);r=c.get(r);if(n&&r)return C(n,r)},equals:function(n,r){n=c.query(n);r=c.query(r);if(n.length!=r.length)return false;for(var x=n.length;x>=0;x--)if(n[x]!=r[x])return false;return true}});return c},{requires:["./base"]});
