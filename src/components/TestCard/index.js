import "./styles.css";

import Edit from "../../assets/icon/edit.svg";

const TestCard = () => {
    return(
        <div className="test-card">
            <span>Nome da Avaliação</span>
            <img src={Edit} alt="Ícone de edição" />
        </div>
    );
};

export default TestCard;