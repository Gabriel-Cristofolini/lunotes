import "./styles.css";

import ClassCard from "../ClassCard";

const SemesterContainer = () => {


    return(
        <div className="semester-container">
            <div className="semester-container-title">
                <span>2023/02</span>
            </div>
            <div className="semester-container-class">
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
            </div>
        </div>
    );
};

export default SemesterContainer;