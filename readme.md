# dom-request-callback
dom-request-callback lets you handle Firefox’s [DOMRequest](https://developer.mozilla.org/en-US/docs/Web/API/DOMRequest) objects with plain old callbacks.

## install
```sh
$ npm install dom-request-callback
```

## usage
```js
var handle = require('dom-request-callback')
var request = navigator.mozApps.getInstalled()

handle(request, function (error, apps) {
  error ? console.error(error) : console.log(apps)
})
```

## test
<small>Firefox (11+) only</small>
```sh
$ git clone git@github.com:michaelrhodes/dom-request-callback.git
$ npm install && npm test
```
