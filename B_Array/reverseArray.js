// Ecrivez une fonction `reverseArray` qui accepte un tableau comme argument.

// La fonction doit retourner un tableau contenant les éléments du tableau d'origine dans l'ordre inverse.
function reverseArray(normal){
    let reverse=[];
    for (i in normal){
        reverse.unshift(normal[i]);
    }
    return reverse;
}
console.log(reverseArray(["Four", "Five", "Six", "Seven"])) ;
console.log(reverseArray([6, 1, 7])) ;
