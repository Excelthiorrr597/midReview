
// 10. create a jquery promise that will resolve true, and execute an associated callback, after 1 second. 
$.ajax(blah).done(function(){setTimeout(callback,1000)})

// 11. create a constructor called Place. the important methods on place are .fetchData() and .getCoords(). fetchData should take the name of a place as input, make a request to an api of your choosing (hint: googlemaps geocoding), and store the latitude and longitude of the place in an object, retrievable with the getCoords method. 
var Place = function(){

	this.fetchData = function(this){
		fetchParams = {
			url: googlemaps + this,
			success: this.successFunc
		}

		$.ajax(fetchParams)

	}
	this.getCoords = function(){
		var lat = '',
			long = ''

		this.fetchData
	}

	this.successFunc = function(responseData){
		var data = responseData

	}
}
