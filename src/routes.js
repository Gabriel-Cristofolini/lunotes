import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import Login from "./pages/Login";
import Class from "./pages/Class";
import Homepage from "./pages/Homepage";
import Test from "./pages/Test";

const Routes = () => {
    return(
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login />} />
                <Route path="/pagina-inicial" element={<Homepage />} />
                <Route path="/turma" element={<Class />} />
                <Route path="/avaliacao" element={<Test />} />
            </Router>
        </BrowserRouter>
    );
}

export default Routes;