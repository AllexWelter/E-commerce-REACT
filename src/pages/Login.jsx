import { Col, Container, Row, Button, Form, Image, FormGroup, FormLabel, InputGroup, FormControl } from "react-bootstrap"
import "../assets/css/Login.css"
import { Carousel } from "react-bootstrap"
import image from "../assets/images/image.png"
import { useState } from "react"
import InputGroupText from "react-bootstrap/esm/InputGroupText"
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom"



function Login() {

    const [validated, setValidated] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    let navigate = useNavigate()

    function onChangeEmail(event) {
        setEmail(event.target.value)
    }
    function onChangeSenha(event) {
        setSenha(event.target.value)
    }

    async function submitForm(event) {
        event.preventDefault()
        setValidated(true)


        const form = new FormData()
        form.append("email", email)
        form.append("password", senha)

        const options = {
            method: "POST",
            mode: "cors",
            body: form,
        }

        try {
            const response = await fetch(
                "http://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
                options
            )
            mensagemDeSucesso("Logado com sucesso")
            const data = await response.json()

            const token = data.token
            const nomeUsuario = data.user.name
            const emailUsuario = data.user.email

            localStorage.setItem('token', token)
            localStorage.setItem('nomeUsuario', nomeUsuario)
            localStorage.setItem('emailUsuario', emailUsuario)

            navigate("/")
        } catch (error) {
            mensagemDeErro("Não foi possível realizar login")
        }

    }


    function mensagemDeErro(mensagem = "Mensagem de erro") {
        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    function mensagemDeSucesso(mensagem = "Mensagem de sucesso") {
        toast.success(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }


    return (
        <Container>
            <Row style={{ marginTop: "13%" }}>
                <Col md={1}></Col>
                <Col md={10}>
                    <Row>
                        <Col md={6} style={{ padding: "0%" }}>
                            <Image
                                src={image}
                                width="100%"
                                height="100%"
                            />
                        </Col>
                        <Col md={6} className={"box"}>
                            <h1 className="text-center">E-COMMERCE HARVE</h1>
                            <Form noValidate validated={validated} onSubmit={submitForm} >
                                <Row style={{ margin: "7%" }}>
                                    <Col>
                                        <Form.Group controlId="validationEmail">
                                            <FormLabel>E-mail:</FormLabel>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputEmail">@</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="E-mail"
                                                    aria-describedby="inputEmail"
                                                    required
                                                    onChange={onChangeEmail}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Adicionar um e-mail válido.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row style={{ margin: "7%" }}>
                                    <Col>
                                        <Form.Group controlId="validationCustomUsername">
                                            <FormLabel>Senha:</FormLabel>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputSenha">*</InputGroup.Text>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Senha"
                                                    aria-describedby="inputSenha"
                                                    required
                                                    onChange={onChangeSenha}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Senha é obrigatório.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row style={{ margin: "7%" }}>
                                    <Col className="d-grip gap-2">
                                        <Button type="submit" size="lg">
                                            Login
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export { Login }