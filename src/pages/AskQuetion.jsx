import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import ques from '../ques.jpg'
function AskQuestion() {
    const [yesButtons, setYesButtons] = useState([]);
    const cardRef = useRef(null);
    const noButtonRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (cardRef.current && noButtonRef.current) {
                const cardRect = cardRef.current.getBoundingClientRect();
                const noRect = noButtonRef.current.getBoundingClientRect();
                
                const newButtons = Array.from({ length: 10 }, () => generateRandomPosition(cardRect, noRect));
                setYesButtons(prevButtons => [...prevButtons, ...newButtons]);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const generateRandomPosition = (cardRect, noRect) => {
        let x, y;
        const priorityArea = Math.random() < 0.6; // 60% chance to spawn near the "No!" button

        if (priorityArea) {
            // Spawn closer to the "No!" button
            const offsetX = (Math.random() - 0.5) * 60; // Range: -30px to 30px
            const offsetY = (Math.random() - 0.5) * 60;
            x = noRect.left - cardRect.left + noRect.width / 2 + offsetX;
            y = noRect.top - cardRect.top + noRect.height / 2 + offsetY;
        } else {
            // Spawn anywhere inside the card
            x = Math.random() * cardRect.width;
            y = Math.random() * cardRect.height;
        }

        return { id: Math.random(), left: `${x}px`, top: `${y}px` };
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-80 position-relative">
            <div  className="card border-0 p-4 position-relative" style={{ height: '', width: '400px', overflow: 'hidden' }}>
                <div className="card-body text-center">
                    <div>
                        <img src={ques} alt="" className='w-50' />
                    </div>
                    <h5 className="card-title my-2 font-bold">Will You Be My Valentine?</h5>
                    <div className=" mt-5 d-flex justify-content-center align-items-center position-relative" ref={cardRef} id='buttonDiv' style={{ height: '30vh' }}>
                        {/* Dynamically generated "Yes!" buttons */}
                        {yesButtons.map(button => (
                            <a
                                key={button.id}
                                href="#"
                                className='btn btn-danger position-absolute'
                                onClick={() => navigate('/happy')}

                                style={{
                                    
                                    left: button.left,
                                    top: button.top,
                                    zIndex: 3,
                                    transform: 'scale(0)',
                                    animation: 'pop 0.3s ease-out forwards'
                                }}
                            >
                                Yes!
                            </a>
                        ))}
                           <a
                                href="#"
                                className='btn btn-danger mx-2'
                                onClick={() => navigate('/happy')}
                                style={{
                                    zIndex: 3,
                                    transform: 'scale(0)',
                                    animation: 'pop 0.3s ease-out forwards',
                                }}
                            >
                                Yes!
                            </a>
                      
                            <a
                                href="#"
                                className='btn btn-outline-danger position-relative'
                                ref={noButtonRef}
                                style={{ zIndex: 1 }}
                            >
                                No!
                            </a>
                    </div>
                </div>
            </div>

            <style>
                {`
                    @keyframes pop {
                        0% { transform: scale(0); opacity: 0; }
                        100% { transform: scale(1); opacity: 1; }
                    }
                `}
            </style>
        </div>
    );
}

export default AskQuestion;
