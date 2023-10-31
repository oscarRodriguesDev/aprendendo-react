import { useState, useEffect } from "react";

const App = () => {
  /* O useState pode ser qualquer tipo de dado, podemos ter objetos, numeros. listas entre outros */
  let [input, setInput] = useState("");
  let [lista, setLista] = useState([]);
  const [lista2, setLista2] = useState([]);

  //recupera o valor armazenado
  useEffect(() => {
    let valores = localStorage.getItem("@tarefas");
    if (valores != []) {
      setLista2(JSON.parse(valores));
      setLista(lista2);
      console.log(`lista dentro da leitura ${lista}`);
    }
  }, lista2);

  //forma de utilizar o useEfect
  useEffect(() => {
    console.log(`lista dentro da gravação ${lista}`);

    localStorage.setItem("@tarefas", JSON.stringify(lista));
  }, [lista]);

  function registrar(e) {
    setLista([...lista, input]);
    setInput("");
  }

  return (
    <div>
      <h1>Cadastrando Usuário!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Nome Da tarefa</label>
        <br />
        <input
          placeholder="Digite a tarefa"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button type="submit" onClick={registrar}>
          Registrar
        </button>
      </form>
      <br />
      <br />
      <div>
        <h3>Minha lista</h3>

        {lista.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </div>
    </div>
  );
};

export default App;
