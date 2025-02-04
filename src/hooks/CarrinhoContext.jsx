import { createContext, useState } from "react";


export const CarrinhoContext = createContext()

function CarrinhoContextProvider({ children }) {
const [listaProdutosCarrinho, setlistaProdutosCarrinho ] = useState([])

function salvarProduto(lista) {
    setlistaProdutosCarrinho(lista)
    const listaDeProdutos = JSON.stringify(lista)
    localStorage.setItem("carrinho_produtos", listaDeProdutos)
}

const adicionarCarrinho = async (produto) => {
    const listaDeProdutosAtualizado = [produto, ...listaProdutosCarrinho]
    salvarProduto(listaDeProdutosAtualizado)
}

   
    return (
        <CarrinhoContext.Provider value={{listaProdutosCarrinho, adicionarCarrinho}}>

        {children}            

        </CarrinhoContext.Provider>
    )
}

export {CarrinhoContextProvider}