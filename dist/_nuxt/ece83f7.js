(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6,10,15],{506:function(t,e,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("3ea11346",content,!0,{sourceMap:!1})},508:function(t,e,n){"use strict";n.r(e);var r=n(555),o=n(144),l=n(220),c=n(127),d=n(562),v=n(221),h=n(187),_=n(222),m=n(143),f=n(39),k=(n(29),n(152),n(4),n(189),n(30),n(62),n(517)),y={props:{data:{type:Object}},computed:{hasVideo:function(){var t=this,e=this.arrVideos.find((function(e){return e.id===t.data.id}));if(e)return"https://sblanh.com/e/"+e.link+".html"}},data:function(){return{dialog:!1,mediaUrl:"",isVideo:!1,arrVideos:k,dialogPlay:!1,videoUrl:"",isPlay:!1}},methods:{getTrailer:function(){if(this.data.videos)return"https://youtube.com/embed/"+this.data.videos.results.find((function(t){return"Trailer"===t.type})).key},getVideo:function(){var t=this,e=this.arrVideos.find((function(e){return e.id===t.data.id}));if(e)return"https://sblanh.com/e/"+e.link+".html"},closeModal:function(){this.dialog=!1,this.isVideo=!1,this.dialogPlay=!1,this.isPlay=!1},openYoutubeModal:function(){this.mediaUrl=this.getTrailer(),this.isVideo=!0},openVideoModal:function(){this.isPlay=!0},sanitizeTitle:function(title){return title.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-").replace(/:|\.|!/gm,"")}}},w=(n(518),n(38)),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{sticky:"",shaped:"",tile:""}},[e(h.a,{attrs:{src:"https://www.themoviedb.org/t/p/w500/".concat(t.data.poster_path)}}),t._v(" "),e(c.a,{staticClass:"mt-4"},[e(d.a,{attrs:{persistent:"","max-width":"800"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"white--text",attrs:{color:"pink",block:"",depressed:""},on:{click:t.openYoutubeModal}},"v-btn",l,!1),r),[e(v.a,[t._v("mdi-youtube")]),t._v("Trailer")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(l.a,[e(_.a,{staticClass:"pa-0"},[e(m.a,{staticClass:"pa-0"},[e(f.a,{staticClass:"pa-0"},[e("div",{staticClass:"iframe-container"},[t.isVideo?e("iframe",{attrs:{allowfullscreen:"",src:t.mediaUrl}}):t._e()]),t._v(" "),e(o.a,{on:{click:t.closeModal}},[e(v.a,{attrs:{dark:""}},[t._v("mdi-close")])],1)],1)],1)],1)],1)],1),t._v(" "),t.data.homepage?e(o.a,{staticClass:"mt-2 black--text",attrs:{href:t.data.homepage,color:"yellow",block:"",depressed:"",target:"_blank"}},[e(v.a,[t._v("mdi-home")]),t._v("Homepage")],1):t._e(),t._v(" "),t.data.original_title?e(o.a,{staticClass:"mt-2 black--text",attrs:{href:"https://somot.one/movie/".concat(t.data.id,"/").concat(t.sanitizeTitle(t.data.original_title),".html"),color:"red",block:"",depressed:"",target:"_blank"}},[e(v.a,[t._v("mdi-play-circle")]),t._v("Watch Now")],1):t._e(),t._v(" "),t.data.original_name?e(o.a,{staticClass:"mt-2 black--text",attrs:{href:"https://somot.one/serie/".concat(t.data.id,"/").concat(t.sanitizeTitle(t.data.original_name),".html"),color:"red",block:"",depressed:"",target:"_blank"}},[e(v.a,[t._v("mdi-play-circle")]),t._v("Watch Now")],1):t._e(),t._v(" "),e(o.a,{staticClass:"mt-2 black--text",attrs:{href:"https://somot.one",color:"green",block:"",depressed:"",target:"_blank"}},[e(v.a,[t._v("mdi-tablet-cellphone")]),t._v("Mobile App")],1),t._v(" "),e(o.a,{staticClass:"mt-2 black--text",attrs:{href:"https://somot.one",color:"blue",block:"",depressed:"",target:"_blank"}},[e(v.a,[t._v("mdi-television-play")]),t._v("TV App")],1),t._v(" "),t.hasVideo?e(d.a,{attrs:{persistent:"","max-width":"800"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"white--text mt-2",attrs:{color:"red",block:"",depressed:""},on:{click:t.openVideoModal}},"v-btn",l,!1),r),[e(v.a,[t._v("mdi-arrow-right-drop-circle-outline")]),t._v(" Watch")],1)]}}],null,!1,245388374),model:{value:t.dialogPlay,callback:function(e){t.dialogPlay=e},expression:"dialogPlay"}},[t._v(" "),e(l.a,[e(_.a,{staticClass:"pa-0"},[e(m.a,{staticClass:"pa-0"},[e(f.a,{staticClass:"pa-0"},[e("div",{staticClass:"iframe-container"},[t.isPlay?e("iframe",{attrs:{allowfullscreen:"",src:t.hasVideo}}):t._e()]),t._v(" "),e(o.a,{on:{click:t.closeModal}},[e(v.a,{attrs:{dark:""}},[t._v("mdi-close")])],1)],1)],1)],1)],1)],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},509:function(t,e,n){"use strict";n.r(e);var r=n(144),o=n(221),l={},c=n(38),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mt-2"},[e(r.a,{attrs:{text:"",rounded:"",color:"pink",outlined:""}},[e(o.a,{attrs:{color:"pink"}},[t._v("mdi-heart")]),t._v(" Add to Favorites")],1),t._v(" "),e(r.a,{attrs:{text:"",rounded:"",color:"pink",outlined:""}},[e(o.a,{attrs:{color:"pink"}},[t._v("mdi-share")]),t._v(" Share")],1)],1)])}),[],!1,null,null,null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);n(41),n(40),n(4),n(66),n(49),n(30),n(9),n(67),n(72),n(50);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l={props:{data:{type:Object}},computed:{getDirector:function(){var t,e=[],n=r(this.data.credits.crew);try{for(n.s();!(t=n.n()).done;){var o=t.value;"Director"===o.job&&e.push(o.name)}}catch(t){n.e(t)}finally{n.f()}return e}}},c=n(38),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("h4",{staticClass:"grey--text title"},[t._v("Director")]),t._v(" "),t._l(t.getDirector,(function(n,i){return e("span",{key:i},[t._v(t._s(n)),t.getDirector.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Stars")]),t._v(" "),t._l(t.data.credits.cast,(function(n,i){return e("span",{key:i},[t._v(t._s(n.name)),t.data.credits.cast.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Genres")]),t._v(" "),t._l(t.data.genres,(function(g,i){return e("span",{key:i},[t._v(t._s(g.name)),t.data.genres.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Release date")]),t._v(" "),e("span",[t._v(t._s(t.data.release_date)+" ")])]),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Runtime")]),t._v(" "),e("span",[t._v(t._s(t.data.runtime)+" mins")])]),t._v(" "),e("div",{staticClass:"mt-2"},[e("h4",{staticClass:"grey--text title"},[t._v("Language")]),t._v(" "),t._l(t.data.spoken_languages,(function(n,i){return e("span",{key:i},[t._v(t._s(n.name)),t.data.spoken_languages.length-1!=i?e("span",[t._v(", ")]):t._e()])}))],2)])}),[],!1,null,null,null);e.default=component.exports},517:function(t){t.exports=JSON.parse('[{"id":532639,"title":"Pinochio","link":"28p0ihxve31t"},{"id":985939,"title":"Fall 2022","link":"c3wsozjxv0dw"},{"id":760741,"title":"Beast 2022","link":"3v9r30st3ben"},{"id":19995,"title":"Avatar 2022","link":"zx5luixgdm3t"},{"id":616037,"title":"Thor 2022","link":"xlwr3pdc013c"},{"id":760161,"title":"Orphan: First Kill","link":"93145e7olwl1"},{"id":744276,"title":"After Ever Happy","link":"6gliorfo911s"},{"id":718930,"title":"Bullet Train","link":"7almscyoy7bz"},{"id":629176,"title":"Samaritan","link":"wsiuunvn3h4s"},{"id":429473,"title":"Lou","link":"0kpfb1apo3rg"},{"id":916605,"title":"The Infernal Machine","link":"6weiear1ln33"},{"id":642885,"title":"Hocus Pocus 2","link":"v9phhonhahnr"},{"id":916605,"title":"The Infernal Machine","link":"6weiear1ln33"},{"id":852046,"link":"bquv976bfq5j","title":""},{"id":960704,"link":"5rbk9iej0dsg","title":""},{"id":852046,"link":"neuqa4967bnd","title":""},{"id":539681,"link":"t7kk2z4xekyi","title":""},{"id":766507,"link":"7qlmm3yibeo1","title":"Prey"},{"id":993145,"link":"y9sssraw3jwv","title":"Bullet Proof"}]')},518:function(t,e,n){"use strict";n(506)},519:function(t,e,n){var r=n(16)(!1);r.push([t.i,".iframe-container{overflow:hidden;padding-top:56.25%;position:relative}.iframe-container iframe{border:0;height:100%;left:0;position:absolute;top:0;width:100%}",""]),t.exports=r},567:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(495),l=n(498),c=n(561),d=n(187),v=n(143),h=n(223),_=n(39),m=n(224),f=n(494),k=n(551),y=n(552),w=n(491),x=n(572),C=(n(40),n(41),n(28)),S=(n(83),n(30),n(62),n(508)),M=n(322),T=n(509),A=n(510),P={asyncData:function(t){return Object(C.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.$axios,e.prev=1,e.next=4,r.$get("/movie/".concat(n.id,"?append_to_response=credits,videos,images&language=vi"));case 4:return o=e.sent,e.next=7,r.$get("/movie/".concat(n.id,"/recommendations?language=vi"));case 7:return l=e.sent,e.abrupt("return",{data:o,recommendations:l.results.slice(0,6)});case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},head:function(){return{title:this.data.title,meta:[{hid:"description",name:"description",content:this.data.overview},{hid:"keywords",name:"keywords",content:this.data.title+", Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast"},{hid:"og:title",name:"og:title",content:this.data.title},{hid:"og:description",name:"og:description",content:this.data.overview},{hid:"og:image",name:"og:image",content:"https://image.tmdb.org/t/p/w500"+this.data.poster_path},{hid:"og:type",name:"og:type",content:"video.movie"},{hid:"og:locale",name:"og:locale",content:"en_US"},{hid:"og:url",name:"og:url",content:"https://www.dungthinh.com/movie/"+this.data.id+"-"+this.slugTitle},{hid:"og:site_name",name:"og:site_name",content:"HD Movies Store"}]}},computed:{slugTitle:function(){return this.sanitizeTitle(this.data.title)}},methods:{getCastAvatar:function(t){return t.profile_path?"https://www.themoviedb.org/t/p/w45"+t.profile_path:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},sanitizeTitle:function(title){return title.toLowerCase().replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi,"e").replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi,"a").replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi,"o").replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi,"u").replace(/đ/gi,"d").replace(/\s*$/g,"").replace(/\s+/g,"-").replace(":","")}},components:{LeftMovieInfo:S.default,Rating:M.default,SocialShare:T.default,RightMovieInfo:A.default}},j=n(38),component=Object(j.a)(P,(function(){var t=this,e=t._self._c;return e(l.a,[e(f.a,[e(o.a,{attrs:{cols:"12",sm:"3"}},[e("LeftMovieInfo",{attrs:{data:t.data}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"9"}},[e("div",{staticClass:"d-md-flex align-center"},[e("h2",{staticClass:"display-2 font-weight-bold"},[t._v(t._s(t.data.title))]),t._v(" "),e("span",{staticClass:"display-1 ml-2 grey--text font-weight-light"},[t._v(t._s(t.data.release_date.slice(0,4)))]),t._v(" "),e(w.a),t._v(" "),e("Rating",{attrs:{data:t.data}})],1),t._v(" "),e("SocialShare"),t._v(" "),e(c.a,{staticClass:"mt-8"}),t._v(" "),e(f.a,{staticClass:"mt-2"},[e(o.a,{attrs:{cols:"12",sm:"8"}},[e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Overview")]),t._v(" "),e("p",{staticClass:"grey--text-darken"},[t._v("\n            "+t._s(t.data.overview)+"\n          ")]),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Images")]),t._v(" "),e(k.a,{attrs:{multiple:"","show-arrows":""}},t._l(t.data.images.backdrops,(function(image,n){return e(y.a,{key:n,scopedSlots:t._u([{key:"default",fn:function(t){var n=t.toggle;return[e(r.a,{staticClass:"ma-4",attrs:{href:"https://image.tmdb.org/t/p/w1280".concat(image.file_path),target:"_blank"},on:{click:n}},[e(d.a,{attrs:{cover:"",width:"100",height:"160",src:"https://image.tmdb.org/t/p/w300".concat(image.file_path)}})],1)]}}],null,!0)})})),1),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title"},[t._v("Casts")]),t._v(" "),e(m.a,[e(x.a,{attrs:{height:300,"item-height":48,items:t.data.credits.cast},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[e(v.a,{key:r.id},[e(h.a,[e(d.a,{attrs:{src:t.getCastAvatar(r)}})],1),t._v(" "),e(_.c,[t._v("\n                    "+t._s(r.name)+"\n                  ")]),t._v(" "),e(_.b,[t._v("\n                    "+t._s(r.character)+"\n                  ")])],1)]}}])})],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",sm:"4"}},[e("RightMovieInfo",{attrs:{data:t.data}})],1)],1),t._v(" "),e("h4",{staticClass:"pink--text font-weight-bold title mt-4"},[t._v("Recommendations")]),t._v(" "),e(f.a,{staticClass:"mt-2 mb-4"},t._l(t.recommendations,(function(t){return e(o.a,{key:t.id,attrs:{cols:"4",sm:"2"}},[e(r.a,{attrs:{to:"/movie/".concat(t.id),nuxt:""}},[e(d.a,{attrs:{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path)}})],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LeftMovieInfo:n(508).default,Rating:n(322).default,SocialShare:n(509).default,RightMovieInfo:n(510).default})}}]);