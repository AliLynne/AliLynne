(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{235:function(e,a,t){"use strict";t.r(a);var n=t(277),l=t(0),c=t.n(l),r=t(240),s=t(248),i=t(249),o=t(247),m=t(245),u=t(278),d=t.n(u);a.default=function(){var e=n.data;return c.a.createElement(o.a,null,c.a.createElement(m.a,{title:"Blog"}),c.a.createElement("h2",null,"Blog Posts"),c.a.createElement("ol",{className:d.a.posts},e.allMarkdownRemark.edges.map(function(e){return c.a.createElement("li",{key:e.node.id,className:d.a.post},c.a.createElement(r.a,{to:"/blog/"+e.node.fields.slug},c.a.createElement(s.a,{icon:i.b,className:d.a.icon,size:"3x"}),c.a.createElement("div",null,c.a.createElement("h2",null,e.node.frontmatter.title),c.a.createElement("p",null,e.node.frontmatter.date))))})))}},239:function(e,a,t){var n;e.exports=(n=t(243))&&n.default||n},240:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(70),r=t.n(c);t.d(a,"a",function(){return r.a});t(239),t(9).default.enqueue,l.a.createContext({})},241:function(e){e.exports={data:{site:{siteMetadata:{author:"Ali Lynne Thompson"}}}}},242:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},243:function(e,a,t){"use strict";t.r(a);t(18);var n=t(0),l=t.n(n),c=t(97);a.default=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null}},244:function(e,a,t){var n=t(0);function l(e){return n.createElement("svg",e,n.createElement("g",null,[n.createElement("path",{d:"M379.769,153.431c-29.777,55.586-17.604,99.504-6.645,139.039C378.717,312.648,384,331.708,384,351.889   c0,15.897-2.956,30.873-8.785,44.51c-5.727,13.396-14.104,25.212-24.898,35.12C327.169,452.768,294.555,464,256,464   s-71.169-11.232-94.316-32.481c-10.795-9.908-19.172-21.725-24.898-35.12c-5.829-13.637-8.785-28.612-8.785-44.51   c0-31.65,6.92-55.999,21.775-76.626c13.061-18.134,32.646-34.094,63.505-51.749l6.506-3.725   c20.197-11.57,27.001-15.467,43.976-23.588c31.845-15.234,66.513-28.387,103.041-39.094   C371.088,155.851,375.412,154.625,379.769,153.431 M416,128c-18.863,4.163-36.75,8.786-53.697,13.753   c-40.457,11.858-75.509,25.693-105.445,40.015c-19.271,9.219-26.236,13.393-51.522,27.859C147.001,243,112,278.926,112,351.889   S167.635,480,256,480s144-55.148,144-128.111S338.999,224,416,128L416,128z",key:0}),n.createElement("path",{d:"M133.516,123.147c21.432,6.955,47.724,16.977,69.799,29.846c6.385,3.723,12.092,7.493,17.092,11.291   c-5.504,2.905-10.895,5.855-16.138,8.833c-7.212,4.096-14.359,8.362-21.243,12.679c-10.484,6.574-20.435,13.308-29.789,20.156   C152.637,180.034,147.555,151.15,133.516,123.147 M96,96c41.475,47.079,44.624,103.891,39.382,144.741   c12.772-11.274,31.177-25.734,56.144-41.389c6.442-4.041,13.312-8.158,20.645-12.322c11.578-6.575,23.538-12.822,35.834-18.765   c-9.113-10.898-22.07-20.606-36.631-29.095C162.631,110.756,96,96,96,96L96,96z",key:1}),n.createElement("path",{d:"M344.629,80.697c5.309,7.227,12.393,17.661,17.66,27.726c-29.863,8.433-65.994,21.145-94.967,33.476   c-5.963-6.235-12.982-12.294-21.006-18.135c17.437-15.757,38.773-27.668,63.652-35.506   C324.518,83.675,337.016,81.612,344.629,80.697 M352,64c0,0-78.623,2.321-130.681,62.469c16.629,9.903,29.735,20.503,38.959,31.533   l2.724,3.257c37.152-16.794,88.131-34.085,120.998-42.009C377.617,95.827,352,64,352,64L352,64z",key:2}),n.createElement("path",{d:"M181.229,53.532c9.241,6.122,22.68,16.481,35.999,31.924c-4.851,4.201-9.487,8.623-13.888,13.247   c-14.024-7.088-24.951-12.192-36.826-16.602C170.174,73.63,175.095,63.788,181.229,53.532 M176,32   c-15.256,22.406-25.684,45.299-30.336,59.997c21.111,6.355,35.475,13.215,61.389,26.574c9.505-11.4,20.415-21.626,32.605-30.543   C210.342,47.655,176,32,176,32L176,32z",key:3})]))}l.defaultProps={height:"100px",width:"100px",fill:"#ba2d65",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve"},e.exports=l,l.default=l},245:function(e,a,t){"use strict";var n=t(246),l=t(0),c=t.n(l),r=t(256);a.a=function(e){var a=e.title,t=n.data;return c.a.createElement(r.Helmet,{title:a+" | "+t.site.siteMetadata.title})}},246:function(e){e.exports={data:{site:{siteMetadata:{title:"AliLynne"}}}}},247:function(e,a,t){"use strict";var n=t(0),l=t.n(n),c=t(241),r=t(251),s=t.n(r),i=function(){var e=c.data;return l.a.createElement("footer",{className:s.a.footer},l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author," © ",(new Date).getFullYear()))},o=t(242),m=t(240),u=(t(250),t(244)),d=t.n(u),v=(t(248),t(249),t(252)),E=t.n(v),f=function(){var e=o.data;return l.a.createElement("header",{className:E.a.header},l.a.createElement(m.a,{className:E.a.title,to:"/"},l.a.createElement("h1",{className:E.a.titleHeader},l.a.createElement(d.a,null),e.site.siteMetadata.title)),l.a.createElement("ul",{className:E.a.navList},l.a.createElement("li",null,l.a.createElement(m.a,{className:E.a.navItem,activeClassName:E.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(m.a,{className:E.a.navItem,activeClassName:E.a.activeNavItem,to:"/about",partiallyActive:!0},"About")),l.a.createElement("li",null,l.a.createElement(m.a,{className:E.a.navItem,to:"/contact",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Contact")),l.a.createElement("li",null,l.a.createElement(m.a,{className:E.a.navItem,to:"/blog",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Blog")),l.a.createElement("li",null,l.a.createElement(m.a,{className:E.a.navItem,to:"/projects",activeClassName:E.a.activeNavItem,partiallyActive:!0},"Projects"))))},p=(t(253),t(254),t(255)),N=t.n(p);a.a=function(e){var a=e.children;return l.a.createElement("div",{className:N.a.container},l.a.createElement("div",{className:N.a.content},l.a.createElement(f,null),a),l.a.createElement(i,null))}},277:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"d6d044bc-2219-5a01-9e4c-04c822f27d81",frontmatter:{title:"I Made Another Website",date:"2019-08-29"},fields:{slug:"2019_08_29_made_another"}}},{node:{id:"d7e04862-800c-5b05-97e8-3010b16df874",frontmatter:{title:"TIL #1",date:"2019-08-26"},fields:{slug:"TIL_2019_08_25"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-186f62d1844f41e77dfd.js.map