window.onload = function (){
/*Crea una función que invierta el orden de los elementos de un array. Completa este reto de dos maneras: en una, el array invertido es un nuevo array; en la segunda, modifica el mismo array que se proporciona como argumento. Investiga sobre el método reverse. ¿Qué puedes concluir? */

//ARRAY INVERTIDO ES UN NUEVO ARRAY

/* asi se ven las letras en orden de izq a derecha
let vowels = ["a","e","i","o","u",];
const size = vowels.length; //5
for(var i=0; i<vowels.length; i++){
this.console.log(vowels[i]);
}*/

/* asi se recorre el array de orden derecha a izq
const vowels = ["a","e","i","o","u",];
const size = vowels.length; //5
const lastPosition = size-1; //por si crece el largo de vowels siempre tomara el ultimo dato
for(var i=lastPosition; i>0; i--){
console.log(vowels[i]);
} */

/* devuelve array al reves
const vowels = ["a","e","i","o","u",];
const numbers = ["one","two","three"];
const reverse = function(array) {
  const newArray = [];
  let size = array.length;
  const lastPosition = size -1;
  for (var i= lastPosition; i>=0; i--){
    newArray.push(array[i]);
  }
return newArray;
}
console.log (reverse(vowels));
console.log (vowels);

console.log (reverse(numbers));
console.log (numbers); */



//const vowels = ["a","e","i","o","u",]; //esto debo lograr[u,o,i,e,a]
//metodo POP --> retorna el ultimo eleento del array- el array original se modifica en tamaño ya que no tiene el ultumo elemento

//SPLICE --> puede funcionar con 3 parametros por ejemplo si solo quiero eliminar elementos de cualquier array el metodo splice funciona con 2 parametros--> cuando quiero eliminar me retorna un array con el elemento eliminado y adicionalmente modifica el array original por lo tanto luego sigue haciendo cambios dentro del array ya modificado

//la siguiente forma --> funciona con 3 parametros ya que digo que (1,1, "hola") en la posicion 1 elimines el elemento 1 y eso que eliminas reemplazalo por la palabra HOLA, eso dice 

/*el segundo 0 significa que no quiero que elimine nada
vowels.splice(0,0,"hola dos")*/

/*vowels.pop();ubicate en la posicion cero no elimines nada y agregues la letra u que se borro*/

/* otra forma
const vowels = ["a","e","i","o","u"]; // [u,o,i,e,a]
const reverse = function (array){
  for(var i = 0; i<array.length; i++){
    var item = array.pop();
    array.splice(i,0,item);
  }
  return array
}
(reverse(vowels));
this.console.log(vowels);*/

//FORMA CORRECTA REVERSE--> es un metodo de los array, retorna el mismo array con los elementos invertidos
const vowels = ["a","e","i","o","u"];
this.console.log(vowels.reverse());
console.log(vowels);



}