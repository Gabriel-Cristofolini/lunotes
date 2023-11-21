import { useNavigate } from "react-router-dom";

import "./styles.css";

import Edit from "../../assets/icon/edit-blue.svg";
import Report from "../../assets/icon/generate-report.svg";

const ManageClass = () => {

    const navigate = useNavigate();

    return(
        <div className="manage-class">
            <div className="manage-class-option">
                <img src={Report} alt="ícone de edição" />
                <span>Gerar relatório</span>
            </div>
            <div className="manage-class-option">
                <img src={Edit} alt="Ícone de relatório" />
                <span>Editar matéria</span>
            </div>
        </div>
    );
};

export default ManageClass;