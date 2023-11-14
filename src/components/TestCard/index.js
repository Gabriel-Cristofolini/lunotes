import { useNavigate } from "react-router-dom"

import "./styles.css";

import Edit from "../../assets/icon/edit.svg";

const TestCard = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate("/avaliacao");
    }

    return(
        <div className="test-card" onClick={handleNavigation}>
            <span>Nome da Avaliação</span>
            <img src={Edit} alt="Ícone de edição" />
        </div>
    );
};

export default TestCard;