const people = require('./people');

test('people function', () => {
 expect(people("pedro", 23).age).toBe(23)
 expect(people("pedro", 23).name).toBe("pedro")
 expect(Object.keys(people("pedro", 23)).length).toBe(2)
})
