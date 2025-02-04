import { useContext, useEffect, useState } from "react";
import { Col, Navbar, Row, Table } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";


function Carrinho() {
    const {listaProdutosCarrinho, removerProduto} = useContext(CarrinhoContext)
    const [produtosCarrinho, setProdutosCarrinho] = useState([])

    useEffect(() => {
        if (listaProdutosCarrinho) {
            setProdutosCarrinho(listaProdutosCarrinho)
        }
    }, [listaProdutosCarrinho])

    return (
        <>
            <Navbar>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h1>Lista de Produtos carrinho </h1>
                    </Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </Row>
            </Navbar>
        </>
    )
}

export { Carrinho }