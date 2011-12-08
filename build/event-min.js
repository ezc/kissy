/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Dec 8 00:58
*/
KISSY.add("event/base",function(a,b,f,d,h){function g(o,m){var r=A._data(o);return(r&&r.events||{})[m]||[]}function k(o,m){for(var r=g(o,m.type).slice(0),w,y,q=0,z=r.length;q<z;++q){w=r[q];w=w.fn.call(w.scope||o,m,w.data);if(w!==h){if(y!==false)y=w;w===false&&m.halt()}if(m.isImmediatePropagationStopped)break}return y}function j(o,m,r,w,y){var q=H[m]||{};if(!w.length&&(!q.setup||q.setup.call(o)===false))s(o,m,r);q.add&&q.add.call(o,y)}var n=d.isValidTarget,c=d.isIdenticalHandler,e=d.batchForType,p=
d.simpleRemove,s=d.simpleAdd,l=d.splitAndRun,t=b._nodeName,i=a.makeArray,u=a.each,v=a.trim,D="",F="trigger-none-"+a.now(),H={},I="ksEventTargetId"+a.now(),A={_clone:function(o,m){if(!(m.nodeType!==b.ELEMENT_NODE||!A._hasData(o))){var r=A._data(o).events;u(r,function(w,y){u(w,function(q){A.on(m,y,q.fn,q.scope,q.data)})})}},_hasData:function(o){return b.hasData(o,I)},_data:function(){var o=i(arguments);o.splice(1,0,I);return b.data.apply(b,o)},_removeData:function(){var o=i(arguments);o.splice(1,0,
I);return b.removeData.apply(b,o)},special:H,__add:function(o,m,r,w,y,q){var z;if(!(!m||!a.isFunction(w)||o&&!n(m))){(z=A._data(m))||A._data(m,z={});var x=z.events=z.events||{};x=x[r]=x[r]||[];w={fn:w,scope:y,data:q};var B=z.handler;if(!B){B=z.handler=function(C,E){if(!(C&&C.type==D)){var G=B.target;if(!C||!C.fixed)C=new f(G,C);var J=C.type;a.isPlainObject(E)&&a.mix(C,E);if(J)C.type=J;return k(G,C)}};B.target=m}for(z=x.length-1;z>=0;--z)if(c(x[z],w,m))return;if(o){j(m,r,B,x,w);m=null}x.push(w)}},
add:function(o,m,r,w,y){m=v(m);if(e(A,"add",o,m,r,w,y))return o;b.query(o).each(function(q){A.__add(true,q,m,r,w,y)});return o},__remove:function(o,m,r,w,y,q){if(!(!m||o&&!n(m))){var z=A._data(m),x=z&&z.events,B,C,E,G=o&&H[r]||{};if(x)if(r){if(B=x[r]){C=B.length;if(w&&C){var J={data:q,fn:w,scope:y},K;q=y=0;for(E=[];y<C;++y){K=B[y];if(c(K,J,m))G.remove&&G.remove.call(m,K);else E[q++]=K}x[r]=E;C=E.length}if(w===h||C===0){if(o&&(!G.tearDown||G.tearDown.call(m)===false))p(m,r,z.handler);delete x[r]}}if(a.isEmptyObject(x)){z.handler.target=
null;delete z.handler;delete z.events;A._removeData(m)}}else for(r in x)A.__remove(o,m,r)}},remove:function(o,m,r,w,y){m=v(m);if(e(A,"remove",o,m,r,w))return o;b.query(o).each(function(q){A.__remove(true,q,m,r,w,y)});return o},_handle:k,fire:function(o,m,r,w){var y=true;m=v(m);if(m.indexOf(" ")>-1){l(m,function(q){y=A.fire(o,q,r,w)&&y});return y}r=r||{};r.type=m;b.query(o).each(function(q){var z=m,x=r;if(n(q)){var B,C=true;if(x instanceof f)B=x;else{B=new f(q,h,z);a.mix(B,x)}B.type=z;w&&B.halt();
x=q;var E="on"+z;do{B.currentTarget=x;k(x,B);x[E]&&x[E].call(x)===false&&B.preventDefault();x=x.parentNode||x.ownerDocument||x===q.ownerDocument&&window}while(x&&!B.isPropagationStopped);if(B.isDefaultPrevented)C=false;else if(!(z==="click"&&t(q,"a"))){var G;try{if(E&&q[z]){if(G=q[E])q[E]=null;D=z;q[z]()}}catch(J){}if(G)q[E]=G;D=F}q=C}else q=false;y=q&&y});return y}};A.__getListeners=g;A.on=A.add;A.detach=A.remove;return A},{requires:["dom","./object","./utils"]});
KISSY.add("event/change",function(a,b,f,d){a=document.documentMode;if(b.ie&&(b.ie<9||a&&a<9)){var h=/^(?:textarea|input|select)$/i,g=function(e){e=e.type;return e=="checkbox"||e=="radio"};f.special.change={setup:function(){if(h.test(this.nodeName))if(g(this)){f.on(this,"propertychange",k);f.on(this,"click",j)}else return false;else f.on(this,"beforeactivate",n)},tearDown:function(){if(h.test(this.nodeName))if(g(this)){f.remove(this,"propertychange",k);f.remove(this,"click",j)}else return false;else{f.remove(this,
"beforeactivate",n);d.query("textarea,input,select",this).each(function(e){if(e.__changeHandler){e.__changeHandler=0;f.remove(e,"change",c)}})}}};var k=function(e){if(e.originalEvent.propertyName=="checked")this.__changed=1},j=function(e){if(this.__changed){this.__changed=0;f.fire(this,"change",e)}},n=function(e){e=e.target;if(h.test(e.nodeName)&&!e.__changeHandler){e.__changeHandler=1;f.on(e,"change",c)}},c=function(e){if(!g(this)){var p;if(p=this.parentNode)f.fire(p,"change",e)}}}},{requires:["ua",
"./base","dom"]});
KISSY.add("event/delegate",function(a,b,f,d){function h(c,e){if(c.fn===undefined&&c.selector===undefined)return true;else if(c.fn===undefined)return this.selector==c.selector;else{var p=this.scope||e,s=c.scope||e;return this.fn==c.fn&&this.selector==c.selector&&p==s}}function g(c,e){var p=b.closest(c.target,[e.selector],this);if(p){for(var s=c.currentTarget,l=0;l<p.length;l++){c.currentTarget=p[l];e.fn.call(e.scope||this,c)===false&&c.halt();if(c.isPropagationStopped)break}c.currentTarget=s}}function k(c,
e){var p,s=c.target,l=c.relatedTarget;c.type=e.preType;if(s=b.closest(s,e.selector,this))if(s!==l&&(!l||!b.contains(s,l))){l=c.currentTarget;c.currentTarget=s;p=e.fn.call(e.scope||this,c);c.currentTarget=l}return p}var j=d.batchForType,n={focus:{type:"focusin"},blur:{type:"focusout"},mouseenter:{type:"mouseover",handler:k},mouseleave:{type:"mouseout",handler:k}};a.mix(f,{delegate:function(c,e,p,s,l){if(j(f,"delegate",c,e,p,s,l))return c;b.query(c).each(function(t){var i=e,u=g;if(n[e]){e=n[i].type;
u=n[i].handler||u}f.on(t,e,u,t,{fn:s,selector:p,preType:i,scope:l,equals:h})});return c},undelegate:function(c,e,p,s,l){if(j(f,"undelegate",c,e,p,s,l))return c;b.query(c).each(function(t){var i=e,u=g;if(n[e]){e=n[i].type;u=n[i].handler||u}f.remove(t,e,u,t,{fn:s,selector:p,preType:i,scope:l,equals:h})});return c}});return f},{requires:["dom","./base","./utils"]});
KISSY.add("event/focusin",function(a,b,f){b.ie||a.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(d){function h(k){return f.fire(k.target,d.name)}var g=0;f.special[d.name]={setup:function(){g++===0&&document.addEventListener(d.fix,h,true)},tearDown:function(){--g===0&&document.removeEventListener(d.fix,h,true)}}});return f},{requires:["ua","./base"]});
KISSY.add("event/hashchange",function(a,b,f,d){var h=document;d=h.documentMode||d.ie;if(!("onhashchange"in window)||d&&d<8){var g=window,k="<html><head><title>"+(h.title||"")+" - {hash}</title>{head}</head><body>{hash}</body></html>",j=function(){return"#"+location.href.replace(/^[^#]*#?(.*)$/,"$1")},n,c,e=function(){var i=j();if(i!==c){c=i;p(i)}n=setTimeout(e,50)},p=d&&d<8?function(i){i=a.substitute(k,{hash:i,head:f._isCustomDomain()?"<script>document.domain = '"+h.domain+"';<\/script>":""});var u=
t.contentWindow.document;try{u.open();u.write(i);u.close()}catch(v){}}:function(){b.fire(g,"hashchange")},s=function(){n||e()},l=function(){n&&clearTimeout(n);n=0},t;if(d<8){s=function(){if(!t){var i=f._genEmptyIframeSrc();t=f.create("<iframe "+(i?'src="'+i+'"':"")+' style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');f.prepend(t,h.documentElement);b.add(t,"load",function(){b.remove(t,"load");p(j());b.add(t,"load",u);e()});h.onpropertychange=function(){try{if(event.propertyName===
"title")t.contentWindow.document.title=h.title+" - "+j()}catch(v){}};var u=function(){var v=a.trim(t.contentWindow.document.body.innerText),D=j();if(v!=D)c=location.hash=v;b.fire(g,"hashchange")}}};l=function(){n&&clearTimeout(n);n=0;b.detach(t);f.remove(t);t=0}}b.special.hashchange={setup:function(){if(this===g){c=j();s()}},tearDown:function(){this===g&&l()}}}},{requires:["./base","dom","ua"]});
KISSY.add("event/keycodes",function(){var a={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,
WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,
MAC_FF_META:224,WIN_IME:229};a.isTextModifyingKeyEvent=function(b){if(b.altKey&&!b.ctrlKey||b.metaKey||b.keyCode>=a.F1&&b.keyCode<=a.F12)return false;switch(b.keyCode){case a.ALT:case a.CAPS_LOCK:case a.CONTEXT_MENU:case a.CTRL:case a.DOWN:case a.END:case a.ESC:case a.HOME:case a.INSERT:case a.LEFT:case a.MAC_FF_META:case a.META:case a.NUMLOCK:case a.NUM_CENTER:case a.PAGE_DOWN:case a.PAGE_UP:case a.PAUSE:case a.PHANTOM:case a.PRINT_SCREEN:case a.RIGHT:case a.SHIFT:case a.UP:case a.WIN_KEY:case a.WIN_KEY_RIGHT:return false;
default:return true}};a.isCharacterKey=function(b){if(b>=a.ZERO&&b<=a.NINE)return true;if(b>=a.NUM_ZERO&&b<=a.NUM_MULTIPLY)return true;if(b>=a.A&&b<=a.Z)return true;if(goog.userAgent.WEBKIT&&b==0)return true;switch(b){case a.SPACE:case a.QUESTION_MARK:case a.NUM_PLUS:case a.NUM_MINUS:case a.NUM_PERIOD:case a.NUM_DIVISION:case a.SEMICOLON:case a.DASH:case a.EQUALS:case a.COMMA:case a.PERIOD:case a.SLASH:case a.APOSTROPHE:case a.SINGLE_QUOTE:case a.OPEN_SQUARE_BRACKET:case a.BACKSLASH:case a.CLOSE_SQUARE_BRACKET:return true;
default:return false}};return a});KISSY.add("event/mouseenter",function(a,b,f,d){d.ie||a.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(h){function g(k){var j=k.relatedTarget;k.type=h.name;try{if(!(j&&j!==document&&!j.parentNode))if(j!==this&&(!j||!f.contains(this,j)))b._handle(this,k)}catch(n){}}b.special[h.name]={setup:function(){b.add(this,h.fix,g)},tearDown:function(){b.remove(this,h.fix,g)}}});return b},{requires:["./base","dom","ua"]});
KISSY.add("event/mousewheel",function(a,b,f,d,h){function g(c){var e,p,s,l=c.detail;if(c.wheelDelta)s=c.wheelDelta/120;if(c.detail)s=-(l%3==0?l/3:l);if(c.axis!==undefined)if(c.axis===c.HORIZONTAL_AXIS){p=0;e=-1*s}else if(c.axis===c.VERTICAL_AXIS){e=0;p=s}if(c.wheelDeltaY!==undefined)p=c.wheelDeltaY/120;if(c.wheelDeltaX!==undefined)e=-1*c.wheelDeltaX/120;if(!e&&!p)p=s;c=new h(this,c);a.mix(c,{deltaY:p,delta:s,deltaX:e,type:"mousewheel"});return b._handle(this,c)}var k=f.gecko?"DOMMouseScroll":"mousewheel",
j=d.simpleRemove,n=d.simpleAdd;b.special.mousewheel={setup:function(){var c;c=b._data(this)[c]=a.bind(g,this);n(this,k,c)},tearDown:function(){var c,e=b._data(this);c=e[c];j(this,k,c);delete e[c]}}},{requires:["./base","ua","./utils","./object"]});
KISSY.add("event/object",function(a,b){function f(g,k,j){this.currentTarget=g;this.originalEvent=k||{};if(k){this.type=k.type;this._fix()}else{this.type=j;this.target=g}this.currentTarget=g;this.fixed=true}var d=document,h="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which axis".split(" ");a.augment(f,
{_fix:function(){var g=this.originalEvent,k=h.length,j,n=this.currentTarget;for(n=n.nodeType===9?n:n.ownerDocument||d;k;){j=h[--k];this[j]=g[j]}if(!this.target)this.target=this.srcElement||d;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===b&&this.clientX!==b){g=n.documentElement;k=n.body;this.pageX=this.clientX+(g&&g.scrollLeft||k&&k.scrollLeft||
0)-(g&&g.clientLeft||k&&k.clientLeft||0);this.pageY=this.clientY+(g&&g.scrollTop||k&&k.scrollTop||0)-(g&&g.clientTop||k&&k.clientTop||0)}if(this.which===b)this.which=this.charCode===b?this.keyCode:this.charCode;if(this.metaKey===b)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==b)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var g=this.originalEvent;if(g.preventDefault)g.preventDefault();else g.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var g=
this.originalEvent;if(g.stopPropagation)g.stopPropagation();else g.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=true;this.stopPropagation()},halt:function(g){g?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});return f});
KISSY.add("event/submit",function(a,b,f,d){a=document.documentMode;if(b.ie&&(b.ie<9||a&&a<9)){var h=d._nodeName;f.special.submit={setup:function(){if(h(this,"form"))return false;f.on(this,"click keypress",g)},tearDown:function(){if(h(this,"form"))return false;f.remove(this,"click keypress",g);d.query("form",this).each(function(j){if(j.__submit__fix){j.__submit__fix=0;f.remove(j,"submit",k)}})}};var g=function(j){j=j.target;if((j=h(j,"input")||h(j,"button")?j.form:null)&&!j.__submit__fix){j.__submit__fix=
1;f.on(j,"submit",k)}},k=function(j){this.parentNode&&f.fire(this.parentNode,"submit",j)}}},{requires:["ua","./base","dom"]});
KISSY.add("event/target",function(a,b,f,d,h){function g(i,u,v){if(v instanceof f){v.currentTarget=i;return v}i=new f(i,h,u);a.isPlainObject(v)&&a.mix(i,v);i.type=u;return i}function k(i){i[e]=i[e]||{};return i[e]}function j(i){i[l]=i[l]||{};return i[l]}function n(i,u){var v=k(i);return v[u]&&v[u].bubbles||v[t]&&v[t].bubbles}function c(i){return function(u,v,D){var F=this;u=p(u);s(u,function(H){b["__"+i](false,F,H,v,D)});return F}}var e="__~ks_publish",p=a.trim,s=d.splitAndRun,l="__~ks_bubble_targets",
t="*";d={fire:function(i,u){var v=this,D,F,H;i=p(i);if(i.indexOf(" ")>0){s(i,function(I){F=v.fire(I,u);if(F===false)D=false});return D}H=g(v,i,u);D=b._handle(v,H);if(!H.isPropagationStopped&&n(v,i)){F=v.bubble(i,H);if(D!==false)D=F}return D},publish:function(i,u){var v=k(this);if(i=p(i))v[i]=u},bubble:function(i,u){var v,D=j(this);a.each(D,function(F){F=F.fire(i,u);if(v!==false)v=F});return v},addTarget:function(i){j(this)[a.stamp(i)]=i},removeTarget:function(i){delete j(this)[a.stamp(i)]},on:c("add")};
d.detach=c("remove");return d},{requires:["./base","./object","./utils"]});
KISSY.add("event/utils",function(a,b){var f=document;return{splitAndRun:function(d,h){a.each(d.split(/\s+/),h)},batchForType:function(d,h,g,k){if(k&&k.indexOf(" ")>0){var j=a.makeArray(arguments);a.each(k.split(/\s+/),function(n){var c=[].concat(j);c.splice(0,4,g,n);d[h].apply(d,c)});return true}return 0},isValidTarget:function(d){return d&&d.nodeType!==b.TEXT_NODE&&d.nodeType!==b.COMMENT_NODE},isIdenticalHandler:function(d,h,g){var k=d.scope||g,j=1,n=h.scope||g;if(d.fn!==h.fn||k!==n)j=0;else if((d=
d.data)!==(h=h.data))if(!d&&h||d&&!h)j=0;else if(d&&h)if(d.equals&&h.equals)d.equals(h,g)||(j=0);return j},simpleAdd:f.addEventListener?function(d,h,g,k){d.addEventListener&&d.addEventListener(h,g,!!k)}:function(d,h,g){d.attachEvent&&d.attachEvent("on"+h,g)},simpleRemove:f.removeEventListener?function(d,h,g,k){d.removeEventListener&&d.removeEventListener(h,g,!!k)}:function(d,h,g){d.detachEvent&&d.detachEvent("on"+h,g)}}},{requires:["dom"]});
KISSY.add("event/valuechange",function(a,b,f){function d(l){f.removeData(l,e);if(f.hasData(l,p)){var t=f.data(l,p);clearTimeout(t);f.removeData(l,p)}}function h(l){d(l.target)}function g(l){f.hasData(l,p)||f.data(l,p,setTimeout(function(){var t=l.value,i=f.data(l,e);if(t!==i){b.fire(l,n,{prevVal:i,newVal:t},true);f.data(l,e,t)}f.data(l,p,setTimeout(arguments.callee,s))},s))}function k(l){var t=l.target;l.type=="focus"&&f.data(t,e,t.value);g(t)}function j(l){d(l);b.remove(l,"blur",h);b.remove(l,"mousedown keyup keydown focus",
k)}var n="valuechange",c=f._nodeName,e="event/valuechange/history",p="event/valuechange/poll",s=50;b.special[n]={setup:function(){if(c(this,"input")||c(this,"textarea")){j(this);b.on(this,"blur",h);b.on(this,"mousedown keyup keydown focus",k)}},tearDown:function(){j(this)}};return b},{requires:["./base","dom"]});
KISSY.add("event",function(a,b,f,d,h){f.KeyCodes=b;f.Target=d;f.Object=h;return f},{requires:["event/keycodes","event/base","event/target","event/object","event/focusin","event/hashchange","event/valuechange","event/delegate","event/mouseenter","event/submit","event/change","event/mousewheel"]});
