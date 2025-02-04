import './App.css';
import { RouteApp } from './route';
import { ToastContainer } from 'react-toastify';
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarrinhoContextProvider } from './hooks/CarrinhoContext';


function App() {
  return (
    <>

      
      <CarrinhoContextProvider>
      <RouteApp/>
      <ToastContainer/>
      </CarrinhoContextProvider>
      
    </>
  );
}

export default App;
