import "./styles.css";

import Plus from "../../assets/icon/plus.svg";

const AddButton = (props) => {

    const handleClick = () => {
        if (props.text === "Adicionar conteúdo" || props.text === "Editar conteúdo") {
            // props.setTitle("Conteúdo")
            props.setView(true);
        } else if (props.text === "Adicionar anotação" || props.text === "Editar anotação") {
            // props.setTitle("Anotação") 
            props.setView(true);
        } else { return }
    }

    return (
        <button className="add-button" onClick={handleClick}>
            <span>{props.text}</span>
            <img src={Plus} alt="Ícone de adição" />
        </button>
    );
}

export default AddButton;