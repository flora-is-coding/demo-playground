import React from "react";

export default function Date (props) {

    function handleValidate (e) {
        let currValue = e.target.value;

        if(currValue === '' || currValue === null){
            currValue = ''
        } else {
            currValue = validationFormat(currValue)
        } 
        if (props.onChange) { props.onChange(currValue) }
    }

    function validationFormat (value) {

        const result = value.match(/[0-9]{1,2}/g)
        const finalResult = result.join('/');
        return finalResult
    }

    return (
        <div className="payment__valid-thru vt">
            <div className="vt__title">EXPIRY DATE</div>
            <input 
            required
            value={props.value}
            className="input vt__number" 
            maxLength='5' 
            onChange={handleValidate} 
            id="valid-thru" 
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            />
        </div>
    )
}