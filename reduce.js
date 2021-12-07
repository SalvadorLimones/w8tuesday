const arr1 = [1,2,3,4,5];

let result = 0;
for (const a of arr1) {
  result += a;
}
console.log(result);

const result2 = arr1.reduce((total, x) => total + x);
console.log(result2);

const people = [
  {name: 'John', age: 2},
  {name: 'Stacy', age: 23},
  {name: 'Bob', age: 32},
  {name: 'Clark', age: 14},
  {name: 'Tom', age: 5},
  {name: 'Lewis', age: 12},
  ];

const oldest = people.reduce((max,current) => {
  if (current.age > max.age) {
    return current;
  }
  return max;
})
console.log(oldest);