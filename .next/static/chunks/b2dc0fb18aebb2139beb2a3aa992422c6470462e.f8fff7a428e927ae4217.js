(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery;return n||a&&(void 0!==i&&i)}t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(i.AmpStateContext))}},"73Hj":function(e,t,n){e.exports={buttonContainer:"Button_buttonContainer__3sZyM",buttonArea:"Button_buttonArea__1jcW3",text:"Button_text__3qTV9","screen-xxxs":"Button_screen-xxxs__IdSSJ","screen-xxs":"Button_screen-xxs__3DVmH","screen-xs":"Button_screen-xs__Hcc7f","screen-s":"Button_screen-s__TdNOE","screen-m":"Button_screen-m__3VRaQ","screen-l":"Button_screen-l__1EQrE","screen-xl":"Button_screen-xl__3SarM","screen-xxl":"Button_screen-xxl__3UNI_","screen-xxxl":"Button_screen-xxxl__8Nnui","screen-xxxxl":"Button_screen-xxxxl__3VXgC"}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),i=r(n("Xuae")),o=n("lwAK"),c=n("FYa8"),s=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?i=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var c=0,s=d.length;c<s;c++){var l=d[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var u=a.props[l],f=r[l]||new Set;f.has(u)?i=!1:(f.add(u),r[l]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=i.default();function h(e){var t=e.children;return a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:s.isInAmpMode(e)},t)}))}))}h.rewind=p.rewind,t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||i()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},"Tu/p":function(e,t,n){e.exports={heroContainer:"Hero_heroContainer__3SaZB",mediaContainer:"Hero_mediaContainer__2qMig",textContainer:"Hero_textContainer__3JZZU",bar:"Hero_bar__3GfU5",preText:"Hero_preText__hTrs_","hero-headline":"Hero_hero-headline__C_zft"}},VuTL:function(e,t,n){e.exports={cardContainer:"Card_cardContainer__3Etoi",mediaContainer:"Card_mediaContainer__1GZGo",imageContainer:"Card_imageContainer__3erCM",textContainer:"Card_textContainer__3BB6T",cardTextTop:"Card_cardTextTop__dXw13",cardTextBottom:"Card_cardTextBottom__3q_Mg",cardTextBottomSection:"Card_cardTextBottomSection__3SrOW",highlight:"Card_highlight__io8St"}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),i=n("W8MJ"),o=n("7W2i"),c=n("a1gu"),s=n("Nsbk"),l=n("RIqP");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(t,"__esModule",{value:!0});var d=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){o(l,c);var s=u(l);function l(e){var i;return r(this,l),i=s.call(this,e),f&&(t.add(a(i)),n(a(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},ZGd0:function(e,t,n){e.exports={cardGridContainer:"CardGrid_cardGridContainer__3aHV1",cardsContainer:"CardGrid_cardsContainer__CM9Jj",cardChildContainer:"CardGrid_cardChildContainer__2kQoe"}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),i=n("7W2i"),o=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var d,f=u(n("q1tI")),p=n("QmWs"),h=n("g/15"),_=l(n("nOHt")),m=n("elyg");function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var x=new Map,C=window.IntersectionObserver,g={};function y(){return d||(C?d=new C((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var T=function(e){i(n,e);var t=s(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,i){if(r&&a===t&&i===n)return r;var o=e(a,i);return t=a,n=i,r=o,o}}((function(e,t){return{href:(0,m.addBasePath)(v(e)),as:t?(0,m.addBasePath)(v(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,c=i.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var s=window.location.pathname;o=(0,p.resolve)(s,o),c=c?(0,p.resolve)(s,c):o,e.preventDefault();var l=a.props.scroll;null==l&&(l=c.indexOf("#")<0),_.default[a.props.replace?"replace":"push"](o,c,{shallow:a.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,p.resolve)(e,n);return[a,r?(0,p.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&C&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=y();return n?(n.observe(e),x.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}x.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();_.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=a||r),f.default.cloneElement(i,o)}}]),n}(f.Component);t.default=T},"e+cM":function(e,t,n){"use strict";n.d(t,"e",(function(){return C})),n.d(t,"b",(function(){return N})),n.d(t,"c",(function(){return E})),n.d(t,"f",(function(){return I})),n.d(t,"d",(function(){return L})),n.d(t,"a",(function(){return Q}));var r=n("q1tI"),a=n.n(r),i=n("YFqc"),o=n.n(i),c=n("TSYQ"),s=n.n(c),l=n("vnQH"),u=n.n(l),d=n("yzvi"),f=n.n(d),p=a.a.createElement,h=function(){return p("header",{className:f.a.headerContainer},p(o.a,{href:"/"},p("a",null,p("div",{className:f.a.logo},p("img",{src:"/images/tk_logo.png",alt:"Logo"}),p("div",{className:s()(f.a.logoText,u.a.bold)},"Tong's","\n","Kitchen",p("div",{className:f.a.highlight}))))),p("nav",null,p("div",{className:f.a.linkContainer},p(o.a,{href:"/recipes"},p("a",{className:f.a.headerLink},"Recipes")),p("div",{className:f.a.highlight})),p("div",{className:f.a.linkContainer},p(o.a,{href:"/about"},p("a",{className:f.a.headerLink},"About")),p("div",{className:f.a.highlight}))))},_=n("Tu/p"),m=n.n(_),v=a.a.createElement,x=function(e){var t=e.heroPreText,n=e.heroHeadline,r=e.heroPostText;e.image;return v("div",{className:m.a.heroContainer},v("div",{className:m.a.mediaContainer},v("img",{src:"https://picsum.photos/id/1045/1000/500"})),v("div",{className:m.a.textContainer},v("div",{className:m.a.bar}),v("p",{className:s()(m.a.preText,u.a.textSmall)},t),v("h1",{className:s()(m.a.heroHeadline,u.a.headline)},n),v("p",{className:m.a.postText},r)))};x.defaultProps={heroPreText:"",heroHeadline:"",heroPostText:"",image:""};var C=x,g=n("VuTL"),y=n.n(g),T=a.a.createElement,b=function(e){var t=e.cardTitle,n=e.cardBottomInfo,r=e.cardImage,a=e.cardLink,i=T("div",{className:y.a.cardContainer},T("div",{className:y.a.mediaContainer},T("div",{className:y.a.imageContainer},T("img",{src:r}))),T("div",{className:y.a.textContainer},T("div",{className:y.a.cardTextTop},T("h4",{className:y.a.title},t)),T("div",{className:y.a.cardTextBottom},n.map((function(e,t){return T("div",{className:y.a.cardTextBottomSection,key:"".concat(e.title,"-").concat(t)},T("p",{className:u.a.primaryText},e.title),T("p",{className:u.a.secondaryText},e.subtitle))})))),T("div",{className:y.a.highlight}));return a?T(o.a,{href:a},T("a",null,i)):i};b.defaultProps={cardTitle:"",cardBottomInfo:[],cardImage:"",cardLink:""};var N=b,k=n("ZGd0"),w=n.n(k),S=a.a.createElement,B=function(e){var t=e.cardGridTitle,n=e.children;return S("div",{className:w.a.cardGridContainer},t&&S("h2",null,t),S("div",{className:s()(w.a.cardsContainer,u.a.flexboxGridContainer)},a.a.Children.map(n,(function(e){return S("div",{className:s()(w.a.cardChildContainer,u.a.flexboxGridChild)},e)}))))};B.defaultProps={cardGridTitle:"",children:null};var E=B,M=(a.a.createElement,n("8Kt/")),H=n.n(M),P=a.a.createElement,I=function(e){var t=e.children;return P("div",null,P(H.a,null,P("link",{rel:"icon",href:"/favicon.ico"}),P("meta",{name:"description",content:"Learn how to build a personal website using Next.js"}),P("meta",{name:"og:title",content:"title"}),P("meta",{name:"twitter:card",content:"summary_large_image"}),P("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"})),P(h,null),P("main",null,t))},A=n("lQNC"),D=n.n(A),j=a.a.createElement,G=function(e){var t=e.cardTitle,n=e.cardBottomInfo,r=e.cardImage,a=e.cardLink,i=j("div",{className:D.a.cardContainer},j("div",{className:D.a.mediaContainer},j("div",{className:D.a.imageContainer},j("img",{src:r}))),j("div",{className:D.a.textContainer},j("div",{className:D.a.cardTextTop},j("h4",{className:D.a.title},t),j("p",{className:s()(D.a.description,u.a.secondaryText)},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ")),j("div",{className:D.a.cardTextBottom},n.map((function(e,t){return j("div",{className:D.a.cardTextBottomSection,key:"section-".concat(t)},j("p",{className:u.a.primaryText},e.title),j("p",{className:u.a.secondaryText},e.subtitle))})))),j("div",{className:D.a.highlight}));return a?j(o.a,{href:a},j("a",null,i)):i};G.defaultProps={cardTitle:"",cardBottomInfo:[],cardImage:"",cardLink:""};var L=G,O=n("73Hj"),q=n.n(O),R=a.a.createElement,U=function(e){var t=e.text,n=e.link,r=e.fullWidthBreakpoint;return R("div",{className:s()(q.a.buttonContainer,q.a["screen-".concat(r)])},R(o.a,{href:n},R("a",null,R("div",{className:q.a.buttonArea},R("div",{className:q.a.text},t)))))};U.defaultProps={fullWidthBreakpoint:"xxxs"};var Q=U},lQNC:function(e,t,n){e.exports={cardContainer:"DescriptionCard_cardContainer__2qHLP",mediaContainer:"DescriptionCard_mediaContainer__SMczL",imageContainer:"DescriptionCard_imageContainer__2VkG1",textContainer:"DescriptionCard_textContainer__3LxQ-",cardTextTop:"DescriptionCard_cardTextTop__9K3zx",title:"DescriptionCard_title__3L3UH",description:"DescriptionCard_description__CPM2h",cardTextBottom:"DescriptionCard_cardTextBottom__Tvwko",cardTextBottomSection:"DescriptionCard_cardTextBottomSection__20GYJ",highlight:"DescriptionCard_highlight__2gQhf"}},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},vnQH:function(e,t,n){e.exports={containedSection:"utils_containedSection__mJhfv",sectionSpacing:"utils_sectionSpacing__1CABB",bold:"utils_bold__uV-eo",headline:"utils_headline__3WVGk",headline2:"utils_headline2__3aKDe",textSmall:"utils_textSmall__2mS_x",primaryText:"utils_primaryText__MWOab",secondaryText:"utils_secondaryText__1D6oY",flexboxGridContainer:"utils_flexboxGridContainer__ChA8t",flexboxGridChild:"utils_flexboxGridChild__3EsSr"}},yzvi:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__MEyVv",logo:"Header_logo__1QUnI",logoText:"Header_logoText__2gUeh",highlight:"Header_highlight__h2VNg",linkContainer:"Header_linkContainer__22qxQ",headerLink:"Header_headerLink__VSS8i"}}}]);