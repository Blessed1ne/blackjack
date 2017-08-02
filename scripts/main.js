/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/




function handValue (hand) {
  let sum = 0;
  let card = 0
for (var i = 0; i < hand.length; i++) {
  if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K" ) {
    card = 10;
    sum += card
  } else if (hand[i] === "A") {
    card = 11
    sum += card;
  }
  else {
   sum = sum + parseInt(hand[i])
console.log(sum)
  }
}
return; sum

}






/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
