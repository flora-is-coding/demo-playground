import React from "react";

export default function CardNumber (props) {
    
    function formatCreditCardNumber(value) {
        const result = value.match(/[0-9]{1,4}/g);
        const finalResult = result.join(' ');
        return finalResult
    }

    function handleChange (e) {
        let nextValue = e.target.value

        if(nextValue === '' || nextValue === null){
            nextValue = '';
        } else {
            nextValue = formatCreditCardNumber(nextValue);
        }

        if (props.onChange) { props.onChange(nextValue) }
    }

    return (
        <div className="form__card-number cn">
            <div className="cn__title">CARD NUMBER</div>
            <input 
                required
                className="input cn__number"
                value={props.value}
                onChange={handleChange} 
                maxLength='19' 
                placeholder='0000 0000 0000 0000' 
                id="card-number" 
            />
        </div>
    )
}