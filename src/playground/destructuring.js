/*const person = {
  name: 'Philip',
  age: 21,
  location: {
    city: 'Tampa',
    temp: 70,
  },
};

const { name = 'Anonymous', age } = person;

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`it is ${temperature} in ${city}.`);
}

console.log(`${name} is ${age}!`);*/

/*const book = {
  title: 'Eat Ass',
  author: 'Philip Kaim',
  publisher: {
    name: 'BestBookers',
  },
};

const { name: publisherName = 'Self-Published' } = book.publisher;
const { title } = book;

console.log(`${publisherName} says the book ${title}, is the best book of the year!`);*/

/*const address = ['19234 Climbing Aster dr', 'Tampa', 'Florida', 33647];

const [, , state] = address;

console.log(`You are in ${state}`);*/

const coffee = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = coffee;

console.log(`A medium ${drink} is ${medium}.`);
