/*
Part 2: Prime Time
Now we will move onto something slightly more complex.
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.
*/

// Recursive Function
function nextPrimeFinder(n) {
  if (n % 2 === 0) {
    return nextPrimeFinder(n + 1);
  }
  let isPrime = true;
  for (let m = 3; m ** 2 <= n; m += 2) {
    if (n % m === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(n + ' is the prime number');
  } else {
    return nextPrimeFinder(n + 1);
  }
}

nextPrimeFinder(9);

// Loop
let number = 9;

while (true) {
  if (number === 1 || number % 2 === 0) {
    number++;
  }
  let isPrime = true;
  for (let m = 3; m ** 2 <= number; m += 2) {
    if (number % m === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(number + ' is the prime number');
    break;
  } else {
    number++;
  }
}
