const add = (a, b) => a + b;
const greetingsGenerator = (name = 'Anonymous') => `Hello I am ${name}`;

test('should add two numbers', () => {
  const result = add(4, 3);

  expect(result).toBe(7);
});

test('should have the name Mike', () => {
  const result = greetingsGenerator('Mike');

  expect(result).toBe('Hello I am Mike');
});

test('should no have a name', () => {
  const result = greetingsGenerator();

  expect(result).toBe('Hello I am Anonymous');
});
