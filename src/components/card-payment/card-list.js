import './card-payment.css';
import RemoveButton from './remove-button';

export default function CardList(props) {

    const handleRemove = () => {
        console.log('removed: ', props.form)
    }

    return (
        <div className="card-list list">
            <div className="list__container">
                <ul className="list">
                    <li className='list__element'>
                        <div className="name__element">Name: {props.form.name}</div>
                        <div className="card-number__element">Card number: {props.form.cardNumber}</div>
                        <div className="date__element">Valid thru: {props.form.expiryDate}</div>
                        <div className="cvvcode__element">CVV: {props.form.cvv}</div>
                    </li>
                </ul>
            </div>
            <RemoveButton onClick={handleRemove}/>
        </div>
    )
}