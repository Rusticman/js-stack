import Dog from './dog';

test('Dog.bark', () => {
  const dogTest = new Dog('Test');
  expect(dogTest.bark()).toBe('Wah, wah I am Test');
});
