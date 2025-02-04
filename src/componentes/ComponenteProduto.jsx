

function ComponenteProduto (props) {
    return (
        <>
        <p className="p1">{props.nome}</p>
        <p className="p2">{props.descricao}</p>
        <p className="p3">{props.preco}</p>
        <p className="p4">{props.quantidade}</p>
        <p className="p5">{props.cor}</p>
        </>
    )
}

export {ComponenteProduto}