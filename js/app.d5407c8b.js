(function(e){function t(t){for(var r,s,c=t[0],l=t[1],o=t[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,c=1;c<a.length;c++){var l=a[c];0!==i[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},i={app:0},n=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),i=a.n(r);i.a},"12aa":function(e,t,a){e.exports=a.p+"img/vue.4a16cd4e.svg"},3034:function(e,t,a){e.exports=a.p+"img/backbone.65465956.svg"},"3a11":function(e,t,a){e.exports=a.p+"img/ember.d848fbc3.svg"},4967:function(e,t,a){e.exports=a.p+"img/js-badge.d680b457.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Cards")],1)},n=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"counter"},[r("h1",[e._v(e._s(e.counter))])]),r("section",{staticClass:"memory-game"},e._l(e.cards,(function(t,i){return r("div",{key:i,staticClass:"memory-card",class:{flip:t.isFlip,"disable-card":t.isDisabled},attrs:{"data-framework":t.framework},on:{click:function(t){return e.flipCard(i)}}},[r("img",{staticClass:"front-face",attrs:{src:t.type,alt:t.alt}}),r("img",{staticClass:"back-face",attrs:{src:a("4967"),alt:"JS Badge"}})])})),0)])},c=[],l=(a("99af"),a("4de4"),a("d81d"),a("a434"),a("7004")),o=a.n(l),u=a("12aa"),f=a.n(u),p=a("c497"),d=a.n(p),m=a("3034"),b=a.n(m),h=a("3a11"),v=a.n(h),g=a("60f0"),w=a.n(g),y={name:"Cards",data:function(){return{cards:[],indexCard1:"",counter:60,interval:null}},methods:{shuffle:function(e){var t=e.concat([]);while(t.length){var a=Math.floor(Math.random()*t.length);this.cards.push(t.splice(a,1)[0])}},flipCard:function(e){var t=this;this.cards[e].isFlip=!0,this.cards[e].isDisabled=!0;var a=this.cards.filter((function(e){return e.isDisabled})).length;60===this.counter&&this.startTime(),a%2!==0?this.indexCard1=e:this.cards[this.indexCard1].framework!==this.cards[e].framework&&(this.cards[e].isFlip=!1,this.cards[e].isDisabled=!1,this.cards[this.indexCard1].isFlip=!1,this.cards[this.indexCard1].isDisabled=!1),12===a&&setTimeout((function(){var e=confirm("Game is over! Start a new game?");e?(clearInterval(t.interval),t.startNewGame()):clearInterval(t.interval)}),500)},startTime:function(){var e=this;this.interval=setInterval((function(){e.counter--}),500)},startNewGame:function(){this.cards.map((function(e){return e.isDisabled=!1,e.isFlip=!1,e}));var e=[].concat(this.cards);this.cards=[],this.shuffle(e)}},watch:{counter:function(e){if(0===e){var t=confirm("Time is up! New game?");clearInterval(this.interval),this.counter=60,t?this.startNewGame():this.cards.map((function(e){return e.isDisabled=!0}))}}},created:function(){this.shuffle([{type:o.a,framework:"aurelia",alt:"Aurelia",isFlip:!1,isDisabled:!1},{type:o.a,framework:"aurelia",alt:"Aurelia",isFlip:!1,isDisabled:!1},{type:f.a,framework:"vue",alt:"Vue",isFlip:!1,isDisabled:!1},{type:f.a,framework:"vue",alt:"Vue",isFlip:!1,isDisabled:!1},{type:d.a,framework:"angular",isFlip:!1,isDisabled:!1},{type:d.a,framework:"angular",alt:"Angular",isFlip:!1,isDisabled:!1},{type:v.a,framework:"ember",alt:"Ember",isFlip:!1,isDisabled:!1},{type:v.a,framework:"ember",alt:"Ember",isFlip:!1,isDisabled:!1},{type:b.a,framework:"backbone",alt:"Backbone",isFlip:!1,isDisabled:!1},{type:b.a,framework:"backbone",alt:"Backbone",isFlip:!1,isDisabled:!1},{type:w.a,framework:"react",alt:"React",isFlip:!1,isDisabled:!1},{type:w.a,framework:"react",alt:"React",isFlip:!1,isDisabled:!1}])}},k=y,x=(a("8aa0"),a("2877")),D=Object(x["a"])(k,s,c,!1,null,"21827da1",null),F=D.exports,C={name:"App",components:{Cards:F}},O=C,_=(a("034f"),Object(x["a"])(O,i,n,!1,null,null,null)),j=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"5c60":function(e,t,a){},"60f0":function(e,t,a){e.exports=a.p+"img/react.1b7f7aac.svg"},7004:function(e,t,a){e.exports=a.p+"img/aurelia.f09f45da.svg"},"85ec":function(e,t,a){},"8aa0":function(e,t,a){"use strict";var r=a("5c60"),i=a.n(r);i.a},c497:function(e,t,a){e.exports=a.p+"img/angular.664397dc.svg"}});
//# sourceMappingURL=app.d5407c8b.js.map