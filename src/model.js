function Model(koop) { }

// each model should have a getData() function to fetch the geo data
// and format it into a geojson
Model.prototype.getData = function (req, callback) {
  const geojson = {
    type: 'FeatureCollection',
    features: [{
      type: "Feature",
      properties: {
        OBJECTID: 1,
        dateUpdated: new Date(2020, 0, 1).toISOString(),
      },
      geometry: {
        type: "Point",
        coordinates: [-123.12, 49.26]
      }
    }]
  };

  geojson.ttl = 15;

  geojson.metadata = {};
  geojson.metadata.idField = "OBJECTID";
  geojson.metadata.geometryType = 'Point';

  geojson.metadata.fields = [{
    name: 'OBJECTID',
    type: 'Integer',
    alias: 'OBJECTID'
  }, {
    name: 'dateUpdated',
    type: 'Date',
    alias: 'Updated Date'
  }];

  callback(null, geojson)
}

module.exports = Model
