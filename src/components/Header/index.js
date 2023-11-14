import { useNavigate } from "react-router-dom";

import "./styles.css";

import Logo from "../../assets/icon/logo.svg";
import LogOut from "../../assets/icon/logout.svg";

const Header = () => {

    const navigate = useNavigate();

    const path = window.location.pathname;

    const handleNavigationToHomepage = () => {
        path !== "/pagina-inicial" && navigate("/pagina-inicial");
    }
    
    const handleLogOut = () => {
        navigate("/");
    }

    return(
        <div className="header">
            <img src={Logo} onClick={handleNavigationToHomepage} />
            <img src={LogOut} onClick={handleLogOut} />
        </div>
    );
};

export default Header;