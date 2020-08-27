mapboxgl.accessToken = MAPBOX_TOKEN_1;



// TODO: Generate a map that shows the city with your favorite restaurant using geocoding.
// Rota 36.6237° N, 6.3601° W
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [-98.4936, 29.4241], // starting position [lng, lat]
    zoom: 0 // starting zoom
});
map.addControl(new mapboxgl.FullscreenControl({container: document.querySelector('body')}));

// TODO: Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply changing the value of zoom level where the map properties are initially set and refresh the page to see the changes. Can the zoom be changed programmatically after the initial map is drawn?

// TODO: Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.

// let favEats1 = new mapboxgl.Marker()
//     .setLngLat([-6.360513, 36.619342])
//     .addTo(map);
//
// let favEats2 = new mapboxgl.Marker()
//     .setLngLat([-3.187350, 55.950370])
//     .addTo(map);
//
// let favEats3 = new mapboxgl.Marker()
//     .setLngLat([132.095123, 34.106940])
//     .addTo(map);
//
// // TODO: Create a popup with the name of the restaurant.
// let tapasPopup = new mapboxgl.Popup()
//     .setHTML("<p>El Remedio</p>")
//
// let haggisPopup = new mapboxgl.Popup()
//     .setHTML("<p>Byrons</p>")
//
// let ricePopup =new mapboxgl.Popup()
//     .setHTML("<p>Irori Sanzoku Kuga 'The Chicken Shack'</p>")

// TODO: Make sure the info window does not display until the marker has been clicked on.
// favEats1.setPopup(tapasPopup)
// favEats2.setPopup(haggisPopup)
// favEats3.setPopup(ricePopup)

// TODO: Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.
let restaurants = [
    {
        lnglat: [-6.360513, 36.619342],
        name: "El Remedio",
        features: {
            address: "Calle Mina, 38, 11520 Rota, Cádiz, Spain",
            menu: "Spanish Tapas",
            favdish: "Lebanese Toast"
        },
    },
    {
        lnglat: [-3.187350, 55.950370],
        name: "Byrons",
        features: {
            address: "29-31 North Bridge, Edinburgh EH1 1SF, United Kingdom",
            menu: "Burgers and Shakes",
            favdish: "Haggis Burger with Salted Caramel Hardshake"
        },
    },
    {
        lnglat: [132.095123, 34.106940],
        name: "Irori Sanzoku Kuga aka 'The Chicken Shack'",
        features: {
            address: "1380-1 Kugamachi, Iwakuni, Yamaguchi 740-0314, Japan",
            menu: "Table grilled entrees",
            favdish: "Emperor's Beef Course"
        },
    }

]
function placeMarkerAndPopup(restaurant) {
    var popup = new mapboxgl.Popup()
        .setHTML(restaurant.name + "<br>" + restaurant.features.address + "<br>" + "Menu: " + restaurant.features.menu + "<br>" + "Favorite dish: " + restaurant.features.favdish);

    var marker = new mapboxgl.Marker()
    .setLngLat(restaurant.lnglat)
    .addTo(map)
    .setPopup(popup);

    //popup.addTo(map);
}

restaurants.forEach(placeMarkerAndPopup);
