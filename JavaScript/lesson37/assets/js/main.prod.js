"use strict";function viewCart(n){var t="";n.forEach(function(n){t+="\n            <ul>\n                <li>\n                    ".concat(n.name," --- ").concat(n.price,"\n                </li>\n            </ul>\n        ")}),document.body.insertAdjacentHTML("afterbegin",t)}function viewErr(n){console.log(n);var t="".concat(n);document.body.insertAdjacentHTML("afterbegin",t)}function loadPage(n){$.get("pages/".concat(n,".html"),function(n){$("#page_content").html(n)})}$.ajax({url:"assets/data/cart2.json",type:"get",dataType:"json",success:function(n){console.log(n),viewCart(n)},error:function(n){console.log(n),viewErr(n.statusText)}}),loadPage("main"),$(function(){$(".nav-masthead a").on("click",function(n){n.preventDefault(),loadPage($(this).attr("href")),$(".nav-link.active").removeClass("active"),$(this).addClass("active")})});