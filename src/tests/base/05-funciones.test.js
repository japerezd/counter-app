import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        // toEqual es para verificar que tenga las mismas propiedades los objetos
        expect(user).toEqual(userTest);
    })
  
    test('getUsuarioActivo debe retornar un objeto con el nombre pasado en parametro ', () => {
        const nombre = 'Jorge';
        // const userActiveTest = {
        //     uid: 'ABC567',
        //     username: nombre
        // };

        const userActive = getUsuarioActivo(nombre);
        expect(userActive).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
    
})
