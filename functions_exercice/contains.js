// Écrivez une fonction `contains(str1, str2)` qui accepte deux chaînes de caractères comme argument.
// La fonction doit renvoyer un booléen indiquant si oui ou non `str2` est contenue dans `str1`. 
// La fonction doit ignorer toute différence de capitalisation.
function contains(str1,str2){
    let list=[""]
    function portion(str1){
        for (i=0;i<str2.length;i++){
            var compare=str1.substr(i,i+(str2.length));
            list.push(compare)
        }
        return list
    }
    for (i=0;i<list.length;i++){
        if (list[i].toLowerCase()==str2.toLowerCase()){
            resultat=true;
        }
        else {
            resultat=false;
        }
    }
    return resultat
}

console.log(contains("caterpillar", "pill")) ; // true
console.log(contains("lion's share", "on")) ; // true
console.log(contains("SORRY", "or")) ; // true
console.log(contains("tangent", "gem")) ; // false
console.log(contains("clock", "ok")) ; // false
