module.exports = function (request, callback) {
  request.onerror = function () {
    callback(this.error)
  }
  request.onsuccess = function () {
    callback(null, this.result)
  }
}
