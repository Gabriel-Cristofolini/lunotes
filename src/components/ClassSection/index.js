import { useState } from "react";
import "./styles.css";

import Arrow from "../../assets/icon/arrow-blue.svg";

import TableAttendance from "../TableAttendance";

const ClassSection = (props) => {

    const [toggleSection, setToggleSection] = useState(false);

    return (
        <div className={`class-section ${toggleSection ? "class-section-opened" : "class-section-closed"}`}>
            <div className="class-section-header" onClick={() => setToggleSection(!toggleSection)}>
                <img
                    src={Arrow}
                    alt="Ícone de flecha"
                    className={`${toggleSection ? "" : "class-section-header-img"}`}
                />
                <span>{props.sectionName}</span>
            </div>
            <div className={`class-section-content ${toggleSection ? "class-section-content-opened" : "class-section-content-closed"}`}>
                {props.children}
            </div>
        </div>
    );
}

export default ClassSection;