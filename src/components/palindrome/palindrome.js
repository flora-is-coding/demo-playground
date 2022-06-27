import { useState } from "react";
 import './palindrome.css';

export default function Palindrome () {

    const [currentResult, setResult] = useState(null);
    const [currentValue, setCurrentValue] = useState('');

    function reversedArray (arr) {
        const newArray = [];
        for(let i = arr.length -1; i >= 0; i --){
            newArray.push(arr[i]);
        } 
        return newArray;
    }

    function onlyWords (arr) {
        const regular = /[a-zA-Z]/
        return arr.filter(char => regular.test(char));
    }

    function isPalindrome (str) {
        console.log('original:',str)

        
        const lowerCased = str.toLowerCase() // String ma znaki
        console.log('lower case:',lowerCased);

        const splited = lowerCased.split('') // Array<String> ma znaki
        console.log('Splited:',splited)

        const noWhiteCharacter = onlyWords(splited) // Array<String> nie ma znakow
        console.log('noWhiteCharacter:',noWhiteCharacter)

        const noWhiteCharacterString = noWhiteCharacter.join('');
        // const reversed = splited.reverse()
        // console.log('Reversed:',reversed)

        const reversed = reversedArray(noWhiteCharacter); // Array<String>
        console.log('Reversed:',reversed)

        const joined = reversed.join(''); // String nie ma znakow
        console.log('Joined:', joined);
        
        return noWhiteCharacterString === joined;
    }

    function handleClick () {

        if(currentValue === '' || currentValue === null){
            currentValue = ''
        } else {
            const newResult = isPalindrome(currentValue)
            if (newResult) {
                console.log('true',currentResult)
                console.log("✔")
            } else {
                console.log('false',currentResult)
                console.log('✘')
            }
            setResult(newResult)
        }
    }

    function handleChange (e) {
        const nextValue = e.target.value
        setCurrentValue(nextValue);
    }

    return (
        <div className="palindrome__box">
            <div className="palindrome__context">
                <h3 className="palindrome__title">Palindrome checker</h3>
                <div className="palindrome__input">
                    <input className="input__check"  onChange={handleChange}  />
                </div>
                <div className="palindrome__button">
                    <button className="button__check" onClick={handleClick} >check</button>
                </div>
                <div className="palindrome__result">
                    {
                    currentResult === null
                    ? <div className="result__null"></div>
                    : (currentResult
                    ? <div  className="result result--true">✔</div>
                    : <div className="result result--false">✘</div>)
                    }
                </div>
            </div>
        </div>
    )
}