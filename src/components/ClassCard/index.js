import { useNavigate } from "react-router-dom";

import "./styles.css";

const ClassCard = () => {
    
    const navigate= useNavigate();

    const handleNavigate = () => {
        navigate("/turma");
    }

    return(
        <div className="class-card" onClick={handleNavigate}>
            <span>Turma | Matéria</span>
        </div>
    );
};

export default ClassCard;