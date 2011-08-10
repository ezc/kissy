/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 10 17:50
*/
KISSY.add("menu/delmenuitem",function(j,f,g,k,b,a){function h(d){var i=d.get("parent");if(i.fire("beforeDelete",{target:d})!==false){i.removeChild(d,true);i.set("highlightedItem",null);i.fire("delete",{target:d})}}var e=f.all;j=a.CLS;var c=a.DEL_CLS;g=g.create(b,{_performInternal:function(d){if(e(d.target).hasClass(this.getCls(c))){h(this);return true}return b.prototype._performInternal.call(this,d)},_handleKeydown:function(d){if(d.keyCode===f.KeyCodes.D){h(this);return true}}},{ATTRS:{delTooltip:{view:true}},
DefaultRender:a});k.UIStore.setUIByClass(j,{priority:k.UIStore.PRIORITY.LEVEL4,ui:g});return g},{requires:["node","uibase","component","./menuitem","./delmenuitemrender"]});
KISSY.add("menu/delmenuitemrender",function(j,f,g,k,b){function a(e){e.get("contentEl").append(j.substitute(h,{prefixCls:e.get("prefixCls"),tooltip:e.get("delTooltip")}))}var h='<span class="{prefixCls}menuitem-delete" title="{tooltip}">X</span>';return g.create(b,{renderUI:function(){this.get("el").addClass(this.getCls("menuitem-deletable"))},createDom:function(){a(this)},_uiSetContent:function(e){b.prototype._uiSetContent.call(this,e);a(this)},_uiSetDelTooltip:function(){this._uiSetContent(this.get("content"))}},
{ATTRS:{delTooltip:{}},HTML_PARSER:{delEl:function(e){return e.one(this.getCls("menuitem-delete"))}},CLS:"menuitem-deletable",DEL_CLS:"menuitem-delete"})},{requires:["node","uibase","component","./menuitemrender"]});
KISSY.add("menu/filtermenu",function(j,f,g,k,b){f=f.create(k,{bindUI:function(){this.get("view").get("filterInput").on("keyup",this.handleFilterEvent,this)},handleFilterEvent:function(){var a=this.get("view").get("filterInput"),h=this.get("highlightedItem");this.set("filterStr",a.val());if(!h||!h.get("visible"))this.set("highlightedItem",this._getNextEnabledHighlighted(0,1))},_uiSetFilterStr:function(a){this.filterItems(a)},filterItems:function(a){var h=this.get("view"),e=h.get("labelEl");h=h.get("filterInput");
e[a?"hide":"show"]();if(this.get("allowMultiple")){e=[];var c;c=a.match(/(.+)[,\uff0c]\s*([^\uff0c,]*)/);var d=[];if(c)d=c[1].split(/[,\uff0c]/);if(/[,\uff0c]$/.test(a)){e=[];if(c){e=d;c=d[d.length-1];if((d=(d=this.get("highlightedItem"))&&d.get("content"))&&d.indexOf(c)>-1&&c)e[e.length-1]=d;h.val(e.join(",")+",")}a=""}else{if(c)a=c[2]||"";e=d}this.get("enteredItems").length!=e.length&&this.set("enteredItems",e)}h=this.get("children");var i=a&&RegExp(a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08"),"ig"),l=this.getCls("menuitem-hit");j.each(h,function(m){var n=m.get("content");if(a)if(n.indexOf(a)>-1){m.set("visible",true);m.get("contentEl").html(n.replace(i,function(o){return"<span class='"+l+"'>"+o+"</span>"}))}else m.set("visible",false);else{m.get("contentEl").html(n);m.set("visible",true)}})},decorateInternal:function(a){this.set("el",a);this.decorateChildren(a.one("."+this.getCls("menu-content")))},destructor:function(){var a=this.get("view");(a=a&&a.get("filterInput"))&&a.detach()}},
{ATTRS:{label:{view:true},filterStr:{},enteredItems:{value:[]},allowMultiple:{value:false}},DefaultRender:b});g.UIStore.setUIByClass("filtermenu",{priority:g.UIStore.PRIORITY.LEVEL2,ui:f});return f},{requires:["uibase","component","./menu","./filtermenurender"]});
KISSY.add("menu/filtermenurender",function(j,f,g,k){var b=f.all;return g.create(k,{getContentElement:function(){return this.get("menuContent")},getKeyEventTarget:function(){return this.get("filterInput")},createDom:function(){var a=k.prototype.getContentElement.call(this),h=this.get("filterWrap");h||this.set("filterWrap",h=b("<div class='"+this.getCls("menu-filter")+"'/>").appendTo(a));this.get("labelEl")||this.set("labelEl",b("<div class='"+this.getCls("menu-filter-label")+"'/>").appendTo(h));this.get("filterInput")||
this.set("filterInput",b("<input autocomplete='off'/>").appendTo(h));this.get("menuContent")||this.set("menuContent",b("<div class='"+this.getCls("menu-content")+"'/>").appendTo(a))},_uiSetLabel:function(a){this.get("labelEl").html(a)}},{ATTRS:{label:{}},HTML_PARSER:{labelEl:function(a){return a.one("."+this.getCls("menu-filter")).one("."+this.getCls("menu-filter-label"))},filterWrap:function(a){return a.one("."+this.getCls("menu-filter"))},menuContent:function(a){return a.one("."+this.getCls("menu-content"))},
filterInput:function(a){return a.one("."+this.getCls("menu-filter")).one("input")}}})},{requires:["node","uibase","./menurender"]});
KISSY.add("menu/menu",function(j,f,g,k,b){var a=f.KeyCodes,h=g.create(k.Container,{_uiSetHighlightedItem:function(e,c){var d=c&&c.prevVal;d&&d.set("highlighted",false);e&&e.set("highlighted",true);this.set("activeItem",e)},_handleBlur:function(e){h.superclass._handleBlur.call(this,e);this.set("highlightedItem",undefined)},_getNextEnabledHighlighted:function(e,c){var d=this.get("children"),i=d.length,l=e;do{var m=d[e];if(!m.get("disabled")&&m.get("visible")!==false)return d[e];e=(e+c+i)%i}while(e!=
l)},_handleKeydown:function(e){if(this._handleKeyEventInternal(e)){e.halt();return true}},_handleKeyEventInternal:function(e){var c=this.get("highlightedItem");if(c&&c._handleKeydown(e))return true;var d=this.get("children"),i=d.length;if(i!==0){switch(e.keyCode){case a.ESC:return;case a.HOME:this.set("highlightedItem",this._getNextEnabledHighlighted(0,1));break;case a.END:this.set("highlightedItem",this._getNextEnabledHighlighted(i-1,-1));break;case a.UP:if(c){e=j.indexOf(c,d);i=(e-1+i)%i}else i=
i-1;this.set("highlightedItem",this._getNextEnabledHighlighted(i,-1));break;case a.DOWN:if(c){e=j.indexOf(c,d);i=(e+1+i)%i}else i=0;this.set("highlightedItem",this._getNextEnabledHighlighted(i,1));break;default:return}return true}},bindUI:function(){var e=this;e.on("hide",function(){e.set("highlightedItem",undefined)})},containsElement:function(e){if(this.get("view").containsElement(e))return true;for(var c=this.get("children"),d=0,i=c.length;d<i;d++){var l=c[d];if(typeof l.containsElement=="function"&&
l.containsElement(e))return true}return false}},{ATTRS:{focusable:{value:true},visibleMode:{value:"display"},highlightedItem:{},activeItem:{view:true}},DefaultRender:b});k.UIStore.setUIByClass("menu",{priority:k.UIStore.PRIORITY.LEVEL1,ui:h});return h},{requires:["event","uibase","component","./menurender","./submenu"]});
KISSY.add("menu/menuitem",function(j,f,g,k){var b=f.create(g.ModelControl,[f.Contentbox],{_handleMouseEnter:function(a){if(b.superclass._handleMouseEnter.call(this,a))return true;this.get("parent").set("highlightedItem",this)},_handleMouseLeave:function(a){if(b.superclass._handleMouseLeave.call(this,a))return true;this.get("parent").set("highlightedItem",undefined)},_performInternal:function(){this.get("selectable")&&this.set("selected",true);this.get("checkable")&&this.set("checked",!this.get("checked"));
this.get("parent").fire("click",{target:this});return true},_uiSetHighlighted:function(a){if(a){var h=this.get("el");a=this.get("parent").get("el");var e=h.offset().top;h=h[0].offsetHeight;var c=a.offset().top,d=a[0].offsetHeight;if(e-c>=d)a[0].scrollTop+=e-c+h-d;else if(e-c<0)a[0].scrollTop+=e-c}},containsElement:function(a){return this.get("view").containsElement(a)}},{ATTRS:{focusable:{value:false},visibleMode:{value:"display"},handleMouseEvents:{value:false},selectable:{view:true},checkable:{view:true},
value:{},checked:{view:true},selected:{view:true}}});b.DefaultRender=k;g.UIStore.setUIByClass("menuitem",{priority:g.UIStore.PRIORITY.LEVEL1,ui:b});return b},{requires:["uibase","component","./menuitemrender"]});
KISSY.add("menu/menuitemrender",function(j,f,g,k){return g.create(k.Render,[g.Contentbox.Render],{renderUI:function(){var b=this.get("el");b.addClass(this.getCls("menuitem")).attr("role","menuitem");this.get("contentEl").addClass(this.getCls("menuitem-content"));b.attr("id")||b.attr("id",j.guid("ks-menuitem"))},_uiSetDisabled:function(b){var a=this.get("el").attr("aria-disabled",!!b);b?a.addClass(this.getCls("menuitem-disabled")):a.removeClass(this.getCls("menuitem-disabled"))},_uiSetHighlighted:function(b){var a=
this.get("el");b?a.addClass(this.getCls("menuitem-highlight")):a.removeClass(this.getCls("menuitem-highlight"))},_uiSetSelected:function(b){this.get("el")[b?"addClass":"removeClass"](this.getCls("menuitem-selected"))},_uiSetChecked:function(b){this.get("el")[b?"addClass":"removeClass"](this.getCls("menuitem-checked"));if(b){b=this.get("el");var a=this.getCls("menuitem-checkbox"),h=b.one("."+a);if(!h){h=(new f("<div class='"+a+"'/>")).prependTo(b);h.unselectable()}}},_uiSetSelectable:function(b){this.get("el").attr("role",
b?"menuitemradio":"menuitem")},_uiSetCheckable:function(b){this.get("el").attr("role",b?"menuitemcheckbox":"menuitem")},_uiSetActive:function(b){this.get("el")[b?"addClass":"removeClass"](this.getCls("menuitem-active")).attr("aria-pressed",b)},containsElement:function(b){var a=this.get("el");return a[0]==b||a.contains(b)}},{ATTRS:{selected:{},checked:{}}})},{requires:["node","uibase","component"]});
KISSY.add("menu/menurender",function(j,f,g,k){return g.create(k.Render,[g.Contentbox.Render],{renderUI:function(){var b=this.get("el");b.addClass(this.getCls("menu  menu-vertical")).attr("role","menu").attr("aria-haspopup",true);b.attr("id")||b.attr("id",j.guid("ks-menu"))},_uiSetActiveItem:function(b){var a=this.get("el");if(b){b=b.get("el").attr("id");a.attr("aria-activedescendant",b)}else a.attr("aria-activedescendant","")},containsElement:function(b){var a=this.get("el");return a[0]===b||a.contains(b)}},
{ATTRS:{activeItem:{}}})},{requires:["ua","uibase","component"]});KISSY.add("menu/popupmenu",function(j,f,g,k,b){j=f.create(k,[f.Position,f.Align],{},{ATTRS:{focusable:{value:false},visibleMode:{value:"visibility"}},DefaultRender:b});g.UIStore.setUIByClass("popupmenu",{priority:g.UIStore.PRIORITY.LEVEL2,ui:j});return j},{requires:["uibase","component","./menu","./popupmenurender"]});
KISSY.add("menu/popupmenurender",function(j,f,g,k){return g.create(k,[g.Position.Render,f.ie===6?g.Shim.Render:null],{renderUI:function(){this.get("el").addClass(this.getCls("popmenu"))}})},{requires:["ua","uibase","./menurender"]});
KISSY.add("menu/separator",function(j,f,g,k){j=f.create(g.ModelControl,{},{ATTRS:{focusable:{value:false},disabled:{value:true},handleMouseEvents:{value:false}},DefaultRender:k});g.UIStore.setUIByClass("menuseparator",{priority:g.UIStore.PRIORITY.LEVEL2,ui:j});return j},{requires:["uibase","component","./separatorrender"]});
KISSY.add("menu/separatorrender",function(j,f,g){return f.create(g.Render,{createDom:function(){this.get("el").attr("role","separator").addClass(this.getCls("menuseparator"))}})},{requires:["uibase","component"]});
KISSY.add("menu/submenu",function(j,f,g,k,b,a){var h=f.KeyCodes,e=g.create(b,[k.DecorateChild],{_onParentHide:function(){this.get("menu")&&this.get("menu").hide()},bindUI:function(){var c=this.get("parent"),d=this.get("menu");if(c){c.on("hide",this._onParentHide,this);d.on("click",function(i){c.fire("click",{target:i.target})});d.on("afterActiveItemChange",function(i){c.set("activeItem",i.newVal)})}d.on("beforeHighlightedItemChange",this.onChildHighlight_,this)},_handleMouseEnter:function(c){if(e.superclass._handleMouseEnter.call(this,
c))return true;this.clearTimers();this.showTimer_=j.later(this.showMenu,this.get("menuDelay"),false,this)},showMenu:function(){var c=this.get("menu");c.set("align",{node:this.get("el"),points:["tr","tl"]});c.render();this.get("el").attr("aria-haspopup",c.get("el").attr("id"));c.show()},clearTimers:function(){if(this.dismissTimer_){this.dismissTimer_.cancel();this.dismissTimer_=null}if(this.showTimer_){this.showTimer_.cancel();this.showTimer_=null}},onChildHighlight_:function(c){if(c.newVal)if(this.get("menu").get("parent")==
this){this.clearTimers();this.get("parent").set("highlightedItem",this)}},hideMenu:function(){var c=this.get("menu");c&&c.hide()},_performInternal:function(){this.clearTimers();this.showMenu()},_handleKeydown:function(c){var d=this.get("menu"),i=d&&d.get("visible"),l=c.keyCode;if(i){if(!d._handleKeydown(c))if(l==h.LEFT){this.hideMenu();this.get("parent").set("activeItem",this)}else return}else if(l==h.RIGHT){this.showMenu();c=d.get("children");c[0]&&d.set("highlightedItem",c[0])}else return;return true},
_uiSetHighlighted:function(c,d){e.superclass._uiSetHighlighted.call(this,c,d);if(!c){this.dismissTimer_&&this.dismissTimer_.cancel();this.dismissTimer_=j.later(this.hideMenu,this.get("menuDelay"),false,this)}},containsElement:function(c){var d=this.get("menu");return d&&d.containsElement(c)},decorateChildrenInternal:function(c,d,i){d.hide();j.one(d[0].ownerDocument.body).prepend(d);this.set("menu",new c({srcNode:d,prefixCls:i}))},destructor:function(){var c=this.get("parent"),d=this.get("menu");this.clearTimers();
c&&c.detach("hide",this._onParentHide,this);!this.get("externalSubMenu")&&d&&d.destroy()}},{ATTRS:{menuDelay:{value:300},externalSubMenu:{value:false},menu:{setter:function(c){c.set("parent",this)}},decorateChildCls:{value:"popupmenu"}},DefaultRender:a});k.UIStore.setUIByClass("submenu",{priority:k.UIStore.PRIORITY.LEVEL2,ui:e});return e},{requires:["event","uibase","component","./menuitem","./submenurender"]});
KISSY.add("menu/submenurender",function(j,f,g){var k;return k=f.create(g,{renderUI:function(){var b=this.get("el"),a=this.get("contentEl");b.addClass(this.get("prefixCls")+"submenu").attr("aria-haspopup","true");a.append(j.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))},_uiSetContent:function(b){k.superclass._uiSetContent.call(this,b);this.get("contentEl").append(j.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))}})},
{requires:["uibase","./menuitemrender"]});KISSY.add("menu",function(j,f,g,k,b,a,h,e,c,d,i,l){f.Render=g;f.Item=k;f.Item.Render=b;f.SubMenu=a;a.Render=h;f.Separator=e;f.PopupMenu=d;f.FilterMenu=i;f.DelMenuItem=l;return f},{requires:["menu/menu","menu/menurender","menu/menuitem","menu/menuitemrender","menu/submenu","menu/submenurender","menu/separator","menu/separatorrender","menu/popupmenu","menu/filtermenu","menu/delmenuitem","menu/delmenuitemrender"]});
