import { Button, Card } from "react-bootstrap"



function CardProduto({ nome, preco, descricao, linkImagem }) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={linkImagem} />
            <Card.Body>
                <Card.Title>
                {nome} - R$:{preco}
                </Card.Title>
                <Card.Text>{descricao}</Card.Text>
                <Button variant="primary">Detalhes</Button>
            </Card.Body>
        </Card>
    )
}


export { CardProduto }