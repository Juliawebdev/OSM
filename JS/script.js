var map = L.map('map').setView([59.914983, 30.345372], 10);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
L.marker([59.914983, 30.345372]).addTo(map);