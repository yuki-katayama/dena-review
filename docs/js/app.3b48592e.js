(function(t){function e(e){for(var c,o,u=e[0],i=e[1],b=e[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);s&&s(e);while(f.length)f.shift()();return a.push.apply(a,b||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var c={},r={app:0},a=[];function o(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=c,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)o.d(n,c,function(e){return t[e]}.bind(null,c));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var b=0;b<u.length;b++)e(u[b]);var s=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},2480:function(t,e,n){},"2e01":function(t,e,n){"use strict";n("2480")},"62ca":function(t,e,n){},"82bd":function(t,e,n){"use strict";n("be1a")},b524:function(t,e,n){},be1a:function(t,e,n){},c6c6:function(t,e,n){"use strict";n("62ca")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"nav"},a=Object(c["g"])("Home"),o=Object(c["g"])(" | ");function u(t,e){var n=Object(c["y"])("router-link"),u=Object(c["y"])("router-view");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",r,[Object(c["h"])(n,{to:"/"},{default:Object(c["D"])((function(){return[a]})),_:1}),o]),Object(c["h"])(u)],64)}n("c6c6");var i=n("6b0d"),b=n.n(i);const s={},l=b()(s,[["render",u]]);var f=l,O=n("6c02"),j=function(t){return Object(c["u"])("data-v-e35394bc"),t=t(),Object(c["r"])(),t},p={class:"home"},y=j((function(){return Object(c["f"])("div",{class:"title"},"４目並べ",-1)})),v={class:"battle-mode"},d=j((function(){return Object(c["f"])("button",{type:"button",disabled:"true"},"1人",-1)})),h=j((function(){return Object(c["f"])("br",null,null,-1)})),m=j((function(){return Object(c["f"])("br",null,null,-1)})),k=j((function(){return Object(c["f"])("button",{type:"button",disabled:"true"},"オンライン対戦",-1)}));function g(t,e,n,r,a,o){return Object(c["q"])(),Object(c["e"])("div",p,[y,Object(c["f"])("div",v,[d,h,Object(c["f"])("button",{type:"button",onClick:e[0]||(e[0]=function(e){return t.start()})},"2人"),m,k])])}var S=n("d4ec"),C=n("bee2"),_=n("262e"),N=n("2caf"),x=n("9ab4"),q=n("ce1f"),w=(n("d81d"),{class:"bord"});function I(t,e,n,r,a,o){var u=Object(c["y"])("Coin");return Object(c["q"])(),Object(c["e"])("div",w,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(t.map,(function(e,n){return Object(c["q"])(),Object(c["e"])("div",{key:n},[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["x"])(e,(function(e,r){return Object(c["q"])(),Object(c["e"])("label",{key:r},[Object(c["h"])(u,{"math-stat":e,onSelected:function(e){return t.onSelected({x:r,y:n})}},null,8,["math-stat","onSelected"])])})),128))])})),128))])}var P=6,T=7,A=4,D=2,V=n("1b40"),H={key:1,class:"coin__user1"},E={key:2,class:"coin__user2"};function F(t,e,n,r,a,o){return-1===t.mathStat?(Object(c["q"])(),Object(c["e"])("button",{key:0,class:"coin__brank",onClick:e[0]||(e[0]=function(e){return t.selected()})},Object(c["A"])(5))):0===t.mathStat?(Object(c["q"])(),Object(c["e"])("button",H,Object(c["A"])(t.mathStat),1)):1===t.mathStat?(Object(c["q"])(),Object(c["e"])("button",E,Object(c["A"])(t.mathStat),1)):Object(c["d"])("",!0)}var U=function(t){Object(_["a"])(n,t);var e=Object(N["a"])(n);function n(){return Object(S["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"selected",value:function(){}}]),n}(q["b"]);Object(x["a"])([Object(V["b"])()],U.prototype,"mathStat",void 0),Object(x["a"])([Object(V["a"])()],U.prototype,"selected",null);n("82bd");const M=b()(U,[["render",F],["__scopeId","data-v-19fc32a8"]]);var B=M,G=function(t){Object(_["a"])(n,t);var e=Object(N["a"])(n);function n(){return Object(S["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"canPutCoin",value:function(t){return t.y===P-1||-1!==this.map[t.y+1][t.x]}},{key:"getConsecutiveNum",value:function(t,e,n,c){for(var r=0,a=this.map[e][t];;){if(t+=n,e+=c,!(t<T&&t>=0)||!(e<P&&e>=0)||this.map[e][t]!==a)break;r++}return r}},{key:"isVictory",value:function(t,e,n,c){var r=1;return r+=this.getConsecutiveNum(t,e,n,c),r+=this.getConsecutiveNum(t,e,-1*n,-1*c),r===A}},{key:"checkVertical",value:function(t){return this.isVictory(t.x,t.y,0,1)}},{key:"checkHorizontal",value:function(t){return this.isVictory(t.x,t.y,1,0)}},{key:"checkDiagonalNegative",value:function(t){return this.isVictory(t.x,t.y,1,1)}},{key:"checkDiagonalPositive",value:function(t){return this.isVictory(t.x,t.y,1,-1)}},{key:"getGameState",value:function(t){return this.checkVertical(t)||this.checkHorizontal(t)||this.checkDiagonalPositive(t)||this.checkDiagonalNegative(t)?"FINISH":this.termCount===P*T-1?"DRAW":"CONTINUE"}},{key:"onSelected",value:function(t){if("CONTINUE"===this.gameState&&this.canPutCoin(t)){this.map[t.y][t.x]=this.player;var e=this.getGameState(t);"CONTINUE"===e?(this.$emit("incrementTerm"),console.log(this.termCount)):this.$emit("finished",e)}}}]),n}(q["b"]);Object(x["a"])([Object(V["b"])()],G.prototype,"map",void 0),Object(x["a"])([Object(V["b"])()],G.prototype,"gameState",void 0),Object(x["a"])([Object(V["b"])()],G.prototype,"player",void 0),Object(x["a"])([Object(V["b"])()],G.prototype,"termCount",void 0),G=Object(x["a"])([Object(q["a"])({components:{Coin:B}})],G);var X=G;n("2e01");const $=b()(X,[["render",I]]);var z=$,J=function(t){Object(_["a"])(n,t);var e=Object(N["a"])(n);function n(){return Object(S["a"])(this,n),e.apply(this,arguments)}return Object(C["a"])(n,[{key:"start",value:function(){this.$router.push({path:"/game"})}}]),n}(q["b"]);J=Object(x["a"])([Object(q["a"])({components:{Bord:z}})],J);var R=J;n("cf85");const W=b()(R,[["render",g],["__scopeId","data-v-e35394bc"]]);var K=W,L={class:"game"},Q={key:0,class:"bord__result"},Y={key:1,class:"bord__result"},Z={key:2,class:"bord__player"};function tt(t,e,n,r,a,o){var u=Object(c["y"])("Bord");return Object(c["q"])(),Object(c["e"])("div",L,[Object(c["h"])(u,{map:t.map,"game-state":t.gameState,player:t.player(),"term-count":t.termCount,onIncrementTerm:e[0]||(e[0]=function(e){return t.onIncrementTerm()}),onFinished:e[1]||(e[1]=function(e){return t.onFinished(e)})},null,8,["map","game-state","player","term-count"]),Object(c["f"])("button",{onClick:e[2]||(e[2]=function(){return t.reset&&t.reset.apply(t,arguments)})},"リセット"),"FINISH"===t.gameState?(Object(c["q"])(),Object(c["e"])("div",Q," player "+Object(c["A"])(t.player()+1)+": winner ",1)):"DRAW"===t.gameState?(Object(c["q"])(),Object(c["e"])("div",Y," 引き分けです。 ")):(Object(c["q"])(),Object(c["e"])("div",Z,"player "+Object(c["A"])(t.player()+1)+"のターンです",1))])}n("cb29");var et=function(t){Object(_["a"])(n,t);var e=Object(N["a"])(n);function n(){var t;return Object(S["a"])(this,n),t=e.apply(this,arguments),t.map=new Array(P),t.gameState="CONTINUE",t.playerX=0,t.termCount=0,t}return Object(C["a"])(n,[{key:"mounted",value:function(){for(var t=0;t<P;t++)this.map[t]=new Array(T).fill(-1)}},{key:"onIncrementTerm",value:function(){this.termCount++}},{key:"player",value:function(){return this.termCount%D}},{key:"reset",value:function(){this.termCount=0,this.playerX=0,this.gameState="CONTINUE";for(var t=0;t<P;t++)for(var e=0;e<T;e++)this.map[t][e]=-1}},{key:"onFinished",value:function(t){this.playerX=0,this.gameState=t}}]),n}(q["b"]);et=Object(x["a"])([Object(q["a"])({components:{Bord:z}})],et);var nt=et;n("cfd4");const ct=b()(nt,[["render",tt]]);var rt=ct,at=[{path:"/",name:"Home",component:K},{path:"/game",name:"Game",component:rt}],ot=Object(O["a"])({history:Object(O["b"])(""),routes:at}),ut=ot,it=n("5502"),bt=Object(it["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(f).use(bt).use(ut).mount("#app")},cf85:function(t,e,n){"use strict";n("d744")},cfd4:function(t,e,n){"use strict";n("b524")},d744:function(t,e,n){}});
//# sourceMappingURL=app.3b48592e.js.map