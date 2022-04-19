// Ecrivez une fonction `fizzBuzz` qui accepte un nombre max comme argument. 
// La fonction doit imprimer tous les nombres inférieurs ou égaux à max qui sont divisibles par 3 ou 5, mais pas par 3 et 5.
// La fonction n'a pas besoin de retourner une valeur. Elle doit simplement s'afficher dans le terminal.
function fizzBuzz(x){
    for (i=1;i<=x;i++){
        if (i%3==0){
            if (i%5!=0){
                console.log(i)
            }
        }
        else if (i%5==0){
            if (i%3!=0){
                console.log(i)
            }
        }
    }
}
fizzBuzz(18) ;
// imprime
// 3
// 5
// 6
// 9
// 10
// 12
// 18
fizzBuzz(33) ;
// imprime
// 3
// 5
// 6
// 9
// 10
// 12
// 18
// 20
// 21
// 24
// 25
// 27
// 33
