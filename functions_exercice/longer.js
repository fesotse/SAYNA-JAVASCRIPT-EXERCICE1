// Ecrivez une fonction `longer` qui accepte deux chaînes de caractères comme argument. 
// La fonction doit retourner la chaîne la plus longue. Si les chaînes de caractères ont la même longueur, alors la première chaîne est retournée.
function longer(string1,string2){
    if (string1.length<string2.length){
        resultat=string2;
    }
    else{
        resultat=string1;
    }
    return resultat
}

console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "flanelle".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)
