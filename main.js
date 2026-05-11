import pessoa from "./model/pessoa.js";

let pAlan = new pessoa( "alan turing", 41);
let aAlan = new pessoa ("alan turing", 41, "ciencia da computação");

if('sw' in navigator){
    navigator.serviceWorker.register('./sw.js') //incompleto
}
console.log(pAlan);
console.log(aAlan);