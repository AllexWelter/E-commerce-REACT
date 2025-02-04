import './Css/competencias.css'


function Competencias (props) {
    return (
        <div className='div-competencias'>

            <p className='meuP'>{props.nome}</p>
            <p>{props.descricao}</p>    

        </div>
    )
}

export { Competencias }