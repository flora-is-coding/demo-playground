import React, { useState } from 'react';
import AddButton from './add-button';
import CardNumber from './card-number';
import CVVCode from './cvv-code';
import Name from './name';
import Date from './validation';
import './card-payment.css';
import CardList from './card-list';

export default function CardPayment () {
    const [form, setForm] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: ''
    });

    const handleAdd = () => {
        console.log(form);
        setForm(form)
    };

    // const handleRemove = () => {
    //     setForm({})
    // }

    return (
        <div className='card__container'>
            <div className="card-box">
                <div className="form form--creditcard">
                    <CardNumber onChange={cardNumber => setForm(state => ({ ...state, cardNumber: cardNumber }))} />
                    <div className="form__payment payment">
                        <Date onChange={expiryDate => setForm(state => ({...state, expiryDate: expiryDate}))} />
                        <CVVCode onChange={cvv => setForm(state => ({...state, cvv: cvv}))}/>
                    </div>
                    <Name onChange={name => setForm(state => ({...state, name: name}))}/>
                </div>
                <AddButton onClick={handleAdd}  />
            </div>
            <CardList form={form}/>
            
        </div>
    )
}