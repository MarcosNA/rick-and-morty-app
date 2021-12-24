import { ImCart } from "react-icons/im";
import { ImUser } from "react-icons/im";
import logo from "../image/logo.png";
import { HeaderWraper } from "./styles";


const Header = () =>{
    return(
        <HeaderWraper>
           <div className="logo">
                <img src={logo}   alt="logo" />
           </div>

           <nav>
               <div>Personajes</div>
               <div>Episodios</div>
               <div>Temporadas</div>
           </nav>

           <div className="login">
            <a href=""> <ImUser /> </a>
            <a href=""> <ImCart /> </a>
           </div>

        </HeaderWraper>
    )
}

export default Header