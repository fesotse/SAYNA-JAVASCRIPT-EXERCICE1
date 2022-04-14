// Ecrivez une fonction `keepItQuiet` qui accepte une chaîne de caractères en tant qu'argument.
// La fonction doit retourner les minuscules de la chaîne avec 3 points de suspension ajoutés à la fin.
function keepItQuiet(String){
    let letter=String.split("")
    let resultat=""
    for (i=0;i<letter.length;i++){
        letter[i]=letter[i].toLowerCase();
        resultat+=letter[i]
    }
    return resultat+"..."
}

console.log(keepItQuiet("HOORAY")) ; // 'hooray...' (en anglais)
console.log(keepItQuiet("Doggo")) ; // 'doggo...' (en anglais)
console.log(keepItQuiet("WHAT ?!?!")) ; // 'what ?!?!...' (quoi ?!!...)
