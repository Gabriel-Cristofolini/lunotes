import { useState } from "react";

import "./styles.css";

import Header from "../../components/Header";
import SelectRegister from "../../components/SelectRegister";
import SemesterContainer from "../../components/SemesterContainer";


const Homepage = () => {

    

    return (
        <div className="homepage">
            <Header />
            <SelectRegister />
            <SemesterContainer />
            <SemesterContainer />
            <SemesterContainer />
            <SemesterContainer />
        </div>
    );
};

export default Homepage;