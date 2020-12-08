const { retornaArreglo } = require("../../base/07-deses-arr");

describe('Pruebas en 07-deses-arr', () => {
    test('retornaArreglo debe de retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo(); //['ABC',123];

        expect(letters).toBe('ABC')
        expect(typeof letters).toBe('string');
       
        expect(numbers).toBe(123);
        expect(typeof numbers).toBe('number');
    })
    
})
