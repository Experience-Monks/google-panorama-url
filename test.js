var getUrl = require('./')
var test = require('tape')

test('gets a street view URL from a panorama ID', function(t) {
  var id = 'dXZfBMex9_L7jO2JW3FTdA'
  var url = getUrl(id, { zoom: 0 })
  t.equal(url, 'https://geo0.ggpht.com/cbk?cb_client=maps_sv.tactile&authuser=0&hl=en&panoid=dXZfBMex9_L7jO2JW3FTdA&output=tile&x=0&y=0&zoom=0&nbt&fover=2')
  t.end()
})