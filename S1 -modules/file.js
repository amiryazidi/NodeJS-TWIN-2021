const fs = require("fs");

//synchrone ==> bloquant
try {
  fs.appendFileSync("message.txt", "Bonjour Node.js");
  console.log("Message ajouté");
} catch (err) {
  console.log(err);
}
//asynchrone ==> non bloquant

fs.readFile("message.txt", "utf-8", function (err, content) {
  console.log(content);
});
console.log("Traitement suivant");
