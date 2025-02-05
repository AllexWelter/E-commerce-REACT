import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Row } from "react-bootstrap";

function GerenciarLogin() {

    const [token, setToken] = useState()
    const [nomeUsuario, setNomeUsuario] = useState()
    const [emailUsuario, setEmailUsuario] = useState()

    const [numeroProdutosCarrinho, setNumeroProdutosCarrinho] = useState(0)
    const {listaProdutosCarrinho} = useContext

    useEffect(() => {
        const quantidadeProdutos = listaProdutosCarrinho
        setNumeroProdutosCarrinho(quantidadeProdutos)
    }, [listaProdutosCarrinho])
    
    useEffect(() => {
        pegarDadosLocalStorage()
    }, [])

    function pegarDadosLocalStorage() {
        const token = localStorage.getItem("token")
        const nomeUsuario = localStorage.getItem("nomeUsuario")
        const emailUsuario = localStorage.getItem("emailUsuario")
        setToken(token)
        setNomeUsuario(nomeUsuario)
        setEmailUsuario(emailUsuario)
    }

    function removerDadosLocalStorage() {
        localStorage.removeItem("token")
        localStorage.removeItem("nomeUsuario")
        localStorage.removeItem("emailUsuario")
        pegarDadosLocalStorage()

    }

    if (!token) {
        return (
            <Row>
                <Col md={12}>
                    <a href="/login">
                        <Button variant="primary">Login</Button>{" "}
                    </a>
                </Col>
            </Row>
        )
    }

    return (
        <Row>
            <Col md={2}>
            <a href="/carrinho">
            <Badge style={{
                position: "absolute",
                marginLeft: "20px",
                marginTop: "-8px"
            }}
            bg="success"
            >
                {numeroProdutosCarrinho}
            </Badge>
            <i className="fa fa-shopping-cart fa-2x"> </i>
            </a>
            </Col>
            <Col md={7}>
            <i className="fa fa-user">{nomeUsuario}</i>
            <i className="fa fa-at">{emailUsuario}</i>
            </Col>
            <Col md={2}>
                <Button variant="danger" onClick={() => removerDadosLocalStorage()}>Sair</Button>{" "}
            </Col>
        </Row>
    )
}

export { GerenciarLogin }