import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', () => {
    test('debe de retornar un héroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);
    })
    
    test('debe de retornar undefined si id no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    })
    
    // Debe de retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado
    test('getHeroesByOwner debe regresar los heroes que pertenezcan a DC ', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner)
        const heroesData = heroes.filter(h => h.owner === owner);
        expect(heroes).toEqual(heroesData);
    })
    

    //Debe de retornar un arreglo con los heroes de Marvel
    //length = 2 toBe
    test('getHeroesByOwner debe regresar los heroes de Marvel ', () => {
        const heroes = getHeroesByOwner('Marvel').length;
        expect(heroes).toBe(2);
    })
    
})
