// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) { //function with argument for a class name
  // your code here
  var elements = [] //array which will store each element match
  function searchNodes(element){ //function searchNodes which will take in an element as an argument
  	
  	if(element.classList) { //if the element contains a class check the following
  		if(element.classList.contains(className)){ //if the element contains the className in its classList
  			elements.push(element) //push that element to the elements array
  		}
  	} 
  	if(element.childNodes){ //if the element has child elements do the following
  		var childeren = element.childNodes //syntax symplification
  		for(var i = 0; i<childeren.length; i++) { //for each childNode of current element
  			searchNodes(childeren[i]); //call the function for each child
  		}
  	}
  }

  searchNodes(document.body); //document.body is parent to all the elements on the page so we start with it
  return elements; //return array with all the element matches
};
