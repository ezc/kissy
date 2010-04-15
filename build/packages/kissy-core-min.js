/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 564 Apr 15 09:57
*/
(function(d,m,l){if(d[m]===l)d[m]={};m=d[m];var j=d.document,g=function(h,r,v,e){if(!r||!h)return h;if(v===l)v=true;var q,p,u;if(e&&(u=e.length))for(q=0;q<u;q++){p=e[q];if(p in r)if(v||!(p in h))h[p]=r[p]}else for(p in r)if(v||!(p in h))h[p]=r[p];return h},k=false,o=[],s=false;g(m,{version:"1.0.5",_init:function(){this.Env={mods:{}}},add:function(h,r){this.Env.mods[h]={name:h,fn:r};r(this);return this},ready:function(h){s||this._bindReady();k?h.call(d,this):o.push(h);return this},_bindReady:function(){var h=
this,r=j.documentElement.doScroll,v=r?"onreadystatechange":"DOMContentLoaded";s=true;if(j.attachEvent){if(d!=d.top){var e=function(){if(j.readyState==="complete"){j.detachEvent(v,e);h._fireReady()}};j.attachEvent(v,e)}else{var q=function(){try{r("left");h._fireReady()}catch(u){setTimeout(q,1)}};q()}d.attachEvent("onload",function(){h._fireReady()})}else{var p=function(){j.removeEventListener(v,p,false);h._fireReady()};j.addEventListener(v,p,false)}},_fireReady:function(){if(!k){k=true;if(o){for(var h,
r=0;h=o[r++];)h.call(d,this);o=null}}},mix:g,merge:function(){var h=arguments,r={},v,e=h.length;for(v=0;v<e;++v)g(r,h[v]);return r},extend:function(h,r,v,e){if(!r||!h)return h;var q=Object.prototype,p=r.prototype,u=function(f){function b(){}b.prototype=f;return new b}(p);h.prototype=u;u.constructor=h;h.superclass=p;if(r!==Object&&p.constructor===q.constructor)p.constructor=r;v&&g(u,v);e&&g(h,e);return h},augment:function(h,r,v,e){return g(h.prototype,m.isFunction(r)?r.prototype:r,v,e)},app:function(h,
r){var v=d[h]||{};g(v,this,true,["_init","add","namespace"]);v._init();return g(d[h]=v,m.isFunction(r)?r():r)},namespace:function(){var h=arguments,r=h.length,v=null,e,q,p;for(e=0;e<r;++e){p=(""+h[e]).split(".");v=this;for(q=d[p[0]]===v?1:0;q<p.length;++q)v=v[p[q]]=v[p[q]]||{}}return v},log:function(h,r,v){if(this.Config.debug){v&&(h=v+": "+h);if(d.console!==l&&console.log)console[r&&console[r]?r:"log"](h)}return this},error:function(h){if(this.Config.debug)throw h;},now:function(){return(new Date).getTime()}});
m._init();m.Config={debug:""}})(window,"KISSY");
KISSY.add("lang",function(d,m){function l(e){var q=typeof e;return e===null|(q!=="object"&&q!=="function")}var j=document,g=Array.prototype,k=g.forEach,o=g.indexOf,s=g.slice,h=/^\s+|\s+$/g,r=/^(\w+)\[\]$/,v=Object.prototype.toString;d.mix(d,{each:k?function(e,q,p){k.call(e,q,p);return this}:function(e,q,p){var u=e&&e.length||0,f;for(f=0;f<u;++f)q.call(p||this,e[f],f,e);return this},trim:String.prototype.trim?function(e){return(e||"").trim()}:function(e){return(e||"").replace(h,"")},isPlainObject:function(e){return e&&
v.call(e)==="[object Object]"&&!e.nodeType&&!e.setInterval},isEmptyObject:function(e){for(var q in e)return false;return true},isFunction:function(e){return v.call(e)==="[object Function]"},isArray:function(e){return v.call(e)==="[object Array]"},indexOf:o?function(e,q){return o.call(q,e)}:function(e,q){for(var p=0,u=q.length;p<u;++p)if(q[p]===e)return p;return-1},inArray:function(e,q){return d.indexOf(e,q)!==-1},makeArray:function(e){if(e===null||e===m)return[];if(d.isArray(e))return e;if(typeof e.length!==
"number"||typeof e==="string"||d.isFunction(e))return[e];if(e.item&&d.UA.ie){for(var q=[],p=0,u=e.length;p<u;++p)q[p]=e[p];return q}return s.call(e)},param:function(e){if(typeof e!=="object")return"";var q=[],p,u;for(p in e){u=e[p];if(l(u))q.push(p,"=",u+"","&");else if(d.isArray(u)&&u.length)for(var f=0,b=u.length;f<b;++f)l(u[f])&&q.push(p+"[]=",u[f]+"","&")}q.pop();return encodeURI(q.join(""))},unparam:function(e,q){if(typeof e!=="string"||(e=decodeURI(d.trim(e))).length===0)return{};var p={};e=
e.split(q||"&");for(var u,f,b=0,i=e.length;b<i;++b){u=e[b].split("=");q=u[0];u=u[1]||"";if((f=q.match(r))&&f[1]){p[f[1]]=p[f[1]]||[];p[f[1]].push(u)}else p[q]=u}return p},later:function(e,q,p,u,f){q=q||0;u=u||{};var b=e,i=d.makeArray(f),a;if(typeof e==="string")b=u[e];b||d.error("method undefined");e=function(){b.apply(u,i)};a=p?setInterval(e,q):setTimeout(e,q);return{id:a,interval:p,cancel:function(){this.interval?clearInterval(a):clearTimeout(a)}}},globalEval:function(e){if(e=d.trim(e)){var q=j.getElementsByTagName("head")[0]||
j.documentElement,p=j.createElement("script");if(d.UA.ie)p.text=e;else p.appendChild(j.createTextNode(e));q.insertBefore(p,q.firstChild);q.removeChild(p)}}});if("ks-debug"in d.unparam(location.hash))d.Config.debug=true});
KISSY.add("ua",function(d){var m=navigator.userAgent,l,j={ie:0,gecko:0,firefox:0,opera:0,webkit:0,safari:0,chrome:0,mobile:""},g=function(k){var o=0;return parseFloat(k.replace(/\./g,function(){return o++===0?".":""}))};if((l=m.match(/AppleWebKit\/([\d.]*)/))&&l[1]){j.webkit=g(l[1]);if((l=m.match(/Chrome\/([\d.]*)/))&&l[1])j.chrome=g(l[1]);else if((l=m.match(/\/([\d.]*) Safari/))&&l[1])j.safari=g(l[1]);if(/ Mobile\//.test(m))j.mobile="Apple";else if(l=m.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))j.mobile=
l[0]}else if((l=m.match(/Opera\/.* Version\/([\d.]*)/))&&l[1]){j.opera=g(l[1]);if(m.match(/Opera Mini[^;]*/))j.mobile=l[0]}else if((l=m.match(/MSIE\s([^;]*)/))&&l[1])j.ie=g(l[1]);else if(l=m.match(/Gecko/)){j.gecko=1;if((l=m.match(/rv:([\d.]*)/))&&l[1])j.gecko=g(l[1]);if((l=m.match(/Firefox\/([\d.]*)/))&&l[1])j.firefox=g(l[1])}d.UA=j});
KISSY.add("selector",function(d,m){function l(f,b,i){var a,c=[],n,t;if(typeof f===v){f=d.trim(f);if(p.test(f)){if(b=g(f.slice(1)))c=[b]}else if(a=u.exec(f)){n=a[1];t=a[2];a=a[3];if(b=n?g(n):j(b))if(a){if(!n||f.indexOf(e)!==-1)c=o(a,t,b)}else if(t)c=k(b,t)}else if(f.indexOf(",")>-1)if(r.querySelectorAll)c=r.querySelectorAll(f);else{n=f.split(",");t=[];c=0;for(f=n.length;c<f;++c)t=t.concat(l(n[c],b));c=s(t)}}else if(f&&f.nodeType)c=[f];else if(f&&f.item)c=f;if(c.item)c=d.makeArray(c);i||h(c);return c}
function j(f){if(f===m)f=r;else if(typeof f===v&&p.test(f))f=g(f.slice(1));else if(f&&f.nodeType!==1&&f.nodeType!==9)f=null;return f}function g(f){return r.getElementById(f)}function k(f,b){return f.getElementsByTagName(b)}function o(f,b,i){i=f=i.getElementsByClassName(f);var a=0,c=0,n=f.length,t;if(b&&b!==q){i=[];for(b=b.toUpperCase();a<n;++a){t=f[a];if(t.tagName===b)i[c++]=t}}return i}function s(f){var b=false;f.sort(function(a,c){a=a.sourceIndex-c.sourceIndex;if(a===0)b=true;return a});if(b)for(var i=
1;i<f.length;i++)f[i]===f[i-1]&&f.splice(i--,1);return f}function h(f){f.each=function(b,i){d.each(f,b,i)}}var r=document,v="string",e=" ",q="*",p=/^#[\w-]+$/,u=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var f=r.createElement("div");f.appendChild(r.createComment(""));if(f.getElementsByTagName(q).length>0)k=function(b,i){b=b.getElementsByTagName(i);if(i===q){i=[];for(var a=0,c=0,n;n=b[a++];)if(n.nodeType===1)i[c++]=n;b=i}return b}})();r.getElementsByClassName||(o=r.querySelectorAll?
function(f,b,i){return i.querySelectorAll((b?b:"")+"."+f)}:function(f,b,i){b=i.getElementsByTagName(b||q);i=[];var a=0,c=0,n=b.length,t,w;for(f=e+f+e;a<n;++a){t=b[a];if((w=t.className)&&(e+w+e).indexOf(f)>-1)i[c++]=t}return i});d.query=l;d.get=function(f,b){return l(f,b,true)[0]||null}});
KISSY.add("dom-base",function(d,m){function l(a,c){return c&&c.nodeName.toUpperCase()===a.toUpperCase()}function j(a,c){for(var n=[],t=0;a;a=a.nextSibling)if(a.nodeType===1&&a!==c)n[t++]=a;return n}function g(a,c,n){c=c||0;for(var t=0;a;a=a[n])if(a.nodeType===1&&t++===c)break;return a}function k(a,c){var n=null,t;if(a&&(a.push||a.item)&&a[0]){c=c||a[0].ownerDocument;n=c.createDocumentFragment();if(a.item)a=d.makeArray(a);c=0;for(t=a.length;c<t;++c)n.appendChild(a[c])}else d.error("unable to convert "+
a+" to fragment");return n}var o=document,s=o.documentElement.textContent!==m?"textContent":"innerText",h=d.UA,r=h.ie,v=r&&r<8,e={readonly:"readOnly"},q=/href|src|style/,p=/href|src|colspan|rowspan/,u=/\r/g,f=/radio|checkbox/,b=o.createElement("DIV"),i=/^[a-z]+$/i;v&&d.mix(e,{"for":"htmlFor","class":"className"});d.DOM={query:d.query,get:d.get,attr:function(a,c,n){if(!a||a.nodeType!==1)return m;var t;c=c.toLowerCase();c=e[c]||c;if(n===m){if(q.test(c)){if(c==="style")t=a.style.cssText}else t=a[c];
if(t===m)t=a.getAttribute(c);if(v&&p.test(c))t=a.getAttribute(c,2);return t===null?m:t}if(c==="style")a.style.cssText=n;else a.setAttribute(c,""+n)},removeAttr:function(a,c){a&&a.nodeType===1&&a.removeAttribute(c)},val:function(a,c){if(!a||a.nodeType!==1)return m;if(c===m){if(l("option",a))return(a.attributes.value||{}).specified?a.value:a.text;if(l("select",a)){c=a.selectedIndex;var n=a.options;if(c<0)return null;else if(a.type==="select-one")return d.DOM.val(n[c]);a=[];c=0;for(var t=n.length;c<
t;++c)n[c].selected&&a.push(d.DOM.val(n[c]));return a}if(h.webkit&&f.test(a.type))return a.getAttribute("value")===null?"on":a.value;return(a.value||"").replace(u,"")}if(l("select",a)){n=d.makeArray(c);var w=a.options,x;c=0;for(t=w.length;c<t;++c){x=w[c];x.selected=d.inArray(d.DOM.val(x),n)}if(!n.length)a.selectedIndex=-1}else a.value=c},css:function(a,c,n){if(n===m)return a.style[c];d.each(d.makeArray(a),function(t){t.style[c]=n})},text:function(a,c){if(c===m)return(a||{})[s]||"";if(a)a[s]=c},html:function(a,
c){if(c===m)return a.innerHTML;a.innerHTML=c},children:function(a){if(a.children)return d.makeArray(a.children);return j(a.firstChild)},siblings:function(a){return j(a.parentNode.firstChild,a)},next:function(a){return g(a,1,"nextSibling")},prev:function(a){return g(a,1,"previousSibling")},parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},create:function(a,c){if(typeof a==="string")a=d.trim(a);if(i.test(a))return(c||o).createElement(a);var n=null;n=c?c.createElement("DIV"):b;n.innerHTML=
a;a=n.childNodes;return n=a.length===1?a[0].parentNode.removeChild(a[0]):k(a,c||o)},addStyleSheet:function(a,c){var n=o.getElementsByTagName("head")[0],t=o.createElement("style");c&&(t.id=c);n.appendChild(t);if(t.styleSheet)t.styleSheet.cssText=a;else t.appendChild(o.createTextNode(a))}}});
KISSY.add("dom-class",function(d,m){function l(s,h,r){if(d.isArray(s)){d.each(s,function(){h.apply(r,Array.prototype.slice.call(arguments,3))});return true}}var j=d.DOM;d.mix(j,{hasClass:function(s,h){if(!h||!s||!s.className)return false;return(" "+s.className+" ").indexOf(" "+h+" ")>-1},addClass:function(s,h){if(!l(s,k,j,h))if(h&&s)g(s,h)||(s.className+=" "+h)},removeClass:function(s,h){if(!l(s,o,j,h))if(g(s,h)){s.className=(" "+s.className+" ").replace(" "+h+" "," ");g(s,h)&&o(s,h)}},replaceClass:function(s,
h,r){o(s,h);k(s,r)},toggleClass:function(s,h,r){l(s,j.toggleClass,j,h,r)||((r!==m?r:!g(s,h))?k(s,h):o(s,h))}});var g=j.hasClass,k=j.addClass,o=j.removeClass});
KISSY.add("event",function(d,m){function l(b,i,a,c){if(d.isArray(i)){d.each(i,function(n){f[b](n,a,c)});return true}if((a=d.trim(a))&&a.indexOf(q)>0){d.each(a.split(q),function(n){f[b](i,n,c)});return true}}function j(b){var i=-1;if(b.nodeType===3||b.nodeType===8)return i;return i=b.nodeType?o.attr(b,e):b.isCustomEventTarget?b.eventTargetId:b[e]}function g(b,i){if(b.nodeType)o.attr(b,e,i);else if(b.isCustomEventTarget)b.eventTargetId=i;else try{b[e]=i}catch(a){d.error(a)}}function k(b){if(b.nodeType)o.removeAttr(b,
e);else if(b.isCustomEventTarget)b.eventTargetId=m;else b[e]=m}var o=d.DOM,s=window,h=document,r=h.addEventListener?function(b,i,a){b.addEventListener&&b.addEventListener(i,a,false)}:function(b,i,a){b.attachEvent&&b.attachEvent("on"+i,a)},v=h.removeEventListener?function(b,i,a){b.removeEventListener&&b.removeEventListener(i,a,false)}:function(b,i,a){b.detachEvent&&b.detachEvent("on"+i,a)},e="data-ks-event-guid",q=" ",p=d.now(),u={},f={special:{},add:function(b,i,a){if(!l("add",b,i,a)){var c=j(b),
n,t;if(!(c===-1||!i||!d.isFunction(a))){if(!c){g(b,c=p++);u[c]={target:b,events:{}}}t=u[c].events;n=!b.isCustomEventTarget&&f.special[i]||{};if(!t[i]){c=function(w,x){if(!w||!w.fixed){w=new d.EventObject(b,w,i);d.isPlainObject(x)&&d.mix(w,x)}n.setup&&n.setup(w);return(n.handle||f._handle)(b,w,t[i].listeners)};t[i]={handle:c,listeners:[]};if(b.isCustomEventTarget)b._addEvent&&b._addEvent(i,c);else r(b,n.fix||i,c)}t[i].listeners.push(a)}}},remove:function(b,i,a){if(!l("remove",b,i,a)){var c=j(b),n,
t,w,x,y,z;if(c!==-1)if(c&&(n=u[c]))if(n.target===b){n=n.events||{};if(t=n[i]){w=t.listeners;y=w.length;if(d.isFunction(a)&&y&&d.inArray(a,w)){z=[];for(x=0;x<y;++x)a!==w[x]&&z.push(w[x]);y=z.length}if(a===m||y===0){b.isCustomEventTarget||v(b,i,t.handle);delete u[c].type}}if(i===m||d.isEmptyObject(n)){for(i in n)f.remove(b,i);delete u[c];k(b)}}}},_handle:function(b,i,a){for(var c,n=0,t=a.length;n<t;++n){c=a[n].call(b,i);if(i.isImmediatePropagationStopped)break;c===false&&i.halt()}return c},_getCache:function(b){return u[b]},
_simpleAdd:r,_simpleRemove:v};f.on=f.add;d.Event=f;s.attachEvent&&!s.addEventListener&&s.attachEvent("onunload",function(){var b,i;for(b in u)if(i=u[b].target)try{f.remove(i)}catch(a){}})});
KISSY.add("event-object",function(d,m){function l(k,o,s){this.currentTarget=k;this.originalEvent=o||{};if(o){this.type=o.type;this._fix()}else{this.type=s;this.target=k}this.fixed=true}var j=document,g="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");d.mix(l.prototype,
{_fix:function(){for(var k=this.originalEvent,o=g.length,s;o;){s=g[--o];this[s]=k[s]}if(!this.target)this.target=this.srcElement||j;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===m&&this.clientX!==m){k=j.documentElement;o=j.body;this.pageX=this.clientX+(k&&k.scrollLeft||o&&o.scrollLeft||0)-(k&&k.clientLeft||o&&o.clientLeft||0);this.pageY=this.clientY+
(k&&k.scrollTop||o&&o.scrollTop||0)-(k&&k.clientTop||o&&o.clientTop||0)}if(this.which===m)this.which=this.charCode!==m?this.charCode:this.keyCode;if(this.metaKey===m)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==m)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var k=this.originalEvent;if(k.preventDefault)k.preventDefault();else k.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var k=this.originalEvent;if(k.stopPropagation)k.stopPropagation();
else k.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var k=this.originalEvent;k.stopImmediatePropagation?k.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(k){k?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});d.EventObject=l});
KISSY.add("event-target",function(d,m){var l=d.Event;d.EventTarget={eventTargetId:m,isCustomEventTarget:true,fire:function(j,g){(j=((l._getCache(this.eventTargetId||-1)||{}).events||{})[j])&&d.isFunction(j.handle)&&j.handle(m,g)},on:function(j,g){l.add(this,j,g)},detach:function(j,g){l.remove(this,j,g)}}});
KISSY.add("event-mouseenter",function(d){var m=d.Event;d.UA.ie||d.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(l){m.special[l.name]={fix:l.fix,setup:function(j){j.type=l.name},handle:function(j,g,k){var o=g.relatedTarget;try{for(;o&&o!==j;)o=o.parentNode;o!==j&&m._handle(j,g,k)}catch(s){}}}})});
KISSY.add("node",function(d){function m(g,k,o){var s;if(!(this instanceof m))return new m(g,k,o);if(!g)return null;if(g.nodeType)s=g;else if(typeof g==="string")s=l.create(g,o);k&&d.error("not implemented");this[0]=s}var l=d.DOM,j=m.prototype;d.each(["attr","removeAttr","css"],function(g){j[g]=function(k,o){var s=this[0];if(o===undefined)return l[g](s,k);else{l[g](s,k,o);return this}}});d.each(["val","text","html"],function(g){j[g]=function(k){var o=this[0];if(k===undefined)return l[g](o);else{l[g](o,
k);return this}}});d.each(["children","siblings","next","prev","parent"],function(g){j[g]=function(){var k=l[g](this[0]);return k?new d[k.length?"NodeList":"Node"](k):null}});d.each(["hasClass","addClass","removeClass","replaceClass","toggleClass"],function(g){j[g]=function(){var k=l[g].apply(l,[this[0]].concat(d.makeArray(arguments)));return typeof k==="boolean"?k:this}});d.mix(j,d.EventTarget);j._addEvent=function(g,k){d.Event._simpleAdd(this[0],g,k)};delete j.fire;d.mix(j,{one:function(g){return d.one(g,
this[0])},all:function(g){return d.all(g,this[0])},appendTo:function(g){if((g=d.get(g))&&g.appendChild)g.appendChild(this[0]);return this}});d.one=function(g,k){return new m(d.get(g,k))};d.Node=m});
KISSY.add("nodelist",function(d){function m(j){if(!(this instanceof m))return new m(j);l.apply(this,j||[])}var l=Array.prototype.push;d.mix(m.prototype,{length:0,each:function(j,g){for(var k=this.length,o=0,s;o<k;++o){s=new d.Node(this[o]);j.call(g||s,s,o,this)}return this}});d.all=function(j,g){return new m(d.query(j,g,true))};d.NodeList=m});
