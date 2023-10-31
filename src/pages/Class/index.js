import "./styles.css";

import Header from "../../components/Header";
import ClassMenu from "../../components/ClassMenu";
import ClassSection from "../../components/ClassSection";
import TableAttendance from "../../components/TableAttendance";

const Class = () => {
    return (
        <div className="class">
            <Header />
            <div className="class-container">
                <ClassMenu />
                <div className="class-container-workspace">
                    <ClassSection sectionName="Chamada de presença">
                        <TableAttendance />
                    </ClassSection>
                    <ClassSection sectionName="Conteúdo da aula" >

                    </ClassSection>
                    <ClassSection sectionName="Anotações" >

                    </ClassSection>
                    <ClassSection sectionName="Avaliações" >

                    </ClassSection>
                </div>
            </div>
        </div>
    );
};

export default Class;