/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-standard.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'notifications disabled':'\uD83D\uDD15','notificationsdisabled':'\uD83D\uDD15','notification disabled':'\uD83D\uDD15','notificationdisabled':'\uD83D\uDD15','telephone disabled':'\uE300','telephonedisabled':'\uE300','writing disabled':'\uE071','writingdisabled':'\uE071','pencil disabled':'\uE071','remove calendar':'\uF071','calendar remove':'\uF071','delete calendar':'\uF073','calendar delete':'\uF073','pencildisabled':'\uE071','phone disabled':'\uE300','medium battery':'\uEA11','battery medium':'\uEA11','download cloud':'\uEB00','cloud download':'\uEB00','removecalendar':'\uF071','calendarremove':'\uF071','check calendar':'\uF072','calendar check':'\uF072','deletecalendar':'\uF073','calendardelete':'\uF073','navigate right':'\u25BB','phonedisabled':'\uE300','call disabled':'\uE300','ellipsis chat':'\uE399','female avatar':'\uD83D\uDC67','shopping cart':'\uE500','mediumbattery':'\uEA11','batterymedium':'\uEA11','empty battery':'\uEA13','battery empty':'\uEA13','downloadcloud':'\uEB00','clouddownload':'\uEB00','notifications':'\uD83D\uDD14','bell disabled':'\uD83D\uDD15','checkcalendar':'\uF072','calendarcheck':'\uF072','navigateright':'\u25BB','navigate down':'\uF501','navigate left':'\u25C5','calldisabled':'\uE300','ellipsischat':'\uE399','femaleavatar':'\uD83D\uDC67','shoppingcart':'\uE500','fast forward':'\u23E9','skip forward':'\u23ED','mobile phone':'\uD83D\uDCF1','full battery':'\uD83D\uDD0B','battery full':'\uD83D\uDD0B','high battery':'\uEA10','battery high':'\uEA10','emptybattery':'\uEA13','batteryempty':'\uEA13','upload cloud':'\uEB40','cloud upload':'\uEB40','rotate right':'\u21BB','notification':'\uD83D\uDD14','belldisabled':'\uD83D\uDD15','add calendar':'\uF070','calendar add':'\uF070','navigatedown':'\uF501','navigateleft':'\u25C5','direct right':'\u25B9','thumbs down':'\uD83D\uDC4E','male avatar':'\uD83D\uDC64','female user':'\uD83D\uDC67','credit card':'\uD83D\uDCB3','dollar sign':'\uD83D\uDCB2','high volume':'\uD83D\uDD0A','volume high':'\uD83D\uDD0A','photographs':'\uD83C\uDF04','videocamera':'\uD83D\uDCF9','fastforward':'\u23E9','skipforward':'\u23ED','rotate left':'\u21BA','mobilephone':'\uD83D\uDCF1','fullbattery':'\uD83D\uDD0B','batteryfull':'\uD83D\uDD0B','highbattery':'\uEA10','batteryhigh':'\uEA10','low battery':'\uEA12','battery low':'\uEA12','uploadcloud':'\uEB40','cloudupload':'\uEB40','rotateright':'\u21BB','information':'\u2139','addcalendar':'\uF070','calendaradd':'\uF070','remove date':'\uF071','delete date':'\uF073','navigate up':'\uF500','directright':'\u25B9','direct down':'\u25BE','direct left':'\u25C3','screenshot':'\u2316','visibility':'\uD83D\uDC40','attachment':'\uD83D\uDCCE','disapprove':'\uD83D\uDC4E','thumbsdown':'\uD83D\uDC4E','half heart':'\uE1A0','eyedropper':'\uE200','maleavatar':'\uD83D\uDC64','femaleuser':'\uD83D\uDC67','creditcard':'\uD83D\uDCB3','dollarsign':'\uD83D\uDCB2','navigation':'\uE670','directions':'\uE672','hard drive':'\uE7B0','microphone':'\uD83C\uDFA4','low volume':'\uD83D\uDD09','volume low':'\uD83D\uDD09','highvolume':'\uD83D\uDD0A','volumehigh':'\uD83D\uDD0A','photograph':'\uD83C\uDF04','rotateleft':'\u21BA','thumbnails':'\uE9A3','cell phone':'\uD83D\uDCF1','smartphone':'\uD83D\uDCF1','lowbattery':'\uEA12','batterylow':'\uEA12','connection':'\uEB85','pull quote':'\u201C','removedate':'\uF071','check date':'\uF072','deletedate':'\uF073','down right':'\u2B0A','navigateup':'\uF500','descending':'\u25BE','directdown':'\u25BE','directleft':'\u25C3','crosshair':'\u2316','paperclip':'\uD83D\uDCCE','backspace':'\u232B','thumbs up':'\uD83D\uDC4D','halfheart':'\uE1A0','half star':'\uE1A1','telephone':'\uD83D\uDCDE','male user':'\uD83D\uDC64','bar chart':'\uD83D\uDCCA','pie chart':'\uE570','buildings':'\uD83C\uDFE2','warehouse':'\uE602','harddrive':'\uE7B0','musicnote':'\u266B','lowvolume':'\uD83D\uDD09','volumelow':'\uD83D\uDD09','skip back':'\u23EE','open book':'\uD83D\uDCD6','newspaper':'\uD83D\uDCF0','cellphone':'\uD83D\uDCF1','lightbulb':'\uD83D\uDCA1','pullquote':'\u201C','checkmark':'\u2713','dashboard':'\uF000','stopwatch':'\u23F1','checkdate':'\uF072','briefcase':'\uD83D\uDCBC','downright':'\u2B0A','down left':'\u2B0B','ascending':'\u25B4','direct up':'\u25B4','zoom out':'\uE003','unlocked':'\uD83D\uDD13','insecure':'\uD83D\uDD13','trashcan':'\uE0D0','keywords':'\uE100','bookmark':'\uD83D\uDD16','thumbsup':'\uD83D\uDC4D','favorite':'\u22C6','halfstar':'\uE1A1','end call':'\uE300','facetime':'\uE320','envelope':'\u2709','ellipsis':'\u2026','maleuser':'\uD83D\uDC64','barchart':'\uD83D\uDCCA','piechart':'\uE570','navigate':'\uE670','signpost':'\uE672','location':'\uE6D0','database':'\uE7A0','pictures':'\uD83C\uDF04','skipback':'\u23EE','openbook':'\uD83D\uDCD6','notebook':'\uD83D\uDCD3','computer':'\uD83D\uDCBB','download':'\uEB01','transfer':'\u21C6','document':'\uD83D\uDCC4','typeface':'\uED01','redirect':'\u21AA','contract':'\uEE01','question':'\u2753','sign out':'\uEE02','subtract':'\u002D','settings':'\u2699','calendar':'\uD83D\uDCC5','add date':'\uF070','up right':'\u2B08','downleft':'\u2B0B','previous':'\u25C5','directup':'\u25B4','dropdown':'\u25BE','zoom in':'\uE002','zoomout':'\uE003','visible':'\uD83D\uDC40','compose':'\uD83D\uDCDD','private':'\uD83D\uDD12','keyword':'\uE100','approve':'\uD83D\uDC4D','dislike':'\uD83D\uDC4E','windows':'\uE202','endcall':'\uE300','comment':'\uD83D\uDCAC','avatars':'\uD83D\uDC65','package':'\uD83D\uDCE6','compass':'\uE671','dictate':'\uD83C\uDFA4','speaker':'\uD83D\uDD08','airplay':'\uE800','picture':'\uD83C\uDF04','shuffle':'\uD83D\uDD00','columns':'\uE9A2','desktop':'\uD83D\uDCBB','display':'\uD83D\uDCBB','monitor':'\uD83D\uDCBB','battery':'\uD83D\uDD0B','refresh':'\u21BB','syncing':'\uEB82','loading':'\uEB83','printer':'\u2399','warning':'\u26A0','caution':'\u26D4','log out':'\uEE02','signout':'\uEE02','checked':'\u2713','adddate':'\uF070','droplet':'\uD83D\uDCA7','upright':'\u2B08','forward':'\u27A1','up left':'\u2B09','descend':'\u25BE','retweet':'\uF600','cursor':'\uE001','search':'\uD83D\uDD0E','zoomin':'\uE002','attach':'\uD83D\uDCCE','pencil':'\u270E','eraser':'\u2710','locked':'\uD83D\uDD12','secure':'\uD83D\uDD12','unlock':'\uD83D\uDD13','public':'\uD83D\uDD13','target':'\u25CE','tagged':'\uE100','sample':'\uE200','layers':'\uE202','stroke':'\uE241','avatar':'\uD83D\uDC64','locate':'\uE670','volume':'\uD83D\uDD08','camera':'\uD83D\uDCF7','images':'\uD83C\uDF04','photos':'\uD83C\uDF04','videos':'\uD83D\uDCF9','record':'\u25CF','rewind':'\u23EA','repeat':'\uD83D\uDD01','replay':'\u21BA','filter':'\uE9B0','funnel':'\uE9B0','laptop':'\uEA00','tablet':'\uEA01','iphone':'\uD83D\uDCF1','mobile':'\uD83D\uDCF1','upload':'\uEB41','folder':'\uD83D\uDCC1','layout':'\uEDA0','action':'\uEE00','expand':'\u2922','logout':'\uEE02','hyphen':'\u002D','remove':'\u002D','delete':'\u2421','upleft':'\u2B09','ascend':'\u25B4','write':'\u270E','erase':'\u2710','trash':'\uE0D0','heart':'\u2665','zelda':'\uE1A0','phone':'\uD83D\uDCDE','reply':'\u21A9','email':'\u2709','inbox':'\uD83D\uDCE5','users':'\uD83D\uDC65','price':'\uD83D\uDCB2','house':'\u2302','globe':'\uD83C\uDF0E','earth':'\uD83C\uDF0E','world':'\uD83C\uDF0E','music':'\u266B','audio':'\u266B','sound':'\uD83D\uDD08','image':'\uD83C\uDF04','photo':'\uD83C\uDF04','video':'\uD83D\uDCF9','pause':'\uE8A0','eject':'\u23CF','merge':'\uEB81','nodes':'\uEB85','quote':'\u201C','print':'\u2399','share':'\uEE00','visit':'\uEE00','alert':'\u26A0','minus':'\u002D','check':'\u2713','close':'\u2421','clock':'\u23F2','timer':'\u23F1','plane':'\u2708','cloud':'\u2601','flask':'\uF4C0','right':'\u27A1','zoom':'\uE002','view':'\uD83D\uDC40','look':'\uD83D\uDC40','link':'\uD83D\uDD17','move':'\uE070','edit':'\u270E','lock':'\uD83D\uDD12','tags':'\uE100','flag':'\u2691','like':'\uD83D\uDC4D','love':'\u2665','star':'\u22C6','crop':'\uE201','fill':'\uE240','call':'\uD83D\uDCDE','send':'\uE350','mail':'\u2709','chat':'\uD83D\uDCAC','talk':'\uD83D\uDCAC','user':'\uD83D\uDC64','cart':'\uE500','cost':'\uD83D\uDCB2','home':'\u2302','city':'\uD83C\uDFE2','play':'\u25B6','stop':'\u25A0','skip':'\u23ED','undo':'\u21BA','book':'\uD83D\uDCD5','news':'\uD83D\uDCF0','grid':'\uE9A0','rows':'\uE9A1','ipad':'\uEA01','cell':'\uD83D\uDCF1','idea':'\uD83D\uDCA1','fork':'\uEB80','redo':'\u21BB','sync':'\uEB82','wifi':'\uEB84','file':'\uD83D\uDCC4','page':'\uD83D\uDCC4','text':'\uED00','font':'\uED01','list':'\uED50','help':'\u2753','info':'\u2139','exit':'\uEE02','plus':'\u002B','gear':'\u2699','bell':'\uD83D\uDD14','time':'\u23F2','date':'\uD83D\uDCC5','work':'\uD83D\uDCBC','drop':'\uD83D\uDCA7','down':'\u2B07','left':'\u2B05','back':'\u2B05','next':'\u25BB','eye':'\uD83D\uDC40','key':'\uD83D\uDD11','ban':'\uD83D\uDEAB','tag':'\uE100','rss':'\uE310','box':'\uD83D\uDCE6','map':'\uE673','pin':'\uD83D\uDCCD','hdd':'\uE7B0','mic':'\uD83C\uDFA4','fax':'\uD83D\uDCE0','out':'\uEE00','add':'\u002B','cog':'\u2699','up':'\u2B06'};

  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-canvas-canvastext-svg-shiv-mq-teststyles-testprop-testallprops-hasevent-domprefixes
 */
