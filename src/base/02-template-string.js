


const nombre   = 'Jorge';
const apellido = 'Pérez';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre='Alberto') {
    return 'Hola ' + nombre + '!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );