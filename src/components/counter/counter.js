import React, {useState} from "react";
import './counter.css';

export default function Counter () {
    const [counter, setCounter] = useState(0)
    return (
        <div className='counter-box'>
            <h2>Counter</h2>
            <p className="counter">{counter}</p>
            <button className='counter-decrease button' onClick={() => {
            setCounter(counter -10)
            }}>
            -10
            </button>
            <button className='counter-decrease button' onClick={() => {
            setCounter(counter -1)
            }}>
            -
            </button>
            <button className='counter-reset button' onClick={() => {
                setCounter(0)
            }}>
                Reset
            </button>
            <button className='counter-increase button' onClick={() => {
            setCounter(counter +1)
            }}>
            +
            </button>
            <button className='counter-increase button' onClick={() => {
            setCounter(counter +10)
            }}>
            +10
            </button>
        </div>
    )
}