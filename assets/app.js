window.onload = function (){
/*Crea una función que invierta el orden de los elementos de un array. Completa este reto de dos maneras: en una, el array invertido es un nuevo array; en la segunda, modifica el mismo array que se proporciona como argumento. Investiga sobre el método reverse. ¿Qué puedes concluir? */

//ARRAY INVERTIDO ES UN NUEVO ARRAY

/* asi se ven las letras en orden de izq a derecha
let vowels = ["a","e","i","o","u",];
const size = vowels.length; //5
for(var i=0; i<vowels.length; i++){
this.console.log(vowels[i]);
}*/

let vowels = ["a","e","i","o","u",];
const size = vowels.length; //5
const lastPosition = size-1; //por si crece el largo de vowels siempre tomara el ultimo dato
for(var i=lastPosition; i>0; i--){
console.log(vowels[i]);
}

}