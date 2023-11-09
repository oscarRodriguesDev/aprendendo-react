import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contato";
import Produto from "./pages/Produto";
import Header from "./components/Header";
import Erro from "./pages/Erro";

function App() {
  return (
    /* forma de utilizar o Routes*/
    <BrowserRouter>
      <Header />
      <Routes>
        {/* para garantir que qualquer caminho que for acessado seja exatamente o que esta sendo procurado, podemos utilizar o 
        exact que vai fazer com que qualquer caminho diferente do caminho especificado, leve para o caminho da pagina de erro */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/contatos" element={<Contatos />} />
        <Route path="/produto/:id" element={<Produto />} />

        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
