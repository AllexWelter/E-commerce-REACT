import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"


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

    const qtdProdutosNoCarrinho = listaProdutosCarrinho.filter(
        (item) => item.idProduto == produto.idProduto
    )

    if (qtdProdutosNoCarrinho.length > 0) {
        return toast.error("Produto já está no seu carrinho", {
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

    const listaDeProdutosAtualizado = [produto, ...listaProdutosCarrinho]
    salvarProduto(listaDeProdutosAtualizado)
}

function removerProduto(idProduto) {
    const listaDeProdutosAtualizado = listaProdutosCarrinho.filter((item) => item.idProduto != idProduto)

    salvarProduto(listaDeProdutosAtualizado)
}

   
    return (
        <CarrinhoContext.Provider value={{listaProdutosCarrinho, adicionarCarrinho, removerProduto}}>

        {children}            

        </CarrinhoContext.Provider>
    )
}

export {CarrinhoContextProvider}