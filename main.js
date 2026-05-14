import pessoa from "./model/pessoa.js";
import aluno from "./model/aluno.js";
import usuario from "./model/usuario.js";

let usuario = [];
let u1 = new usuario ("Rafael Fr", "1234")
let u2 = new usuario ("Priscila", "1234")

usuario[0] = u1;
usuario[1] = u2;
usuario[2] = u3;


let pAlan = new pessoa( "alan turing", 41);
let aAlan = new pessoa ("alan turing", 41, "ciencia da computação");

if ('sw' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('Service Worker registrado com sucesso', reg))
        .catch(err => console.log( 'Falha ao registrar o Service worker:', err));
    });
}
console.log(pAlan);
console.log(aAlan);