/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("uibase/align",function(f,i,b){function e(){}function g(a,c){var k=c.charAt(0),l=c.charAt(1),d,h,j,m;if(a){a=b.one(a);d=a.offset();h=a[0].offsetWidth;j=a[0].offsetHeight}else{d={left:i.scrollLeft(),top:i.scrollTop()};h=i.viewportWidth();j=i.viewportHeight()}m=d.left;d=d.top;if(k==="c")d+=j/2;else if(k==="b")d+=j;if(l==="c")m+=h/2;else if(l==="r")m+=h;return{left:m,top:d}}f.mix(e,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});e.ATTRS={align:{}};e.prototype={_uiSetAlign:function(a){f.isPlainObject(a)&&
this.align(a.node,a.points,a.offset)},align:function(a,c,k){var l,d=(this.get("view")||this).get("el");k=k||[0,0];l=d.offset();a=g(a,c[0]);c=g(d,c[1]);c=[c.left-a.left,c.top-a.top];l=[l.left-c[0]+ +k[0],l.top-c[1]+ +k[1]];this.set("x",l[0]);this.set("y",l[1])},center:function(a){this.set("align",{node:a,points:[e.CC,e.CC],offset:[0,0]})}};return e},{requires:["dom","node"]});
KISSY.add("uibase/base",function(f,i,b,e){function g(d){d+="";return d.charAt(0).toUpperCase()+d.substring(1)}function a(d){i.apply(this,arguments);for(var h=this.constructor;h;){if(d&&d[l]&&h.HTML_PARSER)if(d[l]=e.one(d[l])){var j=d[l],m=h.HTML_PARSER,n=void 0,o=void 0;for(n in m)if(m.hasOwnProperty(n)){o=m[n];if(f.isFunction(o))this.__set(n,o.call(this,j));else if(f.isString(o))this.__set(n,j.one(o));else f.isArray(o)&&o[0]&&this.__set(n,j.all(o[0]))}}h=h.superclass&&h.superclass.constructor}c(this,
"initializer","constructor");d&&d.autoRender&&this.render()}function c(d,h,j){for(var m=d.constructor,n=[],o,p,s,r;m;){r=[];if(s=m.__ks_exts)for(var q=0;q<s.length;q++)if(o=s[q]){if(j!="constructor")o=o.prototype.hasOwnProperty(j)?o.prototype[j]:null;o&&r.push(o)}if(m.prototype.hasOwnProperty(h)&&(p=m.prototype[h]))r.push(p);r.length&&n.push.apply(n,r.reverse());m=m.superclass&&m.superclass.constructor}for(q=n.length-1;q>=0;q--)n[q]&&n[q].call(d)}function k(d,h){if(!h)return d;for(var j in h)if(f.isObject(h[j])&&
f.isObject(d[j]))k(d[j],h[j]);else j in d||(d[j]=h[j])}var l="srcNode";b=function(){};a.HTML_PARSER={};a.ATTRS={render:{view:true,valueFn:function(){return e.one(document.body)},setter:function(d){if(f.isString(d))return e.one(d)}}};f.extend(a,i,{create:function(){if(!this.__domCreated){this.fire("createDom");c(this,"createDom","__createDom");this.fire("afterCreateDom");this.__domCreated=true}},render:function(){if(!this.__rendered){this.create();this._renderUI();this.fire("renderUI");c(this,"renderUI",
"__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");c(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();this.fire("syncUI");c(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.__rendered=true}},_renderUI:b,renderUI:b,_bindUI:function(){var d=this,h=d.__attrs,j,m;for(j in h)if(h.hasOwnProperty(j)){m="_uiSet"+g(j);d[m]&&function(n,o){d.on("after"+g(n)+"Change",function(p){d[o](p.newVal,p)})}(j,m)}},bindUI:b,_syncUI:function(){var d=this.__attrs,h;for(h in d)if(d.hasOwnProperty(h)){var j=
"_uiSet"+g(h);this[j]&&this.get(h)!==undefined&&this[j](this.get(h))}},syncUI:b,destroy:function(){for(var d=this.constructor,h,j,m;d;){d.prototype.hasOwnProperty("destructor")&&d.prototype.destructor.apply(this);if(h=d.__ks_exts)for(m=h.length-1;m>=0;m--)(j=h[m]&&h[m].prototype.__destructor)&&j.apply(this);d=d.superclass&&d.superclass.constructor}this.fire("destroy");this.detach()}});a.create=function(d,h,j,m){function n(){a.apply(this,arguments)}if(f.isArray(d)){m=j;j=h;h=d;d=a}d=d||a;if(f.isObject(h)){m=
j;j=h;h=[]}f.extend(n,d,j,m);if(h){n.__ks_exts=h;f.each(h,function(o){if(o){f.each(["ATTRS","HTML_PARSER"],function(p){if(o[p]){n[p]=n[p]||{};k(n[p],o[p])}});f.augment(n,o,false)}})}return n};return a},{requires:["base","dom","node"]});
KISSY.add("uibase/box",function(){function f(){}f.ATTRS={html:{view:true},width:{view:true},height:{view:true},elCls:{view:true},elStyle:{view:true},elAttrs:{view:true},elBefore:{view:true},el:{getter:function(){return this.get("view")&&this.get("view").get("el")}}};f.prototype={};return f});
KISSY.add("uibase/boxrender",function(f,i){function b(){}function e(g,a,c,k,l,d){a=a||{};if(c)a.width=c;if(k)a.height=k;c="";for(var h in a)if(a.hasOwnProperty(h))c+=h+":"+a[h]+";";a="";for(var j in d)if(d.hasOwnProperty(j))a+=" "+j+"='"+d[j]+"' ";return"<"+l+(c?" style='"+c+"' ":"")+a+(g?" class='"+g+"' ":"")+"></"+l+">"}b.ATTRS={el:{setter:function(g){if(f.isString(g))return i.one(g)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elBefore:{value:null},html:{}};b.construct=
e;b.HTML_PARSER={el:function(g){return g}};b.prototype={__renderUI:function(){if(this.__boxRenderNew){var g=this.get("render"),a=this.get("el"),c=this.get("elBefore");c=c&&c[0];g[0].insertBefore(a[0],c||null)}},__createDom:function(){var g=this.get("el");if(!g){this.__boxRenderNew=true;g=new i(e(this.get("elCls"),this.get("elStyle"),this.get("width"),this.get("height"),this.get("elTagName"),this.get("elAttrs")));this.set("el",g)}},_uiSetElAttrs:function(g){this.get("el").attr(g)},_uiSetElCls:function(g){this.get("el").addClass(g)},
_uiSetElStyle:function(g){this.get("el").css(g)},_uiSetWidth:function(g){this.get("el").width(g)},_uiSetHeight:function(g){this.get("el").height(g)},_uiSetHtml:function(g){this.get("el").html(g)},__destructor:function(){var g=this.get("el");if(g){g.detach();g.remove()}}};return b},{requires:["node"]});
KISSY.add("uibase/close",function(){function f(){}f.ATTRS={closable:{value:true,view:true},closeAction:{value:"hide"}};var i={hide:"hide",destroy:"destroy"};f.prototype={__bindUI:function(){var b=this,e=b.get("view").get("closeBtn");e&&e.on("click",function(g){b[i[b.get("closeAction")]||"hide"]();g.halt()})}};return f});
KISSY.add("uibase/closerender",function(f,i){function b(){}b.ATTRS={closable:{value:true},closeBtn:{}};b.HTML_PARSER={closeBtn:function(e){return e.one("."+this.get("prefixCls")+"ext-close")}};b.prototype={_uiSetClosable:function(e){var g=this.get("closeBtn");if(g)e?g.css("display",""):g.css("display","none")},__renderUI:function(){var e=this.get("closeBtn"),g=this.get("contentEl");if(!e&&g){e=(new i("<a tabindex='0' role='button' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>\u5173\u95ed</span></a>")).appendTo(g);this.set("closeBtn",e)}},__destructor:function(){var e=this.get("closeBtn");e&&e.detach()}};return b},{requires:["node"]});
KISSY.add("uibase/constrain",function(f,i,b){function e(){}function g(a){var c;if(!a)return c;var k=this.get("view").get("el");if(a!==true){a=b.one(a);c=a.offset();f.mix(c,{maxLeft:c.left+a[0].offsetWidth-k[0].offsetWidth,maxTop:c.top+a[0].offsetHeight-k[0].offsetHeight})}else{a=document.documentElement.clientWidth;c={left:i.scrollLeft(),top:i.scrollTop()};f.mix(c,{maxLeft:c.left+a-k[0].offsetWidth,maxTop:c.top+i.viewportHeight()-k[0].offsetHeight})}return c}e.ATTRS={constrain:{value:false}};e.prototype=
{__renderUI:function(){var a=this,c=a.__getDefAttrs(),k=c.x;c=c.y;var l=k.setter,d=c.setter;k.setter=function(h){var j=l&&l(h);if(j===undefined)j=h;if(!a.get("constrain"))return j;h=g.call(a,a.get("constrain"));return Math.min(Math.max(j,h.left),h.maxLeft)};c.setter=function(h){var j=d&&d(h);if(j===undefined)j=h;if(!a.get("constrain"))return j;h=g.call(a,a.get("constrain"));return Math.min(Math.max(j,h.top),h.maxTop)};a.addAttr("x",k);a.addAttr("y",c)}};return e},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function f(){}f.ATTRS={content:{view:true},contentEl:{getter:function(){return this.get("view")&&this.get("view").get("contentEl")}},contentElAttrs:{view:true},contentElStyle:{view:true},contentTagName:{view:true}};f.prototype={};return f});
KISSY.add("uibase/contentboxrender",function(f,i,b){function e(){}e.ATTRS={contentEl:{},contentElAttrs:{},contentElStyle:{},contentTagName:{value:"div"},content:{}};e.HTML_PARSER={contentEl:function(a){return a.one("."+this.get("prefixCls")+"contentbox")}};var g=b.construct;e.prototype={__renderUI:function(){var a=this.get("contentEl"),c=this.get("el");if(!a){var k=f.makeArray(c[0].childNodes);a=(new i(g(this.get("prefixCls")+"contentbox",this.get("contentElStyle"),undefined,undefined,this.get("contentTagName"),
this.get("contentElAttrs")))).appendTo(c);for(c=0;c<k.length;c++)a.append(k[c]);this.set("contentEl",a)}},_uiSetContentElAttrs:function(a){a&&this.get("contentEl").attr(a)},_uiSetContentElStyle:function(a){a&&this.get("contentEl").css(a)},_uiSetContent:function(a){if(f.isString(a))this.get("contentEl").html(a);else if(a!==undefined){this.get("contentEl").html("");this.get("contentEl").append(a)}}};return e},{requires:["node","./boxrender"]});
KISSY.add("uibase/drag",function(f){function i(){}i.ATTRS={handlers:{value:[]},draggable:{value:true}};i.prototype={_uiSetHandlers:function(b){b&&b.length>0&&this.__drag&&this.__drag.set("handlers",b)},__bindUI:function(){var b=f.require("dd/draggable"),e=this.get("view").get("el");if(this.get("draggable")&&b)this.__drag=new b({node:e,handlers:this.get("handlers")})},_uiSetDraggable:function(b){var e=this.__drag;if(e)if(b){e.detach("drag");e.on("drag",this._dragExtAction,this)}else e.detach("drag")},
_dragExtAction:function(b){this.set("xy",[b.left,b.top])},__destructor:function(){var b=this.__drag;b&&b.destroy()}};return i});KISSY.add("uibase/loading",function(){function f(){}f.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return f});
KISSY.add("uibase/loadingrender",function(f,i){function b(){}b.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new i("<div class='"+this.get("prefixCls")+"ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'/>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var e=this._loadingExtEl;e&&e.hide()}};return b},{requires:["node"]});
KISSY.add("uibase/mask",function(){function f(){}f.ATTRS={mask:{value:false}};f.prototype={_uiSetMask:function(i){if(i){this.on("show",this.get("view")._maskExtShow,this.get("view"));this.on("hide",this.get("view")._maskExtHide,this.get("view"))}else{this.detach("show",this.get("view")._maskExtShow,this.get("view"));this.detach("hide",this.get("view")._maskExtHide,this.get("view"))}}};return f},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(f,i,b,e){function g(){c=(new e("<div class='"+this.get("prefixCls")+"ext-mask'/>")).prependTo(document.body);c.css({position:"absolute",left:0,top:0,width:i.ie==6?b.docWidth():"100%",height:b.docHeight()});if(i.ie==6)k=(new e("<iframe style='position:absolute;left:0;top:0;background:red;width:"+b.docWidth()+"px;height:"+b.docHeight()+"px;filter:alpha(opacity=0);z-index:-1;'/>")).insertBefore(c);f.Event.on(window,"resize",function(){var d={width:i.ie==6?b.docWidth():
"100%",height:b.docHeight()};k&&k.css(d);c.css(d)});c.unselectable();c.on("mousedown click",function(d){d.halt()})}function a(){}var c,k,l=0;a.prototype={_maskExtShow:function(){c||g.call(this);var d=this.get("zIndex")-1;c.css("z-index",d);k&&k.css("z-index",d);l++;c.css("display","");k&&k.css("display","")},_maskExtHide:function(){l--;if(l<=0)l=0;if(!l){c&&c.css("display","none");k&&k.css("display","none")}},__destructor:function(){this._maskExtHide()}};return a},{requires:["ua","dom","node"]});
KISSY.add("uibase/position",function(f){function i(){}i.ATTRS={x:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("x")}},y:{view:true,valueFn:function(){return this.get("view")&&this.get("view").get("y")}},xy:{setter:function(b){var e=f.makeArray(b);if(e.length){e[0]&&this.set("x",e[0]);e[1]&&this.set("y",e[1])}return b},getter:function(){return[this.get("x"),this.get("y")]}},zIndex:{view:true},visible:{}};i.prototype={_uiSetVisible:function(b){this.get("view").set("visible",
b);this.fire(b?"show":"hide")},move:function(b,e){if(f.isArray(b)){e=b[1];b=b[0]}this.set("xy",[b,e])},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return i});
KISSY.add("uibase/positionrender",function(){function f(){}f.ATTRS={x:{valueFn:function(){return this.get("el")&&this.get("el").offset().left}},y:{valueFn:function(){return this.get("el")&&this.get("el").offset().top}},zIndex:{value:9999},visible:{}};f.prototype={__renderUI:function(){var i=this.get("el");i.addClass(this.get("prefixCls")+"ext-position");i.css({visibility:"hidden",display:"",left:-9999,top:-9999,bottom:"",right:""})},_uiSetZIndex:function(i){this.get("el").css("z-index",i)},_uiSetX:function(i){this.get("el").offset({left:i})},
_uiSetY:function(i){this.get("el").offset({top:i})},_uiSetVisible:function(i){this.get("el").css("visibility",i?"visible":"hidden")},show:function(){this.render();this.set("visible",true)},hide:function(){this.set("visible",false)}};return f});
KISSY.add("uibase/resize",function(f){function i(){}i.ATTRS={resize:{value:{}}};i.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(b){var e=f.require("resizable");if(e){this.resizer&&this.resizer.destroy();b.node=this.get("view").get("el");b.autoRender=true;if(b.handlers)this.resizer=new e(b)}}};return i});
KISSY.add("uibase/shimrender",function(f,i){function b(){}b.ATTRS={shim:{value:true}};b.prototype={_uiSetShim:function(e){var g=this.get("el");if(e&&!this.__shimEl){this.__shimEl=new i("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'/>");g.prepend(this.__shimEl)}else if(!e&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};return b},
{requires:["node"]});KISSY.add("uibase/stdmod",function(){function f(){}f.ATTRS={header:{getter:function(){return this.get("view")&&this.get("view").get("header")}},body:{getter:function(){return this.get("view")&&this.get("view").get("body")}},footer:{getter:function(){return this.get("view")&&this.get("view").get("footer")}},bodyStyle:{view:true},footerStyle:{view:true},headerStyle:{view:true},headerContent:{view:true},bodyContent:{view:true},footerContent:{view:true}};f.prototype={};return f});
KISSY.add("uibase/stdmodrender",function(f,i){function b(){}function e(a,c){var k=a.get("contentEl"),l=a.get(c);if(!l){l=(new i("<div class='"+a.get("prefixCls")+g+c+"'/>")).appendTo(k);a.set(c,l)}}var g="stdmod-";b.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};b.HTML_PARSER={header:function(a){return a.one("."+this.get("prefixCls")+g+"header")},body:function(a){return a.one("."+this.get("prefixCls")+g+"body")},footer:function(a){return a.one("."+
this.get("prefixCls")+g+"footer")}};b.prototype={_setStdModContent:function(a,c){if(f.isString(c))this.get(a).html(c);else{this.get(a).html("");this.get(a).append(c)}},_uiSetBodyStyle:function(a){this.get("body").css(a)},_uiSetHeaderStyle:function(a){this.get("header").css(a)},_uiSetFooterStyle:function(a){this.get("footer").css(a)},_uiSetBodyContent:function(a){this._setStdModContent("body",a)},_uiSetHeaderContent:function(a){this._setStdModContent("header",a)},_uiSetFooterContent:function(a){this._setStdModContent("footer",
a)},__renderUI:function(){e(this,"header");e(this,"body");e(this,"footer")}};return b},{requires:["node"]});
KISSY.add("uibase",function(f,i,b,e,g,a,c,k,l,d,h,j,m,n,o,p,s,r,q,t,u){a.Render=c;j.Render=m;n.Render=o;p.Render=s;t.Render=u;e.Render=g;l.Render=d;f.mix(i,{Align:b,Box:e,Close:a,Contrain:k,Contentbox:l,Drag:h,Loading:j,Mask:n,Position:p,Shim:{Render:r},Resize:q,StdMod:t});return f.UIBase=i},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
