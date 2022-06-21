import React, {useState} from "react"

export default function CVVCode (props) {

    const [cvvCode, setCvvCode] = useState('')

    function handleCVVCode (e) {
        setCvvCode(e.target.value)
        if (props.onChange) { props.onChange(e.target.value) }
        console.log(cvvCode)
    }

    return (
        <div className="payment__cvv-code cc">
            <div className="cc__title">CVV CODE</div>
            <input 
            maxLength='3'
            className="input cc__number" 
            onChange={handleCVVCode} 
            id="cvv-code" 
            />
        </div>
    )
}