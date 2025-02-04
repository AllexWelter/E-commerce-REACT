import { useState } from "react"

function ComponenteNome () {

    const [nome, setNome] = useState("ALLEX")

    return (
        <div>
            
            <button onClick={() => setNome("WELTER")}>ALTERAR PARA SOBRENOME</button>
            <br />
            <button onClick={() => setNome("ALLEX")}>ALTERAR PARA NOME</button>

            <p>Nome: {nome}</p>
        </div>
    )
}

export {ComponenteNome}