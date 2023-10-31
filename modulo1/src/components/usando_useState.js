import { useState } from "react";

const App = () => {
  /* sintaxe:
  const[variavel, funçãoparaalterar] = useState('valor inicial da função')
  */

  const [aluno, setAluno] = useState("");

  function alterarNome(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>olá {aluno}</h1>
      {/* Forma utilizada para passar parametros diretamente na função utilizada */}
      <button onClick={() => alterarNome("julio")}>adcionar Oscar</button>
    </div>
  );
};

export default App;
