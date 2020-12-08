import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas para CounterApp', () => {

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe demostrar el valor por defecto que es 100 ', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        
        const counter = wrapper.find('h2').text();

        expect(counter).toBe('100');
    });
    
    test('debe de incrementar con el boton +1 ', () => {
        wrapper.find('button').at(0).simulate('click');  //Se hace click sobre +1
        const counterText = wrapper.find('h2').text(); 
        expect(counterText).toBe('11');
    });
    
    test('debe de decrementar con el boton -1 ', () => {
        wrapper.find('button').at(2).simulate('click'); //Se hace click sobre -1
        const counterText = wrapper.find('h2').text(); 
        expect(counterText).toBe('9');
    });

    test('debe de colocar el valor por defecto con el boton de Reset ', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');  //se esta haciendo "click"
        wrapper.find('button').at(1).simulate('click');  //se esta haciendo "click"
        const counterText = wrapper.find('h2').text(); 
        expect(counterText).toBe('105');
    })
    
})
