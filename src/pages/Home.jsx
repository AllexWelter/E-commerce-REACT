import { NavBar } from "../componentes/NavBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Container } from "react-bootstrap";
import { CarrinhoContext, CarrinhoContextProvider } from "../hooks/CarrinhoContext";
import { useContext } from "react";

function Home() {
    

    return (
            <NavBar>
            
            <Container>
                <CarouselAnuncios />
                <ListaProdutos />
            </Container>
            
            </NavBar>    
    )
}

export { Home }