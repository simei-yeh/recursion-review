// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // create array to store elements with class name
  let result = [];
  let currElement = document.body;

  var checkClassName = function (node) {

    // check if current element has the class name
    if (currElement.classList.contains(className)) {
      result = result.concat(currElement);
    }

    // check if it has an element child node
    if (currElement.children) {
      let children = currElement.children;

    // recurse through the DOM structure
      for (let childElement of children) {
        currElement = childElement;

        checkClassName(currElement);
      }
    }
  }

  checkClassName(currElement);

  //return an array of elements with specified class name
  return result;
};
