import { createContext, useEffect, useState } from "react";


export const CarrinhoContext = createContext()

function CarrinhoContextProvider({ children }) {
const [listaProdutosCarrinho, setlistaProdutosCarrinho ] = useState([])

useEffect(() => {
    buscarProdutosLocalStorage()
}, [])

    function buscarProdutosLocalStorage() {
        const produtosLocalStorage = localStorage.getItem("carrinho_produtos")

        if(produtosLocalStorage) {
            const produtosProdutos = JSON.parse(produtosLocalStorage)
            setlistaProdutosCarrinho(produtosProdutos)
        }
    }

function salvarProduto(lista) {
    setlistaProdutosCarrinho(lista)
    const listaDeProdutos = JSON.stringify(lista)
    localStorage.setItem("carrinho_produtos", listaDeProdutos)
}

const adicionarCarrinho = async (produto) => {
    const listaDeProdutosAtualizado = [produto, ...listaProdutosCarrinho]
    salvarProduto(listaDeProdutosAtualizado)
}

// function removerProduto()

   
    return (
        <CarrinhoContext.Provider value={{listaProdutosCarrinho, adicionarCarrinho}}>

        {children}            

        </CarrinhoContext.Provider>
    )
}

export {CarrinhoContextProvider}