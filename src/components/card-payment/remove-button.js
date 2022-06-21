export default function RemoveButton (props) {
    return (
        <div className='form__button button'>
            <button 
                className='button__remove-card'
                onClick={props.onClick}
            >
            Remove Card
            </button>
        </div>
    )
}