/*

Create an Animal object instance for each raw data point in data array.

Each raw data has a property called friendly.
Manipulate the Constructor function to do something with that friendly data.

*/

var animalList = [];

for (var i=0; i < data.length; i++) {
	var animal = new Animal(data[i]);
	animalList.push(animal);
}



// data.forEach(function(dataPoint){
// 	new Animal(dataPoint);
// });
