import { useNavigate } from "react-router-dom";
import "./styles.css";

// Icons
import Logo from "../../assets/icon/logo-dark.svg";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

const Login = () => {

    // States
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/pagina-inicial");
    }

    return(
        <div className="login">
            <div className="login-container">
                <img src={Logo} alt="Logo" />
                <Input inputType={"email"} inputPlaceholder={"Insira o e-mail"} inputLabel={"E-mail"} setValue={setEmail} />
                <Input inputType={"password"} inputPlaceholder={"Insira a senha"} inputLabel={"Senha"}  setValue={setPassword} />
                <Button buttonText={"Entrar"} buttonColor="default" buttonClick={handleNavigate} />
            </div>
        </div>
    );
}

export default Login;