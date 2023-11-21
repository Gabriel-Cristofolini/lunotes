import { useState } from "react";

import "./styles.css";

import ClassMenuOption from "../ClassMenuOption";
import ManageClass from "../ManageClass";

import Cog from "../../assets/icon/cog.svg";
import Plus from "../../assets/icon/plus.svg";

const ClassMenu = (props) => {

    const [manageClassView, setManageClassView] = useState(false);

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
            </div>
            <div className="class-menu-add-class" onClick={()=>{props.setAddDayClassView(!props.addDayClassView)}}>
                <span>ADICIONAR AULA</span>
                <img src={Plus} alt="Ícone de adição" />
            </div>
            <div className="class-menu-manage-class" onClick={()=>{setManageClassView(!manageClassView)}}>
                <span>GERENCIAR TURMA</span>
                <img src={Cog} alt="Ícone de engrenagem" />
            </div>
            {manageClassView && <ManageClass />}
        </div>
    );
};

export default ClassMenu;