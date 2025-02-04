import { createContext, useState } from "react";


export const CarrinhoContext = createContext()

function CarrinhoContextProvider({ children }) {
    const [contadorCarrinho, setContadorCarrinho] = useState(10)

    function helloWorld() {
        alert("HELLO WORLD")
    }

    return (
        <CarrinhoContext.Provider value={{ contadorCarrinho, setContadorCarrinho }}>

            {children}

        </CarrinhoContext.Provider>
    )
}

export {CarrinhoContextProvider}