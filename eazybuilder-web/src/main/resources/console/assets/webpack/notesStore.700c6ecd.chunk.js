(this.webpackJsonp=this.webpackJsonp||[]).push([[168],{"53m/":function(e,t,n){(function(t){window,e.exports=function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,n){var i,r,s,a,c=[].indexOf;i=function(e){return Array.prototype.slice.apply(e)},s=function(e,t){for(;e&&!e.classList.contains(t);)e=e.parentNode;return e},a=function(e,t){var n;return"function"==typeof Event?(n=new Event(e,{bubbles:!0,cancelable:!0})).detail=t:(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,t),n},r=function(){class e{constructor(e){this.el=e,this.container=s(this.el,"js-task-list-container"),this.field=this.container.querySelector(".js-task-list-field"),this.container.addEventListener("change",e=>{if(e.target.classList.contains("task-list-item-checkbox"))return this.updateTaskList(e.target)}),this.enable()}enable(){var e;if(this.container.querySelectorAll(".js-task-list-field").length>0)return i(this.container.querySelectorAll(".task-list-item")).forEach((function(e){return e.classList.add("enabled")})),i(this.container.querySelectorAll(".task-list-item-checkbox")).forEach((function(e){return e.disabled=!1})),this.container.classList.add("is-task-list-enabled"),e=a("tasklist:enabled"),this.container.dispatchEvent(e)}disable(){var e;return i(this.container.querySelectorAll(".task-list-item")).forEach((function(e){return e.classList.remove("enabled")})),i(this.container.querySelectorAll(".task-list-item-checkbox")).forEach((function(e){return e.disabled=!0})),this.container.classList.remove("is-task-list-enabled"),e=a("tasklist:disabled"),this.container.dispatchEvent(e)}updateTaskList(t){var n,r,s,c,o,l,u;if(s=this.container.querySelectorAll(".task-list-item-checkbox"),c=1+i(s).indexOf(t),n=a("tasklist:change",{index:c,checked:t.checked}),this.field.dispatchEvent(n),!n.defaultPrevented)return({result:u,lineNumber:o,lineSource:l}=e.updateSource(this.field.value,c,t.checked,t)),this.field.value=u,n=a("change"),this.field.dispatchEvent(n),r=a("tasklist:changed",{index:c,checked:t.checked,lineNumber:o,lineSource:l}),this.field.dispatchEvent(r)}static escapePattern(e){return e.replace(/([\[\]])/g,"\\$1").replace(/\s/,"\\s").replace("x","[xX]")}static updateSource(e,t,n,i){return i.parentElement.hasAttribute("data-sourcepos")?this._updateSourcePosition(e,i,n):this._updateSourceRegex(e,t,n)}static _updateSourcePosition(e,t,n){var i,r,s,a,c;return a=e.split("\n"),c=t.parentElement.getAttribute("data-sourcepos"),s=a[(r=parseInt(c.split(":")[0]))-1],i=n?s.replace(this.incompletePattern,this.complete):s.replace(this.completePattern,this.incomplete),a[r-1]=i,{result:a.join("\n"),lineNumber:r,lineSource:s}}static _updateSourceRegex(e,t,n){var i,r,s,a,o,l,u,d;return d=e.split("\n"),i=e.replace(/\r/g,"").replace(this.itemsInParasPattern,"").split("\n"),a=0,s=!1,{result:function(){var e,p,f;for(f=[],r=e=0,p=d.length;e<p;r=++e)o=d[r],s?o.match(this.endFencesPattern)&&(s=!1):o.match(this.startFencesPattern)?s=!0:c.call(i,o)>=0&&o.trim().match(this.itemPattern)&&(a+=1)===t&&(l=r+1,u=o,o=n?o.replace(this.incompletePattern,this.complete):o.replace(this.completePattern,this.incomplete)),f.push(o);return f}.call(this).join("\n"),lineNumber:l,lineSource:u}}}return e.incomplete="[ ]",e.complete="[x]",e.incompletePattern=RegExp(`${e.escapePattern(e.incomplete)}`),e.completePattern=RegExp(`${e.escapePattern(e.complete)}`),e.itemPattern=RegExp(`^(?:\\s*(?:>\\s*)*(?:[-+*]|(?:\\d+\\.)))\\s*(${e.escapePattern(e.complete)}|${e.escapePattern(e.incomplete)})\\s`),e.startFencesPattern=/^`{3}.*$/,e.endFencesPattern=/^`{3}$/,e.itemsInParasPattern=RegExp(`^(${e.escapePattern(e.complete)}|${e.escapePattern(e.incomplete)}).+$`,"g"),e}.call(this),void 0!==t&&(t.fn.taskList=function(e){return this.each((function(n,i){var s;if((s=t(i).data("task-list"))||(s=new r(i),t(i).data("task-list",s),e&&"enable"!==e))return s[e||"enable"]()}))}),e.exports=r}])}).call(this,n("EmJ/"))},"62tv":function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return c}));var i=n("jB52"),r=n("yi8e"),s=n("Ocj7");i.default.use(r.b);const a=function(){return new r.b.Store(Object(s.a)())};t.default=a;const c=a()},"99pJ":function(e,t,n){e.exports=n("NFDe")},Gs6c:function(e,t,n){"use strict";n("jaBk");var i=n("2ibD"),r=n("z/4y");t.a=new class extends r.a{constructor(){super(),this.pendingRequests={}}override(e,t){this.internalStorage[e]=t}retrieve(e,t){var n=this;if(this.hasData(e)&&!t)return Promise.resolve(this.get(e));let r=this.pendingRequests[e];return r||(r=i.a.get(e).then((function(t){let{data:i}=t;n.internalStorage[e]=i,delete n.pendingRequests[e]})).catch((function(t){const i=new Error("".concat(e,": ").concat(t.message));throw i.textStatus=t.message,delete n.pendingRequests[e],i})),this.pendingRequests[e]=r),r.then((function(){return n.get(e)}))}}},HCER:function(e,t,n){var i=n("4ips"),r=1/0;e.exports=function(e){return(null==e?0:e.length)?i(e,r):[]}},NFDe:function(e,t,n){!function(t){"use strict";var i=-1,r=function(e){return e.every=function(t,n,r){e._time(),r||(r=n,n=null);var s=i+=1;return e._timers[s]={visible:t,hidden:n,callback:r},e._run(s,!1),e.isSupported()&&e._listen(),s},e.stop=function(t){return!!e._timers[t]&&(e._stop(t),delete e._timers[t],!0)},e._timers={},e._time=function(){e._timed||(e._timed=!0,e._wasHidden=e.hidden(),e.change((function(){e._stopRun(),e._wasHidden=e.hidden()})))},e._run=function(n,i){var r,s=e._timers[n];if(e.hidden()){if(null===s.hidden)return;r=s.hidden}else r=s.visible;var a=function(){s.last=new Date,s.callback.call(t)};if(i){var c=new Date-s.last;r>c?s.delay=setTimeout((function(){s.id=setInterval(a,r),a()}),r-c):(s.id=setInterval(a,r),a())}else s.id=setInterval(a,r)},e._stop=function(t){var n=e._timers[t];clearInterval(n.id),clearTimeout(n.delay),delete n.id,delete n.delay},e._stopRun=function(t){var n=e.hidden(),i=e._wasHidden;if(n&&!i||!n&&i)for(var r in e._timers)e._stop(r),e._run(r,!n)},e};e.exports?e.exports=r(n("lNHW")):r(t.Visibility)}(window)},OksX:function(e,t,n){var i=n("/eF7"),r=4;e.exports=function(e){return i(e,r)}},"d+lS":function(e,t,n){var i=n("dA+0");e.exports=function(e){return e&&e.length?i(e):[]}},lNHW:function(e,t,n){!function(t){"use strict";var n=-1,i={onVisible:function(e){var t=i.isSupported();if(!t||!i.hidden())return e(),t;var n=i.change((function(t,r){i.hidden()||(i.unbind(n),e())}));return n},change:function(e){if(!i.isSupported())return!1;var t=n+=1;return i._callbacks[t]=e,i._listen(),t},unbind:function(e){delete i._callbacks[e]},afterPrerendering:function(e){var t=i.isSupported();if(!t||"prerender"!=i.state())return e(),t;var n=i.change((function(t,r){"prerender"!=r&&(i.unbind(n),e())}));return n},hidden:function(){return!(!i._doc.hidden&&!i._doc.webkitHidden)},state:function(){return i._doc.visibilityState||i._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!i._doc.visibilityState&&!i._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(e){var t=i.state();for(var n in i._callbacks)i._callbacks[n].call(i._doc,e,t)},_listen:function(){if(!i._init){var e="visibilitychange";i._doc.webkitVisibilityState&&(e="webkit"+e);var t=function(){i._change.apply(i,arguments)};i._doc.addEventListener?i._doc.addEventListener(e,t):i._doc.attachEvent(e,t),i._init=!0}}};e.exports?e.exports=i:t.Visibility=i}(this)}}]);
//# sourceMappingURL=notesStore.700c6ecd.chunk.js.map