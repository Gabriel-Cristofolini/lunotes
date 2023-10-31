import "./styles.css";

import Delete from "../../assets/icon/delete.svg";

const ClassMenuOption = () => {
    return (
        <div className="class-menu-option">
            <span>Aula 1 - 00/00/0000</span>
            <img src={Delete} alt="Ícone de exclusão" />
        </div>
    );
};

export default ClassMenuOption;