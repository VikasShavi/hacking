var serialize = require('node-serialize');
var exec = require('child_process').exec;

var payload = {
  test: function() {
    exec('ls', function(error, stdout, stderr) {
      if (error) {
        console.error('Error executing command:', error);
        return;
      }
      console.log('Command output:\n', stdout);
    });
  }
};

var serialized = serialize.serialize(payload);
console.log(serialized);
