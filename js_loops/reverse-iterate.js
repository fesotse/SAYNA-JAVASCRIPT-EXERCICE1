// Écrivez une fonction `reverseIterate` qui accepte une chaîne de caractères comme argument. 
// La fonction doit imprimer les caractères de la chaîne un par un, dans l'ordre inverse. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans le terminal.
function reverseIterate(string){
    for (i=string.length-1;i>=0;i--){
        console.log(string[i])
    }
}
reverseIterate("carrot") ;
// imprime
// t
// o
// r
// r
// a
// c
reverseIterate("box") ;
// imprime
// x
// o
// b
