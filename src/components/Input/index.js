import "./styles.css";

const Input = (props) => {

    return(
        <div className="input">
            <span>{props.inputLabel}</span>
            <input type={props.inputType} placeholder={props.inputPlaceholder} onChange={(e)=>props.setValue(e.target.value)} />
        </div>
    );
}

export default Input;