// William Stephens [Europa]

(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Kathyrn', 'Justin', 'Will', 'Matt'];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log('The length of the names array is ' + names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    
    for(var i=0;i<4;i++) {
    	console.log('The name at index ' + i + ' is: ' + names[i]);
    }

    names.forEach(function(element, index, array) {
    	console.log('The name at index ' + index + ' is: ' + element);
    });
})();
