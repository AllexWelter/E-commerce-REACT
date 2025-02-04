import { NavBar } from "../componentes/NavBar";
import { CarouselAnuncios } from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Container } from "react-bootstrap";
import { CarrinhoContext, CarrinhoContextProvider } from "../hooks/CarrinhoContext";
import { useContext } from "react";

function Home() {
    const {setContadorCarrinho} = useContext(CarrinhoContext)


    return (
            <>
            <NavBar />
            
                <button onClick={() => setContadorCarrinho((valorAtual)=> valorAtual + 1 )}>SOMAR</button>

                <button onClick={() => setContadorCarrinho((valorAtual)=> valorAtual - 1)}>SUBTRAIR</button>
            
            <Container>
                <CarouselAnuncios />
                <ListaProdutos />
            </Container>
            
            </>    
    )
}

export { Home }