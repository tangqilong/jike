function menuHover(){var n=$(".main");n.each(function(n){var e=$(".main").eq(n),i=e.height();e.hover(function(){$(this).find(".menu-show").css({display:"block","margin-top":-44-(i+1)*n})},function(){$(this).find(".menu-show").css("display","none")})})}function menuShow(){var n=$(".pager .pager-menu  .pager-menu-left ul").eq(0);n.hover(function(){$(this).find(".hide").css("display","block")},function(){$(this).find(".hide").css("display","none")})}function labelShow(){var n=$(".nav-ul-li-ul li");n.each(function(n){var e=$(".nav-ul-li-ul li").eq(n);e.hover(function(){e.addClass("z-index"),e.css("height","255"),e.find(".p").slideDown(500),e.find(".centent-em1").slideDown(500),e.find(".centent-em2").slideDown(500),e.find(".img1").slideDown(500)},function(){e.removeClass("z-index"),e.css("height","185"),e.find(".p").slideUp(500),e.find(".centent-em1").slideUp(500),e.find(".centent-em2").slideUp(500),e.find(".img1").slideUp(500)})})}function contentMenu(){{var n=$(".centent .centent-box .centent-nav .nav-ul .nav-li");$(".nav-ul-li-ul")}n.each(function(n){var e=$(".centent .centent-box .centent-nav .nav-ul .nav-li").eq(n);e.hover(function(){$(this).find(".nav-ul-li-ul").addClass("block"),$(this).siblings().find(".nav-ul-li-ul").removeClass("block")})})}function colorRed(){function n(){e.eq(c).addClass("red").siblings().removeClass("red"),i.eq(c).fadeIn().siblings().fadeOut()}var e=$(".pager-menu-middle .pager-menu-middle-icon .pager-menu-middle-icon-red li"),i=$(".pager-menu-middle .pager-menu-middle-img ul li"),s=$(".pager-menu-middle-icon-left"),l=$(".pager-menu-middle-icon-right"),c=0;e.hover(function(){var n=$(this).index();$(this).addClass("red").siblings().removeClass("red"),i.eq(n).fadeIn().siblings().fadeOut()}),s.click(function(){c--,0>c&&(c=3),n()}),l.click(function(){c++,c>3&&(c=0),n()})}function qqIcon(){var n=$(".qq-icon").eq(0),e=n.find("img");n.hover(function(){e.css("display","block")},function(){e.css("display","none")})}function imgHide(){var n=$(".del");n.each(function(n){var e=$(".del").eq(n);e.click(function(){$(this).css("display","none"),$(this).siblings().css("display","none")})})}function searchClick(){var n=$(".search-text");n.click(function(){n.siblings(".search-btn").addClass("click"),n.siblings(".search-link").fadeOut()}),n.blur(function(){n.siblings(".search-btn").removeClass("click"),n.siblings(".search-link").fadeIn()})}$(document).ready(function(){menuHover(),menuShow(),labelShow(),colorRed(),contentMenu(),qqIcon(),imgHide(),searchClick()});