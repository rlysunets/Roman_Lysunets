//! https://leafletjs.com/index.html
//! https://github.com/Leaflet/Leaflet.markercluster

// 49.808429, 24.097950 - forest
// 49.821955, 24.070001 - park
// 49.816505, 24.076755 - I love kebab

// 49.818629, 24.080278 - setView

const places = [
    {
        lat: 49.808429,
        lng: 24.097950,
        descr: 'Лісопарк з екостежками, луками, сосновими та буковими лісами, в яких ростуть рідкісні орхідеї та мешкають птахи.',
        icon: "square",
        img: "assets/images/park.jpg"    
    },
    {
        lat: 49.821955,
        lng: 24.070001,
        descr: 'Просторий міський парк з пішохідними стежками у буковому та кленовому лісі.',
        icon: "square",
        img: "assets/images/forest.jpg" 
    },
    {
        lat: 49.816505,
        lng: 24.076755,
        descr: 'I love kebab',
        icon: "circle",
        img: "assets/images/fastfood.jpg" 
    }
];

const icons = {
    square: L.icon({
        iconUrl: 'assets/images/my-icon.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    }),
    circle: L.icon({
        iconUrl: 'assets/images/my-icon2.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    })
};
    

function initMap() {

    const map = L.map('map').setView([49.818629, 24.080278], 12);

    L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.marker([49.808429, 24.097950], { icon: myIcon })
    //     .addTo(map)
    //     .bindPopup('Лісопарк з екостежками, луками, сосновими та буковими лісами, в яких ростуть рідкісні орхідеї та мешкають птахи.')
    //     // .openPopup();

    // L.marker([49.821955, 24.070001], {icon: myIcon}).addTo(map)
    //     .bindPopup('Просторий міський парк з пішохідними стежками у буковому та кленовому лісі.')
    //     // .openPopup();

    // L.marker([49.816505, 24.076755], {icon: myIcon}).addTo(map)
    //     .bindPopup('I love kebab')
    //      // .openPopup();


    var markers = L.markerClusterGroup();

    places.forEach(place => {
        markers.addLayer(L.marker([place.lat, place.lng], { icon: icons[place.icon] })
            .bindPopup(`
                <div class="popup">
                    <div class="popup_pig">
                        <img src="${place.img}"/>
                    </div>
                    <div class="popup_descr">
                        ${place.descr}
                    </div>
                </div>
            `));
    })

    map.addLayer(markers);
}

document.getElementById("load_map_link").addEventListener("click", function(e) {
    // e.preventDefault();
    e.stopPropagation();
    document.getElementById("map").innerHTML = "";
    initMap();
})
