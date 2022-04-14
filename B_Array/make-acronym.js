// Ecrivez une fonction `makeAcronym` qui accepte une chaîne de phrases comme argument.
// La fonction doit retourner une chaîne de caractères contenant le premier caractère de chaque mot de chaque mot de la phrase en lettres capitales.
function makeAcronym(text){
    let list=""
    const myArray=text.split(" ");
    for (i=0; i<myArray.length;i++){
        let word=myArray[i];
        list+=word[0].toUpperCase();
    }
    return list    
}
console.log(makeAcronym("los Angeles")) ; // LA
console.log(makeAcronym("same stuff different day")) ; // SSDD
console.log(makeAcronym("Laugh out loud")) ; // LOL
console.log(makeAcronym("don't over think stuff")) ; // DOTS