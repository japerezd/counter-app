import React from 'react';
import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import PrimeraApp from '../PrimeraApp';
 
describe('Pruebas en PrimeraApp', () => {
    // test('debe de mostrar el mensaje "Hola, soy Goku" ', () => {
    //     const saludo = "Hola, soy Goku";
    //     const {getByText} = render(<PrimeraApp saludo = { saludo }/>);

    //     expect(getByText(saludo)).toBeInTheDocument();    
    // });

    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />); 

        expect( wrapper ).toMatchSnapshot();
    });
    

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtítulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo = {saludo} 
                subtitulo = {subtitulo}
            />
        ); 

        // busca un parrafo dentro de nuestro wrapper (componente)
        const textoParrafo = wrapper.find('p').text(); //funciona como querySelector
        expect(textoParrafo).toBe(subtitulo);
    });
    
    
});
