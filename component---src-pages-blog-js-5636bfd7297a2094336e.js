(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{243:function(e,t,a){"use strict";a.r(t);var n=a(276),l=a(0),r=a.n(l),c=a(251),i=a(265),m=a(266),o=a(259),s=a(257),u=a(244),d=a.n(u);t.default=function(){var e=n.data;return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Blog"}),r.a.createElement("h2",null,"Blog Posts"),r.a.createElement("ol",{className:d.a.posts},e.allMarkdownRemark.edges.map(function(e){return r.a.createElement("li",{key:e.node.id,className:d.a.post},r.a.createElement(c.a,{to:"/blog/"+e.node.fields.slug},r.a.createElement(i.a,{icon:m.b,className:d.a.icon,size:"3x"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.date))))})))}},251:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var n=a(0),l=a.n(n),r=a(70),c=a.n(r);a.d(t,"a",function(){return c.a});a(252),a(9).default.enqueue;var i=l.a.createContext({});function m(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,c=a?a.data:t[n]&&t[n].data;return l.a.createElement(l.a.Fragment,null,c&&r(c),!c&&l.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return l.a.createElement(i.Consumer,null,function(e){return l.a.createElement(m,{data:t,query:a,render:n||r,staticQueryData:e})})}},252:function(e,t,a){var n;e.exports=(n=a(255))&&n.default||n},253:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},254:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},255:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),l=a.n(n),r=a(97);t.default=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},256:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}l.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=l,l.default=l},257:function(e,t,a){"use strict";var n=a(258),l=a(0),r=a.n(l),c=a(260),i=a(251),m=function(e){var t=e.title,a=e.description,l=e.image,m=e.pathname,s=e.article;return r.a.createElement(i.b,{query:o,render:function(e){var n=e.site.siteMetadata,i=n.defaultTitle,o=n.titleTemplate,u=n.defaultDescription,d=n.siteUrl,p=n.defaultImage,E=n.twitterUsername,v={title:t||i,description:a||u,image:""+d+(l||p),url:""+d+(m||"/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,{title:v.title,titleTemplate:o},r.a.createElement("meta",{name:"description",content:v.description}),r.a.createElement("meta",{name:"image",content:v.image}),v.url&&r.a.createElement("meta",{property:"og:url",content:v.url}),!s?null:r.a.createElement("meta",{property:"og:type",content:"article"}),v.title&&r.a.createElement("meta",{property:"og:title",content:v.title}),v.description&&r.a.createElement("meta",{property:"og:description",content:v.description}),v.image&&r.a.createElement("meta",{property:"og:image",content:v.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),E&&r.a.createElement("meta",{name:"twitter:creator",content:E}),v.title&&r.a.createElement("meta",{name:"twitter:title",content:v.title}),v.description&&r.a.createElement("meta",{name:"twitter:description",content:v.description}),v.image&&r.a.createElement("meta",{name:"twitter:image",content:v.image})))},data:n})};t.a=m;var o="1376445457";m.defaultProps={title:null,description:null,image:null,pathname:null,article:!1}},258:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"AliLynne",titleTemplate:"%s | AliLynne",defaultDescription:"Where Ali talks about programming and life. She focuses on JavaScript, React, & Gatsby as well as crochet and sewing.",siteUrl:"https://www.alilynne.com",defaultImage:"/src/images/rosePink.png",twitterUsername:"@alilynnet"}}}}},259:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(253),c=a(233),i=a.n(c),m=function(){var e=r.data;return l.a.createElement("footer",{className:i.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()))},o=a(254),s=a(251),u=a(256),d=a.n(u),p=a(234),E=a.n(p),v=function(){var e=o.data;return l.a.createElement("header",{className:E.a.header},l.a.createElement(s.a,{className:E.a.title,to:"/"},l.a.createElement("h1",{className:E.a.titleHeader},l.a.createElement(d.a,null),e.site.siteMetadata.title)),l.a.createElement("ul",{className:E.a.navList},l.a.createElement("li",null,l.a.createElement(s.a,{className:E.a.navItem,activeClassName:E.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.a,{className:E.a.navItem,activeClassName:E.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),l.a.createElement("li",null,l.a.createElement(s.a,{className:E.a.navItem,to:"/contact",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Contact")),l.a.createElement("li",null,l.a.createElement(s.a,{className:E.a.navItem,to:"/blog",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Blog")),l.a.createElement("li",null,l.a.createElement(s.a,{className:E.a.navItem,to:"/projects",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Projects"))))},f=(a(235),a(236),a(237)),g=a.n(f);t.a=function(e){var t=e.children;return l.a.createElement("div",{className:g.a.container},l.a.createElement("div",{className:g.a.content},l.a.createElement(v,null),t),l.a.createElement(m,null))}},276:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"d7e04862-800c-5b05-97e8-3010b16df874",frontmatter:{title:"TIL #1 - Gatsby Link & activeClassName",date:"2019-08-26"},fields:{slug:"TIL_2019_08_25"}}},{node:{id:"d6d044bc-2219-5a01-9e4c-04c822f27d81",frontmatter:{title:"I Made Another Website",date:"2019-08-29"},fields:{slug:"2019_08_29_made_another"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-5636bfd7297a2094336e.js.map