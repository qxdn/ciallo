import React from 'react';
import './index.css';

const Jumper = ({ text = "Ciallo～(∠・ω< )⌒★", dur = 1.0 }) => {
    const n = text.length;

    return (
        <div className='box'>
            {[...text].map((item, index) => <span key={index} style={{ animationDelay: `${dur * index / n}s` }}>{item}</span>)}
        </div>
    )
}

export default Jumper;