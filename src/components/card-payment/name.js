import React, {useState} from "react";

export default function Name (props) {

    const [name, setName] = useState('')

    function validateName (value) {
        const result = value.match(/^[a-zA-ZĄ-Źą-ź\s]*$/g)

        const finalResult = result.join();
        console.log(finalResult);

        return finalResult
    }

    function handleName (e) {
        let nextValue = e.target.value

        if(nextValue === '' || nextValue === null){
            nextValue = ''
        } else {
            nextValue = validateName(nextValue)
        }
        setName(nextValue);
        if (props.onChange) { props.onChange(nextValue) }
        console.log(nextValue)
    }

    return (
        <div className="form__name name">
            <div className="name__title">NAME</div>
            <input 
            value={name}
            className="input name__text" 
            onChange={handleName} 
            placeholder='John Snow' 
            type='text' 
            id="cvv-code" 
            />
        </div>
    )
}