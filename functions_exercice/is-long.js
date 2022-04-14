// Écrivez une fonction `isLong` qui accepte une chaîne de caractères comme argument. 
// La fonction doit retourner un booléen indiquant si la chaîne est plus longue que 5 
function isLong(string){
    if (string.length>5){
        resultat=true;
    }
    else{
        resultat=false;
    }
    return resultat
}

console.log(isLong("pie")) ; // false
console.log(isLong("kite")) ; // false
console.log(isLong("kitty")) ; // false
console.log(isLong("telescope")) ; // true
console.log(isLong("thermomètre")) ; // true
console.log(isLong("restaurant")) ; // true
