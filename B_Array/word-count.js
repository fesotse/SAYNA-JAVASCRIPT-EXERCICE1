// Ecrivez une fonction `wordCount(sentence, targetWords)` qui accepte une chaîne de phrase et un tableau de mots cibles. 

// La fonction doit retourner un compte du nombre de mots de la phrase qui se trouvent dans `targetWords`.
function wordCount(str1,str2){
    let nombre_trouve=0;
    for (i=0;i<str2.length;i++){
        var letter=str2[i];
        let trouve=str1.includes(letter);
        if (trouve==true){
            nombre_trouve+=1;
        }
        else if(trouve==false){
            nombre_trouve+=0;
        }
    }
    return nombre_trouve
}

console.log(wordCount("ouvrez la fenêtre s'il vous plaît", ["s'il vous plaît", "ouvrir", "désolé"])) ; // 2
console.log(wordCount("conduire au cinéma", ["le", "conducteur"])) ; // 1
console.log(wordCount("puis-je avoir cette canette", ["can", "je"])) ; // 3
