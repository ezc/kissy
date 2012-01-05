/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jan 5 13:40
*/
KISSY.add("event/add",function(b,i,m,n,h,f,o,l){function j(d,p,e,c,a){var k=l[p]||{};if(!c.length&&(!k.setup||k.setup.call(d)===false))g(d,p,e);k.add&&k.add.call(d,a)}var g=n.simpleAdd,q=n.isValidTarget,t=n.isIdenticalHandler;b.mix(i,{__add:function(d,p,e,c,a){var k=n.getTypedGroups(e);e=k[0];var r=k[1],s,u;k=l[e];var v,w,x;if(b.isObject(c)){w=c.last;a=c.scope;u=c.data;x=c.selector;c=c.fn;if(x)if(k&&k.delegateFix){v=e;e=k.delegateFix}}if(!x)if(k&&k.onFix){v=e;e=k.onFix}if(!(!e||!p||!b.isFunction(c)||
d&&!q(p))){(s=i._data(p))||o._data(p,s={});k=s.events=s.events||{};k=k[e]=k[e]||[];c={fn:c,scope:a,selector:x,last:w,data:u,groups:r,originalType:v};var y=s.handler;if(!y){y=s.handler=function(z,B){if(!(typeof KISSY=="undefined"||z&&z.type==n.Event_Triggered)){var C=y.target,A;if(!z||!z.fixed)z=new h(C,z);A=z.type;b.isPlainObject(B)&&b.mix(z,B);if(A)z.type=A;return f(C,z)}};y.target=p}for(a=k.length-1;a>=0;--a)if(t(k[a],c,p))return;if(d){j(p,e,y,k,c);p=null}if(x){d=k.delegateCount=k.delegateCount||
0;k.splice(d,0,c);k.delegateCount++}else{k.lastCount=k.lastCount||0;if(w){k.push(c);k.lastCount++}else k.splice(k.length-k.lastCount,0,c)}}},add:function(d,p,e,c){p=b.trim(p);if(n.batchForType(i.add,d,p,e,c))return d;d=m.query(d);for(var a=d.length-1;a>=0;a--)i.__add(true,d[a],p,e,c);return d}})},{requires:["./base","dom","./utils","./object","./handle","./data","./special"]});
KISSY.add("event/base",function(b,i,m,n,h,f,o){function l(e,c,a,k){if(!j(e))return false;var r=o[c];if(r&&r.onFix)c=r.onFix;var s=true;if(a instanceof m)r=a;else{r=new m(e,undefined,c);b.mix(r,a)}r._ks_fired=1;r.type=c;a=e;var u,v="on"+c;do{r.currentTarget=a;u=h(a,r);if(s!==false)s=u;a[v]&&a[v].call(a)===false&&r.preventDefault();a=a.parentNode||a.ownerDocument||a===e.ownerDocument&&window}while(!k&&a&&!r.isPropagationStopped);if(!k&&!r.isDefaultPrevented)if(!(c==="click"&&q(e,"a"))){var w;try{if(v&&
e[c]&&(c!=="focus"&&c!=="blur"||e.offsetWidth!==0)&&!b.isWindow(e)){if(w=e[v])e[v]=null;n.Event_Triggered=c;e[c]()}}catch(x){}if(w)e[v]=w;n.Event_Triggered=d}return s}var j=n.isValidTarget,g=n.splitAndRun,q=i._nodeName,t=b.trim,d=n.TRIGGERED_NONE,p={_clone:function(e,c){if(!(c.nodeType!==i.ELEMENT_NODE||!f._hasData(e))){var a=f._data(e).events;b.each(a,function(k,r){b.each(k,function(s){p.on(c,r,{fn:s.fn,scope:s.scope,data:s.data,originalType:s.originalType,selector:s.selector})})})}},fire:function(e,
c,a,k){var r=true,s;a=a||{};if(b.isString(c)){c=t(c);if(c.indexOf(" ")>-1){g(c,function(v){s=p.fire(e,v,a,k);if(r!==false)r=s});return r}a.type=c}else if(c instanceof m){a=c;c=a.type}c=n.getTypedGroups(c);var u=c[1];if(u)u=n.getGroupsRe(u);c=c[0];b.mix(a,{type:c,_ks_groups:u});e=i.query(e);for(u=e.length-1;u>=0;u--){s=l(e[u],c,a,k);if(r!==false)r=s}return r},fireHandler:function(e,c,a){return p.fire(e,c,a,1)}};return p},{requires:["dom","./object","./utils","./handle","./data","./special"]});
KISSY.add("event/change",function(b,i,m,n,h){var f=document.documentMode;if(i.ie&&(i.ie<9||f&&f<9)){var o=/^(?:textarea|input|select)$/i,l=function(d){d=d.type;return d=="checkbox"||d=="radio"};h.change={setup:function(){if(o.test(this.nodeName))if(l(this)){m.on(this,"propertychange",j);m.on(this,"click",g)}else return false;else m.on(this,"beforeactivate",q)},tearDown:function(){if(o.test(this.nodeName))if(l(this)){m.remove(this,"propertychange",j);m.remove(this,"click",g)}else return false;else{m.remove(this,
"beforeactivate",q);b.each(n.query("textarea,input,select",this),function(d){if(d.__changeHandler){d.__changeHandler=0;m.remove(d,"change",{fn:t,last:1})}})}}};var j=function(d){if(d.originalEvent.propertyName=="checked")this.__changed=1},g=function(d){if(this.__changed){this.__changed=0;m.fire(this,"change",d)}},q=function(d){d=d.target;if(o.test(d.nodeName)&&!d.__changeHandler){d.__changeHandler=1;m.on(d,"change",{fn:t,last:1})}},t=function(d){if(!(d.isPropagationStopped||l(this))){var p;if(p=this.parentNode)m.fire(p,
"change",d)}}}},{requires:["ua","./base","dom","./special"]});KISSY.add("event/data",function(b,i,m){var n=m.EVENT_GUID,h=b.makeArray;return{_hasData:function(f){return i.hasData(f,n)},_data:function(){var f=h(arguments);f.splice(1,0,n);return i.data.apply(i,f)},_removeData:function(){var f=h(arguments);f.splice(1,0,n);return i.removeData.apply(i,f)}}},{requires:["dom","./utils"]});
KISSY.add("event",function(b,i,m,n,h,f){b.mix(n,{KeyCodes:m,Target:h,Object:f,on:n.add,detach:n.remove,delegate:function(o,l,j,g,q){return n.add(o,l,{fn:g,scope:q,selector:j})},undelegate:function(o,l,j,g,q){return n.remove(o,l,{fn:g,scope:q,selector:j})}});b.mix(n,i);return n},{requires:["event/data","event/keycodes","event/base","event/target","event/object","event/focusin","event/hashchange","event/valuechange","event/mouseenter","event/submit","event/change","event/mousewheel","event/add","event/remove"]});
KISSY.add("event/focusin",function(b,i,m,n){i.ie||b.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(h){function f(l){return m.fire(l.target,h.name)}var o=0;n[h.name]={setup:function(){o++===0&&document.addEventListener(h.fix,f,true)},tearDown:function(){--o===0&&document.removeEventListener(h.fix,f,true)}}});n.focus={delegateFix:"focusin"};n.blur={delegateFix:"focusout"};return m},{requires:["ua","./base","./special"]});
KISSY.add("event/handle",function(b,i,m,n){return function(h,f){var o=m._data(h),l=(o&&o.events||{})[f.type]||[],j=f.target,g;o=[];var q,t,d,p=l.delegateCount||0,e,c;if(p&&!j.disabled)for(;j!=h;){e=[];for(d=0;d<p;d++){g=l[d];i.test(j,g.selector)&&e.push(g)}e.length&&o.push({currentTarget:j,currentTargetHandlers:e});j=j.parentNode||h}o.push({currentTarget:h,currentTargetHandlers:l.slice(p)});j=f.type;var a;p=f._ks_groups;d=0;for(l=o.length;!f.isPropagationStopped&&d<l;++d){g=o[d];e=g.currentTargetHandlers;
g=g.currentTarget;f.currentTarget=g;for(g=0;!f.isImmediatePropagationStopped&&g<e.length;g++){c=e[g];if(!(p&&(!c.groups||!c.groups.match(p)))){var k=c.data;f.type=c.originalType||j;if((a=n[f.type])&&a.handle){c=a.handle(f,c,k);if(c.length>0)q=c[0]}else q=c.fn.call(c.scope||h,f,k);if(t!==false)t=q;q===false&&f.halt()}}}return t}},{requires:["dom","./data","./special"]});
KISSY.add("event/hashchange",function(b,i,m,n,h){var f=document;n=f.documentMode||n.ie;if(!("onhashchange"in window)||n&&n<8){var o=window,l="<html><head><title>"+(f.title||"")+" - {hash}</title>{head}</head><body>{hash}</body></html>",j=function(){return"#"+location.href.replace(/^[^#]*#?(.*)$/,"$1")},g,q,t=function(){var a=j();if(a!==q){q=a;d(a)}g=setTimeout(t,50)},d=n&&n<8?function(a){a=b.substitute(l,{hash:a,head:m._isCustomDomain()?"<script>document.domain = '"+f.domain+"';<\/script>":""});var k=
c.contentWindow.document;try{k.open();k.write(a);k.close()}catch(r){}}:function(){i.fire(o,"hashchange")},p=function(){g||t()},e=function(){g&&clearTimeout(g);g=0},c;if(n<8){p=function(){if(!c){var a=m._genEmptyIframeSrc();c=m.create("<iframe "+(a?'src="'+a+'"':"")+' style="display: none" height="0" width="0" tabindex="-1" title="empty"/>');m.prepend(c,f.documentElement);i.add(c,"load",function(){i.remove(c,"load");d(j());i.add(c,"load",k);t()});f.onpropertychange=function(){try{if(event.propertyName===
"title")c.contentWindow.document.title=f.title+" - "+j()}catch(r){}};var k=function(){var r=b.trim(c.contentWindow.document.body.innerText),s=j();if(r!=s)q=location.hash=r;i.fire(o,"hashchange")}}};e=function(){g&&clearTimeout(g);g=0;i.detach(c);m.remove(c);c=0}}h.hashchange={setup:function(){if(this===o){q=j();p()}},tearDown:function(){this===o&&e()}}}},{requires:["./base","dom","ua","./special"]});
KISSY.add("event/keycodes",function(){var b={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,
WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,
MAC_FF_META:224,WIN_IME:229};b.isTextModifyingKeyEvent=function(i){if(i.altKey&&!i.ctrlKey||i.metaKey||i.keyCode>=b.F1&&i.keyCode<=b.F12)return false;switch(i.keyCode){case b.ALT:case b.CAPS_LOCK:case b.CONTEXT_MENU:case b.CTRL:case b.DOWN:case b.END:case b.ESC:case b.HOME:case b.INSERT:case b.LEFT:case b.MAC_FF_META:case b.META:case b.NUMLOCK:case b.NUM_CENTER:case b.PAGE_DOWN:case b.PAGE_UP:case b.PAUSE:case b.PHANTOM:case b.PRINT_SCREEN:case b.RIGHT:case b.SHIFT:case b.UP:case b.WIN_KEY:case b.WIN_KEY_RIGHT:return false;
default:return true}};b.isCharacterKey=function(i){if(i>=b.ZERO&&i<=b.NINE)return true;if(i>=b.NUM_ZERO&&i<=b.NUM_MULTIPLY)return true;if(i>=b.A&&i<=b.Z)return true;if(goog.userAgent.WEBKIT&&i==0)return true;switch(i){case b.SPACE:case b.QUESTION_MARK:case b.NUM_PLUS:case b.NUM_MINUS:case b.NUM_PERIOD:case b.NUM_DIVISION:case b.SEMICOLON:case b.DASH:case b.EQUALS:case b.COMMA:case b.PERIOD:case b.SLASH:case b.APOSTROPHE:case b.SINGLE_QUOTE:case b.OPEN_SQUARE_BRACKET:case b.BACKSLASH:case b.CLOSE_SQUARE_BRACKET:return true;
default:return false}};return b});KISSY.add("event/mouseenter",function(b,i,m,n,h){b.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(f){h[f.name]={onFix:f.fix,delegateFix:f.fix,handle:function(o,l,j){var g=o.currentTarget,q=o.relatedTarget;if(!q||q!==g&&!m.contains(g,q)){o.stopPropagation();return[l.fn.call(l.scope||g,o,j)]}return[]}}});return i},{requires:["./base","dom","ua","./special"]});
KISSY.add("event/mousewheel",function(b,i,m,n,h,f,o,l){function j(d){var p,e,c,a=d.detail;if(d.wheelDelta)c=d.wheelDelta/120;if(d.detail)c=-(a%3==0?a/3:a);if(d.axis!==undefined)if(d.axis===d.HORIZONTAL_AXIS){e=0;p=-1*c}else if(d.axis===d.VERTICAL_AXIS){p=0;e=c}if(d.wheelDeltaY!==undefined)e=d.wheelDeltaY/120;if(d.wheelDeltaX!==undefined)p=-1*d.wheelDeltaX/120;if(!p&&!e)e=c;d=new h(this,d);b.mix(d,{deltaY:e,delta:c,deltaX:p,type:"mousewheel"});return f(this,d)}var g=m.gecko?"DOMMouseScroll":"mousewheel",
q=n.simpleRemove,t=n.simpleAdd;l.mousewheel={setup:function(){var d;d=o._data(this).mousewheelHandler=b.bind(j,this);t(this,g,d)},tearDown:function(){var d,p=o._data(this);d=p.mousewheelHandler;q(this,g,d);delete p[d]}}},{requires:["./base","ua","./utils","./object","./handle","./data","./special"]});
KISSY.add("event/object",function(b,i){function m(l,j,g){this.originalEvent=j||{};this.currentTarget=l;if(j){this.type=j.type;this.isDefaultPrevented=j.defaultPrevented||j.returnValue===f||j.getPreventDefault&&j.getPreventDefault()?h:f;this._fix()}else{this.type=g;this.target=l}this.currentTarget=l;this.fixed=h}var n=document,h=true,f=false,o="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which axis".split(" ");
b.augment(m,{isDefaultPrevented:f,isPropagationStopped:f,isImmediatePropagationStopped:f,_fix:function(){var l=this.originalEvent,j=o.length,g,q=this.currentTarget;for(q=q.nodeType===9?q:q.ownerDocument||n;j;){g=o[--j];this[g]=l[g]}if(!this.target)this.target=this.srcElement||n;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===i&&this.clientX!==i){l=
q.documentElement;j=q.body;this.pageX=this.clientX+(l&&l.scrollLeft||j&&j.scrollLeft||0)-(l&&l.clientLeft||j&&j.clientLeft||0);this.pageY=this.clientY+(l&&l.scrollTop||j&&j.scrollTop||0)-(l&&l.clientTop||j&&j.clientTop||0)}if(this.which===i)this.which=this.charCode===i?this.keyCode:this.charCode;if(this.metaKey===i)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==i)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var l=this.originalEvent;if(l.preventDefault)l.preventDefault();
else l.returnValue=f;this.isDefaultPrevented=h},stopPropagation:function(){var l=this.originalEvent;if(l.stopPropagation)l.stopPropagation();else l.cancelBubble=h;this.isPropagationStopped=h},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=h;this.stopPropagation()},halt:function(l){l?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});return m});
KISSY.add("event/remove",function(b,i,m,n,h,f){var o=n.isValidTarget,l=n.simpleRemove;b.mix(i,{__remove:function(j,g,q,t,d){if(!(!g||j&&!o(g))){var p=n.getTypedGroups(q);q=p[0];var e=p[1],c,a=t,k=d,r;p=f[q];if(b.isObject(t)){d=t.scope;r="selector"in t;c=t.selector;t=t.fn;if(c)if(p&&p.delegateFix)q=p.delegateFix}if(!c)if(p&&p.onFix)q=p.onFix;var s=(p=h._data(g))&&p.events,u,v,w,x=j&&f[q]||{};if(s)if(q){var y;if(e)y=n.getGroupsRe(e);if(e=s[q]){k=e.length;if((t||r||y)&&k){d=d||g;v=u=0;for(w=[];u<k;++u){a=
e[u];if(d!=(a.scope||g)||t&&t!=a.fn||r&&(c&&c!=a.selector||!c&&!a.selector)||y&&!a.groups.match(y))w[v++]=a;else{a.selector&&e.delegateCount&&e.delegateCount--;a.last&&e.lastCount&&e.lastCount--;x.remove&&x.remove.call(g,a)}}w.delegateCount=e.delegateCount;w.lastCount=e.lastCount;s[q]=w;k=w.length}else k=0;if(!k){if(j&&(!x.tearDown||x.tearDown.call(g)===false))l(g,q,p.handler);delete s[q]}}if(b.isEmptyObject(s)){p.handler.target=null;delete p.handler;delete p.events;i._removeData(g)}}else for(q in s)s.hasOwnProperty(q)&&
i.__remove(j,g,q+e,a,k)}},remove:function(j,g,q,t){g=b.trim(g);if(n.batchForType(i.remove,j,g,q,t))return j;j=m.query(j);for(var d=j.length-1;d>=0;d--)i.__remove(true,j[d],g,q,t);return j}})},{requires:["./base","dom","./utils","./data","./special"]});KISSY.add("event/special",function(){return{}});
KISSY.add("event/submit",function(b,i,m,n,h){var f=document.documentMode;if(i.ie&&(i.ie<9||f&&f<9)){var o=n._nodeName;h.submit={setup:function(){if(o(this,"form"))return false;m.on(this,"click keypress",l)},tearDown:function(){if(o(this,"form"))return false;m.remove(this,"click keypress",l);b.each(n.query("form",this),function(g){if(g.__submit__fix){g.__submit__fix=0;m.remove(g,"submit",{fn:j,last:1})}})}};var l=function(g){g=g.target;if((g=o(g,"input")||o(g,"button")?g.form:null)&&!g.__submit__fix){g.__submit__fix=
1;m.on(g,"submit",{fn:j,last:1})}},j=function(g){this.parentNode&&!g.isPropagationStopped&&!g._ks_fired&&m.fire(this.parentNode,"submit",g)}}},{requires:["ua","./base","dom","./special"]});
KISSY.add("event/target",function(b,i,m,n,h,f){function o(a,k,r){if(r instanceof m){r.currentTarget=a;return r}a=new m(a,f,k);b.mix(a,r);return a}function l(a){a[t]=a[t]||{};return a[t]}function j(a){a[e]=a[e]||{};return a[e]}function g(a,k){var r=l(a);return r[k]&&r[k].bubbles||r[c]&&r[c].bubbles}function q(a){return function(k,r,s){var u=this;k=d(k);p(k,function(v){i["__"+a](false,u,v,r,s)});return u}}var t="__~ks_publish",d=b.trim,p=n.splitAndRun,e="__~ks_bubble_targets",c="*";return{fire:function(a,
k){var r=this,s=f,u,v;k=k||{};a=d(a);if(a.indexOf(" ")>0){p(a,function(x){u=r.fire(x,k);if(s!==false)s=u});return s}v=n.getTypedGroups(a);var w=v[1];a=v[0];if(w)w=n.getGroupsRe(w);b.mix(k,{type:a,_ks_groups:w});v=o(r,a,k);s=h(r,v);if(!v.isPropagationStopped&&g(r,a)){u=r.bubble(a,v);if(s!==false)s=u}return s},publish:function(a,k){var r=l(this);if(a=d(a))r[a]=k},bubble:function(a,k){var r=f,s=j(this);b.each(s,function(u){u=u.fire(a,k);if(r!==false)r=u});return r},addTarget:function(a){j(this)[b.stamp(a)]=
a},removeTarget:function(a){delete j(this)[b.stamp(a)]},on:q("add"),detach:q("remove")}},{requires:["./base","./object","./utils","./handle"]});
KISSY.add("event/utils",function(b,i){var m=document,n=m.addEventListener?function(h,f,o,l){h.addEventListener&&h.addEventListener(f,o,!!l)}:function(h,f,o){h.attachEvent&&h.attachEvent("on"+f,o)};m=m.removeEventListener?function(h,f,o,l){h.removeEventListener&&h.removeEventListener(f,o,!!l)}:function(h,f,o){h.detachEvent&&h.detachEvent("on"+f,o)};return{Event_Triggered:"",TRIGGERED_NONE:"trigger-none-"+b.now(),EVENT_GUID:"ksEventTargetId"+b.now(),splitAndRun:function(h,f){b.each(h.split(/\s+/),f)},
batchForType:function(h,f,o){if(o&&o.indexOf(" ")>0){var l=b.makeArray(arguments);b.each(o.split(/\s+/),function(j){var g=[].concat(l);g.splice(0,3,f,j);h.apply(null,g)});return true}return 0},isValidTarget:function(h){return h&&h.nodeType!==i.TEXT_NODE&&h.nodeType!==i.COMMENT_NODE},isIdenticalHandler:function(h,f,o){var l=h.scope||o,j=1;o=f.scope||o;if(h.fn!==f.fn||h.selector!==f.selector||h.data!==f.data||l!==o||h.originalType!==f.originalType||h.groups!==f.groups||h.last!==f.last)j=0;return j},
simpleAdd:n,simpleRemove:m,getTypedGroups:function(h){if(h.indexOf(".")<0)return[h,""];var f=h.match(/([^.]+)?(\..+)?$/);h=[f[1]];if(f=f[2]){f=f.split(".").sort();h.push(f.join("."))}else h.push("");return h},getGroupsRe:function(h){return RegExp(h.split(".").join(".*\\.")+"(?:\\.|$)")}}},{requires:["dom"]});
KISSY.add("event/valuechange",function(b,i,m,n){function h(e){m.removeData(e,t);if(m.hasData(e,d)){var c=m.data(e,d);clearTimeout(c);m.removeData(e,d)}}function f(e){h(e.target)}function o(e){m.hasData(e,d)||m.data(e,d,setTimeout(function(){var c=e.value,a=m.data(e,t);if(c!==a){i.fire(e,g,{prevVal:a,newVal:c},true);m.data(e,t,c)}m.data(e,d,setTimeout(arguments.callee,p))},p))}function l(e){var c=e.target;e.type=="focus"&&m.data(c,t,c.value);o(c)}function j(e){h(e);i.remove(e,"blur",f);i.remove(e,
"mousedown keyup keydown focus",l)}var g="valuechange",q=m._nodeName,t="event/valuechange/history",d="event/valuechange/poll",p=50;n[g]={setup:function(){if(q(this,"input")||q(this,"textarea")){j(this);i.on(this,"blur",f);i.on(this,"mousedown keyup keydown focus",l)}},tearDown:function(){j(this)}};return i},{requires:["./base","dom","./special"]});
