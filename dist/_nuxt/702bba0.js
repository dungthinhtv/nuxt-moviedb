(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{510:function(t,e,n){"use strict";n.r(e);n(41),n(40),n(4),n(66),n(49),n(30),n(9),n(67),n(72),n(50);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,v=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){v=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(v)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{data:{type:Object}},computed:{getDirector:function(){var t,e=[],n=r(this.data.credits.crew);try{for(n.s();!(t=n.n()).done;){var o=t.value;"Director"===o.job&&e.push(o.name)}}catch(t){n.e(t)}finally{n.f()}return e}}},c=n(38),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("h4",{staticClass:"grey--text title"},[t._v("Director")]),t._v(" "),t._l(t.getDirector,(function(n,i){return e("span",{key:i},[t._v(t._s(n)),t.getDirector.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Stars")]),t._v(" "),t._l(t.data.credits.cast,(function(n,i){return e("span",{key:i},[t._v(t._s(n.name)),t.data.credits.cast.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Genres")]),t._v(" "),t._l(t.data.genres,(function(g,i){return e("span",{key:i},[t._v(t._s(g.name)),t.data.genres.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Release date")]),t._v(" "),e("span",[t._v(t._s(t.data.release_date)+" ")])]),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Runtime")]),t._v(" "),e("span",[t._v(t._s(t.data.runtime)+" mins")])]),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Language")]),t._v(" "),t._l(t.data.spoken_languages,(function(n,i){return e("span",{key:i},[t._v(t._s(n.name)),t.data.spoken_languages.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);