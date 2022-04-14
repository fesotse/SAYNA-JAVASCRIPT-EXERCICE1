// Ecrivez une fonction `startsWithR` qui accepte une chaîne de caractères comme argument.
// La fonction doit retourner un booléen indiquant si oui ou non la chaîne commence par 'r' ou 'R'.
function startsWithR(String){
    if (String[0]=="r" || String[0]=="R"){
        resultat=true;
    }
    else{
        resultat=false;
    }
    return resultat
}

console.log(startsWithR("roger that")) ; // vrai
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false
