var exec = require('child_process').exec;

var x = {
  test: function() {
    exec('ls', function(error, stdout, stderr) {
      if (error) {
        // console.error('Error executing command:', error);
        return;
      }
      console.log('Command output:', stdout);
    });
  }
};


function serialize(obj) {
  var serializedObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'function') {
      serializedObj[key] = "_$$ND_FUNC$$_" + obj[key].toString();
    } else {
      serializedObj[key] = obj[key];
    }
  }
  return JSON.stringify(serializedObj);
}

var serializedData = serialize(x);
console.log(serializedData);
