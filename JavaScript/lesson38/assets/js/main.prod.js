"use strict";var places=[{lat:49.808429,lng:24.09795,descr:"Лісопарк з екостежками, луками, сосновими та буковими лісами, в яких ростуть рідкісні орхідеї та мешкають птахи.",icon:"square",img:"assets/images/park.jpg"},{lat:49.821955,lng:24.070001,descr:"Просторий міський парк з пішохідними стежками у буковому та кленовому лісі.",icon:"square",img:"assets/images/forest.jpg"},{lat:49.816505,lng:24.076755,descr:"I love kebab",icon:"circle",img:"assets/images/fastfood.jpg"}],icons={square:L.icon({iconUrl:"assets/images/my-icon.svg",iconSize:[38,95],iconAnchor:[22,94],popupAnchor:[-3,-76]}),circle:L.icon({iconUrl:"assets/images/my-icon2.svg",iconSize:[38,95],iconAnchor:[22,94],popupAnchor:[-3,-76]})};function initMap(){var n=L.map("map").setView([49.818629,24.080278],12);L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(n);var a=L.markerClusterGroup();places.forEach(function(n){a.addLayer(L.marker([n.lat,n.lng],{icon:icons[n.icon]}).bindPopup('\n                <div class="popup">\n                    <div class="popup_pig">\n                        <img src="'.concat(n.img,'"/>\n                    </div>\n                    <div class="popup_descr">\n                        ').concat(n.descr,"\n                    </div>\n                </div>\n            ")))}),n.addLayer(a)}document.getElementById("load_map_link").addEventListener("click",function(n){n.stopPropagation(),document.getElementById("map").innerHTML="",initMap()});