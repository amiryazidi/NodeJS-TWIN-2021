const readF = require("read-file");
var content = readF("message.txt", "Utf-8", function (err, content) {
  console.log(content);
});
