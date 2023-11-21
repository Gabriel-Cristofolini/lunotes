import "./styles.css";

import Conclude from "../../assets/icon/conclude.svg";
import Cancel from "../../assets/icon/cancel.svg";
import { useState } from "react";

const AddDayClass = (props) => {

    const [date, setDate] = useState(null);

    return (
        <div className="add-day-class">
            <div className="add-day-class-background" />
            <div className="add-day-class-content">
                <div className="add-day-class-content-operations">
                    <img src={Conclude} alt="Ícone de conclusão" />
                    <img src={Cancel} alt="Ícone de cancelamento" onClick={()=>{props.setAddDayClassView(false)}} />
                </div>
                <span className="add-day-class-content-title">Adicionar aula</span>
                <div className="add-day-class-content-date">
                    <span>Descrição</span>
                    <input type="date" placeholder="Insira a descrição" />
                </div>
            </div>
        </div>
    );
};

export default AddDayClass;