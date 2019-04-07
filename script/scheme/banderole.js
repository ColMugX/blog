!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Nlvi=e()}(this,function(){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function e(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t,e,r){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}})(t,e,r||t)}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(n=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};function h(t,e){function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function p(t){return"function"==typeof t}var f=!1,d={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){if(t);f=t},get useDeprecatedSynchronousErrorHandling(){return f}};function y(t){setTimeout(function(){throw t})}var b={closed:!0,next:function(t){},error:function(t){if(d.useDeprecatedSynchronousErrorHandling)throw t;y(t)},complete:function(){}},v=Array.isArray||function(t){return t&&"number"==typeof t.length};function m(t){return null!=t&&"object"==typeof t}var w,g={e:{}};function x(){try{return w.apply(this,arguments)}catch(t){return g.e=t,g}}function _(t){return w=t,x}function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map(function(t,e){return e+1+") "+t.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}t.prototype=Object.create(Error.prototype);var S=t,E=function(){function n(t){this.closed=!1,this._parent=null,this._parents=null,this._subscriptions=null,t&&(this._unsubscribe=t)}var t;return n.prototype.unsubscribe=function(){var t,e=!1;if(!this.closed){var r=this._parent,n=this._parents,o=this._unsubscribe,i=this._subscriptions;this.closed=!0,this._parent=null,this._parents=null,this._subscriptions=null;for(var s=-1,u=n?n.length:0;r;)r.remove(this),r=++s<u&&n[s]||null;if(p(o))_(o).call(this)===g&&(e=!0,t=t||(g.e instanceof S?T(g.e.errors):[g.e]));if(v(i))for(s=-1,u=i.length;++s<u;){var c=i[s];if(m(c))if(_(c.unsubscribe).call(c)===g){e=!0,t=t||[];var a=g.e;a instanceof S?t=t.concat(T(a.errors)):t.push(a)}}if(e)throw new S(t)}},n.prototype.add=function(t){if(!t||t===n.EMPTY)return n.EMPTY;if(t===this)return this;var e=t;switch(typeof t){case"function":e=new n(t);case"object":if(e.closed||"function"!=typeof e.unsubscribe)return e;if(this.closed)return e.unsubscribe(),e;if("function"!=typeof e._addParent){var r=e;(e=new n)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}return(this._subscriptions||(this._subscriptions=[])).push(e),e._addParent(this),e},n.prototype.remove=function(t){var e=this._subscriptions;if(e){var r=e.indexOf(t);-1!==r&&e.splice(r,1)}},n.prototype._addParent=function(t){var e=this._parent,r=this._parents;e&&e!==t?r?-1===r.indexOf(t)&&r.push(t):this._parents=[t]:this._parent=t},n.EMPTY=((t=new n).closed=!0,t),n}();function T(t){return t.reduce(function(t,e){return t.concat(e instanceof S?e.errors:e)},[])}var j="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),O=function(o){function i(t,e,r){var n=o.call(this)||this;switch(n.syncErrorValue=null,n.syncErrorThrown=!1,n.syncErrorThrowable=!1,n.isStopped=!1,n._parentSubscription=null,arguments.length){case 0:n.destination=b;break;case 1:if(!t){n.destination=b;break}if("object"==typeof t){t instanceof i?(n.syncErrorThrowable=t.syncErrorThrowable,(n.destination=t).add(n)):(n.syncErrorThrowable=!0,n.destination=new k(n,t));break}default:n.syncErrorThrowable=!0,n.destination=new k(n,t,e,r)}return n}return h(i,o),i.prototype[j]=function(){return this},i.create=function(t,e,r){var n=new i(t,e,r);return n.syncErrorThrowable=!1,n},i.prototype.next=function(t){this.isStopped||this._next(t)},i.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},i.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},i.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,o.prototype.unsubscribe.call(this))},i.prototype._next=function(t){this.destination.next(t)},i.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},i.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},i.prototype._unsubscribeAndRecycle=function(){var t=this._parent,e=this._parents;return this._parent=null,this._parents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parent=t,this._parents=e,this._parentSubscription=null,this},i}(E),k=function(u){function t(t,e,r,n){var o,i=u.call(this)||this;i._parentSubscriber=t;var s=i;return p(e)?o=e:e&&(o=e.next,r=e.error,n=e.complete,e!==b&&(p((s=Object.create(e)).unsubscribe)&&i.add(s.unsubscribe.bind(s)),s.unsubscribe=i.unsubscribe.bind(i))),i._context=s,i._next=o,i._error=r,i._complete=n,i}return h(t,u),t.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;d.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},t.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,r=d.useDeprecatedSynchronousErrorHandling;if(this._error)r&&e.syncErrorThrowable?this.__tryOrSetError(e,this._error,t):this.__tryOrUnsub(this._error,t),this.unsubscribe();else if(e.syncErrorThrowable)r?(e.syncErrorValue=t,e.syncErrorThrown=!0):y(t),this.unsubscribe();else{if(this.unsubscribe(),r)throw t;y(t)}}},t.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var r=function(){return t._complete.call(t._context)};d.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,r):this.__tryOrUnsub(r),this.unsubscribe()}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),d.useDeprecatedSynchronousErrorHandling)throw t;y(t)}},t.prototype.__tryOrSetError=function(e,t,r){if(!d.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,r)}catch(t){return d.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0):(y(t),!0)}return!1},t.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},t}(O);var A="function"==typeof Symbol&&Symbol.observable||"@@observable";function C(){}var P=function(){function r(t){this._isScalar=!1,t&&(this._subscribe=t)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(t,e,r){var n=this.operator,o=function(t,e,r){if(t){if(t instanceof O)return t;if(t[j])return t[j]()}return t||e||r?new O(t,e,r):new O(b)}(t,e,r);if(n?n.call(o,this.source):o.add(this.source||d.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),d.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},r.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){d.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(t){for(;t;){var e=t.destination;if(t.closed||t.isStopped)return!1;t=e&&e instanceof O?e:null}return!0}(e)?console.warn(t):e.error(t)}},r.prototype.forEach=function(n,t){var o=this;return new(t=R(t))(function(t,e){var r;r=o.subscribe(function(t){try{n(t)}catch(t){e(t),r&&r.unsubscribe()}},e,t)})},r.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},r.prototype[A]=function(){return this},r.prototype.pipe=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return 0===t.length?this:((e=t)?1===e.length?e[0]:function(t){return e.reduce(function(t,e){return e(t)},t)}:C)(this)},r.prototype.toPromise=function(t){var n=this;return new(t=R(t))(function(t,e){var r;n.subscribe(function(t){return r=t},function(t){return e(t)},function(){return t(r)})})},r.create=function(t){return new r(t)},r}();function R(t){if(t||(t=d.Promise||Promise),!t)throw new Error("no Promise impl found");return t}function q(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}q.prototype=Object.create(Error.prototype);var H=function(n){function t(t,e){var r=n.call(this,t,e)||this;return r.scheduler=t,r.work=e,r.pending=!1,r}return h(t,n),t.prototype.schedule=function(t,e){if(void 0===e&&(e=0),this.closed)return this;this.state=t;var r=this.id,n=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(n,r,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(n,this.id,e),this},t.prototype.requestAsyncId=function(t,e,r){return void 0===r&&(r=0),setInterval(t.flush.bind(t,this),r)},t.prototype.recycleAsyncId=function(t,e,r){if(void 0===r&&(r=0),null!==r&&this.delay===r&&!1===this.pending)return e;clearInterval(e)},t.prototype.execute=function(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(t,e){var r=!1,n=void 0;try{this.work(t)}catch(t){r=!0,n=!!t&&t||new Error(t)}if(r)return this.unsubscribe(),n},t.prototype._unsubscribe=function(){var t=this.id,e=this.scheduler,r=e.actions,n=r.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==n&&r.splice(n,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null},t}(function(r){function t(t,e){return r.call(this)||this}return h(t,r),t.prototype.schedule=function(t,e){return void 0===e&&(e=0),this},t}(E)),I=function(){function r(t,e){void 0===e&&(e=r.now),this.SchedulerAction=t,this.now=e}return r.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),new this.SchedulerAction(this,t).schedule(r,e)},r.now=function(){return Date.now()},r}(),D=function(n){function o(t,e){void 0===e&&(e=I.now);var r=n.call(this,t,function(){return o.delegate&&o.delegate!==r?o.delegate.now():e()})||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return h(o,n),o.prototype.schedule=function(t,e,r){return void 0===e&&(e=0),o.delegate&&o.delegate!==this?o.delegate.schedule(t,e,r):n.prototype.schedule.call(this,t,e,r)},o.prototype.flush=function(t){var e=this.actions;if(this.active)e.push(t);else{var r;this.active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}},o}(I);var L=function(n){return function(t){for(var e=0,r=n.length;e<r&&!t.closed;e++)t.next(n[e]);t.closed||t.complete()}};function M(n,o){return new P(o?function(t){var e=new E,r=0;return e.add(o.schedule(function(){r!==n.length?(t.next(n[r++]),t.closed||e.add(this.schedule())):t.complete()})),e}:L(n))}var V=new D(H);function X(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}X.prototype=Object.create(Error.prototype);function N(e,r){return function(t){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return t.lift(new U(e,r))}}var U=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new z(t,this.project,this.thisArg))},t}(),z=function(o){function t(t,e,r){var n=o.call(this,t)||this;return n.project=e,n.count=0,n.thisArg=r||n,n}return h(t,o),t.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},t}(O),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return h(e,t),e.prototype.notifyNext=function(t,e,r,n,o){this.destination.next(e)},e.prototype.notifyError=function(t,e){this.destination.error(t)},e.prototype.notifyComplete=function(t){this.destination.complete()},e}(O),W=function(o){function t(t,e,r){var n=o.call(this)||this;return n.parent=t,n.outerValue=e,n.outerIndex=r,n.index=0,n}return h(t,o),t.prototype._next=function(t){this.parent.notifyNext(this.outerValue,t,this.outerIndex,this.index++,this)},t.prototype._error=function(t){this.parent.notifyError(t,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(O),F=function(t){return function(e){return t.then(function(t){e.closed||(e.next(t),e.complete())},function(t){return e.error(t)}).then(null,y),e}};function G(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var Y=G(),J=function(n){return function(t){for(var e=n[Y]();;){var r=e.next();if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof e.return&&t.add(function(){e.return&&e.return()}),t}},K=function(r){return function(t){var e=r[A]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)}},Q=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Z(t){return t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var tt=function(e){if(e instanceof P)return function(t){return e._isScalar?(t.next(e.value),void t.complete()):e.subscribe(t)};if(e&&"function"==typeof e[A])return K(e);if(Q(e))return L(e);if(Z(e))return F(e);if(e&&"function"==typeof e[Y])return J(e);var t=m(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+t+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function et(t,e,r,n,o){if(void 0===o&&(o=new W(t,r,n)),!o.closed)return tt(e)(o)}function rt(t,e){if(!e)return t instanceof P?t:new P(tt(t));if(null!=t){if((u=t)&&"function"==typeof u[A])return i=t,new P((s=e)?function(e){var r=new E;return r.add(s.schedule(function(){var t=i[A]();r.add(t.subscribe({next:function(t){r.add(s.schedule(function(){return e.next(t)}))},error:function(t){r.add(s.schedule(function(){return e.error(t)}))},complete:function(){r.add(s.schedule(function(){return e.complete()}))}}))})),r}:K(i));if(Z(t))return n=t,new P((o=e)?function(e){var r=new E;return r.add(o.schedule(function(){return n.then(function(t){r.add(o.schedule(function(){e.next(t),r.add(o.schedule(function(){return e.complete()}))}))},function(t){r.add(o.schedule(function(){return e.error(t)}))})})),r}:F(n));if(Q(t))return M(t,e);if((r=t)&&"function"==typeof r[Y]||"string"==typeof t)return function(e,r){if(!e)throw new Error("Iterable cannot be null");return new P(r?function(n){var o,t=new E;return t.add(function(){o&&"function"==typeof o.return&&o.return()}),t.add(r.schedule(function(){o=e[Y](),t.add(r.schedule(function(){if(!n.closed){var t,e;try{var r=o.next();t=r.value,e=r.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}}))})),t}:J(e))}(t,e)}var r,n,o,i,s,u;throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function nt(t,r,n,e){return p(n)&&(e=n,n=void 0),e?nt(t,r,n).pipe(N(function(t){return v(t)?e.apply(void 0,t):e(t)})):new P(function(e){!function t(e,r,n,o,i){var s;if(d=e,d&&"function"==typeof d.addEventListener&&"function"==typeof d.removeEventListener){var u=e;e.addEventListener(r,n,i),s=function(){return u.removeEventListener(r,n,i)}}else if(f=e,f&&"function"==typeof f.on&&"function"==typeof f.off){var c=e;e.on(r,n),s=function(){return c.off(r,n)}}else if(p=e,p&&"function"==typeof p.addListener&&"function"==typeof p.removeListener){var a=e;e.addListener(r,n),s=function(){return a.removeListener(r,n)}}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(var l=0,h=e.length;l<h;l++)t(e[l],r,n,o,i)}var p;var f;var d;o.add(s)}(t,r,function(t){e.next(1<arguments.length?Array.prototype.slice.call(arguments):t)},e,n)})}function ot(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[t.length-1];return"function"==typeof r&&t.pop(),M(t,void 0).lift(new it(r))}var it=function(){function t(t){this.resultSelector=t}return t.prototype.call=function(t,e){return e.subscribe(new st(t,this.resultSelector))},t}(),st=function(o){function t(t,e,r){void 0===r&&(r=Object.create(null));var n=o.call(this,t)||this;return n.iterators=[],n.active=0,n.resultSelector="function"==typeof e?e:null,n.values=r,n}return h(t,o),t.prototype._next=function(t){var e=this.iterators;v(t)?e.push(new ct(t)):e.push("function"==typeof t[Y]?new ut(t[Y]()):new at(this.destination,this,t))},t.prototype._complete=function(){var t=this.iterators,e=t.length;if(this.unsubscribe(),0!==e){this.active=e;for(var r=0;r<e;r++){var n=t[r];if(n.stillUnsubscribed)this.destination.add(n.subscribe(n,r));else this.active--}}else this.destination.complete()},t.prototype.notifyInactive=function(){this.active--,0===this.active&&this.destination.complete()},t.prototype.checkIterators=function(){for(var t=this.iterators,e=t.length,r=this.destination,n=0;n<e;n++){if("function"==typeof(s=t[n]).hasValue&&!s.hasValue())return}var o=!1,i=[];for(n=0;n<e;n++){var s,u=(s=t[n]).next();if(s.hasCompleted()&&(o=!0),u.done)return void r.complete();i.push(u.value)}this.resultSelector?this._tryresultSelector(i):r.next(i),o&&r.complete()},t.prototype._tryresultSelector=function(t){var e;try{e=this.resultSelector.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},t}(O),ut=function(){function t(t){this.iterator=t,this.nextResult=t.next()}return t.prototype.hasValue=function(){return!0},t.prototype.next=function(){var t=this.nextResult;return this.nextResult=this.iterator.next(),t},t.prototype.hasCompleted=function(){var t=this.nextResult;return t&&t.done},t}(),ct=function(){function t(t){this.array=t,this.index=0,this.length=0,this.length=t.length}return t.prototype[Y]=function(){return this},t.prototype.next=function(t){var e=this.index++;return e<this.length?{value:this.array[e],done:!1}:{value:null,done:!0}},t.prototype.hasValue=function(){return this.index<this.array.length},t.prototype.hasCompleted=function(){return this.array.length===this.index},t}(),at=function(o){function t(t,e,r){var n=o.call(this,t)||this;return n.parent=e,n.observable=r,n.stillUnsubscribed=!0,n.buffer=[],n.isComplete=!1,n}return h(t,o),t.prototype[Y]=function(){return this},t.prototype.next=function(){var t=this.buffer;return 0===t.length&&this.isComplete?{value:null,done:!0}:{value:t.shift(),done:!1}},t.prototype.hasValue=function(){return 0<this.buffer.length},t.prototype.hasCompleted=function(){return 0===this.buffer.length&&this.isComplete},t.prototype.notifyComplete=function(){0<this.buffer.length?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()},t.prototype.notifyNext=function(t,e,r,n,o){this.buffer.push(e),this.parent.checkIterators()},t.prototype.subscribe=function(t,e){return et(this,this.observable,this,e)},t}(B);var lt=function(){function t(t,e){this.dueTime=t,this.scheduler=e}return t.prototype.call=function(t,e){return e.subscribe(new ht(t,this.dueTime,this.scheduler))},t}(),ht=function(o){function t(t,e,r){var n=o.call(this,t)||this;return n.dueTime=e,n.scheduler=r,n.debouncedSubscription=null,n.lastValue=null,n.hasValue=!1,n}return h(t,o),t.prototype._next=function(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(pt,this.dueTime,this))},t.prototype._complete=function(){this.debouncedNext(),this.destination.complete()},t.prototype.debouncedNext=function(){if(this.clearDebounce(),this.hasValue){var t=this.lastValue;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}},t.prototype.clearDebounce=function(){var t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)},t}(O);function pt(t){t.debouncedNext()}var ft=function(){function t(t,e){this.predicate=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new dt(t,this.predicate,this.thisArg))},t}(),dt=function(o){function t(t,e,r){var n=o.call(this,t)||this;return n.predicate=e,n.thisArg=r,n.count=0,n}return h(t,o),t.prototype._next=function(t){var e;try{e=this.predicate.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}e&&this.destination.next(t)},t}(O);function yt(e,o){return"function"==typeof o?function(t){return t.pipe(yt(function(r,n){return rt(e(r,n)).pipe(N(function(t,e){return o(r,t,n,e)}))}))}:function(t){return t.lift(new bt(e))}}var bt=function(){function t(t){this.project=t}return t.prototype.call=function(t,e){return e.subscribe(new vt(t,this.project))},t}(),vt=function(n){function t(t,e){var r=n.call(this,t)||this;return r.project=e,r.index=0,r}return h(t,n),t.prototype._next=function(t){var e,r=this.index++;try{e=this.project(t,r)}catch(t){return void this.destination.error(t)}this._innerSub(e,t,r)},t.prototype._innerSub=function(t,e,r){var n=this.innerSubscription;n&&n.unsubscribe();var o=new W(this,void 0,void 0);this.destination.add(o),this.innerSubscription=et(this,t,e,r,o)},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||n.prototype._complete.call(this),this.unsubscribe()},t.prototype._unsubscribe=function(){this.innerSubscription=null},t.prototype.notifyComplete=function(t){this.destination.remove(t),this.innerSubscription=null,this.isStopped&&n.prototype._complete.call(this)},t.prototype.notifyNext=function(t,e,r,n,o){this.destination.next(e)},t}(B);var mt=function(){function t(t,e){this.observables=t,this.project=e}return t.prototype.call=function(t,e){return e.subscribe(new wt(t,this.observables,this.project))},t}(),wt=function(u){function t(t,e,r){var n=u.call(this,t)||this;n.observables=e,n.project=r,n.toRespond=[];var o=e.length;n.values=new Array(o);for(var i=0;i<o;i++)n.toRespond.push(i);for(i=0;i<o;i++){var s=e[i];n.add(et(n,s,s,i))}return n}return h(t,u),t.prototype.notifyNext=function(t,e,r,n,o){this.values[r]=e;var i=this.toRespond;if(0<i.length){var s=i.indexOf(r);-1!==s&&i.splice(s,1)}},t.prototype.notifyComplete=function(){},t.prototype._next=function(t){if(0===this.toRespond.length){var e=[t].concat(this.values);this.project?this._tryProject(e):this.destination.next(e)}},t.prototype._tryProject=function(t){var e;try{e=this.project.apply(this,t)}catch(t){return void this.destination.error(t)}this.destination.next(e)},t}(B),gt="undefined"!=typeof window&&window,xt="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,_t="undefined"!=typeof global&&global,St=gt||_t||xt;function Et(t,e){return void 0===e&&(e=null),new Ct({method:"GET",url:t,headers:e})}function Tt(t,e,r){return new Ct({method:"POST",url:t,body:e,headers:r})}function jt(t,e){return new Ct({method:"DELETE",url:t,headers:e})}function Ot(t,e,r){return new Ct({method:"PUT",url:t,body:e,headers:r})}function kt(t,e,r){return new Ct({method:"PATCH",url:t,body:e,headers:r})}var At=N(function(t,e){return t.response});function $t(t,e){return At(new Ct({method:"GET",url:t,responseType:"json",headers:e}))}var Ct=function(o){function e(t){var e=o.call(this)||this,r={async:!0,createXHR:function(){return this.crossDomain?function(){if(St.XMLHttpRequest)return new St.XMLHttpRequest;if(St.XDomainRequest)return new St.XDomainRequest;throw new Error("CORS is not supported by your browser")}():function(){if(St.XMLHttpRequest)return new St.XMLHttpRequest;var t=void 0;try{for(var e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],r=0;r<3;r++)try{if(new St.ActiveXObject(t=e[r]))break}catch(t){}return new St.ActiveXObject(t)}catch(t){throw new Error("XMLHttpRequest is not supported by your browser")}}()},crossDomain:!0,withCredentials:!1,headers:{},method:"GET",responseType:"json",timeout:0};if("string"==typeof t)r.url=t;else for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return e.request=r,e}var t;return h(e,o),e.prototype._subscribe=function(t){return new Pt(t,this.request)},e.create=((t=function(t){return new e(t)}).get=Et,t.post=Tt,t.delete=jt,t.put=Ot,t.patch=kt,t.getJSON=$t,t),e}(P),Pt=function(o){function t(t,e){var r=o.call(this,t)||this;r.request=e,r.done=!1;var n=e.headers=e.headers||{};return e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),"Content-Type"in n||St.FormData&&e.body instanceof St.FormData||void 0===e.body||(n["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8"),e.body=r.serializeBody(e.body,e.headers["Content-Type"]),r.send(),r}return h(t,o),t.prototype.next=function(t){this.done=!0;var e=this.destination,r=new Rt(t,this.xhr,this.request);r.response===g?e.error(g.e):e.next(r)},t.prototype.send=function(){var t=this.request,e=this.request,r=e.user,n=e.method,o=e.url,i=e.async,s=e.password,u=e.headers,c=e.body,a=_(t.createXHR).call(t);if(a===g)this.error(g.e);else{this.xhr=a,this.setupEvents(a,t);if((r?_(a.open).call(a,n,o,i,r,s):_(a.open).call(a,n,o,i))===g)return this.error(g.e),null;if(i&&(a.timeout=t.timeout,a.responseType=t.responseType),"withCredentials"in a&&(a.withCredentials=!!t.withCredentials),this.setHeaders(a,u),(c?_(a.send).call(a,c):_(a.send).call(a))===g)return this.error(g.e),null}return a},t.prototype.serializeBody=function(e,t){if(!e||"string"==typeof e)return e;if(St.FormData&&e instanceof St.FormData)return e;if(t){var r=t.indexOf(";");-1!==r&&(t=t.substring(0,r))}switch(t){case"application/x-www-form-urlencoded":return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&");case"application/json":return JSON.stringify(e);default:return e}},t.prototype.setHeaders=function(t,e){for(var r in e)e.hasOwnProperty(r)&&t.setRequestHeader(r,e[r])},t.prototype.setupEvents=function(t,e){var r=e.progressSubscriber;function i(t){var e=i.subscriber,r=i.progressSubscriber,n=i.request;r&&r.error(t);var o=new Lt(this,n);e.error(o.response===g?g.e:o)}if((t.ontimeout=i).request=e,i.subscriber=this,i.progressSubscriber=r,t.upload&&"withCredentials"in t){var n,s;if(r)n=function(t){n.progressSubscriber.next(t)},St.XDomainRequest?t.onprogress=n:t.upload.onprogress=n,n.progressSubscriber=r;(t.onerror=s=function(t){var e=s.progressSubscriber,r=s.subscriber,n=s.request;e&&e.error(t);var o=new Ht("ajax error",this,n);r.error(o.response===g?g.e:o)}).request=e,s.subscriber=this,s.progressSubscriber=r}function o(t){}function u(t){var e=u.subscriber,r=u.progressSubscriber,n=u.request;if(4===this.readyState){var o=1223===this.status?204:this.status;if(0===o&&(o=("text"===this.responseType?this.response||this.responseText:this.response)?200:0),o<400)r&&r.complete(),e.next(t),e.complete();else{r&&r.error(t);var i=new Ht("ajax error "+o,this,n);e.error(i.response===g?g.e:i)}}}(t.onreadystatechange=o).subscriber=this,o.progressSubscriber=r,o.request=e,(t.onload=u).subscriber=this,u.progressSubscriber=r,u.request=e},t.prototype.unsubscribe=function(){var t=this.xhr;!this.done&&t&&4!==t.readyState&&"function"==typeof t.abort&&t.abort(),o.prototype.unsubscribe.call(this)},t}(O),Rt=function(){return function(t,e,r){this.originalEvent=t,this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType||r.responseType,this.response=Dt(this.responseType,e)}}();function qt(t,e,r){return Error.call(this),this.message=t,this.name="AjaxError",this.xhr=e,this.request=r,this.status=e.status,this.responseType=e.responseType||r.responseType,this.response=Dt(this.responseType,e),this}qt.prototype=Object.create(Error.prototype);var Ht=qt;function It(t){return"response"in t?t.responseType?t.response:JSON.parse(t.response||t.responseText||"null"):JSON.parse(t.responseText||"null")}function Dt(t,e){switch(t){case"json":return _(It)(e);case"xml":return e.responseXML;case"text":default:return"response"in e?e.response:e.responseText}}var Lt=function(t,e){return Ht.call(this,"ajax timeout",t,e),this.name="AjaxTimeoutError",this},Mt=Ct.create;function Vt(t,e){var r,n,o=Mt({url:t,responseType:"xml"}).pipe(N(function(t){return t.response}),N(function(t){return t.querySelectorAll("entry")}),N(function(t){return c(t).map(function(t){return{title:t.getElementsByTagName("title")[0].textContent,url:t.getElementsByTagName("url")[0].textContent,content:t.getElementsByTagName("content")[0].textContent}})})),i=nt(document.getElementById(e),"input").pipe((r=500,void 0===n&&(n=V),function(t){return t.lift(new lt(r,n))}),N(function(t){return t.target.value}));return ot(i.pipe(N(function(t){return!!t})),i.pipe(function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return function(t){var e;return"function"==typeof r[r.length-1]&&(e=r.pop()),t.lift(new mt(r,e))}}(o),N(function(t){var e=l(t,2),i=e[0];return e[1].filter(function(t){var e=t.content;return 0<=t.title.indexOf(i)||0<=e.indexOf(i)}).map(function(t){var e=new RegExp("(".concat(i,")"),"gi"),r=t.title.replace(e,'<strong class="search-keyword">$1</strong>'),n=t.content.replace(/<[^>]+>/g,""),o=n.indexOf(i);return function(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},e=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),e.forEach(function(t){var e,r,n;n=i[r=t],r in(e=o)?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return o}({},t,{title:r,content:n=n.slice(o<20?0:o-20,o<0?100:o+80).replace(e,'<strong class="search-keyword">$1</strong>')})})}))).pipe(N(function(t){var e=l(t,2);return e[0]?e[1]:[]}))}var Xt=function(){function n(t){r(this,n),this.config=t,this.theme=t.theme,this.scrollArr=[]}return e(n,[{key:"init",value:function(){var e=this,r=n.utils,t={smoothScroll:function(){$(".toc-link").on("click",function(){$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-200})})},picPos:function(){var e=this,t=Layzr();$(".post-content").each(function(){$(this).find("img").each(function(){$(this).parent("p").css("text-align","center");var t='<img src="'.concat(this.src,'"');e.theme.lazy&&(t='<img data-normal="'.concat(this.src,'"')),$(this).replaceWith('<a href="'.concat(this.src,'" data-title="').concat(this.alt,'" data-lightbox="group">').concat(t,' alt="').concat(this.alt,'"></a>'))})}),t.update().handlers(!0)},showComments:function(){var t=this;$("#com-switch").on("click",function(){r("iss","#post-comments").display()?($("#post-comments").css("display","block").addClass("syuanpi fadeInDown"),$(t).removeClass("syuanpi").css("transform","rotate(180deg)")):($(t).addClass("syuanpi").css("transform",""),r("cls","#post-comments").opreate("fadeInDown","remove"),r("ani","#post-comments").end("fadeOutUp",function(){$(this).css("display","none")}))})}};return n.opScroll(this.scrollArr),Object.values(t).forEach(function(t){return t.call(e)})}},{key:"back2top",value:function(){$(".toTop").on("click",function(){$("html, body").animate({scrollTop:0})})}},{key:"pushHeader",value:function(){var e=this.utils("cls","#mobile-header");this.scrollArr.push(function(t){e.opreate("header-scroll",5<t?"add":"remove")})}},{key:"updateRound",value:function(t){var e=Math.floor(t/($(document).height()-$(window).height())*100);$("#scrollpercent").html(e)}},{key:"showToc",value:function(){var s=n.utils,u=$(".toc-link"),c=$(".headerlink");this.scrollArr.push(function(e){var t=$.map(c,function(t){return $(t).offset().top});$(".title-link a").each(function(){var t=s("cls",this);0<=e&&e<230?t.opreate("active"):t.opreate("active","remove")});for(var r=0;r<u.length;r++){var n=t[r],o=r+1===u.length?1/0:t[r+1],i=s("cls",u[r]);n<e+210&&e+210<=o?i.opreate("active"):i.opreate("active","remove")}})}},{key:"titleStatus",value:function(){var e,r=document.title;document.addEventListener("visibilitychange",function(){var t=Math.floor($(window).scrollTop()/($(document).height()-$(window).height())*100);$(document).height()-$(window).height()==0&&(function(t){throw new Error('"'+t+'" is read-only')}("sct"),t=100),document.hidden?(clearTimeout(e),document.title="Read "+t+"% · "+r):(document.title="Welcome Back · "+r,e=setTimeout(function(){document.title=r},3e3))})}},{key:"showReward",value:function(){var t=n.utils,e=t("ani","#reward-btn");$("#reward-btn").click(function(){t("iss","#reward-btn")?($("#reward-wrapper").css("display","flex"),e.end("clarity")):e.end("melt",function(){$("#reward-wrapper").hide()})})}},{key:"depth",value:function(t,e){var r=this.utils,n=r("cls","body"),o=r("cls",".container-inner");n.exist("under")?(n.opreate("under","remove"),o.opreate("under","remove"),e.call(this)):(n.opreate("under","add"),o.opreate("under","add"),t.call(this))}},{key:"tagcloud",value:function(){var t=this,e=this.utils,r=$("#tags"),n=e("cls","#tagcloud"),o=e("ani","#tagcloud"),i=e("cls","#search"),s=e("ani","#search");r.on("click",function(){if(i.exist("show"))return n.opreate("syuanpi shuttleIn show"),i.opreate("shuttleIn","remove"),void s.end("zoomOut",function(){i.opreate("syuanpi show","remove")});t.depth(function(){n.opreate("syuanpi shuttleIn show")},function(){n.opreate("shuttleIn","remove"),o.end("zoomOut",function(){n.opreate("syuanpi show","remove")})})});var u=nt(document.querySelectorAll(".tagcloud-tag button"),"click").pipe(N(function(t){return t.target})),c=rt(document.querySelectorAll(".tagcloud-postlist")),a=c.pipe(N(function(t){return t.classList.remove("active")}));ot(u.pipe(yt(function(){return a})),u).pipe(N(function(t){var e=l(t,2);return e[1]}),yt(function(e){return c.pipe((r=function(t){return t.firstElementChild.innerHTML===e.innerHTML},function(t){return t.lift(new ft(r,n))}));var r,n})).subscribe(function(t){return t.classList.add("active")})}},{key:"search",value:function(){var t=this;if(this.theme.search){$("body").append('<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>');var e=this.utils,r=$("#search-btn"),n=$("#search-result"),o=e("cls","#search"),i=e("ani","#search"),s=e("cls","#tagcloud"),u=e("ani","#tagcloud");r.on("click",function(){if(s.exist("show"))return o.opreate("syuanpi shuttleIn show"),s.opreate("shuttleIn","remove"),void u.end("zoomOut",function(){s.opreate("syuanpi show","remove")});t.depth(function(){o.opreate("syuanpi shuttleIn show")},function(){o.opreate("shuttleIn","remove"),i.end("zoomOut",function(){o.opreate("syuanpi show","remove")})})}),Vt("".concat(this.config.baseUrl,"search.xml"),"search-input").subscribe(function(t){var e,r=t.map(function(t){var e=t.title,r=t.content;return'\n          <li class="search-result-item">\n            <a href="'.concat(t.url,'"><h2>').concat(e,"</h2></a>\n            <p>").concat(r,"</p>\n          </li>\n        ")});n.html((e=r.join(""),'<ul class="search-result-list syuanpi fadeInUpShort">'.concat(e,"</ul>")))})}}},{key:"pjax",value:function(){if(this.theme.pjax){var t=this.utils,e=t("cls",".container-inner"),r=t("cls",".header"),n=t("cls",".header-wrapper");$(document).pjax(".container-inner a",".container-inner",{fragment:"container-inner"}),$(document).on("pjax:send",function(){e.opreate("syuanpi fadeOutLeftShort"),n.opreate("syuanpi fadeOutLeftShort"),r.opreate("melt")})}}},{key:"bootstarp",value:function(){this.showToc(),this.back2top(),this.switchToc(),this.titleStatus(),this.init(),this.pushHeader(),this.tagcloud(),this.search(),this.pjax()}}],[{key:"utils",value:function(t,e){var r=this,n=function(r){return{opreate:function(t,e){return"remove"===e?$(r).removeClass(t):$(r).addClass(t)},exist:function(t){return $(r).hasClass(t)}}};return{cls:n,iss:function(t){return{banderole:function(){return"banderole"===r.theme.scheme},balance:function(){return"balance"===r.theme.scheme},display:function(){return"none"===$(t).css("display")}}},ani:function(r){return{close:function(){return n.opreate(".syuanpi","syuanpi","remove")},end:function(t,e){$(r).addClass(t).one("webkitAnimationEnd AnimationEnd",function(){$(r).removeClass(t),e&&e.call(null,r)})}}}}[t](e)}},{key:"opScroll",value:function(t){var e=nt(window,"scroll").pipe(N(function(t){return t.target.scrollingElement.scrollTop}));t.length&&e.subscribe(function(e){return t.forEach(function(t){return t(e)})})}}]),n}();return function(t){function n(t){var e;return r(this,n),(e=s(this,i(n).call(this,t))).utils=Xt.utils,e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(n,Xt),e(n,[{key:"pushHeader",value:function(){if(u(i(n.prototype),"pushHeader",this).call(this),this.utils("iss").banderole()){var e=this.utils("cls","#header");this.scrollArr.push(function(t){e.opreate("header-scroll",50<t?"add":"remove")})}}},{key:"back2top",value:function(){var e=this,r=this.utils("cls","#backtop");this.scrollArr.push(function(t){110<t?(r.opreate("clarity","add"),r.opreate("melt","remove")):(r.opreate("melt"),r.opreate("clarity","remove")),e.updateRound(t)}),u(i(n.prototype),"back2top",this).call(this)}},{key:"switchToc",value:function(){var t=this.utils,e=t("cls",".toc-inner"),r=t("cls",".post-toc .title"),n=t("cls",".container-inner");$(".post-toc").on("click",function(){r.exist("show")?(r.opreate("show","remove"),e.opreate("show","remove"),n.opreate("has_toc","remove")):(r.opreate("show"),e.opreate("show"),n.opreate("has_toc"))})}}]),n}()});
