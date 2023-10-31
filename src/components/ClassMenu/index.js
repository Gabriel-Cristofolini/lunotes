import "./styles.css";

import ClassMenuOption from "../ClassMenuOption";

import Cog from "../../assets/icon/cog.svg";
import Plus from "../../assets/icon/plus.svg";

const ClassMenu = () => {
    return(
        <div className="class-menu">
            <div className="class-menu-title">
                <span>COD. TURMA</span>
            </div>
            <div className="class-menu-container-day">
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
                <ClassMenuOption />
            </div>
            <div className="class-menu-add-class">
                <span>ADICIONAR AULA</span>
                <img src={Plus} alt="Ícone de adição" />
            </div>
            <div className="class-menu-manage-class">
                <span>GERENCIAR TURMA</span>
                <img src={Cog} alt="Ícone de engrenagem" />
            </div>
        </div>
    );
};

export default ClassMenu;