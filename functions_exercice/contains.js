// Écrivez une fonction `contains(str1, str2)` qui accepte deux chaînes de caractères comme argument.
// La fonction doit renvoyer un booléen indiquant si oui ou non `str2` est contenue dans `str1`. 
// La fonction doit ignorer toute différence de capitalisation.
function contains(str1,str2){
    let str1lowercase=str1.toLowerCase();
    let str2lowercase=str2.toLowerCase();
    resultat=str1lowercase.includes(str2lowercase)
    return resultat
}

console.log(contains("caterpillar", "pill")) ; // true
console.log(contains("lion's share", "on")) ; // true
console.log(contains("SORRY", "or")) ; // true
console.log(contains("tangent", "gem")) ; // false
console.log(contains("clock", "ok")) ; // false
