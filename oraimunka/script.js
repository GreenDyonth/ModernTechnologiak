//print
console.log('Hello There!')
console.log(5 + 7)
console.log('Hello' + 5)
console.log('Az életkorom 5 év múlva: ' + 5 + 5)
console.log('Az életkorom 5 év múlva: ' + (5 + 5))
console.log('5' + 5)
console.log(5 + '5')
console.log('5' - 5)
console.log('Console' - 5)
console.log(true && true) //and
console.log(true || false) // or
/*
nem(A és B) == nemA vagy nemB
nem(A vagy B) =/= nemA vagy nemB
false =/= true
nem(A vagy B) == nemA és nemB
*/
console.log(true + 5)
console.log(false + 5)
console.log(true - 5)
console.log(false - 5)
console.log(true == 1)
console.log(true == 0)
if (2) { console.log('1. Igaz volt') }
if (0) {
    console.log('2. Igaz volt')
}
if (-1) {
    console.log('3. Igaz volt')
}
//Igazjellegeű: truthy <-> falsey
//Minden ami nem nulla vagy üres abba belelép
if ('') {
    console.log('4. Igaz volt')
}
if ('0') {
    console.log('5. Igaz volt')
}
console.log('0' == 0)
console.log(null)
console.log(undefined)
if (null || undefined) {
    console.log('6. Igaz volt')
}
// Alt+Shift+f után szépen néz ki a kód
console.log(null+5)
console.log(undefined+5)
console.log(null + undefined)
console.log(null + 'alma')
console.log(null + 'alma' + undefined)

// pythonban a lista itt a tömb
console.log([1,2,3,4,5])
console.log([1,'alma',2,'katica',true, null])
console.log([1,2,3,4,5].length)
let tomb = [6,7,8,9]
console.log(tomb[0])
console.log(tomb + 5)
tomb.push(5)
console.log(tomb)
tomb['alma'] = 100
console.log(tomb['alma'])
console.log(tomb.alma)
console.log(tomb[null])
//hogyan lehet hibakódot elérni
console.error('alma')
