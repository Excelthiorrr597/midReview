
// 10. create a jquery promise that will resolve true, and execute an associated callback, after 1 second. 

var deferred = new jquery.Deferred
deferred.done(function(){alert('woo done')})

setTimeout(deferred.resolve.bind(deferred),10000)

// 11. create a constructor called Place. the important methods on place are .fetchData() and .getCoords(). fetchData should take the name of a place as input, make a request to an api of your choosing (hint: googlemaps geocoding), and store the latitude and longitude of the place in an object, retrievable with the getCoords method. 
var Place = function(){

	this.url = googlemaps

}

Place.prototype = {

	fetchData: function(){
		var self = this

		fetchParams = {
			url: this.url,
			data: {
				address: placeName
			}
		}
		return $.ajax(fetchParams).done(function(responseData){
			self.responseData = responseData
		})
	},

	getCoords: function() {
		var self,
			coordsObj = self.responseData.results[0].geometry.location
		return coordsObj
	}
}
