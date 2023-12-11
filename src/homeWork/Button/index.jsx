import React from 'react';

const Button = ({children,onClick}) => {
    return (
        <button onClick={onClick} style={{ color:'black',padding:'20px', backgroundColor:'white' }}>
            {children}
        </button>
    );
};

export default Button;