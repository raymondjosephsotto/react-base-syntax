import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid red',
        display: 'inline-block',
        padding: '10px',
        textAlign: 'center',
       
    };

    return <input 
        type="text" 
        style={inputStyle}
        onChange={props.changed} 
        value={props.currentName} />;
};

export default userInput;