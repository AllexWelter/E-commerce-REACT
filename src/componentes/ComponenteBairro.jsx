import './Css/competencias.css'


function ComponenteBairro (props) {
    return (
        <>
        <p className='p1'>{props.nome}</p>
        <p className='p2'>{props.rua}</p>
        <p className='p3'>{props.bairro}</p>
        <p className='p4'>{props.logradouro}</p>
        <p className='p5'>{props.cidade}</p>
        <p className='p6'>{props.numero}</p>
        </>
    )
}

export {ComponenteBairro}