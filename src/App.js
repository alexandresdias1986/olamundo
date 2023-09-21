import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './componentes/menu';
import Inicio from './paginas/inicio';
import SobreMin from "./paginas/SobreMin";


function App() {
  return (
  
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path="/" element ={<Inicio/>}/>
    <Route path="/sobremin" element = {<SobreMin/>}/>
    <Route path="*" element = {<div>Pagina nao encontrada</div>}/>

  </Routes>
  </BrowserRouter>
  );
}

export default App;
