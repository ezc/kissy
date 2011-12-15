/*
Copyright 2011, KISSY UI Library v1.20
MIT Licensed
build time: Dec 15 12:19
*/
KISSY.add("menu/delmenuitem",function(l,j,i,k,f,e){function b(c){var a=c.get("parent");if(a.fire("beforeDelete",{target:c})!==false){a.removeChild(c,true);a.set("highlightedItem",null);a.fire("delete",{target:c})}}var h=j.all;l=e.CLS;var g=e.DEL_CLS;i=i.create(f,{_performInternal:function(c){if(h(c.target).hasClass(this.getCls(g))){b(this);return true}return f.prototype._performInternal.call(this,c)},_handleKeydown:function(c){if(c.keyCode===j.KeyCodes.D){b(this);return true}}},{ATTRS:{delTooltip:{view:true}},
DefaultRender:e});k.UIStore.setUIByClass(l,{priority:k.UIStore.PRIORITY.LEVEL4,ui:i});return i},{requires:["node","uibase","component","./menuitem","./delmenuitemrender"]});
KISSY.add("menu/delmenuitemrender",function(l,j,i,k,f){function e(h){h.get("contentEl").append(l.substitute(b,{prefixCls:h.get("prefixCls"),tooltip:h.get("delTooltip")}))}var b='<span class="{prefixCls}menuitem-delete" title="{tooltip}">X</span>';return i.create(f,{createDom:function(){e(this)},_uiSetContent:function(h){f.prototype._uiSetContent.call(this,h);e(this)},_uiSetDelTooltip:function(){this._uiSetContent(this.get("content"))}},{ATTRS:{delTooltip:{}},HTML_PARSER:{delEl:function(h){return h.one(this.getCls("menuitem-delete"))}},
CLS:"menuitem-deletable",DEL_CLS:"menuitem-delete"})},{requires:["node","uibase","component","./menuitemrender"]});
KISSY.add("menu/filtermenu",function(l,j,i,k,f){var e=j.create(k,{bindUI:function(){this.get("view").get("filterInput").on("keyup",this.handleFilterEvent,this)},_handleMouseEnter:function(){e.superclass._handleMouseEnter.apply(this,arguments);this.getKeyEventTarget()[0].select()},handleFilterEvent:function(){var b=this.get("view").get("filterInput"),h=this.get("highlightedItem");this.set("filterStr",b.val());if(!h||!h.get("visible"))this.set("highlightedItem",this._getNextEnabledHighlighted(0,1))},
_uiSetFilterStr:function(b){this.filterItems(b)},filterItems:function(b){var h=this.get("view"),g=h.get("labelEl");h=h.get("filterInput");g[b?"hide":"show"]();if(this.get("allowMultiple")){g=[];var c;c=b.match(/(.+)[,\uff0c]\s*([^\uff0c,]*)/);var a=[];if(c)a=c[1].split(/[,\uff0c]/);if(/[,\uff0c]$/.test(b)){g=[];if(c){g=a;c=a[a.length-1];if((a=(a=this.get("highlightedItem"))&&a.get("content"))&&a.indexOf(c)>-1&&c)g[g.length-1]=a;h.val(g.join(",")+",")}b=""}else{if(c)b=c[2]||"";g=a}this.get("enteredItems").length!=g.length&&
this.set("enteredItems",g)}h=this.get("children");var d=b&&RegExp(b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"ig"),m=this.getCls("menuitem-hit");l.each(h,function(n){var o=n.get("content");if(b)if(o.indexOf(b)>-1){n.set("visible",true);n.get("contentEl").html(o.replace(d,function(p){return"<span class='"+m+"'>"+p+"</span>"}))}else n.set("visible",false);else{n.get("contentEl").html(o);n.set("visible",true)}})},decorateInternal:function(b){this.set("el",b);this.decorateChildren(b.one("."+
this.getCls("menu-content")))},reset:function(){var b=this.get("view");this.set("filterStr","");this.set("enteredItems",[]);(b=b&&b.get("filterInput"))&&b.val("")},destructor:function(){var b=this.get("view");(b=b&&b.get("filterInput"))&&b.detach()}},{ATTRS:{label:{view:true},filterStr:{},enteredItems:{value:[]},allowMultiple:{value:false}},DefaultRender:f});i.UIStore.setUIByClass("filtermenu",{priority:i.UIStore.PRIORITY.LEVEL2,ui:e});return e},{requires:["uibase","component","./menu","./filtermenurender"]});
KISSY.add("menu/filtermenurender",function(l,j,i,k){var f=j.all;return i.create(k,{getContentElement:function(){return this.get("menuContent")},getKeyEventTarget:function(){return this.get("filterInput")},createDom:function(){var e=k.prototype.getContentElement.call(this),b=this.get("filterWrap");b||this.set("filterWrap",b=f("<div class='"+this.getCls("menu-filter")+"'/>").appendTo(e));this.get("labelEl")||this.set("labelEl",f("<div class='"+this.getCls("menu-filter-label")+"'/>").appendTo(b));this.get("filterInput")||
this.set("filterInput",f("<input autocomplete='off'/>").appendTo(b));this.get("menuContent")||this.set("menuContent",f("<div class='"+this.getCls("menu-content")+"'/>").appendTo(e))},_uiSetLabel:function(e){this.get("labelEl").html(e)}},{ATTRS:{label:{}},HTML_PARSER:{labelEl:function(e){return e.one("."+this.getCls("menu-filter")).one("."+this.getCls("menu-filter-label"))},filterWrap:function(e){return e.one("."+this.getCls("menu-filter"))},menuContent:function(e){return e.one("."+this.getCls("menu-content"))},
filterInput:function(e){return e.one("."+this.getCls("menu-filter")).one("input")}}})},{requires:["node","uibase","./menurender"]});
KISSY.add("menu/menu",function(l,j,i,k,f){function e(){this.set("highlightedItem",undefined)}var b=j.KeyCodes,h=i.create(k.Container,{_uiSetHighlightedItem:function(g,c){var a=c&&c.prevVal;a&&a.set("highlighted",false);g&&g.set("highlighted",true);this.set("activeItem",g)},_handleBlur:function(g){h.superclass._handleBlur.call(this,g);this.set("highlightedItem",undefined)},_getNextEnabledHighlighted:function(g,c){var a=this.get("children"),d=a.length,m=g;do{var n=a[g];if(!n.get("disabled")&&n.get("visible")!==
false)return a[g];g=(g+c+d)%d}while(g!=m)},_handleKeydown:function(g){if(this._handleKeyEventInternal(g)){g.halt();return true}},_handleKeyEventInternal:function(g){var c=this.get("highlightedItem");if(c&&c._handleKeydown(g))return true;var a=this.get("children"),d=a.length;if(d!==0){switch(g.keyCode){case b.ESC:return;case b.HOME:this.set("highlightedItem",this._getNextEnabledHighlighted(0,1));break;case b.END:this.set("highlightedItem",this._getNextEnabledHighlighted(d-1,-1));break;case b.UP:if(c){g=
l.indexOf(c,a);d=(g-1+d)%d}else d=d-1;this.set("highlightedItem",this._getNextEnabledHighlighted(d,-1));break;case b.DOWN:if(c){g=l.indexOf(c,a);d=(g+1+d)%d}else d=0;this.set("highlightedItem",this._getNextEnabledHighlighted(d,1));break;default:return}return true}},bindUI:function(){this.on("hide",e,this)},containsElement:function(g){if(this.get("view").containsElement(g))return true;for(var c=this.get("children"),a=0,d=c.length;a<d;a++){var m=c[a];if(typeof m.containsElement=="function"&&m.containsElement(g))return true}return false}},
{ATTRS:{focusable:{value:true},visibleMode:{value:"display"},highlightedItem:{},activeItem:{view:true}},DefaultRender:f});k.UIStore.setUIByClass("menu",{priority:k.UIStore.PRIORITY.LEVEL1,ui:h});return h},{requires:["event","uibase","component","./menurender","./submenu"]});
KISSY.add("menu/menuitem",function(l,j,i,k){var f=l.all,e=j.create(i.ModelControl,[j.Contentbox],{_handleMouseEnter:function(b){if(e.superclass._handleMouseEnter.call(this,b))return true;this.get("parent").set("highlightedItem",this)},_handleMouseLeave:function(b){if(e.superclass._handleMouseLeave.call(this,b))return true;this.get("parent").set("highlightedItem",undefined)},_performInternal:function(){this.get("selectable")&&this.set("selected",true);this.get("checkable")&&this.set("checked",!this.get("checked"));
this.get("parent").fire("click",{target:this});return true},_uiSetChecked:function(b){this._forwardSetAttrToView("checked",b)},_uiSetSelected:function(b){this._forwardSetAttrToView("selected",b)},_uiSetHighlighted:function(b){e.superclass._uiSetHighlighted.apply(this,arguments);if(b){var h=this.get("el"),g=h.parent(function(c){return f(c).css("overflow")!="visible"},this.get("parent").get("el").parent());g&&h.scrollIntoView(g,undefined,undefined,true)}},containsElement:function(b){return this.get("view")&&
this.get("view").containsElement(b)}},{ATTRS:{focusable:{value:false},visibleMode:{value:"display"},handleMouseEvents:{value:false},selectable:{view:true},checkable:{view:true},value:{},checked:{},selected:{}},HTML_PARSER:{selectable:function(b){var h=this.getCls("menuitem-selectable");return b.hasClass(h)}}});e.DefaultRender=k;i.UIStore.setUIByClass("menuitem",{priority:i.UIStore.PRIORITY.LEVEL1,ui:e});return e},{requires:["uibase","component","./menuitemrender"]});
KISSY.add("menu/menuitemrender",function(l,j,i,k){return i.create(k.Render,[i.Contentbox.Render],{renderUI:function(){var f=this.get("el");f.attr("role","menuitem");this.get("contentEl").addClass(this.getCls("menuitem-content"));f.attr("id")||f.attr("id",l.guid("ks-menuitem"))},_setSelected:function(f,e){var b=this.get("el"),h=this._completeClasses(e,"-selected");b[f?"addClass":"removeClass"](h)},_setChecked:function(f,e){var b=this.get("el"),h=this._completeClasses(e,"-checked");b[f?"addClass":"removeClass"](h)},
_uiSetSelectable:function(f){this.get("el").attr("role",f?"menuitemradio":"menuitem")},_uiSetCheckable:function(f){if(f){var e=this.get("el"),b=this.getCls("menuitem-checkbox"),h=e.one("."+b);if(!h){h=(new j("<div class='"+b+"'/>")).prependTo(e);h.unselectable()}}this.get("el").attr("role",f?"menuitemcheckbox":"menuitem")},containsElement:function(f){var e=this.get("el");return e[0]==f||e.contains(f)}},{ATTRS:{selected:{},checked:{}}})},{requires:["node","uibase","component"]});
KISSY.add("menu/menurender",function(l,j,i,k){return i.create(k.Render,[i.Contentbox.Render],{renderUI:function(){var f=this.get("el");f.attr("role","menu").attr("aria-haspopup",true);f.attr("id")||f.attr("id",l.guid("ks-menu"))},_uiSetActiveItem:function(f){var e=this.get("el");if(f){f=f.get("el").attr("id");e.attr("aria-activedescendant",f)}else e.attr("aria-activedescendant","")},containsElement:function(f){var e=this.get("el");return e[0]===f||e.contains(f)}},{ATTRS:{activeItem:{}}})},{requires:["ua",
"uibase","component"]});
KISSY.add("menu/popupmenu",function(l,j,i,k,f){function e(c){var a=c.get("parent"),d;if(a&&a.get("menu")===c)d=a.get("parent");return d}function b(c){if((c=e(c))&&c.get(h))return c;return 0}var h="autoHideOnMouseLeave",g=j.create(k,[j.Position,j.Align],{_clearLeaveHideTimers:function(){var c,a,d;if(this.get(h)){if(c=this._leaveHideTimer){clearTimeout(c);this._leaveHideTimer=0}var m=this.get("children");for(c=0;c<m.length;c++){a=m[c];if((d=a.get("menu"))&&d.get(h))d._clearLeaveHideTimers()}}},_handleMouseLeave:function(){var c=
this;if(c.get(h))c._leaveHideTimer=setTimeout(function(){var a;for(var d=a=c;d;){a=d;d=b(a);if(!d)break}a=a;a.hide();(a=e(a))&&a.set("highlightedItem",null)},c.get("autoHideDelay"))},_handleMouseEnter:function(){var c=b(this);c?c._clearLeaveHideTimers():this._clearLeaveHideTimers()},_handleBlur:function(){g.superclass._handleBlur.apply(this,arguments);this.hide()}},{ATTRS:{focusable:{value:false},visibleMode:{value:"visibility"},autoHideOnMouseLeave:{},autoHideDelay:{value:100}},DefaultRender:f});
i.UIStore.setUIByClass("popupmenu",{priority:i.UIStore.PRIORITY.LEVEL2,ui:g});return g},{requires:["uibase","component","./menu","./popupmenurender"]});KISSY.add("menu/popupmenurender",function(l,j,i,k){return i.create(k,[i.Position.Render,j.ie===6?i.Shim.Render:null])},{requires:["ua","uibase","./menurender"]});
KISSY.add("menu/separator",function(l,j,i,k){l=j.create(i.ModelControl,{},{ATTRS:{focusable:{value:false},disabled:{value:true},handleMouseEvents:{value:false}},DefaultRender:k});i.UIStore.setUIByClass("menuseparator",{priority:i.UIStore.PRIORITY.LEVEL2,ui:l});return l},{requires:["uibase","component","./separatorrender"]});KISSY.add("menu/separatorrender",function(l,j,i){return j.create(i.Render,{createDom:function(){this.get("el").attr("role","separator")}})},{requires:["uibase","component"]});
KISSY.add("menu/submenu",function(l,j,i,k,f,e){function b(a){var d=this.get("menu");a=a.target;var m=this.get("el");if(!m.contains(a)&&m[0]!==a&&!d.containsElement(a)){d.hide();this.get("parent").set("highlightedItem",null)}}var h=j.KeyCodes,g=document,c=i.create(f,[k.DecorateChild],{_onParentHide:function(){this.get("menu")&&this.get("menu").hide()},bindUI:function(){var a=this.get("parent"),d=this.get("menu");if(a){a.on("hide",this._onParentHide,this);d.on("click",function(m){a.fire("click",{target:m.target})});
if(!a.__bindDocClickToHide){j.on(g,"click",b,this);d.__bindDocClickToHide=1}d.on("afterActiveItemChange",function(m){a.set("activeItem",m.newVal)})}d.on("beforeHighlightedItemChange",this.onChildHighlight_,this)},_handleMouseEnter:function(a){if(c.superclass._handleMouseEnter.call(this,a))return true;this.clearTimers();this.showTimer_=l.later(this.showMenu,this.get("menuDelay"),false,this)},showMenu:function(){var a=this.get("menu");a.set("align",l.mix({node:this.get("el"),points:["tr","tl"]},this.get("menuAlign")));
a.render();this.get("el").attr("aria-haspopup",a.get("el").attr("id"));a.show()},clearTimers:function(){if(this.dismissTimer_){this.dismissTimer_.cancel();this.dismissTimer_=null}if(this.showTimer_){this.showTimer_.cancel();this.showTimer_=null}},onChildHighlight_:function(a){if(a.newVal)if(this.get("menu").get("parent")==this){this.clearTimers();this.get("parent").set("highlightedItem",this)}},hideMenu:function(){var a=this.get("menu");a&&a.hide()},_performInternal:function(){this.clearTimers();
this.showMenu()},_handleKeydown:function(a){var d=this.get("menu"),m=d&&d.get("visible"),n=a.keyCode;if(m){if(!d._handleKeydown(a))if(n==h.LEFT){this.hideMenu();this.get("parent").set("activeItem",this)}else return}else if(n==h.RIGHT){this.showMenu();a=d.get("children");a[0]&&d.set("highlightedItem",a[0])}else return;return true},_uiSetHighlighted:function(a,d){c.superclass._uiSetHighlighted.call(this,a,d);if(!a){this.dismissTimer_&&this.dismissTimer_.cancel();this.dismissTimer_=l.later(this.hideMenu,
this.get("menuDelay"),false,this)}},containsElement:function(a){var d=this.get("menu");return d&&d.containsElement(a)},decorateChildrenInternal:function(a,d,m){d.css("visibility","hidden");l.one(d[0].ownerDocument.body).prepend(d);this.set("menu",new a({srcNode:d,prefixCls:m}))},destructor:function(){var a=this.get("parent"),d=this.get("menu");this.clearTimers();j.remove(g,"click",b,this);a&&a.detach("hide",this._onParentHide,this);!this.get("externalSubMenu")&&d&&d.destroy()}},{ATTRS:{menuDelay:{value:300},
externalSubMenu:{value:false},menuAlign:{},menu:{setter:function(a){a.set("parent",this)}},decorateChildCls:{value:"popupmenu"}},DefaultRender:e});k.UIStore.setUIByClass("submenu",{priority:k.UIStore.PRIORITY.LEVEL2,ui:c});return c},{requires:["event","uibase","component","./menuitem","./submenurender"]});
KISSY.add("menu/submenurender",function(l,j,i){var k;return k=j.create(i,{renderUI:function(){var f=this.get("el"),e=this.get("contentEl");f.attr("aria-haspopup","true");e.append(l.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))},_uiSetContent:function(f){k.superclass._uiSetContent.call(this,f);this.get("contentEl").append(l.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))}})},{requires:["uibase","./menuitemrender"]});
KISSY.add("menu",function(l,j,i,k,f,e,b,h,g,c,a,d){j.Render=i;j.Item=k;j.Item.Render=f;j.SubMenu=e;e.Render=b;j.Separator=h;j.PopupMenu=c;j.FilterMenu=a;j.DelMenuItem=d;return j},{requires:["menu/menu","menu/menurender","menu/menuitem","menu/menuitemrender","menu/submenu","menu/submenurender","menu/separator","menu/separatorrender","menu/popupmenu","menu/filtermenu","menu/delmenuitem","menu/delmenuitemrender"]});
