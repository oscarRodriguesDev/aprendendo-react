import { useState } from "react";

const App = () => {
  /* O useState pode ser qualquer tipo de dado, podemos ter objetos, numeros. listas entre outros */
  const [input, setInput] = useState("");
  const [lista, setLista] = useState([
    "pagar conta de luz",
    "estudar react.js",
  ]);

  function registrar(e) {
    e.preventDefault();
    setLista([...lista, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastrando Usuário!</h1>
      <form onSubmit={registrar}>
        <label>Nome Da tarefa</label>
        <br />
        <input
          placeholder="Digite a tarefa"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          type="submit"
          onClick={() => {
            alert(`lista: ${lista} salva com sucesso`);
          }}
        >
          Registar
        </button>
      </form>
      <br />
      <br />
      <div>
        <h3>Minha lista</h3>

        {lista.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
