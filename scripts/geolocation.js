var Geolocation = (function () {
    var BASE = 34
    var DECIMALS = 4

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
        // var latString = encode(lat)
        // var lonString = encode(lon)
        // return (latString + 'z' + lonString).replace('-', 'y')
        //
        // function encode (n) {
        //     var factor = Math.pow(10, DECIMALS)
        //     var integerN = Math.floor(n*factor)
        //     var stringN = integerN.toString(BASE)
        //     return stringN
        // }
    }

    function stringToPos (s) {
        // var pos = s.replace('y', '-').split('z')
        // var lat = decode(pos[0])
        // var lon = decode(pos[1])
        // console.log(lat)
        // console.log(lon)
        //
        // function decode (s) {
        //     var factor = Math.pow(10, DECIMALS)
        //     var integerN = parseInt(s, BASE)
        //     var decimalN = integerN / factor
        //     return decimalN
        // }
    }

    return {
        getLocationString: getLocationString
    }
})()
