this.b5mshoppingassist||(this.b5mshoppingassist={}),function(a,b){a.define("bussCommon",["jquery-highcharts","server","common"],function(c,d,e){var f={trace_fun:function(b){var c=d.b5t_trace_url,e="?uid="+a.params.uuid+"&ct="+Math.ceil((new Date).getTime()/1e3)+"&mid="+(a.cookie.token||"")+"&cl="+(a.params.source||"");b.dl=a.LOCATION.href;for(var f in b)switch(f){case"pcs":case"dl":e+="&"+f+"="+encodeURIComponent(b[f]);break;default:e+="&"+f+"="+b[f]}(new Image).src=c+e},getRedirectUrl:function(b,c){{var d=b.url,e=b.type||b.source;a.domain}b.url.match(/^https?:\/\/show.*3\.mediav\.com/)&&(e="roi");var f=this.getTrafficTag(c);return"tob5m"==e?(d=d.replace(/(\?.*|$)/,function(a,b){return b?b+"&"+f:"?"+f}),d="http://stats.b5m.com/redirect.html?t=4&target="+encodeURIComponent(d)):"lv2"==e?d.match(/amazon\.cn/)&&(d=a._server.cpsCacheServer+"?url="+encodeURIComponent(d)+"&md5="+a.common.md5(a.LOCATION.href)+"&uuid="+a.params.uuid+"&source="+a.params.source):"roi"==e?d="http://clicks2.b5m.com/redirect/_c.do?sid=1100&ssub=LVR&dest="+encodeURIComponent(d)+"&uuid="+a.params.uuid+"&source="+a.params.source:a.site.isTour||a.site.isTuan?d=b.forwardUrl+encodeURIComponent(d):b.url.match(/amazon\.cn/)?a._cln_||(d=a._server.cpsCacheServer+"?url="+encodeURIComponent(d)+"&md5="+a.common.md5(a.LOCATION.href)+"&uuid="+a.params.uuid+"&source="+a.params.source):d=b.forwardUrl+encodeURIComponent(d),d},getTaoRedirectUrl:function(b,c){var d,e,f,g=a.util.getDomain();switch(c){case"main":e="mainb5t",f="mainb5t";break;case"mini":e="minib5t",f="minib5t";break;case"ttk":e="searchengineb5t",f="searchengineb5t";break;case"browser":e="browserb5t",f="browserb5t";break;default:e="mainb5t",f="mainb5t"}return d=b+(b.indexOf("?")>-1?"&":"?")+"hmsr="+e+"&hmmd=b5t&utm_source="+f+"&utm_medium=b5t&ref="+g,a._server.redirect_url+"?t=2&target="+encodeURIComponent(d)},getTrafficTag:function(b){var c="",d="";switch(b){case"main":c="mainb5t",d="mainb5m";break;case"mini":c="minib5t",d="minib5m";break;case"lj":c="link",d="ljyy";break;case"dh":c="button",d="xjlj";break;case"tl":c="tlb5t",d="tlb5m";break;case"hotsale":c="tlb5t",d="hotsale";break;case"hanpinhui":c="tlb5t",d="tlkorea";break;case"more":c="tongleib5t",d="more";break;case"hotmore":c="tlb5t",d="hotsalemore";break;case"dg":c="tlb5t",d="jyydg";break;case"hpmsdg":c="koreab5t",d="recommand";break;case"minidg":c="minib5t",d="jyydg";break;case"xjlj":c="xjlj",d="jyydg";break;case"searchall":c="searchb5t",d="search";break;case"search":c="mainb5t",d="search";break;case"searchhot":c="mainb5t",d="searchhot";break;case"logo":c="mainb5t",d="logo";break;case"logo-ad":c="mainb5t",d="image";break;case"his":c="qsb5t",d="tmtb";break;case"b5tupgrade":c="mainb5t",d="b5tupgrade";break;case"hismore":c="qsb5t",d="more";break;case"login":c="mainb5t",d="login";break;case"notify-login":c="mainb5t",d="notify";break;case"cart":c="mainb5t",d="cartsettle";break;case"cartsettlesearch":c="mainb5t",d="cartsettlesearch";break;case"cartf":c="mainb5t",d="cartsettlev2";break;case"hpms":c="koreab5t",d="hpms";break;case"cnlv":c="mainb5t",d="cartnotloginvip";break;case"cev":c="mainb5t",d="cartemptyvip";break;case"cartgood":c="mainb5t",d="cartgoods";break;case"freevip":c="mainb5tpop",d="freevip";break;case"b5tfreevip":c="mainb5t",d="b5tfreevip";break;case"bzTask":c="mainb5t",d="nucjrw";break;case"bzRecharge":c="mainb5t",d="numybz";break;case"vipfree":c="tbsb5t",d="vipfree";break;case"tbordervip":c="mainb5t",d="tbordervip";break;case"tbcartsettle":c="mainb5t",d="tbcartsettle";break;case"tbordersettle":c="mainb5t",d="tbordersettle";break;case"tmordersettle":c="mainb5t",d="tmordersettle";break;case"jdordersettle":c="mainb5t",d="jdordersettle";break;case"vipchongzhi":c="mainb5t",d="vipchongzhi";break;case"bzchongzhixufei":c="mainb5t",d="bzchongzhixufei";break;case"tbordersettlea":c="mainb5t",d="tbordersettlea";break;case"yqaz":c="dtlb5t",d="yqaz";break;case"cartlinkfreevip":c="mainb5t",d="cartlinkfreevip";break;case"cartlinkvip":c="mainb5t",d="cartlinkvip";break;case"b5tbannera":c="b5tbannera",d="vipfree";break;case"b5tbannerb":c="b5tbannerb",d="vipfree";break;case"b5tbannerc":c="b5tbannerc",d="vipfree";break;case"b5torder":c="popup",d="b5torder";break;case"shopscore":c="tlb5t",d="shopscore";break;case"home":c="mainb5t",d="home";break;case"fuli":c="mainb5t",d="fuli";break;case"chongzhi":c="mainb5t",d="chongzhi";break;case"tbbbsfavo":c="mainb5t",d="tbbbsfavo";break;case"bbspost":c="mainb5t",d="bbspost";break;case"yqvip":c="mainb5t",d="yqvip";break;case"moresupertask":c="mainb5t",d="moresupertask";break;case"mailqq":c="bottombanner",d="mailqq";break;case"vqq":c="bottombanner",d="vqq";break;case"youku":c="bottombanner",d="youku";break;case"mail163":c="bottombanner",d="mail163";break;case"lolqq":c="topbanner",d="lolqq";break;case"cfqq":c="topbanner",d="cfqq";break;case"my4399":c="topbanner",d="my4399";break;case"imagebaidu":c="topbanner",d="imagebaidu";break;case"wenkubaidu":c="topbanner",d="wenkubaidu";break;case"sportqq":c="leftbanner",d="sportqq";break;case"tvsohu":c="leftbanner",d="tvsohu";break;case"intlce":c="bothbanner",d="intlce";break;case"newssina":c="leftbanner",d="newssina";break;default:c="mainb5t",d="mainb5m"}return"mainb5t"==c&&a.trace.shortMain&&(c="minimainb5t"),"hmsr=b5t&channel=b5t&hmmd="+c+"&hmci="+d},get_login_link:function(b,c){{var d=c||(window.location||document.location).href||"",e=d.indexOf("#");"&method=/user/user/login&puid="+a.params.uuid}-1!==e&&(d=d.substring(0,e));var f=a._server._ucenterserver+"/forward.htm?loginReferer="+encodeURIComponent(d);return this.getRedirectUrl({url:f,type:"tob5m"},b)},simulate_click_link:function(a,b){var d=c("#b5mTmpLink");0==d.length&&(d=c('<a id="b5mTmpLink" href="#" style="display:none;" target="'+(b||"_blank")+'"></a>'),d.appendTo("body")),d.attr("href",a),d[0].click(),d.remove()},priceMidFilter:function(a,b){if(!a||!a instanceof Array||!a.length||a.length<2)return a;var c,d,e=0,f=[],b=b||[.5,2],g=[];for(g=a.slice().sort(function(a,b){var c=parseFloat(a.price,10),d=parseFloat(b.price,10);return d>c?-1:c>d?1:0}),d=g[Math.ceil(g.length/2)].price;e<a.length;)c=parseFloat(a[e].price)/d,c>b[0]&&c<b[1]&&f.push(a[e]),e++;return f},isB5tBlack:function(){var b=!1;return"taobao.com"==a.domain&&a.site.pageInfo.shopUrl&&a.site.pageInfo.shopUrl.match(/shop(117524572|124774923).taobao.com/)?!0:b},hisUtil:function(b,c){var d=b||[],e="priceLow",f=[.2,5],g=c||"\u5546\u5bb6\u4ef7\u683c\u8d8b\u52bf";return{addPriceNode:function(b,c){var e;e=b?a.util.jumpDate(b):function(){var a=new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate())}();var f=a.site.pageInfo.prices||"",g=c||f.split("-")[0].replace(/[^0-9.]/g,"");return g&&d.push({priceHigh:""+g,priceLow:""+g,date:{time:e.getTime(),minutes:0,seconds:0,hours:0,month:e.getMonth(),year:e.getYear()-1900,timezoneOffset:-480,day:e.getDay(),date:e.getDate()}}),d},sortByTime:function(){return d.length<=1?d:(d.sort(function(a,b){var c=parseInt(a.date.time,10),d=parseInt(b.date.time,10);return d>c?-1:c>d?1:0}),d)},removeErrorNode:function(){if(d.length<=1)return d;var a,b,c=d.slice(0).sort(function(a,b){var c=parseInt(a.date.time,10),d=parseInt(b.date.time,10);return d>c?-1:c>d?1:0}),g=[],h=c.length,i=parseFloat(c[Math.floor(h/2)][e]);for(a=0;h-1>a;a++)b=parseFloat(d[a][e])/i,b>f[0]&&b<f[1]&&g.push(d[a]);return g.push(d[d.length-1]),d=g},removeDupNode:function(){if(d.length<=1)return d;var a,b,c,f,g,h=[];for(a=0,b=d.length;b>a;a++){if(c=d[a],a===b-1){h.push(f||c),f=null;break}g=d[a+1],c.date.time!==g.date.time?(h.push(f||c),f=null):(f=f||c,f[e]>g[e]&&(f=g))}return d=h},fillAidNode:function(){if(d.length<=1)return d;var a,b,c=[];for(a=0,b=d.length-1;b>a;a++)deltatime=Math.abs(d[a+1].date.time-d[a].date.time),deltaprice=parseFloat(d[a+1][e])-parseFloat(d[a][e]),c.push(d[a]),deltatime>864e5&&0!=deltaprice&&c.push({priceHigh:""+d[a][e],priceLow:""+d[a][e],date:{time:d[a+1].date.time-864e5,minutes:0,seconds:0,hours:0,month:0,year:0,timezoneOffset:-480,day:0,date:0}});return c.push(d[d.length-1]),d=c},timeOffset:function(){var a,b;for(a=0,b=d.length;b>a;a++)d[a].date.time+=43200001;return d},buildObj:function(){if(!(d.length<=1)){var a,b,c,f,h,i=[],j=d.slice(0).sort(function(a,b){var c=parseInt(a[e],10),d=parseInt(b[e],10);return d>c?-1:c>d?1:0}),k=parseFloat(d[d.length-1][e]),l=parseFloat(d[d.length-2][e]),m=parseFloat(j[j.length-1][e]),n=parseFloat(j[0][e]);for(k==l?(h="\u8fd1\u671f\u5e73\u7a33",f=0):k>m?(h="\u5386\u53f2\u6700\u9ad8",f=2):n>k?(h="\u5386\u53f2\u6700\u4f4e",f=-2):k>l?(h="\u8fd1\u671f\u4e0a\u5347",f=1):l>k&&(h="\u8fd1\u671f\u4e0b\u964d",f=-1),a=0,b=d.length;b>a;a++)t=d[a],c=parseFloat(parseFloat(t[e]).toFixed(2)),i.push([t.date.time,c]);return{isShow:!0,price_array:i,lowest:parseFloat(j[0][e]).toFixed(2),hightest:parseFloat(j[j.length-1][e]).toFixed(2),start:i[0][0],latest:i[i.length-1][1],fluctuation:f,fluctuation_text:h,site:g}}}}},getSource:function(b){switch(b){case"jd.com":return"\u4eac\u4e1c\u5546\u57ce";case"jd.hk":return"\u4eac\u4e1c\u5546\u57ce";case"yhd.com":return"\u4e00\u53f7\u5e97";case"dangdang.com":return"\u5f53\u5f53\u7f51";case"taobao.com":return"\u6dd8\u5b9d\u7f51";case"suning.com":return"\u82cf\u5b81\u6613\u8d2d";case"tmall.com":return a.site.pageInfo.url.match(/^(?:http|https):\/\/chaoshi\.detail\.tmall\.com\//)?"\u5929\u732b\u8d85\u5e02":"\u5929\u732b";case"yixun.com":return"\u6613\u8fc5";case"amazon.cn":return"\u4e9a\u9a6c\u900a";case"gome.com.cn":return"\u56fd\u7f8e";case"b5m.com":return"\u5e2e5\u4e70"}},getSourceId:function(b){switch(b){case"jd.com":return 3;case"jd.hk":return 3;case"yhd.com":return 1107;case"dangdang.com":return 1104;case"taobao.com":return 1103;case"suning.com":return 1108;case"tmall.com":return a.site.pageInfo.url.match(/^(?:http|https):\/\/chaoshi\.detail\.tmall\.com\//)?1113:31;case"yixun.com":return 1111;case"amazon.cn":return 40;case"gome.com.cn":return 1106;case"b5m.com":return 32}},ajaxJsonp:function(a,b,d,e){var f=b.nameJson||"jsonpCallback";c.ajax({data:b,url:a,dataType:"jsonp",jsonp:f,success:function(a){d(a)},error:function(a){e&&e(a)}})},getSearchRecommend:function(a,b){c.extend(a,{nameJson:"jsoncallback"}),this.ajaxJsonp(d.server+"/extension.do?method=search",a,b)},getIpInfo:function(e){a.user.ip===b?c.ajax({url:d.interface_url_pB5m.ip,dataType:"jsonp",jsonp:"jsoncallback",success:function(b){1==b.succ&&(a.user.ip=b,e(b))},error:function(){}}):e(a.user.ip)},getOrderPage:function(b){a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)&&this.ajaxJsonp(d.interface_url_order.page,{userId:a.cookie.token,deepth:10},function(a){1==a.ok&&b(a.data)})},getVipByUuid:function(b,c){this.ajaxJsonp(d.ucenterserver+"/user/info/data/initB5tAccount.htm",{uuid:a.params.uuid},b,c)},hasAccountByUuid:function(b,c){this.ajaxJsonp(d.ucenterserver+"/user/info/data/hasGotVip.htm",{uuid:a.params.uuid},b,c)},getBangZuanInfo:function(b){a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)&&this.ajaxJsonp(d.interface_url_ucenter.getBangZuanInfo,{userId:a.cookie.token,encryCode:e.md5("b5t"+a.cookie.token),appType:5},b)},getUserInfoForIndex:function(b){a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)&&this.ajaxJsonp(d.interface_url_www.userInfoForIndex,{userId:a.cookie.token},b)},getTryVipInfo:function(c,e,f){a.user.canTryVip===b&&a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)?this.ajaxJsonp(d.interface_url_order.canTryVip,{userId:a.cookie.token},function(b){b&&b.ok?(a.user.canTryVip="true",c&&c()):(a.user.canTryVip="false",e&&e())},f):"true"==a.user.canTryVip?c&&c():e&&e()},getVipInfo:function(c,e,f){a.user.isVip===b&&a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)?this.ajaxJsonp(d.interface_url_ucenter.getSimpleVIPInfo,{userId:a.cookie.token},function(b){"0"==b.code&&b.ok?(a.user.isVip=!0,a.user.vipInfo=b.data,c&&c()):(a.user.isVip=!1,e&&e())},f):a.user.isVip===!0?c&&c():e&&e()},getVipByCount:function(b,c){a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)&&this.ajaxJsonp(d.interface_url_ucenter.getUserCouponInfo,{userId:a.cookie.token},function(c){if(c.ok){a.user.numFreePost=0;for(var d=0;d<c.data.currentMonth.length;d++)c.data.currentMonth[d].endTime>c.data.currentMonth[d].startTime&&!c.data.currentMonth[d].usedStatus&&a.user.numFreePost++;b()}},c)},getOrderCount:function(b,c){a.cookie.token&&/[0-9a-f]{32}/.test(a.cookie.token)&&this.ajaxJsonp(d.interface_url_order.orderCount,{userId:a.cookie.token},function(c){c.ok&&(a.user.orderCount=c.data,b())},c)},addComment:function(b){this.ajaxJsonp(d.interface_url_traderate.commentAdd,{docId:e.md5(e.cleanPath(a.LOCATION.href).replace("https","http")),buyerId:a.cookie.token,b5mRate:b.b5mRate,goodsRate:b.goodsRate,content:b.content},function(a){a.ok?b.sucAdd&&b.sucAdd():b.failAdd&&b.failAdd(a.message)},function(){})},getComments:function(b){this.ajaxJsonp(d.interface_url_traderate.commentList,{docId:e.md5(e.cleanPath(a.LOCATION.href).replace("https","http")),start:b.start},function(a){a.ok&&b.sucGet(a.data)},function(){})},checkSendSpeed:function(b,c){return b||(a.flags.sendSpeed=0),null!==a.flags.sendSpeed?void c(a.flags.sendSpeed):void this.getShopInfoFromCms(b,function(a){c&&c(a.val.sendSpeed)})},checkLjBlackList:function(b,c){return b||(a.flags.isLjBlack=0),null!==a.flags.isLjBlack?void c(a.flags.isLjBlack):void this.getShopInfoFromCms(b,function(a){c&&c(a.val.isBlank)})},getShopInfoFromCms:function(c,e){$5m.ajax({url:d.goodsServer+"/resource/find/shop.htm",data:{authCode:"172ca9138968b5f3dd28a3d944f51caa",url:c.replace("https","http")},cache:!1,dataType:"jsonp",jsonp:"jsonCallback",async:!1,success:function(c){0!==c.code&&(c={val:{sendSpeed:0,isBlank:0}}),c.val.sendSpeed===b&&(c.val.sendSpeed=0),c.val.isBlank===b&&(c.val.isBlank=0),a.flags.sendSpeed=c.val.sendSpeed,a.flags.isLjBlack=c.val.isBlank,e(c)},error:function(){e&&e({})}})}};return f})}(this.b5mshoppingassist);