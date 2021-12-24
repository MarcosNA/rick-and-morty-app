import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import { MainStyled } from "./styles.jsx";

const Main = () =>{
    return(
        <MainStyled>
            <Header />
            <Content />
            <Footer />
        </MainStyled>
    )
}

export default Main