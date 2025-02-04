import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListaProdutos";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Login } from "../pages/Login";



export function RouteApp() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/login" element={<Login />}/>
        </Routes>
        </BrowserRouter>

    )
}
