import React from 'react';
import envlope from '../images.jpg';
function Envolope(props) {
    return (
        <div className='d-flex justify-content-center align-items-center ' style={{height:'100vh'}}>
            <img src={envlope} alt="image" className='w-25'   />
        </div>
    );
}

export default Envolope;