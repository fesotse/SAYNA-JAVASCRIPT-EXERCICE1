// Ici nous allons écrire une fonction `stringsToNum` qui accepte un tableau de chaînes de caractères comme argument.
function stringsToNum(compte){
    let tab=[];
    for (let i=0; i<compte.length; i++){
        tab.push(compte[i].length);
    }
    return tab;
}
console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 4]
console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]
