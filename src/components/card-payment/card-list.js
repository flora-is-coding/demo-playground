import './card-payment.css';
import RemoveButton from './remove-button';

export default function CardList(props) {

    const currForm = props.addedForm;

    return (
        <div className="card-list list">
            <div className="list__container">
                <ul className="list">
                    { currForm && currForm.map((item, index) => (
                        <li className='list__element'key={index} >
                            <div className="name__element">Name: {item.name}</div>
                            <div className="card-number__element">Card number: {item.cardNumber}</div>
                            <div className="date__element">Valid thru: {item.expiryDate}</div>
                            <div className="cvvcode__element">CVV: {item.cvv}</div>
                            <RemoveButton onClick={() => props.handleRemove(index)}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}