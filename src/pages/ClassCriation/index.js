import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

import Header from "../../components/Header";
import StudentTable from "../../components/StudentTable";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SelectSubject from "../../components/SelectSubject";

const ClassCriation = () => {

    const [name, setName] = useState("");
    const [subject, setWeight] = useState("");
    const [semester, setSemester] = useState("");
    const [year, setYear] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/pagina-inicial");
    }
    
    const handleCancel = () => {
        navigate("/pagina-inicial");
    }

    return(
        <div className="class-creation">
            <Header />
            <div className="class-creation-content">
                <span className="class-creation-content-title">Criar turma</span>
                <section className="class-creation-content-section">
                    <p className="class-creation-content-section-subtitle">Informações gerais</p>
                    <div className="class-creation-content-section-container-input">
                        <Input inputLabel="Nome" inputType="text" inputPlaceholder="Insira o nome" setValue={setName} />
                        <div>
                            <span>Matéria</span>
                            <SelectSubject />
                        </div>
                    </div>
                    <div className="class-creation-content-section-description">
                        <span>Descrição</span>
                        <textarea placeholder="Insira a descrição" />
                    </div>
                </section>
                <section className="class-creation-content-section">
                    <p className="class-creation-content-section-subtitle">Período</p>
                    <div className="class-creation-content-section-container-date">
                        <div className="class-creation-content-section-date">
                            <span>Semestre</span>
                            <input type="text" placeholder="1 ou 2" />
                        </div>
                        <div className="class-creation-content-section-date">
                            <span>Ano</span>
                            <input type="text" placeholder="Ex: 2023" />
                        </div>
                    </div>
                </section>
                <section className="class-creation-content-section">
                    <p className="class-creation-content-section-subtitle">Notas</p>
                    <span>Selecione os alunos</span>
                    <StudentTable />
                </section>
                <div className="class-creation-content-submit">
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

export default ClassCriation;