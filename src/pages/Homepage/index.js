import { useState } from "react";

import "./styles.css";

import Header from "../../components/Header";
import SelectRegister from "../../components/SelectRegister";
import SemesterContainer from "../../components/SemesterContainer";
import AddSubject from "../../components/AddSubject";

const Homepage = () => {

    const [addSubjectView, setAddSubjectView] = useState(false);

    return (
        <div className="homepage">
            <Header />
            <div className="homepage-container">
                { addSubjectView && <AddSubject setValue={setAddSubjectView} /> }
                <SelectRegister setValue={setAddSubjectView} />
                <SemesterContainer />
                <SemesterContainer />
                <SemesterContainer />
                <SemesterContainer />
            </div>
        </div>
    );
};

export default Homepage;