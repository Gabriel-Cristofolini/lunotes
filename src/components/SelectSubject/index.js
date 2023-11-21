import { useState } from "react";

import "./styles.css";

import Arrow from "../../assets/icon/arrow-black.svg";

const SelectSubject = () => {

    const [selectToggle, setSelectToggle] = useState(null);
    const [headerText, setHeaderText] = useState("Selecione a matéria");

    const handleSelectTogle = () => {
        selectToggle === null ? setSelectToggle(true) : setSelectToggle(!selectToggle)
    }

    const handleClick = (e) => {
        setHeaderText(e.currentTarget.getAttribute('name'));
        setSelectToggle(false);
    }

    return (
        <div className="select-subject">
            <div
                className="select-subject-header"
                style={{ borderRadius: `${selectToggle ? "4px 4px 0px 0px" : "4px"}`, color: `${headerText === "Selecione a matéria" ? "#5c255c" : "#333"}` }}
                onClick={handleSelectTogle}
            >
                <span>{headerText}</span>
                <img src={Arrow} alt="Flecha" style={{ transform: selectToggle ? "rotate(180deg)" : "" }} />
            </div>
            <div className={`select-subject-option ${selectToggle === null ? "select-subject-option-initial-state" : selectToggle ? "select-subject-option-opened" : "select-subject-option-closed"} `}>
                <div name="Opção 01" onClick={(e) => { handleClick(e) }}>Opção 01</div>
                <div name="Opção 02" onClick={(e) => { handleClick(e) }}>Opção 02</div>
            </div>
        </div>
    );
};

export default SelectSubject;