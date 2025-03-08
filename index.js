// Code your solutions in this file
// const gifts = ['teddy bear', 'drone', 'doll']

// function wrapGift (gift) {
//     console.log (`Wrapped ${gift} and added a bow!`)
// }
// wrapGift(gifts[0])
// wrapGift(gifts[1])
// wrapGift(gifts[2])

// The for loop is made up of four statements in the following structure
// for ([initialization], [condition], [iteration]) {
//     [loop body]
// }
//Initialization- used to initialize a counter variable
//condition - an expression evaluated before each pass through the loop
//Iteration-operation executed at the end of each iteration(incrementing or decrementing)
// loop body, code that runs  each pass through the loop

// for (let age = 30 ; age < 40; age++) {
//     console.log (`I'm ${age} years old. Happy birthday to me!`)
//     debugger;
// }
// for is used to iterate over every element in an array
const gifts = ['teddy bear', 'drone', 'doll']

function wrapGifts (gifts) { 
for (let i = 0 ; i < gifts.length; i++) {
    console.log (`Wrapped ${gifts[i]} and added a bow!`)
debugger

}
return gifts
}

wrapGifts(gifts)

function writeCards (names, event) {
    let myArray = []
    for (let t = 0; t < names.length; t++){
        let message = `Thank you, ${names[t]}, for the wonderful ${event} gift!`
        myArray.push (message)

    }
    return myArray
}

function countDown (number) {
    
    while (number >=0) {
        console.log (number)
        number--
    }
}
countDown(10)