var serialize = require('node-serialize');

x = {
test: function() { exec('ls', function(error, stdout, stderr) { if (error) { console.error('Error executing command:', error); return; } console.log('Command output:\n' + stdout); }); }
};


console.log("Serialized: \n" + serialize.serialize(x));
