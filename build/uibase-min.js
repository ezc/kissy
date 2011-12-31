/*
Copyright 2011, KISSY UI Library v1.30dev
MIT Licensed
build time: Dec 31 15:26
*/
KISSY.add("uibase/align",function(h,n,f,j){function q(a){var d=a.ownerDocument.body,e=f.css(a,"position"),k=e=="fixed"||e=="absolute";for(a=a.parentNode;a&&a!=d;a=a.parentNode){e=f.css(a,"position");k=k&&e=="static";if(f.css(a,"overflow")!="visible"&&(!k||e=="fixed"||e=="absolute"||e=="relative"))return a}return null}function b(a){for(var d in a)if(d.indexOf("fail")===0)return true;return false}function g(a){var d=a.offset,e=a.node,k=a.points,p,c=this.get("el");d=d||[0,0];p=c.offset();e=o(e,k[0]);
k=o(c,k[1]);k=[k.left-e.left,k.top-e.top];p={left:p.left-k[0]+ +d[0],top:p.top-k[1]+ +d[1]};a:{d=p;p=this.get("el");c={};k={width:p.outerWidth(),height:p.outerHeight()};e=h.clone(k);if(!h.isEmptyObject(a.overflow)){c={left:0,right:Infinity,top:0,bottom:Infinity};for(var l=p[0];l=q(l);){var r=l.clientWidth;if(!n.ie||r!==0){var s=l.clientLeft,t=l.clientTop;r=f.offset(l);s={left:s,top:t};r.left+=s.left;r.top+=s.top;c.top=Math.max(c.top,r.top);c.right=Math.min(c.right,r.left+l.clientWidth);c.bottom=Math.min(c.bottom,
r.top+l.clientHeight);c.left=Math.max(c.left,r.left)}}l=f.scrollLeft();r=f.scrollTop();c.left=Math.max(c.left,l);c.top=Math.max(c.top,r);c.right=Math.min(c.right,l+f.viewportWidth());c.bottom=Math.min(c.bottom,r+f.viewportHeight());c=c.top>=0&&c.left>=0&&c.bottom>c.top&&c.right>c.left?c:null;a=a.overflow||{};l={};if(d.left<c.left&&a.adjustX){d.left=c.left;l.adjustX=1}if(d.left<c.left&&d.left+e.width>c.right&&a.resizeWidth){e.width-=d.left+e.width-c.right;l.resizeWidth=1}if(d.left+e.width>c.right&&
a.adjustX){d.left=Math.max(c.right-e.width,c.left);l.adjustX=1}if(a.failX)l.failX=d.left<c.left||d.left+e.width>c.right;if(d.top<c.top&&a.adjustY){d.top=c.top;l.adjustY=1}if(d.top>=c.top&&d.top+e.height>c.bottom&&a.resizeHeight){e.height-=d.top+e.height-c.bottom;l.resizeHeight=1}if(d.top+e.height>c.bottom&&a.adjustY){d.top=Math.max(c.bottom-e.height,c.top);l.adjustY=1}if(a.failY)l.failY=d.top<c.top||d.top+e.height>c.bottom;c=l;if(b(c)){a=c;break a}}this.set("x",d.left);this.set("y",d.top);if(e.width!=
k.width||e.height!=k.height){p.width(e.width);p.height(e.height)}a=c}return a}function m(a,d,e){var k=[];h.each(a,function(p){k.push(p.replace(d,function(c){return e[c]}))});return k}function i(){}function o(a,d){var e=d.charAt(0),k=d.charAt(1),p,c,l,r;if(a){a=j.one(a);p=a.offset();c=a.outerWidth();l=a.outerHeight()}else{p={left:f.scrollLeft(),top:f.scrollTop()};c=f.viewportWidth();l=f.viewportHeight()}r=p.left;p=p.top;if(e==="c")p+=l/2;else if(e==="b")p+=l;if(k==="c")r+=c/2;else if(k==="r")r+=c;
return{left:r,top:p}}i.ATTRS={align:{}};i.prototype={_uiSetAlign:function(a){h.isPlainObject(a)&&this.align(a.node,a.points,a.offset,a.overflow)},align:function(a,d,e,k){var p={};k=h.clone(k||{});e=e&&[].concat(e)||[0,0];if(k.failX)p.failX=1;if(k.failY)p.failY=1;var c=g.call(this,{node:a,points:d,offset:e,overflow:p});if(b(c)){if(c.failX){d=m(d,/[lr]/ig,{l:"r",r:"l"});e=e;e[0]=-e[0];e=e}if(c.failY){d=m(d,/[tb]/ig,{t:"b",b:"t"});c=e;c[1]=-c[1];e=c}}c=g.call(this,{node:a,points:d,offset:e,overflow:p});
if(b(c)){delete k.failX;delete k.failY;g.call(this,{node:a,points:d,offset:e,overflow:k})}},center:function(a){this.set("align",{node:a,points:["cc","cc"],offset:[0,0]})}};return i},{requires:["ua","dom","node"]});
KISSY.add("uibase/base",function(h,n,f){function j(i){return i.charAt(0).toUpperCase()+i.substring(1)}function q(i){n.apply(this,arguments);for(var o=this.constructor;o;){if(i&&i[g]&&o.HTML_PARSER)if(i[g]=f.one(i[g])){var a=i[g],d=o.HTML_PARSER,e=void 0,k=void 0;for(e in d)if(d.hasOwnProperty(e)){k=d[e];if(h.isFunction(k))this.__set(e,k.call(this,a));else if(h.isString(k))this.__set(e,a.one(k));else h.isArray(k)&&k[0]&&this.__set(e,a.all(k[0]))}}o=o.superclass&&o.superclass.constructor}b(this,"initializer",
"constructor");i&&i.autoRender&&this.render()}function b(i,o,a){for(var d=i.constructor,e=[],k,p,c,l;d;){l=[];if(c=d.__ks_exts)for(var r=0;r<c.length;r++)if(k=c[r]){if(a!="constructor")k=k.prototype.hasOwnProperty(a)?k.prototype[a]:null;k&&l.push(k)}if(d.prototype.hasOwnProperty(o)&&(p=d.prototype[o]))l.push(p);l.length&&e.push.apply(e,l.reverse());d=d.superclass&&d.superclass.constructor}for(r=e.length-1;r>=0;r--)e[r]&&e[r].call(i)}var g="srcNode",m=function(){};q.HTML_PARSER={};q.ATTRS={rendered:{value:false},
created:{value:false}};h.extend(q,n,{create:function(){if(!this.get("created")){this._createDom();this.fire("createDom");b(this,"createDom","__createDom");this.fire("afterCreateDom");this.set("created",true)}},render:function(){if(!this.get("rendered")){this.create();this._renderUI();this.fire("renderUI");b(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");b(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();this.fire("syncUI");b(this,"syncUI",
"__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_createDom:m,_renderUI:m,renderUI:m,_bindUI:function(){var i=this,o=i.__attrs,a,d;for(a in o)if(o.hasOwnProperty(a)){d="_uiSet"+j(a);i[d]&&function(e,k){i.on("after"+j(e)+"Change",function(p){i[k](p.newVal,p)})}(a,d)}},bindUI:m,_syncUI:function(){var i=this.__attrs,o;for(o in i)if(i.hasOwnProperty(o)){var a="_uiSet"+j(o);this[a]&&i[o].sync!==false&&this.get(o)!==undefined&&this[a](this.get(o))}},syncUI:m,destroy:function(){for(var i=
this.constructor,o,a,d;i;){i.prototype.hasOwnProperty("destructor")&&i.prototype.destructor.apply(this);if(o=i.__ks_exts)for(d=o.length-1;d>=0;d--)(a=o[d]&&o[d].prototype.__destructor)&&a.apply(this);i=i.superclass&&i.superclass.constructor}this.fire("destroy");this.detach()}},{create:function(i,o,a,d){function e(){q.apply(this,arguments)}if(h.isArray(i)){d=a;a=o;o=i;i=q}i=i||q;if(h.isObject(o)){d=a;a=o;o=[]}h.extend(e,i,a,d);if(o){e.__ks_exts=o;var k={};i=o.concat(e);h.each(i,function(c){c&&h.each(["ATTRS",
"HTML_PARSER"],function(l){if(c[l]){k[l]=k[l]||{};h.mix(k[l],c[l],true,undefined,true)}})});h.each(k,function(c,l){e[l]=c});var p={};h.each(i,function(c){if(c){c=c.prototype;for(var l in c)if(c.hasOwnProperty(l))p[l]=c[l]}});h.each(p,function(c,l){e.prototype[l]=c})}return e}});return q},{requires:["base","node"]});
KISSY.add("uibase/box",function(){function h(){}h.ATTRS={html:{view:true,sync:false},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elBefore:{view:true},el:{view:true},render:{view:true},visibleMode:{value:"display",view:true},visible:{view:true},srcNode:{view:true}};h.HTML_PARSER={el:function(n){this.decorateInternal&&this.decorateInternal(n);return n}};h.prototype={_uiSetVisible:function(n){this.fire(n?"show":"hide")},show:function(){this.render();
this.set("visible",true)},hide:function(){this.set("visible",false)}};return h});
KISSY.add("uibase/boxrender",function(h,n){function f(){}function j(b,g,m,i,o,a){g=g||{};if(m)g.width=m;if(i)g.height=i;m="";for(var d in g)if(g.hasOwnProperty(d))m+=d+":"+g[d]+";";g="";for(var e in a)if(a.hasOwnProperty(e))g+=" "+e+"='"+a[e]+"' ";return"<"+o+(m?" style='"+m+"' ":"")+g+(b?" class='"+b+"' ":"")+"></"+o+">"}var q=h.all;f.ATTRS={el:{setter:function(b){return q(b)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elBefore:{},render:{},html:{sync:false},visible:{},
visibleMode:{}};f.construct=j;f.HTML_PARSER={html:function(b){return b.html()}};f.prototype={__renderUI:function(){if(this.__boxRenderNew){var b=this.get("render"),g=this.get("el"),m=this.get("elBefore");if(m)g.insertBefore(m);else b?g.appendTo(b):g.appendTo("body")}},__createDom:function(){var b=this.get("el");if(!b){this.__boxRenderNew=true;b=new n(j(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.set("el",b);this.get("html")&&
b.html(this.get("html"))}},_uiSetElAttrs:function(b){this.get("el").attr(b)},_uiSetElCls:function(b){this.get("el").addClass(b)},_uiSetElStyle:function(b){this.get("el").css(b)},_uiSetWidth:function(b){this.get("el").width(b)},_uiSetHeight:function(b){this.get("el").height(b)},_uiSetHtml:function(b){this.get("el").html(b)},_uiSetVisible:function(b){var g=this.get("el");this.get("visibleMode")=="visibility"?g.css("visibility",b?"visible":"hidden"):g.css("display",b?"":"none")},show:function(){this.render();
this.set("visible",true)},hide:function(){this.set("visible",false)},__destructor:function(){var b=this.get("el");if(b){b.detach();b.remove()}}};return f},{requires:["node"]});KISSY.add("uibase/close",function(){function h(){}h.ATTRS={closable:{view:true},closeAction:{value:"hide"}};var n={hide:"hide",destroy:"destroy"};h.prototype={__bindUI:function(){var f=this,j=f.get("view").get("closeBtn");j&&j.on("click",function(q){f[n[f.get("closeAction")]||"hide"]();q.preventDefault()})}};return h});
KISSY.add("uibase/closerender",function(h,n){function f(){}f.ATTRS={closable:{value:true},closeBtn:{}};f.HTML_PARSER={closeBtn:function(j){return j.one("."+this.get("prefixCls")+"ext-close")}};f.prototype={_uiSetClosable:function(j){var q=this.get("closeBtn");if(q)j?q.css("display",""):q.css("display","none")},__renderUI:function(){var j=this.get("closeBtn"),q=this.get("el");if(!j&&q){j=(new n("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(q);this.set("closeBtn",j)}},__destructor:function(){var j=this.get("closeBtn");j&&j.detach()}};return f},{requires:["node"]});
KISSY.add("uibase/constrain",function(h,n,f){function j(){}function q(b){var g;if(!b)return g;var m=this.get("el");if(b!==true){b=f.one(b);g=b.offset();h.mix(g,{maxLeft:g.left+b.outerWidth()-m.outerWidth(),maxTop:g.top+b.outerHeight()-m.outerHeight()})}else{b=document.documentElement.clientWidth;g={left:n.scrollLeft(),top:n.scrollTop()};h.mix(g,{maxLeft:g.left+b-m.outerWidth(),maxTop:g.top+n.viewportHeight()-m.outerHeight()})}return g}j.ATTRS={constrain:{value:false}};j.prototype={__renderUI:function(){var b=
this,g=b.getAttrs(),m=g.x;g=g.y;var i=m.setter,o=g.setter;m.setter=function(a){var d=i&&i.call(b,a);if(d===undefined)d=a;if(!b.get("constrain"))return d;a=q.call(b,b.get("constrain"));return Math.min(Math.max(d,a.left),a.maxLeft)};g.setter=function(a){var d=o&&o.call(b,a);if(d===undefined)d=a;if(!b.get("constrain"))return d;a=q.call(b,b.get("constrain"));return Math.min(Math.max(d,a.top),a.maxTop)};b.addAttr("x",m);b.addAttr("y",g)}};return j},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function h(){}h.ATTRS={content:{view:true,sync:false},contentEl:{view:true},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};h.prototype={};return h});
KISSY.add("uibase/contentboxrender",function(h,n,f){function j(){}function q(g,m){var i=g.get("contentEl");i.html("");m&&i.append(m)}j.ATTRS={contentEl:{},contentElAttrs:{},contentElCls:{value:""},contentElStyle:{},contentTagName:{value:"div"},content:{sync:false}};j.HTML_PARSER={content:function(g){return g.html()}};var b=f.construct;j.prototype={__renderUI:function(){},__createDom:function(){var g,m;g=this.get("el");m=h.makeArray(g[0].childNodes);g=(new n(b(this.get("prefixCls")+"contentbox "+this.get("contentElCls"),
this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),this.get("contentElAttrs")))).appendTo(g);this.set("contentEl",g);if(m.length)for(var i=0;i<m.length;i++)g.append(m[i]);else if(m=this.get("content"))q(this,m)},_uiSetContentElCls:function(g){this.get("contentEl").addClass(g)},_uiSetContentElAttrs:function(g){this.get("contentEl").attr(g)},_uiSetContentElStyle:function(g){this.get("contentEl").css(g)},_uiSetContent:function(g){q(this,g)}};return j},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(h){function n(){}n.ATTRS={handlers:{value:[]},draggable:{value:true}};n.prototype={_uiSetHandlers:function(f){f&&f.length>0&&this.__drag&&this.__drag.set("handlers",f)},__bindUI:function(){var f=h.require("dd/draggable"),j=this.get("el");if(this.get("draggable")&&f)this.__drag=new f({node:j})},_uiSetDraggable:function(f){var j=this.__drag;if(j)if(f){j.detach("drag");j.on("drag",this._dragExtAction,this)}else j.detach("drag")},_dragExtAction:function(f){this.set("xy",
[f.left,f.top])},__destructor:function(){var f=this.__drag;f&&f.destroy()}};return n});KISSY.add("uibase/loading",function(){function h(){}h.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return h});
KISSY.add("uibase/loadingrender",function(h,n){function f(){}f.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new n("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var j=this._loadingExtEl;j&&j.hide()}};return f},{requires:["node"]});
KISSY.add("uibase/mask",function(){function h(){}h.ATTRS={mask:{value:false}};h.prototype={_uiSetMask:function(n){if(n){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return h},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(h,n,f){function j(){return i?e.width()+o:"100%"}function q(){return i?e.height()+o:"100%"}function b(){m=a("<div class='"+this.get("prefixCls")+"ext-mask'/>").prependTo("body");m.css({position:i?"absolute":"fixed",left:0,top:0,width:j(),height:q()});if(i)k=a("<iframe style='position:absolute;left:0px;top:0px;background:red;width:"+j()+";height:"+q()+";filter:alpha(opacity=0);z-index:-1;'/>").insertBefore(m);m.unselectable();m.on("mousedown click",function(l){l.halt()})}
function g(){}var m,i=n.ie===6,o="px",a=f.all,d=a(window),e=a(document),k,p=0,c=h.throttle(function(){var l={width:j(),height:q()};m.css(l);k&&k.css(l)},50);g.prototype={_maskExtShow:function(){m||b.call(this);var l={"z-index":this.get("zIndex")-1},r={display:""};m.css(l);k&&k.css(l);p++;if(p==1){m.css(r);k&&k.css(r);i&&d.on("resize scroll",c)}},_maskExtHide:function(){p--;if(p<=0)p=0;if(!p){var l={display:"none"};m&&m.css(l);k&&k.css(l);i&&d.detach("resize scroll",c)}},__destructor:function(){this._maskExtHide()}};
return g},{requires:["ua","node"]});KISSY.add("uibase/position",function(h){function n(){}n.ATTRS={x:{view:true},y:{view:true},xy:{setter:function(f){var j=h.makeArray(f);if(j.length){j[0]&&this.set("x",j[0]);j[1]&&this.set("y",j[1])}return f},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true}};n.prototype={move:function(f,j){if(h.isArray(f)){j=f[1];f=f[0]}this.set("xy",[f,j])}};return n});
KISSY.add("uibase/positionrender",function(){function h(){}h.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999}};h.prototype={__renderUI:function(){this.get("el").addClass(this.get("prefixCls")+"ext-position")},_uiSetZIndex:function(n){this.get("el").css("z-index",n)},_uiSetX:function(n){this.get("el").offset({left:n})},_uiSetY:function(n){this.get("el").offset({top:n})}};
return h});KISSY.add("uibase/resize",function(h){function n(){}n.ATTRS={resize:{value:{}}};n.prototype={__destructor:function(){this.resizer&&this.resizer.destroy()},_uiSetResize:function(f){var j=h.require("resizable");if(j){this.resizer&&this.resizer.destroy();f.node=this.get("el");f.autoRender=true;if(f.handlers)this.resizer=new j(f)}}};return n});
KISSY.add("uibase/shimrender",function(h,n){function f(){}f.ATTRS={shim:{value:true}};f.prototype={_uiSetShim:function(j){var q=this.get("el");if(j&&!this.__shimEl){this.__shimEl=new n("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>");q.prepend(this.__shimEl)}else if(!j&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};return f},
{requires:["node"]});KISSY.add("uibase/stdmod",function(){function h(){}h.ATTRS={header:{view:true},body:{view:true},footer:{view:true},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};h.prototype={};return h});
KISSY.add("uibase/stdmodrender",function(h,n){function f(){}function j(b,g){var m=b.get("contentEl"),i=b.get(g);if(!i){i=(new n("<div class='"+b.get("prefixCls")+q+g+"'/>")).appendTo(m);b.set(g,i)}}var q="stdmod-";f.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};f.HTML_PARSER={header:function(b){return b.one("."+this.get("prefixCls")+q+"header")},body:function(b){return b.one("."+this.get("prefixCls")+q+"body")},footer:function(b){return b.one("."+
this.get("prefixCls")+q+"footer")}};f.prototype={_setStdModContent:function(b,g){if(h.isString(g))this.get(b).html(g);else{this.get(b).html("");this.get(b).append(g)}},_uiSetBodyStyle:function(b){this.get("body").css(b)},_uiSetHeaderStyle:function(b){this.get("header").css(b)},_uiSetFooterStyle:function(b){this.get("footer").css(b)},_uiSetBodyContent:function(b){this._setStdModContent("body",b)},_uiSetHeaderContent:function(b){this._setStdModContent("header",b)},_uiSetFooterContent:function(b){this._setStdModContent("footer",
b)},__renderUI:function(){j(this,"header");j(this,"body");j(this,"footer")}};return f},{requires:["node"]});
KISSY.add("uibase",function(h,n,f,j,q,b,g,m,i,o,a,d,e,k,p,c,l,r,s,t,u){b.Render=g;d.Render=e;k.Render=p;c.Render=l;t.Render=u;j.Render=q;i.Render=o;h.mix(n,{Align:f,Box:j,Close:b,Contrain:m,Contentbox:i,Drag:a,Loading:d,Mask:k,Position:c,Shim:{Render:r},Resize:s,StdMod:t});return h.UIBase=n},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
