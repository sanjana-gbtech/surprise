import React from 'react';
import envlope from '../images-removebg-preview.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Envolope(props) {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleClick = () => {
        navigate('/askQuestion'); // Redirect to /askQuestion
    };

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <div className='p-5 bg-danger d-flex flex-column fst-italic justify-content-center align-items-center w-75 rounded-3'>
                <h3 className='text-white'>Hello Love</h3>
                <img
                    src={envlope}
                    alt="image"
                    className='w-50'
                    style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }} // Add cursor and transition
                    onClick={handleClick} // Add onClick handler
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}  // Zoom in on hover
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}   // Zoom out on hover
                />
            </div>
        </div>
    );
}

export default Envolope;