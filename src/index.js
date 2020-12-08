import React from 'react'; //Nos permite usar JSX 
import ReactDOM from 'react-dom'; //Nos permite renderizar sobre HTML
// import PrimeraApp from './PrimeraApp'; //importando el componente
import CounterApp from './CounterApp'

import './index.css' //importando css


const divRoot = document.querySelector('#root');
// lo que quiero renderizar, en dónde lo quiero colocar
// ReactDOM.render(<PrimeraApp saludo="Hola, soy Goku"/>, divRoot);
ReactDOM.render(<CounterApp />, divRoot);