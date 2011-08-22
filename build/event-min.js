/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 22 17:20
*/
KISSY.add("event/base",function(a,b,g,k){function p(c,f,l){if((l=a.trim(l))&&l.indexOf(x)>0){var r=e(arguments);a.each(l.split(x),function(v){var d=[].concat(r);d.splice(0,3,f,v);j[c].apply(j,d)});return true}return k}function h(c){return c&&c.nodeType!==3&&c.nodeType!==8}function n(c,f,l,r,v){var d=j.special[f]||{};if(!r.length&&(!d.setup||d.setup.call(c)===false))q(c,f,l);d.add&&d.add.call(c,v)}var o=document,e=a.makeArray,q=o.addEventListener?function(c,f,l,r){c.addEventListener&&c.addEventListener(f,
l,!!r)}:function(c,f,l){c.attachEvent&&c.attachEvent("on"+f,l)},s=o.removeEventListener?function(c,f,l,r){c.removeEventListener&&c.removeEventListener(f,l,!!r)}:function(c,f,l){c.detachEvent&&c.detachEvent("on"+f,l)},x=" ",i="",m="trigger-none-"+a.now(),u="ksEventTargetId"+a.now(),j={_clone:function(c,f){if(!(f.nodeType!==b.ELEMENT_NODE&&!j._hasData(c))){var l=j._data(c).events;a.each(l,function(r,v){a.each(r,function(d){j.on(f,v,d.fn,d.scope,d.data)})})}},_hasData:function(c){return!!b.hasData(c,
u)},_data:function(){var c=e(arguments);c.splice(1,0,u);return b.data.apply(b,c)},_removeData:function(){var c=e(arguments);c.splice(1,0,u);return b.removeData.apply(b,c)},special:{},add:function(c,f,l,r,v){if(p("add",c,f,l,r,v))return c;b.query(c).each(function(d){var w=!d.isCustomEventTarget,t;if(!(!d||!f||!a.isFunction(l)||w&&!h(d))){(t=j._data(d))||j._data(d,t={});var B=t.events=t.events||{};B=B[f]=B[f]||[];var z={fn:l,scope:r,data:v},A=t.handler;if(!A){A=t.handler=function(y,C){if(!(y&&y.type==
i)){var E=A.target;if(!y||!y.fixed)y=new g(E,y);a.isPlainObject(C)&&a.mix(y,C);return j._handle(E,y)}};A.target=d}if(w){n(d,f,A,B,z);d=null}B.push(z)}});return c},__getListeners:function(c,f){return(j.__getEvents(c)||{})[f]||[]},__getEvents:function(c){return(c=j._data(c))&&c.events},remove:function(c,f,l,r,v){if(p("remove",c,f,l,r))return c;b.query(c).each(function(d){var w=j._data(d),t=w&&w.events,B,z,A,y,C,E=!d.isCustomEventTarget,G=E&&j.special[f]||{};if(!(!d||!E&&!h(d)||!t))if(f===k)for(f in t)j.remove.call(j,
d,f);else{r=r||d;if(B=t[f]){z=B.length;if(l&&z){y=A=0;for(C=[];A<z;++A){var H=false,D=B[A],I=D.scope||d;if(l!==D.fn||r!==I){C[y++]=D;H=true}else if(v!==F){var F=D.data;if(!v&&F||F&&!v){C[y++]=D;H=true}else if(v&&F)if(v.equals&&F.equals)if(!F.equals(v)){C[y++]=D;H=true}}!H&&G.remove&&G.remove.call(d,D)}t[f]=C;z=C.length}if(l===k||z===0){if(E&&(!G.tearDown||G.tearDown.call(d)===false))s(d,f,w.handler);delete t[f]}}if(a.isEmptyObject(t)){w.handler.target=null;delete w.handler;delete w.events;j._removeData(d)}}});
return c},_handle:function(c,f){for(var l=j.__getListeners(c,f.type).slice(0),r,v,d=0,w=l.length;d<w;++d){r=l[d];r=r.fn.call(r.scope||c,f,r.data);if(r!==k){if(v!==false)v=r;r===false&&f.halt()}if(f.isImmediatePropagationStopped)break}return v},fire:function(c,f,l,r){if(!p("fire",c,f,l)){var v;b.query(c).each(function(d){var w=!d.isCustomEventTarget;l=l||{};l.type=f;if(w){var t=l,B;if(h(d)){w=new g(d);a.mix(w,t);if(r){w.stopPropagation();w.preventDefault()}t=w.target=d;var z="on"+f;do{var A=(j._data(t)||
{}).handler;w.currentTarget=t;A&&A.call(t,w);if(t[z]&&t[z].call(t)===false){B=false;w.preventDefault()}t=t.parentNode||t.ownerDocument||t===d.ownerDocument&&window}while(t&&!w.isPropagationStopped);if(!w.isDefaultPrevented)if(!(f==="click"&&d.nodeName.toLowerCase()=="a")){var y;try{if(z&&d[f]){if(y=d[z])d[z]=null;i=f;d[f]()}}catch(C){}if(y)d[z]=y;i=m}}d=B;if(d!==k)v=d}else if((d=j._data(d))&&a.isFunction(d.handler))v=d.handler(k,l)});return v}},_batchForType:p,_simpleAdd:q,_simpleRemove:s};j.on=j.add;
j.detach=j.remove;return j},{requires:["dom","event/object"]});
KISSY.add("event/delegate",function(a,b,g){function k(e){return e.fn===undefined&&e.selector===undefined?true:e.fn===undefined?this.selector==e.selector:this.fn==e.fn&&this.selector==e.selector&&this.scope==e.scope}function p(e,q){var s=b.closest(e.target,[q.selector],this),x;if(s)for(var i=0;i<s.length;i++){e.currentTarget=s[i];var m=q.fn.call(q.scope||this,e);if(m===false||e.isPropagationStopped||e.isImmediatePropagationStopped){if(m===false)x=m;if(e.isPropagationStopped||e.isImmediatePropagationStopped)break}}return x}
function h(e,q){var s=e.target,x=e.relatedTarget;e.type=q.preType;if(s=b.closest(s,q.selector,this))if(s!==x&&(!x||!b.contains(s,x))){e.currentTarget=s;return q.fn.call(q.scope||this,e)}}var n=g._batchForType,o={focus:{type:"focusin"},blur:{type:"focusout"},mouseenter:{type:"mouseover",handler:h},mouseleave:{type:"mouseout",handler:h}};a.mix(g,{delegate:function(e,q,s,x,i){if(n("delegate",e,q,s,x,i))return e;b.query(e).each(function(m){if(!m.isCustomEventTarget){var u=q,j=p;if(o[q]){q=o[u].type;j=
o[u].handler||j}g.on(m,q,j,m,{fn:x,selector:s,preType:u,scope:i,equals:k})}});return e},undelegate:function(e,q,s,x,i){if(n("undelegate",e,q,s,x,i))return e;b.query(e).each(function(m){if(!m.isCustomEventTarget){var u=q,j=p;if(o[q]){q=o[u].type;j=o[u].handler||j}g.remove(m,q,j,m,{fn:x,selector:s,preType:u,scope:i,equals:k})}});return e}});return g},{requires:["dom","./base"]});
KISSY.add("event/focusin",function(a,b,g){b.ie||a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(k){function p(n){return g.fire(n.target,k.name)}var h=0;g.special[k.name]={setup:function(){h++===0&&document.addEventListener(k.fix,p,true)},tearDown:function(){--h===0&&document.removeEventListener(k.fix,p,true)}}});return g},{requires:["ua","./base"]});
KISSY.add("event/hashchange",function(a,b,g,k){k=h||k.ie;if(!("onhashchange"in window)||k<8){var p=window,h=document.documentMode,n=function(){return"#"+location.href.replace(/^[^#]*#?(.*)$/,"$1")},o,e=n(),q=function(){var u=n();if(u!==e){s(u);e=u}o=setTimeout(q,50)},s=k<8?function(u){u="<html><body>"+u+"</body></html>";var j=m.contentWindow.document;try{j.open();j.write(u);j.close();return true}catch(c){return false}}:function(){b.fire(p,"hashchange")},x=function(){o||q()},i=function(){o&&clearTimeout(o);
o=null},m;if(k<8){x=function(){if(!m){m=g.create('<iframe style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');g.prepend(m,document.documentElement);b.add(m,"load",function(){b.remove(m,"load");s(n());b.add(m,"load",u);q()});var u=function(){var j=a.trim(g.html(m.contentWindow.document.body)),c=n();if(j!=c)e=location.hash=j;b.fire(p,"hashchange")}}};i=function(){o&&clearTimeout(o);o=null;b.detach(m);g.remove(m);m=null}}b.special.hashchange={setup:function(){this===p&&x()},tearDown:function(){this===
p&&i()}}}},{requires:["./base","dom","ua"]});
KISSY.add("event/keycodes",function(){var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,
WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,
MAC_FF_META:224,WIN_IME:229};a.isTextModifyingKeyEvent=function(b){if(b.altKey&&!b.ctrlKey||b.metaKey||b.keyCode>=a.F1&&b.keyCode<=a.F12)return false;switch(b.keyCode){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PHANTOM:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return false;
default:return true}};a.isCharacterKey=function(b){if(b>=a.ZERO&&b<=a.NINE)return true;if(b>=a.NUM_ZERO&&b<=a.NUM_MULTIPLY)return true;if(b>=a.A&&b<=a.Z)return true;if(goog.userAgent.WEBKIT&&b==0)return true;switch(b){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return true;
default:return false}};return a});KISSY.add("event/mouseenter",function(a,b,g,k){k.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(p){function h(n){var o=n.relatedTarget;n.type=p.name;try{if(!(o&&o!==document&&!o.parentNode))if(o!==this&&(!o||!g.contains(this,o)))b._handle(this,n)}catch(e){}}b.special[p.name]={setup:function(){b.add(this,p.fix,h)},tearDown:function(){b.remove(this,p.fix,h)}}});return b},{requires:["./base","dom","ua"]});
KISSY.add("event/object",function(a,b){function g(h,n,o){this.currentTarget=h;this.originalEvent=n||{};if(n){this.type=n.type;this._fix()}else{this.type=o;this.target=h}this.currentTarget=h;this.fixed=true}var k=document,p="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
a.augment(g,{_fix:function(){var h=this.originalEvent,n=p.length,o,e=this.currentTarget;for(e=e.nodeType===9?e:e.ownerDocument||k;n;){o=p[--n];this[o]=h[o]}if(!this.target)this.target=this.srcElement||k;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===b&&this.clientX!==b){h=e.documentElement;n=e.body;this.pageX=this.clientX+(h&&h.scrollLeft||n&&n.scrollLeft||
0)-(h&&h.clientLeft||n&&n.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||n&&n.scrollTop||0)-(h&&h.clientTop||n&&n.clientTop||0)}if(this.which===b)this.which=this.charCode===b?this.keyCode:this.charCode;if(this.metaKey===b)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==b)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var h=this.originalEvent;if(h.preventDefault)h.preventDefault();else h.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var h=
this.originalEvent;if(h.stopPropagation)h.stopPropagation();else h.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var h=this.originalEvent;h.stopImmediatePropagation?h.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(h){h?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});return g});
KISSY.add("event/target",function(a,b){return{isCustomEventTarget:true,fire:function(g,k){return b.fire(this,g,k)},on:function(g,k,p){b.add(this,g,k,p);return this},detach:function(g,k,p){b.remove(this,g,k,p);return this}}},{requires:["./base"]});
KISSY.add("event/valuechange",function(a,b,g){function k(i){g.removeData(i,q);if(g.hasData(i,s)){var m=g.data(i,s);clearTimeout(m);g.removeData(i,s)}}function p(i){k(i.target)}function h(i){g.hasData(i,s)||g.data(i,s,setTimeout(function(){var m=i.value,u=g.data(i,q);if(m!==u){b.fire(i,e,{prevVal:u,newVal:m},true);g.data(i,q,m)}g.data(i,s,setTimeout(arguments.callee,x))},x))}function n(i){var m=i.target;i.type=="focus"&&g.data(m,q,m.value);h(m)}function o(i){k(i);b.remove(i,"blur",p);b.remove(i,"mousedown keyup keydown focus",
n)}var e="valuechange",q="event/valuechange/history",s="event/valuechange/poll",x=50;b.special[e]={setup:function(){var i=this.nodeName.toLowerCase();if("input"==i||"textarea"==i){o(this);b.on(this,"blur",p);b.on(this,"mousedown keyup keydown focus",n)}},tearDown:function(){o(this)}};return b},{requires:["./base","dom"]});
KISSY.add("event",function(a,b,g,k,p){g.KeyCodes=b;g.Target=k;g.Object=p;return g},{requires:["event/keycodes","event/base","event/target","event/object","event/focusin","event/hashchange","event/valuechange","event/delegate","event/mouseenter"]});
