// Ecrivez une fonction `longer` qui accepte deux chaînes de caractères comme argument. 
// La fonction doit retourner la chaîne la plus longue. Si les chaînes de caractères ont la même longueur, alors la première chaîne est retournée.
function longer(string){
    let list=string.split(" ")
    let longest=0;
    let position=0
    for (i=0;i<list.length;i++){
        if (longest<list[i].length){
            longest=list[i].length;
            position=i;
        }
        else{
            continue
        }
    }
    return list[position]
}

console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "flanelle".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)
