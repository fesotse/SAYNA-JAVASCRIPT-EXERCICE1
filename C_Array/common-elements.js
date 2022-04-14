// Écrivez une fonction `commonElements` qui accepte deux tableaux en tant que arguments.
// La fonction doit retourner un nouveau tableau contenant les éléments qui se trouvent dans les deux tableaux d'entrée. L'ordre des éléments dans le tableau de sortie n'a pas d'importance tant que la fonction renvoie les bons éléments.
function commonElements(tab1,tab2){
    let result=[];
    for (i=0;i<tab1.length;i++){
        for (j=0;j<tab2.length;j++){
            if (tab1[i]===tab2[j]){
                result.push(tab1[i])
            }
            else{
                continue
            }
        }
    }
    return result
}
let arr1 = ["a", "c", "d", "b"] ;
let arr2 = ["b", "a", "y"] ;
console.log(commonElements(arr1, arr2)) ; // ['a', 'b']
let arr3 = [4, 7] ;
let arr4 = [32, 7, 1, 4] ;
console.log(commonElements(arr3, arr4)) ; // [4, 7] ;
