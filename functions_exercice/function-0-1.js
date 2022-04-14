let greet = function () {
    console.log("hello") ;
    console.log("programmeurs") ;
    } ;
let whistle = function () {
    console.log("doot") ;
} ;
console.log("premier") ;
console.log("second") ;
greet() ;
console.log("third") ;
console.log("quatrième") ;
whistle() ;

//function-0-2
let exclaim = function (str) {
    let capitalized = str.toUpperCase() ;
    return capitalized + " !!";
} ;
let result = exclaim("potato") ;
console.log(result) ;
console.log(result.length) ;
console.log(result[0]) ;
console.log(result[result.length - 1]) ;

//function-0-3
let average = function (num1, num2) {
    console.log("calcul...") ;
    return (num1 + num2) / 2 ;
} ;
console.log(average(5, 10)) ;
console.log(average(20, 26)) ;
console.log(average(50, 100) + 2) ;
let a = 21 + 3 ;
let b = 20 ;
let n = average(a, b) ;
console.log(average(n, 18)) ;

    