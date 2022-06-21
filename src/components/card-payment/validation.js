import React, {useState} from "react";

export default function Date (props) {

    const [validate, setValidate] = useState('')

    function handleValidate (e) {
        let currValue = e.target.value;

        if(currValue === '' || currValue === null){
            currValue = ''
        } else {
            currValue = validationFormat(currValue)
        } 
        console.log(currValue)
        setValidate(currValue)
        if (props.onChange) { props.onChange(currValue) }
    }

    function validationFormat (value) {

        const result = value.match(/[0-9]{1,2}/g)
        const finalResult = result.join('/');
        return finalResult
    }

    return (
        <div className="payment__valid-thru vt">
            <div className="vt__title">MM/YY</div>
            <input 
            value={validate}
            className="input vt__number" 
            maxLength='5' 
            onChange={handleValidate} 
            id="valid-thru" 
            />
        </div>
    )
}