import{j as m,_ as oe,a as re,F as N,s as ae,c as W,i as J,u as ce,b as le,d as _,e as y,f as de,g as j,h as ue,S as me,R as pe,Q as be}from"./assets/@qwik-city-plan-50e2b7e0.mjs";import"graphql-request";/**
 * @license
 * @builder.io/qwik/server 1.2.10
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var fe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function ye(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const r=E(i),c=t[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,r){var v;const c=E(r),l=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(c);if(l)return l;let u=String(a);u.endsWith(".js")||(u+=".js");const w=fe(u);if(!(r in w))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${u}'.`);return w[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function qe(e,n){const t=ye(e,n);ae(t)}var E=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function x(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function V(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,_e=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,ve=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,we=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ge(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?we:ve).replace("window.qEvents",JSON.stringify(e.events)):e.debug?_e:he}function ke(e,n,t){if(!t)return[];const s=n.prefetchStrategy,o=V(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return je(e,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function je(e,n,t){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),u=i[l];u&&Z(a,r,s,t,u[1])}return s}function Z(e,n,t,s,o){const i=s+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)Z(e,n,a.imports,s,c)}t.push(a)}function xe(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function S(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ee(e){const n={bundles:g(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function g(e){const n=[],t=s=>{if(Array.isArray(s))for(const o of s)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function Se(e){const n=new Map;let t=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const u=n.get(l.url)||0;n.set(l.url,u+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ne(e,n,t){const s=Te(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ce(o,n,t),s.linkInsert==="html-append"&&Ie(o,n,s),s.linkInsert==="js-append"?ze(o,n,s,t):s.workerFetchInsert==="always"&&Ae(o,n,t),o.length>0?m(N,{children:o}):null}function Ce(e,n,t){const s=Se(n);for(const o of s)e.push(m("link",{rel:"modulepreload",href:o,nonce:t}));e.push(m("script",{dangerouslySetInnerHTML:Ee(n),nonce:t}))}function Ie(e,n,t){const s=g(n),o=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(m("link",a,void 0))}}function ze(e,n,t,s){const o=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(g(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=S(),i+="}"),t.workerFetchInsert==="always"&&(i+=S()),e.push(m("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Ae(e,n,t){let s=`const u=${JSON.stringify(g(n))};`;s+=S(),e.push(m("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Te(e){return e&&typeof e=="object"?e:Fe}var Fe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Le="<!DOCTYPE html>";async function Re(e,n){var L;let t=n.stream,s=0,o=0,i=0,a=0,r="",c;const l=((L=n.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=n.containerTagName??"html",w=n.containerAttributes??{},v=t,X=x(),G=V(n),p=Pe(n.manifest);function C(){r&&(v.write(r),r="",s=0,i++,i===1&&(a=X()))}function I(d){const b=d.length;s+=b,o+=b,r+=d}switch(l.strategy){case"disabled":t={write:I};break;case"direct":t=v;break;case"auto":let d=0,b=!1;const R=l.maximunChunk??0,k=l.maximunInitialChunk??0;t={write(h){h==="<!--qkssr-f-->"?b||(b=!0):h==="<!--qkssr-pu-->"?d++:h==="<!--qkssr-po-->"?d--:I(h),d===0&&(b||s>=(i===0?k:R))&&(b=!1,C())}};break}u==="html"?t.write(Le):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await qe(n,p);const z=p==null?void 0:p.manifest.injections,ee=z?z.map(d=>m(d.tag,d.attributes??{})):void 0,ne=x(),A=[];let T=0,F=0;await oe(e,{stream:t,containerTagName:u,containerAttributes:w,serverData:n.serverData,base:G,beforeContent:ee,beforeClose:async(d,b,R,k)=>{var D,$,U,M,B,K,H;T=ne();const h=x();c=await re(d,b,void 0,k);const q=[];if(n.prefetchStrategy!==null){const f=ke(c,n,p);if(f.length>0){const Y=Ne(n.prefetchStrategy,f,(D=n.serverData)==null?void 0:D.nonce);Y&&q.push(Y)}}const se=JSON.stringify(c.state,void 0,void 0);q.push(m("script",{type:"qwik/json",dangerouslySetInnerHTML:Qe(se),nonce:($=n.serverData)==null?void 0:$.nonce})),c.funcs.length>0&&q.push(m("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:De(c.funcs),nonce:(U=n.serverData)==null?void 0:U.nonce}));const ie=!c||c.mode!=="static",P=((M=n.qwikLoader)==null?void 0:M.include)??"auto",Q=P==="always"||P==="auto"&&ie;if(Q){const f=ge({events:(B=n.qwikLoader)==null?void 0:B.events,debug:n.debug});q.push(m("script",{id:"qwikloader",dangerouslySetInnerHTML:f,nonce:(K=n.serverData)==null?void 0:K.nonce}))}const O=Array.from(b.$events$,f=>JSON.stringify(f));if(O.length>0){let f=`window.qwikevents.push(${O.join(", ")})`;Q||(f=`window.qwikevents||=[];${f}`),q.push(m("script",{dangerouslySetInnerHTML:f,nonce:(H=n.serverData)==null?void 0:H.nonce}))}return Oe(A,d),F=h(),m(N,{children:q})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),u!=="html"&&t.write("<!--/cq-->"),C();const te=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!te,timing:{render:T,snapshot:F,firstFlush:a},_symbols:A}}function Pe(e){if(e){if("mapper"in e)return e;if(e=xe(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[E(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Qe=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Oe(e,n){var t;for(const s of n){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function De(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const $e={manifestHash:"e1ey9e",symbols:{s_02wMImzEAbk:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[24662,33625]},s_0QSPsfhw7Ho:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_0qspsfhw7ho",hash:"0QSPsfhw7Ho",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[777,869]},s_4U9uxSybBnQ:{origin:"../../../packages/ui/lib/index.qwik.mjs",displayName:"Logo_component",canonicalFilename:"s_4u9uxsybbnq",hash:"4U9uxSybBnQ",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[14476,14904]},s_8gdLBszqbaM:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35578,37229]},s_CkBGHGyUCiI:{origin:"routes/[...page]/index.tsx",displayName:"____page__component",canonicalFilename:"s_ckbghgyucii",hash:"CkBGHGyUCiI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1125,1283]},s_Nk9PlpjQm9Y:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[47183,48534]},s_Sw8hkFhUxn4:{origin:"../../../packages/ui/lib/index.qwik.mjs",displayName:"Counter_component",canonicalFilename:"s_sw8hkfhuxn4",hash:"Sw8hkFhUxn4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[15010,15604]},s_TxCFOy819ag:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[21392,33912]},s_VmIT7bkYcgI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_vmit7bkycgi",hash:"VmIT7bkYcgI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_WmYC5H00wtI:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[34196,35459]},s_bZbTOXga0Fo:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_bzbtoxga0fo",hash:"bZbTOXga0Fo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[266,812]},s_e0ssiDXoeAM:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_lNcz2iETQwo:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_lncz2ietqwo",hash:"lNcz2iETQwo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[568,935]},s_RPDJAz33WLA:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[21447,21481]},s_A5bZC7WO00A:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[38597,40231]},s_DyVc0YBIqQU:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[43245,45069]},s_BUbtvTyvVRE:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[34597,34658]},s_LjlMepEmr2k:{origin:"../../../packages/ui/lib/index.qwik.mjs",displayName:"Counter_component_div_p_button_onClick",canonicalFilename:"s_ljlmepemr2k",hash:"LjlMepEmr2k",ctxKind:"function",ctxName:"_jsxQ",captures:!0,parent:"s_Sw8hkFhUxn4",loc:[15376,15466]},s_eBQ0vFsFKsk:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[36105,36168]},s_fX0bDjeJa0E:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[22731,24050]},s_i1Cv0pYJNR0:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[36286,36801]},s_p9MSze0ojs4:{origin:"../../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[47490,48187]}},mapping:{s_02wMImzEAbk:"q-b7c95e87.js",s_0QSPsfhw7Ho:"q-5e8558d3.js",s_4U9uxSybBnQ:"q-9f474a8a.js",s_8gdLBszqbaM:"q-3d89afa0.js",s_CkBGHGyUCiI:"q-9f080419.js",s_Nk9PlpjQm9Y:"q-f747c8e9.js",s_Sw8hkFhUxn4:"q-ac4c79eb.js",s_TxCFOy819ag:"q-b7c95e87.js",s_VmIT7bkYcgI:"q-c02b1052.js",s_WmYC5H00wtI:"q-a919be25.js",s_bZbTOXga0Fo:"q-81cfe7c9.js",s_e0ssiDXoeAM:"q-7ddcdf8e.js",s_lNcz2iETQwo:"q-8876eeff.js",s_RPDJAz33WLA:"q-b7c95e87.js",s_A5bZC7WO00A:"q-61df48c4.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-44d32810.js",s_BUbtvTyvVRE:"q-a919be25.js",s_LjlMepEmr2k:"q-ac4c79eb.js",s_eBQ0vFsFKsk:"q-61da840d.js",s_fX0bDjeJa0E:"q-b7c95e87.js",s_i1Cv0pYJNR0:"q-3d89afa0.js",s_p9MSze0ojs4:"q-f747c8e9.js"},bundles:{"q-0cc9e32f.js":{size:380,imports:["q-59be064b.js","q-5d57f98c.js"],dynamicImports:["q-5e8558d3.js"],origins:["src/routes/layout.tsx"]},"q-0e42d292.js":{size:408,imports:["q-59be064b.js"],dynamicImports:["q-8876eeff.js"],origins:["src/routes/index.tsx"]},"q-20d5c4ae.js":{size:10879,imports:["q-59be064b.js"],dynamicImports:["q-9f474a8a.js","q-ac4c79eb.js"],origins:["../../packages/ui/lib/index.qwik.mjs"]},"q-2fd47f86.js":{size:511,imports:["q-59be064b.js","q-5d57f98c.js"],dynamicImports:["q-9f080419.js"],origins:["src/routes/[...page]/index.tsx"]},"q-3d89afa0.js":{size:1144,imports:["q-59be064b.js","q-5d57f98c.js"],dynamicImports:["q-61da840d.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-44d32810.js":{size:889,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-59be064b.js":{size:46157,origins:["../../node_modules/.pnpm/@builder.io+qwik@1.2.10_undici@5.23.0/node_modules/@builder.io/qwik/core.min.mjs"]},"q-5d57f98c.js":{size:7698,imports:["q-59be064b.js"],dynamicImports:["q-663033b0.js","q-7ddcdf8e.js","q-b7c95e87.js"],origins:["../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/index.qwik.mjs","@qwik-city-sw-register"]},"q-5e8558d3.js":{size:168,imports:["q-59be064b.js"],origins:["src/entry_layout.js","src/s_0qspsfhw7ho.js"],symbols:["s_0QSPsfhw7Ho"]},"q-61da840d.js":{size:128,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-61df48c4.js":{size:746,imports:["q-59be064b.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-7ddcdf8e.js":{size:467,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-81cfe7c9.js":{size:541,imports:["q-59be064b.js","q-5d57f98c.js"],dynamicImports:["q-c02b1052.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_bzbtoxga0fo.js"],symbols:["s_bZbTOXga0Fo"]},"q-88681c39.js":{size:125,imports:["q-59be064b.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-8876eeff.js":{size:8388,imports:["q-20d5c4ae.js","q-59be064b.js"],origins:["src/entry_routes.js","src/s_lncz2ietqwo.js","src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"],symbols:["s_lNcz2iETQwo"]},"q-8ea06850.js":{size:2539,origins:["../../node_modules/.pnpm/@builder.io+qwik-city@1.2.10/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-9b408a7f.js":{size:202,imports:["q-59be064b.js"],dynamicImports:["q-81cfe7c9.js"],origins:["src/global.css","src/root.tsx"]},"q-9f080419.js":{size:310,imports:["q-2fd47f86.js","q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_____page_.js","src/s_ckbghgyucii.js"],symbols:["s_CkBGHGyUCiI"]},"q-9f474a8a.js":{size:386,imports:["q-20d5c4ae.js","q-59be064b.js"],origins:["src/entry_Logo.js","src/s_4u9uxsybbnq.js"],symbols:["s_4U9uxSybBnQ"]},"q-a919be25.js":{size:787,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-ac4c79eb.js":{size:552,imports:["q-59be064b.js"],origins:["src/entry_Counter.js","src/s_ljlmepemr2k.js","src/s_sw8hkfhuxn4.js"],symbols:["s_LjlMepEmr2k","s_Sw8hkFhUxn4"]},"q-b7c95e87.js":{size:5732,imports:["q-59be064b.js","q-5d57f98c.js"],dynamicImports:["q-0cc9e32f.js","q-0e42d292.js","q-2fd47f86.js","q-88681c39.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-c02b1052.js":{size:671,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_RouterHead.js","src/s_vmit7bkycgi.js"],symbols:["s_VmIT7bkYcgI"]},"q-f747c8e9.js":{size:1037,imports:["q-59be064b.js","q-5d57f98c.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-ae2649b0.css",dangerouslySetInnerHTML:`@layer reset,base,tokens,recipes,utilities;@layer base{:root{--made-with-panda: "🐼" }*,*:before,*:after,::backdrop{--blur: ;--brightness: ;--contrast: ;--grayscale: ;--hue-rotate: ;--invert: ;--saturate: ;--sepia: ;--drop-shadow: ;--backdrop-blur: ;--backdrop-brightness: ;--backdrop-contrast: ;--backdrop-grayscale: ;--backdrop-hue-rotate: ;--backdrop-invert: ;--backdrop-opacity: ;--backdrop-saturate: ;--backdrop-sepia: ;--scroll-snap-strictness: proximity;--border-spacing-x: 0;--border-spacing-y: 0;--translate-x: 0;--translate-y: 0;--rotate: 0;--skew-x: 0;--skew-y: 0;--scale-x: 1;--scale-y: 1 }}@layer reset{*{margin:0;padding:0;font:inherit}*,*:before,*:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--global-color-border, currentColor)}html{line-height:1.5;--font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-moz-tab-size:4;tab-size:4;font-family:var(--global-font-body, var(--font-fallback))}hr{height:0;color:inherit;border-top-width:1px}body{height:100%;line-height:inherit}img{border-style:none}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}ol,ul{list-style:none}code,kbd,pre,samp{font-size:1em}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}button,select{text-transform:none}table{text-indent:0;border-color:inherit;border-collapse:collapse}input::placeholder,textarea::placeholder{opacity:1;color:var(--global-color-placeholder, #9ca3af)}textarea{resize:vertical}summary{display:list-item}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}dialog{padding:0}a{color:inherit;text-decoration:inherit}abbr:where([title]){text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-size:1em;--font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New";font-family:var(--global-font-mono, var(--font-fallback))}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}:-moz-ui-invalid{box-shadow:none}:-moz-focusring{outline:auto}}@layer tokens{:where(:root,:host){--colors-primary: #7ec4c0;--breakpoints-sm: 640px;--breakpoints-md: 768px;--breakpoints-lg: 1024px;--breakpoints-xl: 1280px;--breakpoints-2xl: 1536px;--sizes-breakpoint-sm: 640px;--sizes-breakpoint-md: 768px;--sizes-breakpoint-lg: 1024px;--sizes-breakpoint-xl: 1280px;--sizes-breakpoint-2xl: 1536px }@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,to{transform:translateY(-25%);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;animation-timing-function:cubic-bezier(0,0,.2,1)}}}@layer utilities{.bg_primary{background:var(--colors-primary)}.h_200{height:200px}.p_10{padding:10px}.h_dvh{height:100dvh}.m_100{margin:100px}.fs_30{font-size:30px}@media screen and (min-width: 1024px){.lg\\:h_600{height:600px}}}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.10",vite:"",rollup:"3.28.1",env:"node",os:"darwin",node:"16.18.0"}},Ue=()=>{const e=ce(),n=le();return _(N,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:de(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),y("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>j("meta",{...t},null,0,t.key)),e.links.map(t=>j("link",{...t},null,0,t.key)),e.styles.map(t=>j("style",{...t.props,dangerouslySetInnerHTML:ue(t,"style")},null,0,t.key))]},1,"p6_0")},Me=W(J(Ue,"s_VmIT7bkYcgI"));const Be=()=>_(be,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),_(Me,null,3,"Cp_0"),_(me,null,3,"Cp_1")],1,null),y("body",null,{lang:"en"},_(pe,null,3,"Cp_2"),1,null)]},1,"Cp_3"),Ke=W(J(Be,"s_bZbTOXga0Fo"));function Je(e){return Re(_(Ke,null,3,"R0_0"),{manifest:$e,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Je as default};
