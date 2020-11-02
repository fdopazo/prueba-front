import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
}) => (
        <button style={{ color: 'red' }}></button>
    );

Button.propTypes = {
    //   Acción que se ejecutan al presionar el botón
    onPress: PropTypes.func.isRequired,
    // Texto dentro del botón
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    labelColor: PropTypes.string,
    labelSize: PropTypes.number,
    // Implementar estilos personalizados
    style: PropTypes.any,
    /** Un botón oscuro mostrará el texto claro y viceversa. Solo aplicable
       *  para el modo 'contained'. */
    darkMode: PropTypes.bool,
    /** Se puede cambiar el modo para ajustar el estilo para darle el énfasis deseado. */
    buttonMode: PropTypes.oneOf(['text', 'outlined', 'contained']).isRequired,
    /** Icono que se va a mostrar a la izquierda del texto. */
    iconName: PropTypes.string,
    /** Muestra un indicador de carga al pasarle este parametro  */
    loading: PropTypes.bool,
    /** Desabilita el boton al pasarle este parametro */
    disabled: PropTypes.bool,
    /** Pone en letras mayusculas el texto del botón, 'true' por default. */
    uppercase: PropTypes.bool,
    /** Esto lo lee el lector de pantalla cuando el usuario toca el botón. */
    accessibilityLabel: PropTypes.string,
};

Button.defaultProps = {
    darkMode: false,
    style: {},
    labelColor: 'white',
    labelSize: 16,
    iconName: undefined,
    loading: false,
    disabled: false,
    uppercase: false,
    accessibilityLabel: '',
};

export { Button };