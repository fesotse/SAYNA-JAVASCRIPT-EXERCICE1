// Écrivez une fonction `removeCapitals` qui accepte une chaîne de caractères comme argument. 
// La fonction doit retourner une nouvelle version de la chaîne avec toutes les majuscules enlevées.
function removeCapitals(string){
    let string1=""
    for (i=0;i<string.length;i++){
        if (string[i].toLowerCase()===string[i]){
            string1= string1 + string[i]
        }
        else{
            continue
        }
    }
    return string1
}
console.log(removeCapitals("fOrEver")) ; // 'frver'.
console.log(removeCapitals("raiNCoat")) ; // "raioat".
console.log(removeCapitals("clr Door")) ; // "clr oor
