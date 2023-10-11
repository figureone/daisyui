import{s as pe,r as he,f as h,a as b,J as ge,g,d as o,c as w,h as x,B as le,j as i,x as m,i as y,u as ve,v as _e,w as be,z as ce,o as we,K as me,E as xe,l as $e,m as ye}from"../chunks/scheduler.96acbf66.js";import{S as Ie,i as ke,b as U,d as z,m as K,a as T,t as H,e as B}from"../chunks/index.5e31158f.js";import{g as Le}from"../chunks/globals.7f7f1b26.js";import{e as de}from"../chunks/each.e59479a4.js";import{p as Ee}from"../chunks/stores.36599006.js";import{N as Se,a as Ve,o as Ce}from"../chunks/Scripts.b01fc0f4.js";import{l as De,c as se}from"../chunks/i18n.61b99a06.js";import{F as Me}from"../chunks/Footer.6df823d1.js";import{S as Ne,A as Ae}from"../chunks/Ads.3ac3899b.js";const{document:F}=Le;function fe(d,s,l){const c=d.slice();return c[6]=s[l],c}function je(d){let s,l,c="Tags",u,p=de(d[1]),r=[];for(let a=0;a<p.length;a+=1)r[a]=ue(fe(d,p,a));return{c(){s=h("ul"),l=h("li"),l.textContent=c,u=b();for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){s=g(a,"UL",{class:!0});var n=x(s);l=g(n,"LI",{class:!0,"data-svelte-h":!0}),le(l)!=="svelte-slrl5a"&&(l.textContent=c),u=w(n);for(let t=0;t<r.length;t+=1)r[t].l(n);n.forEach(o),this.h()},h(){i(l,"class","menu-title"),i(s,"class","menu menu-horizontal lg:menu-vertical lg:w-56")},m(a,n){y(a,s,n),m(s,l),m(s,u);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(s,null)},p(a,n){if(n&3){p=de(a[1]);let t;for(t=0;t<p.length;t+=1){const v=fe(a,p,t);r[t]?r[t].p(v,n):(r[t]=ue(v),r[t].c(),r[t].m(s,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=p.length}},d(a){a&&o(s),xe(r,a)}}}function ue(d){let s,l,c=d[6]+"",u,p,r;return{c(){s=h("li"),l=h("a"),u=$e(c),r=b(),this.h()},l(a){s=g(a,"LI",{});var n=x(s);l=g(n,"A",{"data-sveltekit-reload":!0,href:!0,class:!0});var t=x(l);u=ye(t,c),t.forEach(o),r=w(n),n.forEach(o),this.h()},h(){i(l,"data-sveltekit-reload",""),i(l,"href",`/blog/tag/${d[6].replace(/ /g,"-").toLowerCase()}`),i(l,"class",p=d[6].replace(/ /g,"-").toLowerCase()===d[0].url.pathname.split("/").at(-2)&&"active")},m(a,n){y(a,s,n),m(s,l),m(l,u),m(s,r)},p(a,n){n&1&&p!==(p=a[6].replace(/ /g,"-").toLowerCase()===a[0].url.pathname.split("/").at(-2)&&"active")&&i(l,"class",p)},d(a){a&&o(s)}}}function Te(d){let s,l,c,u,p,r,a,n,t,v,M,I,E,re='<div class="flex items-center gap-3"><a href="/blog" class="inline-block hover:opacity-80"><h1 class="font-title text-base-content text-xl font-extrabold">daisyUI blog</h1></a> <div class="tooltip tooltip-right" data-tip="RSS"><a target="_blank" href="https://daisyui.com/blog/rss.xml" class="hover:text-warning"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></a></div></div> <p class="text-base-content/60 text-xs italic">Updates, ideas and resources</p>',W,X,k,Z,L,ie='<div class="card-body flex flex-col gap-4"><h2 class="text-4xl font-black">Don&#39;t miss new posts!</h2> <div><p class="font-bold">Subscribe to daisyUI newsletter to get updates on new posts.</p> <p class="text-base-content/60 text-xs">You will only receive an email when a new post is published. No spam. No ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><div class="form-control w-full max-w-sm"><label class="label" for="mce-EMAIL"><span class="label-text">Email Address</span></label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required=""/> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""/></div></form></div></div>',ee,N,S,te,V,P,A,q,C,J,D,j;r=new Se({props:{hideSidebarButton:"true"}});let $=d[1].length>0&&je(d);const ae=d[4].default,_=he(ae,d,d[3],null);return S=new Ne({props:{wrapperClasses:"flex-col sm:flex-row"}}),V=new Ae({props:{slot:"carbon2"}}),C=new Me({}),D=new Ve({}),{c(){s=h("link"),l=h("link"),c=h("link"),u=h("link"),p=b(),U(r.$$.fragment),a=b(),n=h("div"),t=h("div"),v=h("div"),M=h("div"),I=h("div"),E=h("div"),E.innerHTML=re,W=b(),$&&$.c(),X=b(),k=h("div"),_&&_.c(),Z=b(),L=h("div"),L.innerHTML=ie,ee=b(),N=h("div"),U(S.$$.fragment),te=b(),U(V.$$.fragment),P=b(),A=h("div"),q=b(),U(C.$$.fragment),J=b(),U(D.$$.fragment),this.h()},l(e){const f=ge("svelte-1b5j6ow",F.head);s=g(f,"LINK",{rel:!0,type:!0,title:!0,href:!0}),l=g(f,"LINK",{media:!0,rel:!0,href:!0}),c=g(f,"LINK",{media:!0,rel:!0,href:!0,crossorigin:!0}),u=g(f,"LINK",{media:!0,href:!0,rel:!0}),f.forEach(o),p=w(e),z(r.$$.fragment,e),a=w(e),n=g(e,"DIV",{class:!0});var R=x(n);t=g(R,"DIV",{class:!0});var Y=x(t);v=g(Y,"DIV",{class:!0});var G=x(v);M=g(G,"DIV",{class:!0});var ne=x(M);I=g(ne,"DIV",{class:!0});var O=x(I);E=g(O,"DIV",{class:!0,"data-svelte-h":!0}),le(E)!=="svelte-10dkcr7"&&(E.innerHTML=re),W=w(O),$&&$.l(O),O.forEach(o),ne.forEach(o),X=w(G),k=g(G,"DIV",{class:!0});var Q=x(k);_&&_.l(Q),Z=w(Q),L=g(Q,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),le(L)!=="svelte-1lo5333"&&(L.innerHTML=ie),Q.forEach(o),G.forEach(o),ee=w(Y),N=g(Y,"DIV",{class:!0});var oe=x(N);z(S.$$.fragment,oe),oe.forEach(o),Y.forEach(o),te=w(R),z(V.$$.fragment,R),R.forEach(o),P=w(e),A=g(e,"DIV",{class:!0}),x(A).forEach(o),q=w(e),z(C.$$.fragment,e),J=w(e),z(D.$$.fragment,e),this.h()},h(){i(s,"rel","alternate"),i(s,"type","application/rss+xml"),i(s,"title","daisyUI Blog"),i(s,"href","https://daisyui.com/blog/rss.xml"),i(l,"media","screen and (min-width: 520px)"),i(l,"rel","preconnect"),i(l,"href","https://fonts.googleapis.com"),i(c,"media","screen and (min-width: 520px)"),i(c,"rel","preconnect"),i(c,"href","https://fonts.gstatic.com"),i(c,"crossorigin",""),i(u,"media","screen and (min-width: 520px)"),i(u,"href","https://fonts.googleapis.com/css2?family=Figtree:wght@300;900&family=Noto+Sans+JP:wght@300;900&family=Noto+Sans:wght@300;900&display=swap"),i(u,"rel","stylesheet"),i(E,"class","mb-8 px-6"),i(I,"class","sticky top-32 mx-auto sm:max-w-none"),i(M,"class","max-w-2xl max-lg:mx-auto max-lg:w-full"),i(L,"id","mc_embed_shell"),i(L,"class","card bg-base-200 mt-10"),i(k,"class","mx-auto w-full max-w-2xl"),i(v,"class","flex min-h-[50vh] w-full flex-col justify-center gap-6 p-4 lg:flex-row"),i(N,"class","flex justify-center xl:hidden"),i(t,"class","w-full max-w-none flex-grow pt-10"),i(n,"class","flex flex-col-reverse justify-between gap-6 xl:flex-row"),i(A,"class","h-20")},m(e,f){m(F.head,s),m(F.head,l),m(F.head,c),m(F.head,u),y(e,p,f),K(r,e,f),y(e,a,f),y(e,n,f),m(n,t),m(t,v),m(v,M),m(M,I),m(I,E),m(I,W),$&&$.m(I,null),m(v,X),m(v,k),_&&_.m(k,null),m(k,Z),m(k,L),m(t,ee),m(t,N),K(S,N,null),m(n,te),K(V,n,null),y(e,P,f),y(e,A,f),y(e,q,f),K(C,e,f),y(e,J,f),K(D,e,f),j=!0},p(e,[f]){e[1].length>0&&$.p(e,f),_&&_.p&&(!j||f&8)&&ve(_,ae,e,e[3],j?be(ae,e[3],f,null):_e(e[3]),null)},i(e){j||(T(r.$$.fragment,e),T(_,e),T(S.$$.fragment,e),T(V.$$.fragment,e),T(C.$$.fragment,e),T(D.$$.fragment,e),j=!0)},o(e){H(r.$$.fragment,e),H(_,e),H(S.$$.fragment,e),H(V.$$.fragment,e),H(C.$$.fragment,e),H(D.$$.fragment,e),j=!1},d(e){e&&(o(p),o(a),o(n),o(P),o(A),o(q),o(J)),o(s),o(l),o(c),o(u),B(r,e),$&&$.d(),_&&_.d(e),B(S),B(V),B(C,e),B(D,e)}}}function He(d,s,l){let c,u;ce(d,se,t=>l(5,c=t)),ce(d,Ee,t=>l(0,u=t));let{$$slots:p={},$$scope:r}=s;Ce(t=>{if(document.startViewTransition)return new Promise(v=>{document.startViewTransition(async()=>{v(),await t.complete})})}),we(()=>{let t=new URL(document.location).searchParams.get("lang");De.includes(t)&&(me(se,c=t,c),localStorage.setItem("lang",c)),localStorage.getItem("lang")&&me(se,c=localStorage.getItem("lang"),c)});let{data:a}=s,{tags:n}=a;return d.$$set=t=>{"data"in t&&l(2,a=t.data),"$$scope"in t&&l(3,r=t.$$scope)},[u,n,a,r,p]}class Ye extends Ie{constructor(s){super(),ke(this,s,He,Te,pe,{data:2})}}export{Ye as component};
