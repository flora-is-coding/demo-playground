export default function AddButton (props) {
    return (
        <div className='form__button button'>
            <button 
                className='button__add-card'
                onClick={props.onClick}
            >
            Add Card
            </button>
        </div>
    )
}