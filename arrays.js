var a = [];
var b = [3,5,7];
console.log(a,b);

b.push(9);
b.push(11);
console.log(b);

var c = b.pop();
console.log(b,c);

b.unshift(1);
b.unshift(-1);
console.log('after unshift', b);

var d = b.shift();
console.log('after shift', b, d);

var isOdd = b.every(function(current, index, array){
  console.log(current, index, array);
  return current%2;
});

console.log('isOdd:', isOdd);


var animals = ['dog', 'cat', 'mouse', 'goat', 'bear'];
var evenLengthedAnimals = animals.filter(function(element, index, array){
  return !(element.length%2);
});
console.log('animals', animals, 'evenLengthedAnimals', evenLengthedAnimals);

animals.forEach(function(element, index, array){
  //don't return anything from this one
  console.log('look I am looping', element );
});

// this will give -1 if not present
var indexOfMouse = animals.indexOf('mouse');
console.log(indexOfMouse);

//join is the opposite of split
var joinedAnimals = animals.join(' and ');

var primes = [1, 3, 5, 7, 11, 13, 17, 19];
//don't have to put in all the arguments. Only the ones you need -- mostly only element

//map makes a new array
var squaredPrimes = primes.map(function(element, index, array){
  return element*element;
});
console.log(primes, squaredPrimes);

// reduce() reduces left to right, reduceRight() reduces right to left

primes.reverse();
console.log('the reversed primes are ', primes);

// array slicing

var primes1 = primes.slice();
var primes2 = primes.slice(-2);
console.log('p1', primes1, 'p2', primes2);


var morenums = [4, 5, 6, 8];
morenums.splice(1,1);
console.log('spliced a 5 from morenums', morenums);

//(to splice a number in)
morenums.splice(1,0,77);
console.log('spliced a 77 into morenums', morenums);
