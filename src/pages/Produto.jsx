import { Container } from "react-bootstrap";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { CarrinhoContext } from "../hooks/CarrinhoContext";

function Produto() {
    return (
        <>
            <Container>

                <ListaProdutos />
            </Container>
        </>

    )
}

export { Produto }