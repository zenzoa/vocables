var Geolocation = (function () {
    var ACCURACY = 4

    function getLocationString(callback, fail) {
        navigator.geolocation.getCurrentPosition(function(position) {
            try {
                var posString = posToString(position.coords.latitude, position.coords.longitude)
                callback(posString)
            } catch (e) {
                fail(e)
            }
        })
    }

    function posToString (lat, lon) {
        var latInt = integerize(lat)
        var lonInt = integerize(lon)
        var product = Math.abs(latInt * lonInt)
        var productString = product.toString(36)
        var string = (productString + productString).substring(0, 8)
        return string

        function integerize (n) {
            var factor = Math.pow(10, ACCURACY)
            var integerN = Math.floor(n*factor)
            return integerN
        }
    }

    return {
        getLocationString: getLocationString
    }
})()
