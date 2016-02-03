// this function will return an array

function getAreaVolumn(width, height, depth){
	var surfaceArea = 2*(width*height) + 2*(height*depth) + 2*(width*depth);
	var volume = width * height * depth;
	// create the return array and return it
	var returnData = [surfaceArea, volume];
	return returnData;
}


// Call the function and get the two parts of the answer
var array = getAreaVolumn(1,2,3);
console.log(array[0]);
console.log(array[1]);

