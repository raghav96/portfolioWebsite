!function(){"use strict";function i(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function u(t){this.time=t.time,this.target=t.target,this.rootBounds=n(t.rootBounds),this.boundingClientRect=n(t.boundingClientRect),this.intersectionRect=n(t.intersectionRect||a()),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,t=e.width*e.height,e=this.intersectionRect,e=e.width*e.height;this.intersectionRatio=t?Number((e/t).toFixed(4)):this.isIntersecting?1:0}function t(t,e){var n,o,r,e=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(e.root&&1!=e.root.nodeType&&9!=e.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),o=this.THROTTLE_TIMEOUT,r=null,function(){r=r||setTimeout(function(){n(),r=null},o)}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(e.rootMargin),this.thresholds=this._initThresholds(e.threshold),this.root=e.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function h(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detachEvent&&t.detachEvent("on"+e,n)}function p(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):a()}function a(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function n(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}function d(t,e){var n=e.top-t.top,t=e.left-t.left;return{top:n,left:t,height:e.height,width:e.width,bottom:n+e.height,right:t+e.width}}function o(t,e){for(var n=e;n;){if(n==t)return!0;n=f(n)}return!1}function f(t){var e=t.parentNode;return 9==t.nodeType&&t!=g?i(t):(e&&e.assignedSlot&&(e=e.assignedSlot.parentNode),e&&11==e.nodeType&&e.host?e.host:e)}function r(t){return t&&9===t.nodeType}var g,c,m,_;"object"==typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}):(g=function(){for(var t=window.document,e=i(t);e;)e=i(t=e.ownerDocument);return t}(),c=[],_=m=null,t.prototype.THROTTLE_TIMEOUT=100,t.prototype.POLL_INTERVAL=null,t.prototype.USE_MUTATION_OBSERVER=!0,t._setupCrossOriginUpdater=function(){return m=m||function(t,e){_=t&&e?d(t,e):a(),c.forEach(function(t){t._checkForIntersections()})}},t._resetCrossOriginUpdater=function(){_=m=null},t.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},t.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},t.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},t.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},t.prototype._initThresholds=function(t){t=t||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||1<t)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},t.prototype._parseRootMargin=function(t){t=(t||"0px").split(/\s+/).map(function(t){t=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},t.prototype._monitorIntersections=function(e){var n,o,r,t=e.defaultView;t&&-1==this._monitoringDocuments.indexOf(e)&&(n=this._checkForIntersections,r=o=null,this.POLL_INTERVAL?o=t.setInterval(n,this.POLL_INTERVAL):(s(t,"resize",n,!0),s(e,"scroll",n,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(r=new t.MutationObserver(n)).observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(e),this._monitoringUnsubscribes.push(function(){var t=e.defaultView;t&&(o&&t.clearInterval(o),h(t,"resize",n,!0)),h(e,"scroll",n,!0),r&&r.disconnect()}),t=this.root&&(this.root.ownerDocument||this.root)||g,e==t||(t=i(e))&&this._monitorIntersections(t.ownerDocument))},t.prototype._unmonitorIntersections=function(o){var r,t,e=this._monitoringDocuments.indexOf(o);-1!=e&&(r=this.root&&(this.root.ownerDocument||this.root)||g,this._observationTargets.some(function(t){if((e=t.element.ownerDocument)==o)return!0;for(;e&&e!=r;){var e,n=i(e);if((e=n&&n.ownerDocument)==o)return!0}return!1})||(t=this._monitoringUnsubscribes[e],this._monitoringDocuments.splice(e,1),this._monitoringUnsubscribes.splice(e,1),t(),o==r||(t=i(o))&&this._unmonitorIntersections(t.ownerDocument)))},t.prototype._unmonitorAllIntersections=function(){var t=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0;for(var e=this._monitoringUnsubscribes.length=0;e<t.length;e++)t[e]()},t.prototype._checkForIntersections=function(){var h,c;!this.root&&m&&!_||(h=this._rootIsInDom(),c=h?this._getRootRect():a(),this._observationTargets.forEach(function(t){var e=t.element,n=p(e),o=this._rootContainsTarget(e),r=t.entry,i=h&&o&&this._computeTargetAndRootIntersection(e,n,c),s=null;this._rootContainsTarget(e)?m&&!this.root||(s=c):s=a();i=t.entry=new u({time:window.performance&&performance.now&&performance.now(),target:e,boundingClientRect:n,rootBounds:s,intersectionRect:i});r?h&&o?this._hasCrossedThreshold(r,i)&&this._queuedEntries.push(i):r&&r.isIntersecting&&this._queuedEntries.push(i):this._queuedEntries.push(i)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this))},t.prototype._computeTargetAndRootIntersection=function(t,e,n){if("none"!=window.getComputedStyle(t).display){for(var o=e,r=f(t),i=!1;!i&&r;){var s,h,c,u,a=null,l=1==r.nodeType?window.getComputedStyle(r):{};if("none"==l.display)return null;if(r==this.root||9==r.nodeType?(i=!0,r==this.root||r==g?m&&!this.root?!_||0==_.width&&0==_.height?o=a=r=null:a=_:a=n:(h=(s=f(r))&&p(s),c=s&&this._computeTargetAndRootIntersection(s,h,n),h&&c?(r=s,a=d(h,c)):o=r=null)):r!=(u=r.ownerDocument).body&&r!=u.documentElement&&"visible"!=l.overflow&&(a=p(r)),a&&(s=a,h=o,a=l=u=c=void 0,c=Math.max(s.top,h.top),u=Math.min(s.bottom,h.bottom),l=Math.max(s.left,h.left),a=Math.min(s.right,h.right),h=u-c,o=0<=(s=a-l)&&0<=h?{top:c,bottom:u,left:l,right:a,width:s,height:h}:null),!o)break;r=r&&f(r)}return o}},t.prototype._getRootRect=function(){var t,e;return e=this.root&&!r(this.root)?p(this.root):(t=(e=r(this.root)?this.root:g).documentElement,e=e.body,{top:0,left:0,right:t.clientWidth||e.clientWidth,width:t.clientWidth||e.clientWidth,bottom:t.clientHeight||e.clientHeight,height:t.clientHeight||e.clientHeight}),this._expandRectByRootMargin(e)},t.prototype._expandRectByRootMargin=function(n){var t=this._rootMarginValues.map(function(t,e){return"px"==t.unit?t.value:t.value*(e%2?n.width:n.height)/100}),t={top:n.top-t[0],right:n.right+t[1],bottom:n.bottom+t[2],left:n.left-t[3]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t},t.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},t.prototype._rootIsInDom=function(){return!this.root||o(g,this.root)},t.prototype._rootContainsTarget=function(t){var e=this.root&&(this.root.ownerDocument||this.root)||g;return o(e,t)&&(!this.root||e==t.ownerDocument)},t.prototype._registerInstance=function(){c.indexOf(this)<0&&c.push(this)},t.prototype._unregisterInstance=function(){var t=c.indexOf(this);-1!=t&&c.splice(t,1)},window.IntersectionObserver=t,window.IntersectionObserverEntry=u));var l=.5,v=1e3,b=33,e=function(){this.store=[]},w={size:{configurable:!0}};e.prototype._find=function(t){for(var e=0;e<this.store.length;e++)if(this.store[e][0]==t)return e;return-1},e.prototype.set=function(t,e){var n=this._find(t);0<=n?this.store[n][1]=e:this.store.push([t,e])},e.prototype.get=function(t){t=this._find(t);if(0<=t)return this.store[t][1]},e.prototype.delete=function(t){t=this._find(t);0<=t&&this.store.splice(t,1)},e.prototype.forEach=function(t){for(var e=0;e<this.store.length;e++){var n=this.store[e];t(n[1],n[0],this)}},w.size.get=function(){return this.store.length},Object.defineProperties(e.prototype,w);var e=window.Map||e,y=new e,E=new e,I=null,T=null;function R(t,e){return n=t,o=function(){e(JSON.parse(this.responseText))},(t=new XMLHttpRequest).addEventListener("load",o),t.open("GET",n),t.send(),0;var n,o}function O(t,e){t.forEach(function(t){t.isIntersecting,t.intersectionRatio,t.intersectionRatio>=l?E.set(t.target,{startTime:t.time}):E.delete(t.target),t.target,0<E.size&&null==T&&(T=setInterval(D,b))})}function D(){E.forEach(function(t,e){t=performance.now()-t.startTime;v<=t&&(t=e,I.unobserve(t),E.delete(e),e=y.get(e),e=e.beacon,navigator.sendBeacon&&navigator.sendBeacon(e)||((new Image).src=e))}),0==E.size&&null!=T&&(clearInterval(T),T=null)}function M(e,n){y.set(e,n);var t=document.createElement("a");t.href=n.target,t.setAttribute("rel","nofollow"),t.setAttribute("target","_blank"),t.style.border=null;var o=document.createElement("img");o.style.maxWidth="100%",o.style.maxHeight="100%",o.style.width="100%",o.addEventListener("load",function(){var t;n.img,t=e,I.observe(t)}),o.src=n.img,t.appendChild(o),e.appendChild(t),n.img}function L(){if(window.rp_prop_id){var t={p:window.rp_prop_id,s:[]},o=Array.prototype.slice.call(document.getElementsByClassName("rpad"));if(0!=o.length){Array.from(o),o.sort(function(t,e){return t._bcr||(t._bcr=t.getBoundingClientRect()),e._bcr||(e._bcr=e.getBoundingClientRect()),t._bcr.top-e._bcr.top}),Array.from(o);for(var e=0;e<o.length;e++){var n=o[e];t.s.push(n.dataset.unit)}R("https://srv.realpython.net/call/?d="+btoa(JSON.stringify(t)),function(t){I=new IntersectionObserver(O,{root:null,threshold:l});for(var e=0;e<o.length;e++){var n=t.ads[e];n&&M(o[e],n)}})}else console.warn("No units found, aborting")}else console.error("rp_prop_id not defined, aborting")}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",L):L()}();
