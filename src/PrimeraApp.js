// import React, {Fragment} from 'react'
import React from 'react'; //esto nos permite usar JSX
import PropTypes from 'prop-types'

//Functional Components
const PrimeraApp = ({saludo, subtitulo}) => {
    
    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{subtitulo}</p>
        </>
  
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp;