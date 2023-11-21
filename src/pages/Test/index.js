import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header";
import GradeTable from "../../components/GradeTable";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Test = () => {

    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/turma");
    }
    
    const handleCancel = () => {
        navigate("/turma");
    }

    return(
        <div className="test">
            <Header />
            <div className="test-content">
                <span className="test-content-title">Adicionar avaliação</span>
                <section className="test-content-section">
                    <p className="test-content-section-subtitle">Informações gerais</p>
                    <div className="test-content-section-container-input">
                        <Input inputLabel="Nome" inputType="text" inputPlaceholder="Insira o nome" setValue={setName} />
                        <Input inputLabel="Peso" inputType="number" inputPlaceholder="Insira o peso (ex: 10.0)" setValue={setWeight} />
                    </div>
                    <div className="test-content-section-description">
                        <span>Descrição</span>
                        <textarea placeholder="Insira a descrição" />
                    </div>
                </section>
                <section className="test-content-section">
                    <p className="test-content-section-subtitle">Período</p>
                    <div className="test-content-section-container-date">
                        <div className="test-content-section-date">
                            <span>Início</span>
                            <input type="text" placeholder="00/0000 00:00" />
                        </div>
                        <div className="test-content-section-date">
                            <span>Fim</span>
                            <input type="text" placeholder="00/0000 00:00" />
                        </div>
                    </div>
                </section>
                <section className="test-content-section">
                    <p className="test-content-section-subtitle">Notas</p>
                    <GradeTable />
                </section>
                <div className="test-content-submit">
                    <Button
                        buttonColor="default"
                        buttonText="Salvar"
                        buttonClick={handleSubmit}
                        />
                    <Button
                        buttonColor=""
                        buttonText="Cancelar"
                        buttonClick={handleCancel}
                    />
                </div>
            </div>
        </div>
    );
}

export default Test;