import "./styles.css";

const Button = (props) => {

    return(
        <button onClick={props.buttonClick} className={`button ${props.buttonColor === "default" ? "buttonBlue" : "buttonRed" }`}>{props.buttonText}</button>
    );
}

export default Button;