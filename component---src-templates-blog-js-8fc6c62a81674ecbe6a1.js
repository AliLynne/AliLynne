(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{253:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(258),c=a(257),i=a(284),s=a(254),m=a(240),o=a.n(m);var u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).handleSubmit=function(e){var t=a.state.site+"/"+a.state.success,n=a.state.site+"/"+a.state.cancel;console.log(t),e.preventDefault(),a.stripe.redirectToCheckout({items:[{plan:a.state.selected,quantity:1}],successUrl:t,cancelUrl:n}).then(function(e){e.error&&a.setState({error:e.error.essage})})},a.handleChange=function(e){a.setState({selected:e.target.value})},a.state={key:a.props.stripe.public_key,plans:a.props.stripe.plans,selected:a.props.stripe.plans[1].id,error:"",buttonText:a.props.stripe.button_text,success:a.props.stripe.success_page,cancel:a.props.stripe.cancel_page,site:a.props.site},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){this.stripe=window.Stripe(this.state.key)},l.render=function(){var e=this,t=this.state.plans;return r.a.createElement("form",{className:o.a.form,onSubmit:this.handleSubmit},r.a.createElement("h3",{className:o.a.form__title},"Support My Work"),r.a.createElement("div",{className:o.a.form__inputs},t&&t.map(function(t){return r.a.createElement("label",{className:o.a.form__label,key:t.id},r.a.createElement("input",{className:o.a.form__input,type:"radio",name:"plan-type",value:t.id,checked:e.state.selected===t.id,onChange:e.handleChange}),t.label)})),r.a.createElement("button",{className:o.a.form__button,type:"submit"},this.state.buttonText),r.a.createElement("p",null,this.state.error),r.a.createElement("p",null,"or"),r.a.createElement("a",{href:"https://ko-fi.com/Z8Z313JNG",target:"_blank"},r.a.createElement("img",{height:"36",style:{border:0,height:36},src:"https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2",border:"0",alt:"Buy Me a Coffee at ko-fi.com"})))},n}(r.a.Component),p=function(){return r.a.createElement(s.b,{query:"2496197285",render:function(e){return r.a.createElement(u,{stripe:e.site.siteMetadata.stripe,site:e.site.siteMetadata.siteUrl})},data:i})},d=a(241),E=a.n(d);a.d(t,"query",function(){return f});var f="2537384470";t.default=function(e){return r.a.createElement(l.a,null,r.a.createElement(c.a,{title:e.data.markdownRemark.frontmatter.title,article:!0}),r.a.createElement("h1",null,e.data.markdownRemark.frontmatter.title),r.a.createElement("p",null,e.data.markdownRemark.frontmatter.date),r.a.createElement("div",{className:E.a.outer,dangerouslySetInnerHTML:{__html:e.data.markdownRemark.html}}),r.a.createElement(p,null))}},254:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(70),c=a.n(l);a.d(t,"a",function(){return c.a});a(255),a(9).default.enqueue;var i=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||l,staticQueryData:e})})}},255:function(e,t,a){var n;e.exports=(n=a(261))&&n.default||n},256:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(264),c=a(266),i=a(265),s=a(234),m=a.n(s);t.a=function(){return r.a.createElement("ul",{className:m.a.list},r.a.createElement("li",{className:m.a.list__item},r.a.createElement("a",{className:m.a.list__icon,href:"https://www.twitter.com/alilynnet"},r.a.createElement(l.a,{icon:c.d}))),r.a.createElement("li",{className:m.a.list__item},r.a.createElement("a",{className:m.a.list__icon,href:"https://dev.to/alilynne"},r.a.createElement(l.a,{icon:c.a}))),r.a.createElement("li",{className:m.a.list__item},r.a.createElement("a",{className:m.a.list__icon,href:"https://www.github.com/alilynne"},r.a.createElement(l.a,{icon:c.b}))),r.a.createElement("li",{className:m.a.list__item},r.a.createElement("a",{className:m.a.list__icon,href:"https://www.linkedin.com/in/alilynne/"},r.a.createElement(l.a,{icon:c.c}))),r.a.createElement("li",{className:m.a.list__item},r.a.createElement("a",{className:m.a.list__icon,href:"mailto:ali@alilynne.com"},r.a.createElement(l.a,{icon:i.c}))))}},257:function(e,t,a){"use strict";var n=a(263),r=a(0),l=a.n(r),c=a(267),i=a(254),s=function(e){var t=e.title,a=e.description,r=e.image,s=e.pathname,o=e.article;return l.a.createElement(i.b,{query:m,render:function(e){var n=e.site.siteMetadata,i=n.defaultTitle,m=n.titleTemplate,u=n.defaultDescription,p=n.siteUrl,d=n.defaultImage,E=n.twitterUsername,f={title:t||i,description:a||u,image:""+p+(r||d),url:""+p+(s||"/")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.Helmet,{title:f.title,titleTemplate:m},l.a.createElement("meta",{name:"description",content:f.description}),l.a.createElement("meta",{name:"image",content:f.image}),f.url&&l.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:l.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&l.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&l.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&l.a.createElement("meta",{property:"og:image",content:f.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),E&&l.a.createElement("meta",{name:"twitter:creator",content:E}),f.title&&l.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&l.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&l.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:n})};t.a=s;var m="1376445457";s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},258:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(259),c=a(256),i=a(235),s=a.n(i),m=function(){var e=l.data;return r.a.createElement("footer",{className:s.a.footer},r.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()),r.a.createElement(c.a,null))},o=a(260),u=a(254),p=a(262),d=a.n(p),E=a(236),f=a.n(E),v=function(){var e=o.data;return r.a.createElement("header",{className:f.a.header},r.a.createElement(u.a,{className:f.a.title,to:"/"},r.a.createElement("h1",{className:f.a.titleHeader},r.a.createElement(d.a,null),e.site.siteMetadata.title)),r.a.createElement("ul",{className:f.a.navList},r.a.createElement("li",null,r.a.createElement(u.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.a,{className:f.a.navItem,activeClassName:f.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),r.a.createElement("li",null,r.a.createElement(u.a,{className:f.a.navItem,to:"/contact",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Contact")),r.a.createElement("li",null,r.a.createElement(u.a,{className:f.a.navItem,to:"/blog",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Blog")),r.a.createElement("li",null,r.a.createElement(u.a,{className:f.a.navItem,to:"/projects",activeClassName:f.a.activeNavItem,partiallyActive:!0},"Projects"))))},h=(a(237),a(238),a(239)),y=a.n(h);t.a=function(e){var t=e.children;return r.a.createElement("div",{className:y.a.container},r.a.createElement("div",{className:y.a.content},r.a.createElement(v,null),t),r.a.createElement(m,null))}},259:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},260:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},261:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),l=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}},262:function(e,t,a){var n=a(0);function r(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}r.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=r,r.default=r},263:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/src/images/rosePink.png",twitterUsername:"@alilynnet"}}}}},284:function(e){e.exports={data:{site:{id:"Site",siteMetadata:{siteUrl:"https://www.alilynne.com",stripe:{public_key:"pk_live_5nKb8kqHdyaoi9bASiiKbdOO00eHIdX5YK",plans:[{id:"plan_Fm950fWNdiNekC",label:"$5 per month"},{id:"plan_Fm96pTXYQTIoad",label:"$10 per month"}],button_text:"Keep Me Going",success_page:"success",cancel_page:"cancel"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-js-8fc6c62a81674ecbe6a1.js.map