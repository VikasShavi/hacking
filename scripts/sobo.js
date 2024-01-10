var serialize = require('node-serialize');

x = {
test : function(){ return 'hi'; }
};

console.log("Serialized: \n" + serialize.serialize(x));


/*
"_$$ND_FUNC$$_function (){ return 'hi'; }()"
*/