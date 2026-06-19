var sharedAttribution = "© Custom from <a href='https://github.com/Yopi-em'>Yopi-em</a>";
var OSMAttribution = "<br/>© Map data from <a href='https://www.openstreetmap.org/copyright>OpenStreetMap </a>"

// -- Création du fond de carte --
let map = new ol.Map({
    /**
     * Chargement du fond OSM.
    */
    target: 'map',
    view: new ol.View({
        projection: 'EPSG:3857',
        center: ol.proj.fromLonLat([4.84, 18.88]),
        zoom: 2.5,
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.XYZ({
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
                projection: 'EPSG:3857',
                maxZoom: 19,
                minZoom: 2,
                attributions: [
                    sharedAttribution,
                    OSMAttribution
                ]}),
        }),
    ],
});

// -- Couche Ecoles  --
let schoolLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'school.json',
        format: new ol.format.GeoJSON()
    }),
    minZoom: 2,
    style: function (feature) {
        let cat = feature.get('cat')
        return new ol.style.Style({
            image: new ol.style.Icon({
                src: ((cat == 'pub') ? 'img/iconB.png' : ((cat == 'pv') ? 'img/iconO.png' : 'img/icon.png')),
                anchor: [0.5, 0.5],
                scale: 0.8
            }),
        });
    },
    
});
map.addLayer(schoolLayer);

// -- Fonction de gestion de l'affichage des infos des écoles en cliquant dessus  --

// création d'un popup lorsque l'on clique sur une école
map.on('click', (evt) => {
    let features = map.forEachFeatureAtPixel(evt.pixel, function(features) {
        return features;
    });
    if (features) {
        // Récupération des infos de l'école.
        this.name = features.get('name');
        this.city = features.get('city');
        this.info = features.get('info');
        this.capacity = features.get('capacity');
        this.url = features.get('url');
        console.log("object clicked");

        // génération d'un popup avec les informations de la gare cliquée
        let el = document.createElement('div');
        el.innerHTML = `<h3 style='text-align: center;'> ${this.name}, ${this.city}</h3>
            <p> Nombre de places : ${this.capacity}</p>
            <p> ${this.info}</p>
            <p>Site web : <a href='https://www.${this.url}'>${this.url}</a></p>`;
        el.style.cssText ="position: absolute;background-color: white;filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));padding: 10px; margin: 0px;border-radius: 10px;border: 1px solid #ccc;width: 400px;height: auto;";
                    
        // création d'un overlay pour générer le popup
        let popup = new ol.Overlay({
                element: el,
                autoPan : { animation : { duration:25} },
                positioning: 'bottom-center',
                offset: [0, 0],
        });
        map.addOverlay(popup);
        popup.setPosition(evt.coordinate);

        // fermeture du popup lorsque l'on clique n'importe où
        map.on('click', function(evt) {
            popup.setPosition(undefined);
        });
    } 
                
});


// Légende
const legend = new ol.legend.Legend({
  title: '',
  margin: 5
});

const legendCtrl = new ol.control.Legend({
  legend: legend,
  collapsed: false,
  position: 'top-right'
});

map.addControl(legendCtrl);

// Ajout des éléments à la légende
legend.addItem({
  title: 'Lycées Publics',
  typeGeom: 'Point',
  style: new ol.style.Style({
    image: new ol.style.Icon({
                src: 'img/iconB.png',
                scale: 0.8
    })
  })
});

legend.addItem({
  title: 'Lycées Privés',
  typeGeom: 'Point',
  style: new ol.style.Style({
    image: new ol.style.Icon({
                src: 'img/iconO.png',
                scale: 0.8
    })
  })
});

legend.addItem({
  title: 'Lycées ouvrants à la rentrée 2026',
  typeGeom: 'Point',
  style: new ol.style.Style({
    image: new ol.style.Icon({
                src: 'img/icon.png',
                scale: 0.8
    })
  })
});   