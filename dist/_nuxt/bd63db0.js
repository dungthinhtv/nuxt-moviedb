(window.webpackJsonp=window.webpackJsonp||[]).push([[12,9],{521:function(t,n,r){"use strict";r.r(n);var e=r(220),o=r(127),l=r(187),c=(r(41),{props:{person:{type:Object,require:!0}}}),d=r(38),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n(e.a,{attrs:{to:"/person/".concat(t.person.id),nuxt:""}},[n(l.a,{attrs:{height:"300",src:"https://image.tmdb.org/t/p/w500".concat(t.person.profile_path)}}),t._v(" "),n(o.b,{staticClass:"justify-center"},[t._v(" "+t._s(t.person.name)+" ")])],1)}),[],!1,null,null,null);n.default=component.exports},535:function(t,n,r){"use strict";r.r(n);var e=r(495),o=r(494),l=r(521),c={props:{persons:{type:Array}},components:{PersonCard:l.default}},d=r(38),component=Object(d.a)(c,(function(){var t=this,n=t._self._c;return n("div",[n(o.a,t._l(t.persons,(function(t){return n(e.a,{key:t.id,attrs:{cols:"12",sm:"3"}},[n("PersonCard",{attrs:{person:t}})],1)})),1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PersonCard:r(521).default})}}]);