webpackJsonp([4],{BWhR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("4YfN"),i=e.n(n),c={props:{switches:{type:Array},currentIndex:{type:Number,default:0}},methods:{switchItem:function(t){this.$emit("switch",t)}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"switches"},t._l(t.switches,function(s,n){return e("li",{key:s.id,staticClass:"switch-item",class:{active:t.currentIndex===n},on:{click:function(s){t.switchItem(n)}}},[e("span",[t._v(t._s(s.name))])])}))},staticRenderFns:[]};var a=e("Z0/y")(c,r,!1,function(t){e("rPYV")},"data-v-dc989d5c",null).exports,l=e("9rMa"),o={props:{title:{type:String,default:""}}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"no-result"},[this._m(0),this._v(" "),s("p",{staticClass:"no-result-text"},[this._v(this._s(this.title))])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"no-result-icon"},[s("i",{staticClass:"fa fa-music"})])}]};var h=e("Z0/y")(o,u,!1,function(t){e("tMHu")},"data-v-2ccc6ac0",null).exports,f=e("qwAB"),d=e("ZV4u"),v={data:function(){return{currentIndex:0,switches:[{name:"我的收藏"},{name:"最近播放"}]}},computed:i()({noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},count:function(){return 0===this.currentIndex?this.favoriteList.length:this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"去寻找属于你自己最爱的MUSIC吧~":"你还没有听过歌呀~"}},Object(l.c)(["favoriteList","playHistory"])),methods:i()({back:function(){this.$router.back()},switchItem:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(t)},sequence:function(){var t=0===this.currentIndex?this.favoriteList:this.playHistory;0!==t.length&&this.sequencePlay({list:t})}},Object(l.b)(["insertSong","sequencePlay"])),components:{Switches:a,SongList:d.a,Scroll:f.a,NoResult:h}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("div",{staticClass:"user"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"fa fa-angle-left"})]),t._v(" "),e("div",{staticClass:"switches-wrapper"},[e("switches",{attrs:{switches:t.switches,currentIndex:t.currentIndex},on:{switch:t.switchItem}})],1),t._v(" "),e("div",{staticClass:"sequence-play",on:{click:t.sequence}},[e("i",{staticClass:"iconfont icon-bofangicon"}),t._v(" "),e("span",{staticClass:"text"},[t._v("播放全部")]),t._v(" "),e("span",{staticClass:"count"},[t._v("(共"+t._s(t.count)+"首)")])]),t._v(" "),e("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===t.currentIndex?e("scroll",{ref:"favoriteList",staticClass:"list-scroll",attrs:{data:t.favoriteList}},[e("div",{staticClass:"list-inner"},[e("song-list",{attrs:{songs:t.favoriteList},on:{select:t.selectSong}})],1)]):t._e(),t._v(" "),1===t.currentIndex?e("scroll",{ref:"playList",staticClass:"list-scroll",attrs:{data:t.playHistory}},[e("div",{staticClass:"list-inner"},[e("song-list",{attrs:{songs:t.playHistory},on:{select:t.selectSong}})],1)]):t._e()],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[e("no-result",{attrs:{title:t.noResultDesc}})],1)])])},staticRenderFns:[]};var _=e("Z0/y")(v,p,!1,function(t){e("CxL5")},"data-v-12483010",null);s.default=_.exports},CxL5:function(t,s){},rPYV:function(t,s){},tMHu:function(t,s){}});
//# sourceMappingURL=4.6b8102a9d561adbf51ec.js.map