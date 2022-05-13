var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NAARALITO_1 = new ol.format.GeoJSON();
var features_NAARALITO_1 = format_NAARALITO_1.readFeatures(json_NAARALITO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAARALITO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAARALITO_1.addFeatures(features_NAARALITO_1);
var lyr_NAARALITO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAARALITO_1, 
                style: style_NAARALITO_1,
                interactive: true,
                title: '<img src="styles/legend/NAARALITO_1.png" /> NAARALITO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NAARALITO_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NAARALITO_1];
lyr_NAARALITO_1.set('fieldAliases', {'id': 'id', 'imagen': 'imagen', });
lyr_NAARALITO_1.set('fieldImages', {'id': 'TextEdit', 'imagen': 'ExternalResource', });
lyr_NAARALITO_1.set('fieldLabels', {'id': 'no label', 'imagen': 'header label', });
lyr_NAARALITO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});