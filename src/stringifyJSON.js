// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var result = '';

  if (obj === null) {
    result = 'null';
  } else if (typeof obj === 'string') {
    result = '"' + obj + '"';
  } else if (typeof obj !== 'object') {
    result = '' + obj + '';
  } else if (Array.isArray(obj)) {
    result = '[';
    if (obj[0] === undefined) {
      result += ']';
    }
    for (let i = 0; i < obj.length; i++) {
      if (i === obj.length -1) {
        result += stringifyJSON(obj[i]) + ']';
      } else {
        result += stringifyJSON(obj[i]) + ',';
      }
    }
  } else {
    result += '{';
    let numKeys = Object.keys(obj);

    for (let j = 0; j < numKeys.length; j++) {
      if (typeof obj[numKeys[j]] === 'function' || obj[numKeys[j]] === undefined) {
        continue;
      } else if (j === numKeys.length -1) {
        result += '"' + numKeys[j] + '":' + stringifyJSON(obj[numKeys[j]]);
      } else {
        result += '"' + numKeys[j] + '":' + stringifyJSON(obj[numKeys[j]]) + ',';
      }
    }

    result += '}';
  }

  return result;

};