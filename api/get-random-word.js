/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */


const path = require("path");
const fs = require('fs');

export function GET(request) {
  let usersPath = path.join(process.cwd(), 'dictionary.json');
  let dictionary = fs.readFileSync(usersPath);
  var word = { word: undefined, def: undefined };
  let i = 0;
   var randomLetterNum = Math.round(Math.random() * 25);
     var defNum = Math.round(Math.random() * Object.keys(dictionary[randomLetterNum]).length);
  // skip over words that don't have a definition atached
  while (
    (word.word == undefined ||
    word.def.MEANINGS["1"] == undefined) &&
    i < 100
  ) {
     randomLetterNum = Math.round(Math.random() * 25);
     defNum = Math.round(Math.random() * Object.keys(dictionary[randomLetterNum]).length);
    word = { word: Object.keys(dictionary[randomLetterNum])[defNum],
    def: Object.values(dictionary[randomLetterNum])[defNum],
    letterNum: randomLetterNum,
    defNum:  defNum}
    i++
  }
console.log(2345)
  console.log(Object.keys(dictionary[randomLetterNum])[defNum])
  console.log(3456543345432)
  console.log(Object.values(dictionary[randomLetterNum])[defNum])
  return new Response(JSON.stringify(word));
}
