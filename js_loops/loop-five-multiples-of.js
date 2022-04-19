// Ecrivez une fonction nommée `fiveMultiplesOf` qui accepte un nombre comme argument. 
// La fonction doit imprimer les cinq premiers multiples du nombre donné. 
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans le terminal.
function fiveMultiplesOf(x){
    for (i=1;i<6;i++){
        console.log(x*i)
    }
}
fiveMultiplesOf(7) ;
// imprime
// 7
// 14
// 21
// 28
// 35
fiveMultiplesOf(3) ;
// imprime
// 3
// 6
// 9
// 12
// 15
