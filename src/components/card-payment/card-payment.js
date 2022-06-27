import React, { useState } from 'react';
import AddButton from './add-button';
import CardNumber from './card-number';
import CVVCode from './cvv-code';
import Name from './name';
import Date from './date';
import './card-payment.css';
import CardList from './card-list';


export default function CardPayment () {
    const initialState = {
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: ''
    }

    const [form, setForm] = useState(initialState);
    const [addedForm, setAddedForm] = useState([])
    const [isShown, setIsShown] = useState(false);

    const handleMouseOver = () => {
        setIsShown(true);
    }

    const handleMouseOut = () => {
        setIsShown(false);
    }

    const handleAdd = () => {
        const nextAddedForm = [ ...addedForm, form ];

        setAddedForm(nextAddedForm);
        setForm(initialState)
    };

    const handleRemove = (index) => {
        setAddedForm((addedForm) => addedForm.filter((_,i) => i !== index))
    }

    return (
        <div className='card__container'>
            <div className="card-box">
                <div className="form form--creditcard">
                    <CardNumber value={form.cardNumber} onChange={cardNumber => setForm(state => ({ ...state, cardNumber: cardNumber }))} />
                    <div className="form__payment payment">
                        <div className='date__wrapper'>
                        {isShown && <div className='payment__information'>The pattern is the month and then the year - MM / YY</div>}
                        <Date 
                        value={form.expiryDate} 
                        onMouseEnter={handleMouseOver} 
                        onMouseLeave={handleMouseOut}
                        onChange={expiryDate => setForm(state => ({...state, expiryDate: expiryDate}))} />
                        
                        </div>
                        <CVVCode value={form.cvv} onChange={cvv => setForm(state => ({...state, cvv: cvv}))}/>
                    </div>
                    <Name value={form.name} onChange={name => setForm(state => ({...state, name: name}))}/>
                </div>
                <AddButton onClick={handleAdd}  />
            </div>
            <CardList 
            form={form} 
            addedForm={addedForm} 
            handleRemove={handleRemove} 
            />
        </div>
    )
}