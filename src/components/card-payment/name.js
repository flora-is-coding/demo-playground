import React from "react";

export default function Name (props) {

    function validateName (value) {
        const result = value.match(/^[a-zA-ZĄ-Źą-ź\s]*$/g)

        const finalResult = result.join();

        return finalResult
    }

    function handleName (e) {
        let nextValue = e.target.value

        if(nextValue === '' || nextValue === null){
            nextValue = ''
        } else {
            nextValue = validateName(nextValue)
        }
        if (props.onChange) { props.onChange(nextValue) }
    }

    return (
        <div className="form__name name">
            <div className="name__title">NAME</div>
            <input 
            required
            value={props.value}
            className="input name__text" 
            onChange={handleName} 
            placeholder='John Snow' 
            type='text' 
            id="cvv-code" 
            />
        </div>
    )
}