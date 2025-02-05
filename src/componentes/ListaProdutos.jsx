import { Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { api } from "../_service/api"
import { CardProduto } from "./CardProduto"

function ListaProdutos() {
    const [produtos, setProdutos] = useState([])

   
    async function buscarProdutos() {
      try {
        const { data } = await api.get("/productlistbyremark/home");
  
        setProdutos(data);
      } catch (error) {
        mensagemDeErro("Não foi possivel buscar os produtos");
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

    useEffect(() => {
      buscarProdutos()
  }, [])


  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>Lista de Produtos</h1>
        </Col>
      </Row>
      <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2" key={index}>
              <CardProduto
                idProduto={produto.id}
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export { ListaProdutos }