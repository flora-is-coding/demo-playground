import React from "react"

export default function CVVCode (props) {

    function handleCVVCode (e) {
        if (props.onChange) { props.onChange(e.target.value) }
    }

    return (
        <div className="payment__cvv-code cc">
            <div className="cc__title">CVV CODE</div>
            <input 
            required
            value={props.value}
            maxLength='3'
            className="input cc__number" 
            onChange={handleCVVCode} 
            id="cvv-code" 
            />
        </div>
    )
}