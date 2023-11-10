import { useState } from "react";

import "./styles.css";

import Conclude from "../../assets/icon/conclude.svg";
import Cancel from "../../assets/icon/cancel.svg";
import Input from "../../components/Input";

const AddSubject = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="add-subject">
            <div className="add-subject-background" />
            <div className="add-subject-content">
                <div className="add-subject-content-operations">
                    <img src={Conclude} alt="Ícone de conclusão" />
                    <img src={Cancel} alt="Ícone de cancelamento" onClick={() => { props.setValue(false) }} />
                </div>
                <span className="add-subject-content-title">Cadastrar matéria</span>
                <Input
                    inputLabel="Nome"
                    inputType="text"
                    inputPlaceholder="Insira o nome"
                    setValue={setName}
                />
                <div className="add-subject-content-description">
                    <span>Descrição</span>
                    <textarea placeholder="Insira a descrição" />
                </div>
            </div>
        </div>
    );
};

export default AddSubject;