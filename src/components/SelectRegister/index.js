import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

import Arrow from "../../assets/icon/arrow-white.svg";

const SelectRegister = (props) => {

    const [selectToggle, setSelectToggle] = useState(null);

    const navigate = useNavigate();

    const handleSelectTogle = () => {
        selectToggle === null ? setSelectToggle(true) : setSelectToggle(!selectToggle)
    }

    const handleClick = () => {
        setSelectToggle(false);
        props.setValue(true);
    }

    return (
        <div className="select-register">
            <div
                className="select-register-header"
                style={{ borderRadius: `${selectToggle ? "4px 4px 0px 0px" : "4px"}` }}
                onClick={handleSelectTogle}
            >
                <span>Cadastrar</span>
                <img src={Arrow} alt="Flecha" style={{ transform: selectToggle ? "rotate(180deg)" : "" }} />
            </div>
            <div className={`select-register-option ${selectToggle === null ? "select-register-option-initial-state" : selectToggle ? "select-register-option-opened" : "select-register-option-closed"} `}>
                <div onClick={handleClick}>+ Matéria</div>
                <div onClick={() => { navigate("/criacao-de-turma") }}>+ Turma</div>
            </div>
        </div>
    );
}

export default SelectRegister;