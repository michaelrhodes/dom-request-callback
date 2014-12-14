module.exports = function (request, callback) {
  request.onerror = function () {
    callback(new Error(this.error.name))
  }
  request.onsuccess = function () {
    callback(null, this.result)
  }
}
