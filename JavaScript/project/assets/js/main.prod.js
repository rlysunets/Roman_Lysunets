"use strict";$(function(){$(".hamburger, .menu-mobile_link, #overlay").on("click",function(){$(".hamburger").toggleClass("is-active"),$(".menu-mobile").toggleClass("active"),$("#overlay").toggleClass("open"),$("body").toggleClass("hidden")}),$("#intro_lightSlider").lightSlider({adaptiveHeight:!0,item:1,slideMargin:0,loop:!0,controls:!1,auto:!0,pause:4e3,speed:700,easing:"cubic-bezier(0.25, 0, 0.25, 1)"}),$.ajax({url:"assets/data/news.json",type:"get",dataType:"json",success:function(e){!function(e){var t="";e.forEach(function(e){t+='\n                <li class="new_item">\n                    <div class="new_pic">\n                        <img src="'.concat(e.image,'" alt="new photo"/>\n                    </div>\n                    <div class="content">\n                        <div class="content_title">').concat(e.title,'</div>\n                        <div class="content_text">').concat(e.text,'</div>\n                    </div>\n                    <div class="author">\n                        <div class="author_ava">\n                            <img src="').concat(e.author.avatar,'" alt="author avatar"/>\n                        </div>\n                        <div class="author_info">\n                            <div class="author_name">').concat(e.author.name,'</div>\n                            <div class="date">').concat(e.date,"</div>\n                        </div>\n                    </div>\n                </li>\n            ")}),$(".news_slider").html(t);var i=$("#news_slider").lightSlider({item:3,loop:!0,slideMove:1,slideMargin:30,easing:"cubic-bezier(0.25, 0, 0.25, 1)",speed:1500,pause:3e3,auto:!0,controls:!1,responsive:[{breakpoint:1100,settings:{item:2,slideMove:1,slideMargin:50}},{breakpoint:768,settings:{item:1,slideMove:1}}]});$(".arrow_left").on("click",function(){return i.goToNextSlide()}),$(".arrow_right").on("click",function(){return i.goToPrevSlide()})}(e)}}),$("#load_map_link").on("click",function(e){var t,i;e.stopPropagation(),$("#map").html(""),t=L.icon({iconUrl:"assets/images/map/Pin.svg",iconSize:[106,106]}),i=L.map("map").setView([40.678564816138355,-73.9433614791599],12),L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(i),L.marker([40.678564816138355,-73.9433614791599],{icon:t}).addTo(i)}),$("a").on("click",function(e){e.preventDefault(),"#"===$(this).attr("href")&&($("html, body").animate({scrollTop:0},500),$(".hamburger").removeClass("is-active"),$(".menu-mobile").removeClass("active"),$("#overlay").removeClass("open"),$("body").removeClass("hidden"))}),$(".menu_link, .menu-mobile_link").on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:$($(this).attr("href")).offset().top},500)}),$(".scroll").on("click",function(e){e.preventDefault();var t=$(".intro").height();$("html, body").animate({scrollTop:t},500)})}),lightGallery(document.getElementById("lightgallery"),{plugins:[lgZoom,lgThumbnail],speed:500});