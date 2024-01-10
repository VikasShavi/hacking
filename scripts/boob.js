var serialize = require('node-serialize');


x = {
test : function(){
  require('child_process').execSync("ping -c 4 10.10.14.7", function puts(error, stdout, stderr) {});
}
};

console.log("Serialized: \n" + serialize.serialize(x));
