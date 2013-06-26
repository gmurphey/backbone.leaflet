define([
  "underscore",
  "backbone",
  "leaflet",

  "backbone.layoutmanager"
], function (_, Backbone, Leaflet) {
  Backbone.Leaflet = {};

  Backbone.Leaflet.MapView = Backbone.Layout.extend({
    id: "map",
    map: null,

    addMarker: function (model) {
      Leaflet.marker(model.get("position"), model.options).addTo(this.map);
    },

    afterRender: function () {
      this.map = Leaflet.map(this.id);
    }
  });

  Backbone.Leaflet.MarkerModel = Backbone.Model.extend({
    initialize: function (attributes, options) {
      this.options = options;
    }
  });

  return Backbone;
});