;window.Modernizr=function(a,b,c){function A(a){i.cssText=a}function B(a,b){return A(prefixes.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),F(e,b,c))}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={svg:"http://www.w3.org/2000/svg"},p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return v("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},x=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},p.canvastext=function(){return!!e.canvas&&!!C(b.createElement("canvas").getContext("2d").fillText,"function")},p.cssanimations=function(){return G("animationName")},p.svg=function(){return!!b.createElementNS&&!!b.createElementNS(o.svg,"svg").createSVGRect};for(var H in p)z(p,H)&&(u=H.toLowerCase(),e[u]=p[H](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),h=j=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.mq=w,e.hasEvent=x,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=v,e}(this,this.document);

/*
* Symbolset
* www.symbolset.com
* Copyright © 2013 Oak Studios LLC
*
* Upload this file to your web server
* and place this before the closing </body> tag.
* <script src="webfonts/ss-social.js"></script>
*/

if (/(MSIE [7-9]\.|Opera.*Version\/(10\.[5-9]|(11|12)\.)|Chrome\/([1-9]|10)\.|Version\/[2-4][\.0-9]+ Safari\/|Version\/(4\.0\.[4-9]|4\.[1-9]|5\.0)[\.0-9]+? Mobile\/.*Safari\/|Android ([1-2]|4\.[2-9].*Version\/4)\.|BlackBerry.*WebKit)/.test(navigator.userAgent) && !/(IEMobile)/.test(navigator.userAgent)) {

  if (/Android 4\.[2-9].*Version\/4/.test(navigator.userAgent)) {
    var ss_android = document.createElement('style');
    ss_android.innerHTML = '.ss-icon,[class^="ss-"],[class*=" ss-"],[class^="ss-"]:before,[class*=" ss-"]:before,[class^="ss-"].right:after[class*=" ss-"].right:after{text-rendering:auto!important}';
    document.body.appendChild(ss_android);
  }

  var ss_set={'five hundred pixels':'\uF642','fivehundredpixels':'\uF642','five hundred px':'\uF642','github octocat':'\uF671','stack overflow':'\uF672','stackoverflow':'\uF672','fivehundredpx':'\uF642','githuboctocat':'\uF671','kickstarter':'\uF681','app dot net':'\uF614','google plus':'\uF613','googleplus':'\uF613','foursquare':'\uF690','soundcloud':'\uF6B3','letterboxd':'\uF632','blackberry':'\uF6F4','delicious':'\uF655','posterous':'\uF623','pinterest':'\uF650','microsoft':'\uF6F1','thumbs up':'\uD83D\uDC4D','telephone':'\uD83D\uDCDE','appdotnet':'\uF614','wordpress':'\uF621','instagram':'\uF641','facebook':'\uF610','thumbsup':'\uD83D\uDC4D','readmill':'\uF652','pinboard':'\uF654','dribbble':'\uF660','envelope':'\u2709','google +':'\uF613','linkedin':'\uF612','twitter':'\uF611','approve':'\uD83D\uDC4D','behance':'\uF661','youtube':'\uF630','blogger':'\uF622','dropbox':'\uF653','octocat':'\uF671','android':'\uF6F3','google+':'\uF613','last fm':'\uF6B2','app net':'\uF614','windows':'\uF6F2','spotify':'\uF6B1','flickr':'\uF640','lastfm':'\uF6B2','zerply':'\uF615','appnet':'\uF614','paypal':'\uF680','tumblr':'\uF620','github':'\uF670','svpply':'\uF651','reddit':'\uF616','share':'\uF601','phone':'\uD83D\uDCDE','apple':'\uF8FF','vimeo':'\uF631','email':'\u2709','steam':'\uF617','quora':'\uF624','500px':'\uF642','skype':'\uF6A0','like':'\uD83D\uDC4D','mail':'\u2709','call':'\uD83D\uDCDE','link':'\uD83D\uDD17','rdio':'\uF6B0','yelp':'\uF691','etsy':'\uF682','vine':'\uF633','rss':'\uE310'};


  if (typeof ss_icons !== 'object' || typeof ss_icons !== 'object') {
    var ss_icons = ss_set;
    var ss_keywords = [];
    for (var i in ss_set) { ss_keywords.push(i); };
  } else {
    for (var i in ss_set) { ss_icons[i] = ss_set[i]; ss_keywords.push(i); }
  };

  if (typeof ss_legacy !== 'function') {

    /* domready.js */
    !function(a,b){typeof module!="undefined"?module.exports=b():typeof define=="function"&&typeof define.amd=="object"?define(b):this[a]=b()}("ss_ready",function(a){function m(a){l=1;while(a=b.shift())a()}var b=[],c,d=!1,e=document,f=e.documentElement,g=f.doScroll,h="DOMContentLoaded",i="addEventListener",j="onreadystatechange",k="readyState",l=/^loade|c/.test(e[k]);return e[i]&&e[i](h,c=function(){e.removeEventListener(h,c,d),m()},d),g&&e.attachEvent(j,c=function(){/^c/.test(e[k])&&(e.detachEvent(j,c),m())}),a=g?function(c){self!=top?l?c():b.push(c):function(){try{f.doScroll("left")}catch(b){return setTimeout(function(){a(c)},50)}c()}()}:function(a){l?a():b.push(a)}})

    var ss_legacy = function(node) {

      if (!node instanceof Object) return false;

      if (node.length) {
        for (var i=0; i<node.length; i++) {
          ss_legacy(node[i]);
        }
        return;
      };

      if (node.value) {
        node.value = ss_liga(node.value);
      } else if (node.nodeValue) {
        node.nodeValue = ss_liga(node.nodeValue);
      } else if (node.innerHTML) {
        node.innerHTML = ss_liga(node.innerHTML);
      }

    };

    var ss_getElementsByClassName = function(node, classname) {
      if (document.querySelectorAll) {
        return document.querySelectorAll('.'+classname);
      }
      var a = [];
      var re = new RegExp('(^| )'+classname+'( |$)');
      var els = node.getElementsByTagName("*");
      for(var i=0,j=els.length; i<j; i++)
          if(re.test(els[i].className))a.push(els[i]);
      return a;
    };

    var ss_liga = function(that) {
      var re = new RegExp(ss_keywords.join('|').replace(/[-[\]{}()*+?.,\\^$#\s]/g, "\\$&"),"gi");
      return that.replace(re, function(v) {
        return ss_icons[v.toLowerCase()];
      });
    };

    ss_ready(function() {
      if (document.getElementsByClassName) {
        ss_legacy(document.getElementsByClassName('ss-icon'));
      } else {
        ss_legacy(ss_getElementsByClassName(document.body, 'ss-icon'));
      }
    });

  }

};