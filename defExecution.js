// Function to check if a number is prime
function isPrime(num) {
   if (num <= 1) return false;
   if (num <= 3) return true;

   if (num % 2 === 0 || num % 3 === 0) return false;

   let i = 5;
   while (i * i <= num) {
       if (num % i === 0 || num % (i + 2) === 0) return false;
       i += 6;
   }

   return true;
}

// Function to generate a list of prime numbers up to n
function generatePrimeList(n) {
   const primeNumbersDiv = document.getElementById('primeNumbers');
   const primeList = document.createElement('p');
   primeList.textContent = 'Prime numbers up to ' + n + ':';

   for (let i = 2; i <= n; i++) {
       if (isPrime(i)) {
           const span = document.createElement('span');
           span.textContent = i + ', ';
           primeList.appendChild(span);
       }
   }

   // Remove the trailing comma and space
   primeList.lastChild.textContent = primeList.lastChild.textContent.slice(0, -2);

   // Append the list to the container
   primeNumbersDiv.appendChild(primeList);
}

// Cache the HTML element into a JavaScript variable
const primeNumbersDiv = document.getElementById('primeNumbers');


// Example usage: generate prime numbers up to 50
generatePrimeList(50);

// Arrow function to alert the user that the calculation is finished
const alertCompletion = () => {
   alert('Prime number calculation is finished!');
};