import "./styles.css";

import Plus from "../../assets/icon/plus.svg";

const AddButton = (props) => {

    const handleClick = () => {
        props.setTitle(props.text)
        props.setView(true);
    }

    return (
        <button className="add-button" onClick={handleClick}>
            <span>{props.text}</span>
            <img src={Plus} alt="Ícone de adição" />
        </button>
    );
}

export default AddButton;