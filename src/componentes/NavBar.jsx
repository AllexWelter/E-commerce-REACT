import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";
import { useContext } from "react";
import { CarrinhoContext } from "../hooks/CarrinhoContext";





function NavBar() {
const {contadorCarrinho}= useContext(CarrinhoContext)
    return (
        <Container>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/produtos">Produtos {contadorCarrinho}</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <GerenciarLogin />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{marginTop: "100px"}}></div>
        </Container>
    )
}

export {NavBar}


