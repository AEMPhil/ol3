var map = new ol.Map({
  layers: [
    new ol.layer.TileLayer({
      preload: 4,
      source: new ol.source.OpenStreetMap()
    })
  ],
  renderers: ol.RendererHints.createFromQueryData(),
  target: 'map',
  view: new ol.View2D({
    center: new ol.Coordinate(-25860000, 4130000),
    rotation: Math.PI / 6,
    zoom: 10
  })
});