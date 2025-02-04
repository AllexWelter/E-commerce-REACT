import { useContext, useEffect, useState } from "react";
import { Button, Col, Navbar, Row, Table } from "react-bootstrap";
import { CarrinhoContext } from "../hooks/CarrinhoContext";


function Carrinho() {
    const { listaProdutosCarrinho, removerProduto } = useContext(CarrinhoContext)
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
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtosCarrinho.map((produtoCarrinho, index) => {
                                return (
                                    <tr>
                                        <td>{produtoCarrinho.idProduto}</td>
                                        <td>{produtoCarrinho.nomeProduto}</td>
                                        <td>{produtoCarrinho.precoProduto}</td>
                                        <td>{produtoCarrinho.descricaoProduto}</td>
                                        <td>
                                            <Button onClick={() =>
                                                removerProduto(produtoCarrinho.idProduto)
                                            }
                                            variant="danger"
                                            >   
                                                Remover       
                                            </Button>
                                        </td>            
                                    </tr>
                                )
                            }

                            )}
                        </tbody>
                    </Table>
                </Row>
            </Navbar>
        </>
    )
}

export { Carrinho }