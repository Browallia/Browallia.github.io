// build time:Tue Oct 15 2019 19:47:22 GMT+0800 (GMT+08:00)
$(document).ready(function(){var t=$(".sidebar-inner");var i=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;function e(){return $(".header-inner").height()+i}function r(){var t=$(".footer-inner");var i=t.outerHeight(true)-t.outerHeight();var e=t.outerHeight(true)+i;return e}function n(t){return $("#sidebar").css({"margin-top":t})}function a(){var a=e();var o=r();var f=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight();var c=$("#content").height();if(a+f<c){t.affix({offset:{top:a-i,bottom:o}})}n(a).css({"margin-left":"initial"})}function o(){var i=window.matchMedia("(min-width: 991px)");i.addListener(function(i){if(i.matches){t.affix("checkPosition")}})}a();o();t.affix("checkPosition")});
//rebuild by neat 