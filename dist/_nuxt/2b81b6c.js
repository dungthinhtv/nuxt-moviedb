(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{531:function(n,e,t){var content=t(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(18).default)("238c91c4",content,!0,{sourceMap:!1})},532:function(n,e,t){var r=t(17)(!1);r.push([n.i,".theme--light.v-banner.v-sheet{background-color:transparent}.theme--light.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid rgba(0,0,0,.12)}.theme--dark.v-banner.v-sheet{background-color:transparent}.theme--dark.v-banner.v-sheet:not(.v-sheet--outlined):not(.v-sheet--shaped) .v-banner__wrapper{border-bottom:thin solid hsla(0,0%,100%,.12)}.v-sheet.v-banner{border-radius:0}.v-sheet.v-banner:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-banner.v-sheet--shaped{border-radius:24px 0}.v-banner{position:relative;transition:box-shadow .28s cubic-bezier(.4,0,.2,1)}.v-banner__actions{align-items:center;align-self:flex-end;display:flex;flex:1 0 auto;justify-content:flex-end;margin-bottom:-8px}.v-application--is-ltr .v-banner__actions{margin-left:90px}.v-application--is-rtl .v-banner__actions{margin-right:90px}.v-application--is-ltr .v-banner__actions>*{margin-left:8px}.v-application--is-rtl .v-banner__actions>*{margin-right:8px}.v-banner__content{align-items:center;display:flex;flex:1 1 auto;overflow:hidden}.v-banner__text{flex:1 1 auto;line-height:20px;max-width:100%}.v-banner__icon{display:inline-flex;flex:0 0 auto}.v-application--is-ltr .v-banner__icon{margin-right:24px}.v-application--is-rtl .v-banner__icon{margin-left:24px}.v-banner__wrapper{align-items:center;display:flex;flex:1 1 auto}.v-application--is-ltr .v-banner__wrapper{padding:16px 8px 16px 24px}.v-application--is-rtl .v-banner__wrapper{padding:16px 24px 16px 8px}.v-banner--single-line .v-banner__actions{margin-bottom:0;align-self:center}.v-banner--single-line .v-banner__text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.v-banner--single-line .v-banner__wrapper{padding-top:8px;padding-bottom:8px}.v-application--is-ltr .v-banner--has-icon .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--has-icon .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile .v-banner__actions{flex:1 0 100%;margin-left:0;margin-right:0;padding-top:12px}.v-banner--is-mobile .v-banner__wrapper{flex-wrap:wrap;padding-top:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__wrapper{padding-left:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__wrapper{padding-right:16px}.v-banner--is-mobile.v-banner--has-icon .v-banner__wrapper{padding-top:24px}.v-banner--is-mobile.v-banner--single-line .v-banner__actions{flex:initial;padding-top:0}.v-application--is-ltr .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-left:36px}.v-application--is-rtl .v-banner--is-mobile.v-banner--single-line .v-banner__actions{margin-right:36px}.v-banner--is-mobile.v-banner--single-line .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}.v-application--is-ltr .v-banner--is-mobile .v-banner__icon{margin-right:16px}.v-application--is-rtl .v-banner--is-mobile .v-banner__icon{margin-left:16px}.v-application--is-ltr .v-banner--is-mobile .v-banner__content{padding-right:8px}.v-application--is-rtl .v-banner--is-mobile .v-banner__content{padding-left:8px}.v-banner--is-mobile .v-banner__content .v-banner__wrapper{flex-wrap:nowrap;padding-top:10px}",""]),n.exports=r},535:function(n,e,t){"use strict";t.r(e);var r=t(553),o=t(220),l=t(187),c={props:{data:{type:Object}}},v=t(38),component=Object(v.a)(c,(function(){var n=this,e=n._self._c;return e(r.a,{attrs:{sticky:"",shaped:"",tile:""}},[e(o.a,{attrs:{href:"https://image.tmdb.org/t/p/w1280".concat(n.data.profile_path),nuxt:"",target:"_blank"}},[e(l.a,{attrs:{src:"https://image.tmdb.org/t/p/w500".concat(n.data.profile_path)}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},553:function(n,e,t){"use strict";t(10),t(8),t(11),t(4),t(14),t(9),t(15);var r=t(2),o=(t(531),t(118)),l=t(180),c=t(59),v=t(74),h=t(190),d=t(84),_=t(6),f=t(0);function x(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,t)}return e}function m(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}e.a=Object(_.a)(o.a,h.a,d.a).extend({name:"v-banner",inheritAttrs:!1,props:{app:Boolean,icon:String,iconColor:String,singleLine:Boolean,sticky:Boolean,value:{type:Boolean,default:!0}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-banner--has-icon":this.hasIcon,"v-banner--is-mobile":this.isMobile,"v-banner--single-line":this.singleLine,"v-banner--sticky":this.isSticky})},hasIcon:function(){return Boolean(this.icon||this.$slots.icon)},isSticky:function(){return this.sticky||this.app},styles:function(){var n=m({},o.a.options.computed.styles.call(this));if(this.isSticky){var e=this.app?this.$vuetify.application.bar+this.$vuetify.application.top:0;n.top=Object(f.g)(e),n.position="sticky",n.zIndex=1}return n}},methods:{toggle:function(){this.isActive=!this.isActive},iconClick:function(n){this.$emit("click:icon",n)},genIcon:function(){var content;if(this.hasIcon)return content=this.icon?this.$createElement(c.a,{props:{color:this.iconColor,size:28}},[this.icon]):this.$slots.icon,this.$createElement(l.a,{staticClass:"v-banner__icon",props:{color:this.color,size:40},on:{click:this.iconClick}},[content])},genText:function(){return this.$createElement("div",{staticClass:"v-banner__text"},this.$slots.default)},genActions:function(){var n=this,e=Object(f.n)(this,"actions",{dismiss:function(){return n.isActive=!1}});if(e)return this.$createElement("div",{staticClass:"v-banner__actions"},e)},genContent:function(){return this.$createElement("div",{staticClass:"v-banner__content"},[this.genIcon(),this.genText()])},genWrapper:function(){return this.$createElement("div",{staticClass:"v-banner__wrapper"},[this.genContent(),this.genActions()])}},render:function(n){var data={staticClass:"v-banner",attrs:this.attrs$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};return n(v.a,[n("div",this.outlined?data:this.setBackgroundColor(this.color,data),[this.genWrapper()])])}})}}]);