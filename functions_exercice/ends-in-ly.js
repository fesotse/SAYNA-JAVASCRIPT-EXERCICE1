// Écrivez une fonction `endsInLy` qui accepte une chaîne de caractères comme argument.
// La fonction renvoie un booléen indiquant si la chaîne se termine ou non par la sous-chaîne 'ly'.

function endsInLy(string){
    let letter=string.split("");
    if (letter[string.length-2]=="l" && letter[string.length-1]=="y" ){
        resultat= true;
    }
    else{
        resultat= false;
    }
    return resultat
}
console.log(endsInLy("pretty")) ; // false
console.log(endsInLy("instant")) ; // false
console.log(endsInLy("analytic")) ; // false
console.log(endsInLy("timidement")) ; // false
console.log(endsInLy("fly")) ; // true
console.log(endsInLy("gallantly")) ; // true
