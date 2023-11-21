import { useState } from "react";

import "./styles.css";

import Conclude from "../../assets/icon/conclude.svg";
import Cancel from "../../assets/icon/cancel.svg";
import Input from "../../components/Input";
import FragmentPointTable from "../FragmentPointsTable";

const AddFragmentPoints = (props) => {

    const [point, setPoint] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="add-fragments">
            <div className="add-fragments-background" />
            <div className="add-fragments-content">
                <div className="add-fragments-content-operations">
                    <img src={Conclude} alt="Ícone de conclusão" />
                    <img src={Cancel} alt="Ícone de cancelamento" onClick={() => { props.setValue(false) }} />
                </div>
                <span className="add-fragments-content-title">Cadastrar matéria</span>
                <div className="add-fragments-content-table">
                    <FragmentPointTable />
                </div>
                <Input
                    inputLabel="Pontos"
                    inputType="number"
                    inputPlaceholder="Insira a quantidade (ex: 0.2)"
                    setValue={setPoint}
                />
            </div>
        </div>
    );
};

export default AddFragmentPoints;