// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // create temp array to store elements with class name
  let result = [];
  let currElement = document.body;

  console.log(currElement);

  // iterate through the DOM structure
  // check if current element has the class name
  if (currElement.classList.contains(className)) {
    result.push(currElement);
  }

  // check if it has an element child node
  if (currElement.children) {
    let children = currElement.children;

    for (let i = 0; i < children.length; i++) {
      currElement = children[i];
      console.log(currElement);
      getElementsByClassName(className);
    }
  }

  //return an array of elements with specified class name
  return result;
};
