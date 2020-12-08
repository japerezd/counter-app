import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar Hola Jorge! ', () => {
        const nombre = 'Jorge';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre +'!');
    })

    // getSaludo debe de retornar Hola Alberto! si no hay argumento nombre
    test('getSaludo retorna Hola Alberto! sin argumento', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Alberto!');
    })
    
})