import { useState } from "react";
import Parser from "html-react-parser";

import "./styles.css";

import Header from "../../components/Header";
import ClassMenu from "../../components/ClassMenu";
import ClassSection from "../../components/ClassSection";
import TableAttendance from "../../components/TableAttendance";
import AddButton from "../../components/AddButton";
import TestCard from "../../components/TestCard";
import TextEdition from "../../components/TextEdition";

const Class = () => {

    const [content, setContent] = useState("");
    const [annotation, setAnnotation] = useState("");
    const [textEditionView, setTextEditionView] = useState(false);
    const [textEditionTitle, setTextEditionTitle] = useState("");

    console.log(content);
    console.log(annotation);

    return (
        <div className="class">
            <Header />
            <div className="class-container">
                {textEditionView
                    &&
                    <TextEdition
                        content={content}
                        title={textEditionTitle}
                        setView={setTextEditionView}
                        setContent={setContent}
                        setAnnotation={setAnnotation}
                    />
                }
                <ClassMenu />
                <div className="class-container-workspace">
                    <ClassSection sectionName="Chamada de presença">
                        <TableAttendance />
                    </ClassSection>
                    <ClassSection sectionName="Conteúdo da aula">
                        <div className="class-container-workspace-textfield" style={{paddingBottom: content !== "" ? "25px" : "0px"}}>
                            {Parser(content)}
                        </div>
                        <AddButton
                            text={`${content !== "" ? "Editar conteúdo" : "Adicionar conteúdo"}`}
                            setView={setTextEditionView}
                            setTitle={setTextEditionTitle}
                        />
                    </ClassSection>
                    <ClassSection sectionName="Anotações">
                        <div className="class-container-workspace-textfield" style={{paddingBottom: annotation !== "" ? "25px" : "0px"}}>
                            {Parser(annotation)}
                        </div>
                        <AddButton
                            text={`${annotation !== "" ? "Editar anotação" : "Adicionar anotação"}`}
                            setView={setTextEditionView}
                            setTitle={setTextEditionTitle}
                        />
                    </ClassSection>
                    <ClassSection sectionName="Avaliações" >
                        <div className="class-container-workspace-test-card">
                            <TestCard />
                        </div>
                        <AddButton text="Adicionar avaliações" />
                    </ClassSection>
                </div>
            </div>
        </div>
    );
};

export default Class;