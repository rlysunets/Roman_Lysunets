"use strict";$(function(){$(".hamburger, .menu-mobile_logo a, .menu-mobile_link, #overlay").on("click",function(){$(".hamburger").toggleClass("is-active"),$(".hamburger").removeClass("none"),$(".menu-mobile").toggleClass("active"),$(".menu-mobile_logo a").toggleClass("active"),$("#overlay").toggleClass("open"),$("body").toggleClass("hidden")}),$(".hamburger").on("click",function(){$(this).addClass("none")})});