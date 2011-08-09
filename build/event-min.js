/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 9 18:39
*/
KISSY.add("event/base",function(a,b,f,j){function p(c,h,o){if((o=a.trim(o))&&o.indexOf(w)>0){var t=e(arguments);a.each(o.split(w),function(x){var d=[].concat(t);d.splice(0,3,h,x);k[c].apply(k,d)});return true}return j}function g(c){return c&&c.nodeType!==3&&c.nodeType!==8}function m(c,h,o,t,x){var d=k.special[h]||{};if(!t.length&&(!d.setup||d.setup.call(c)===false))q(c,h,o);d.add&&d.add.call(c,x)}var n=document,e=a.makeArray,q=n.addEventListener?function(c,h,o,t){c.addEventListener&&c.addEventListener(h,
o,!!t)}:function(c,h,o){c.attachEvent&&c.attachEvent("on"+h,o)},r=n.removeEventListener?function(c,h,o,t){c.removeEventListener&&c.removeEventListener(h,o,!!t)}:function(c,h,o){c.detachEvent&&c.detachEvent("on"+h,o)},w=" ",i="",l="trigger-none-"+a.now(),u="ksEventTargetId"+a.now(),k={_data:function(){var c=e(arguments);c.splice(1,0,u);return b.data.apply(b,c)},_removeData:function(){var c=e(arguments);c.splice(1,0,u);return b.removeData.apply(b,c)},special:{},add:function(c,h,o,t,x){if(p("add",c,
h,o,t,x))return c;b.query(c).each(function(d){var v=!d.isCustomEventTarget,s;if(!(!d||!h||!a.isFunction(o)||v&&!g(d))){(s=k._data(d))||k._data(d,s={});var B=s.events=s.events||{};B=B[h]=B[h]||[];var z={fn:o,scope:t||d,data:x},A=s.handler;if(!A){A=s.handler=function(y,C){if(!(y&&y.type==i)){var E=A.target;if(!y||!y.fixed)y=new f(E,y);a.isPlainObject(C)&&a.mix(y,C);return k._handle(E,y)}};A.target=d}if(v){m(d,h,A,B,z);d=null}B.push(z)}});return c},__getListeners:function(c,h){return(k.__getEvents(c)||
{})[h]||[]},__getEvents:function(c){return(c=k._data(c))&&c.events},remove:function(c,h,o,t,x){if(p("remove",c,h,o,t))return c;b.query(c).each(function(d){var v=k._data(d),s=v&&v.events,B,z,A,y,C,E=!d.isCustomEventTarget,G=E&&k.special[h]||{};if(!(!d||!E&&!g(d)||!s))if(h===j)for(h in s)k.remove.call(k,d,h);else{t=t||d;if(B=s[h]){z=B.length;if(o&&z){y=A=0;for(C=[];A<z;++A){var H=false,D=B[A];if(o!==D.fn||t!==D.scope){C[y++]=D;H=true}else if(x!==F){var F=D.data;if(!x&&F||F&&!x){C[y++]=D;H=true}else if(x&&
F)if(x.equals&&F.equals)if(!F.equals(x)){C[y++]=D;H=true}}!H&&G.remove&&G.remove.call(d,D)}s[h]=C;z=C.length}if(o===j||z===0){if(E&&(!G.tearDown||G.tearDown.call(d)===false))r(d,h,v.handler);delete s[h]}}if(a.isEmptyObject(s)){v.handler.target=null;delete v.handler;delete v.events;k._removeData(d)}}});return c},_handle:function(c,h){for(var o=k.__getListeners(c,h.type).slice(0),t,x,d=0,v=o.length;d<v;++d){t=o[d];t=t.fn.call(t.scope,h,t.data);if(t!==j){if(x!==false)x=t;t===false&&h.halt()}if(h.isImmediatePropagationStopped)break}return x},
fire:function(c,h,o,t){if(!p("fire",c,h,o)){var x;b.query(c).each(function(d){var v=!d.isCustomEventTarget;o=o||{};o.type=h;if(v){var s=o,B;if(g(d)){v=new f(d);a.mix(v,s);if(t){v.stopPropagation();v.preventDefault()}s=v.target=d;var z="on"+h;do{var A=(k._data(s)||{}).handler;v.currentTarget=s;A&&A.call(s,v);if(s[z]&&s[z].call(s)===false){B=false;v.preventDefault()}s=s.parentNode||s.ownerDocument||s===d.ownerDocument&&window}while(s&&!v.isPropagationStopped);if(!v.isDefaultPrevented)if(!(h==="click"&&
d.nodeName.toLowerCase()=="a")){var y;try{if(z&&d[h]){if(y=d[z])d[z]=null;i=h;d[h]()}}catch(C){}if(y)d[z]=y;i=l}}d=B;if(d!==j)x=d}else if((d=k._data(d))&&a.isFunction(d.handler))x=d.handler(j,o)});return x}},_batchForType:p,_simpleAdd:q,_simpleRemove:r};k.on=k.add;k.detach=k.remove;return k},{requires:["dom","event/object"]});
KISSY.add("event/delegate",function(a,b,f){function j(e){return e.fn===undefined&&e.selector===undefined?true:e.fn===undefined?this.selector==e.selector:this.fn==e.fn&&this.selector==e.selector&&this.scope==e.scope}function p(e,q){var r=b.closest(e.target,[q.selector],this),w;if(r)for(var i=0;i<r.length;i++){e.currentTarget=r[i];var l=q.fn.call(q.scope||this,e);if(l===false||e.isPropagationStopped||e.isImmediatePropagationStopped){if(l===false)w=l;if(e.isPropagationStopped||e.isImmediatePropagationStopped)break}}return w}
function g(e,q){var r=e.target,w=e.relatedTarget;e.type=q.preType;if(r=b.closest(r,q.selector,this))if(r!==w&&(!w||!b.contains(r,w))){e.currentTarget=r;return q.fn.call(q.scope||this,e)}}var m=f._batchForType,n={focus:{type:"focusin"},blur:{type:"focusout"},mouseenter:{type:"mouseover",handler:g},mouseleave:{type:"mouseout",handler:g}};a.mix(f,{delegate:function(e,q,r,w,i){if(m("delegate",e,q,r,w,i))return e;b.query(e).each(function(l){if(!l.isCustomEventTarget){var u=q,k=p;if(n[q]){q=n[u].type;k=
n[u].handler||k}f.on(l,q,k,l,{fn:w,selector:r,preType:u,scope:i,equals:j})}});return e},undelegate:function(e,q,r,w,i){if(m("undelegate",e,q,r,w,i))return e;b.query(e).each(function(l){if(!l.isCustomEventTarget){var u=q,k=p;if(n[q]){q=n[u].type;k=n[u].handler||k}f.remove(l,q,k,l,{fn:w,selector:r,preType:u,scope:i,equals:j})}});return e}});return f},{requires:["dom","./base"]});
KISSY.add("event/focusin",function(a,b,f){b.ie||a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(j){function p(m){return f.fire(m.target,j.name)}var g=0;f.special[j.name]={setup:function(){g++===0&&document.addEventListener(j.fix,p,true)},tearDown:function(){--g===0&&document.removeEventListener(j.fix,p,true)}}});return f},{requires:["ua","./base"]});
KISSY.add("event/hashchange",function(a,b,f,j){j=g||j.ie;if(!("onhashchange"in window)||j<8){var p=window,g=document.documentMode,m=function(){return"#"+location.href.replace(/^[^#]*#?(.*)$/,"$1")},n,e=m(),q=function(){var u=m();if(u!==e){r(u);e=u}n=setTimeout(q,50)},r=j<8?function(u){u="<html><body>"+u+"</body></html>";var k=l.contentWindow.document;try{k.open();k.write(u);k.close();return true}catch(c){return false}}:function(){b.fire(p,"hashchange")},w=function(){n||q()},i=function(){n&&clearTimeout(n);
n=null},l;if(j<8){w=function(){if(!l){l=f.create('<iframe style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');f.prepend(l,document.documentElement);b.add(l,"load",function(){b.remove(l,"load");r(m());b.add(l,"load",u);q()});var u=function(){var k=a.trim(f.html(l.contentWindow.document.body)),c=m();if(k!=c)e=location.hash=k;b.fire(p,"hashchange")}}};i=function(){n&&clearTimeout(n);n=null;b.detach(l);f.remove(l);l=null}}b.special.hashchange={setup:function(){this===p&&w()},tearDown:function(){this===
p&&i()}}}},{requires:["./base","dom","ua"]});
KISSY.add("event/keycodes",function(){var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,
WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,
MAC_FF_META:224,WIN_IME:229};a.isTextModifyingKeyEvent=function(b){if(b.altKey&&!b.ctrlKey||b.metaKey||b.keyCode>=a.F1&&b.keyCode<=a.F12)return false;switch(b.keyCode){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PHANTOM:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return false;
default:return true}};a.isCharacterKey=function(b){if(b>=a.ZERO&&b<=a.NINE)return true;if(b>=a.NUM_ZERO&&b<=a.NUM_MULTIPLY)return true;if(b>=a.A&&b<=a.Z)return true;if(goog.userAgent.WEBKIT&&b==0)return true;switch(b){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return true;
default:return false}};return a});KISSY.add("event/mouseenter",function(a,b,f,j){j.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(p){function g(m){var n=m.relatedTarget;m.type=p.name;try{if(!(n&&n!==document&&!n.parentNode))if(n!==this&&(!n||!f.contains(this,n)))b._handle(this,m)}catch(e){}}b.special[p.name]={setup:function(){b.add(this,p.fix,g)},tearDown:function(){b.remove(this,p.fix,g)}}});return b},{requires:["./base","dom","ua"]});
KISSY.add("event/object",function(a,b){function f(g,m,n){this.currentTarget=g;this.originalEvent=m||{};if(m){this.type=m.type;this._fix()}else{this.type=n;this.target=g}this.currentTarget=g;this.fixed=true}var j=document,p="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
a.augment(f,{_fix:function(){var g=this.originalEvent,m=p.length,n,e=this.currentTarget;for(e=e.nodeType===9?e:e.ownerDocument||j;m;){n=p[--m];this[n]=g[n]}if(!this.target)this.target=this.srcElement||j;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===b&&this.clientX!==b){g=e.documentElement;m=e.body;this.pageX=this.clientX+(g&&g.scrollLeft||m&&m.scrollLeft||
0)-(g&&g.clientLeft||m&&m.clientLeft||0);this.pageY=this.clientY+(g&&g.scrollTop||m&&m.scrollTop||0)-(g&&g.clientTop||m&&m.clientTop||0)}if(this.which===b)this.which=this.charCode===b?this.keyCode:this.charCode;if(this.metaKey===b)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==b)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var g=this.originalEvent;if(g.preventDefault)g.preventDefault();else g.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var g=
this.originalEvent;if(g.stopPropagation)g.stopPropagation();else g.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var g=this.originalEvent;g.stopImmediatePropagation?g.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(g){g?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});return f});
KISSY.add("event/target",function(a,b){return{isCustomEventTarget:true,fire:function(f,j){return b.fire(this,f,j)},on:function(f,j,p){b.add(this,f,j,p);return this},detach:function(f,j,p){b.remove(this,f,j,p);return this}}},{requires:["./base"]});
KISSY.add("event/valuechange",function(a,b,f){function j(i){f.removeData(i,q);if(f.hasData(i,r)){var l=f.data(i,r);clearTimeout(l);f.removeData(i,r)}}function p(i){j(i.target)}function g(i){f.hasData(i,r)||f.data(i,r,setTimeout(function(){var l=i.value,u=f.data(i,q);if(l!==u){b.fire(i,e,{prevVal:u,newVal:l},true);f.data(i,q,l)}f.data(i,r,setTimeout(arguments.callee,w))},w))}function m(i){var l=i.target;i.type=="focus"&&f.data(l,q,l.value);g(l)}function n(i){j(i);b.remove(i,"blur",p);b.remove(i,"mousedown keyup keydown focus",
m)}var e="valuechange",q="event/valuechange/history",r="event/valuechange/poll",w=50;b.special[e]={setup:function(){var i=this.nodeName.toLowerCase();if("input"==i||"textarea"==i){n(this);b.on(this,"blur",p);b.on(this,"mousedown keyup keydown focus",m)}},tearDown:function(){n(this)}};return b},{requires:["./base","dom"]});
KISSY.add("event",function(a,b,f,j,p){f.KeyCodes=b;f.Target=j;f.Object=p;return f},{requires:["event/keycodes","event/base","event/target","event/object","event/focusin","event/hashchange","event/valuechange","event/delegate","event/mouseenter"]});
