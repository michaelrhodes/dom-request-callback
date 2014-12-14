var test = require('tape')
var handle = require('./index')

var apps = navigator.mozApps

test('it is supported', function (assert) {
  assert.ok('DOMRequest' in window, true)
  assert.end()
})

test('it does error-first', function (assert) {
  var request = apps.install('not-an-app')

  handle(request, function (error, self) {
    assert.ok(error instanceof DOMError, 'first is [object DOMError]')
    assert.ok(self === void(0), 'second is undefined')
    assert.end()
  })
})

test('it does value-second', function (assert) {
  var request = apps.getInstalled()

  handle(request, function (error, installed) {
    assert.ok(error === null, 'first is null')
    assert.ok(installed != null, 'second is defined')
    assert.end()
  })
})
