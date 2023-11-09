import { useState } from "react";

const App = () => {
  /* O useState pode ser qualquer tipo de dado, podemos ter objetos, numeros. listas entre outros */
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});

  function registrar(e) {
    e.preventDefault();
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  return (
    <div>
      <h1>Cadastrando Usuário!</h1>
      <form onSubmit={registrar}>
        <label>Nome</label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
          }}
        />
        <br />
        <label>informe sua idade</label>
        <br />
        <input
          placeholder="00"
          value={idade}
          onChange={(e) => {
            setIdade(e.target.value);
          }}
        />
        <br />
        <label>informe seu e-mail</label>
        <br />
        <input
          placeholder="fulano@ciclano.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button
          type="submit"
          onClick={() => {
            alert("salvando!");
          }}
        >
          enviar
        </button>
      </form>
      <br />
      <br />
      <div>
        <span>bem vindo {user.nome}</span> <br />
        <span>{user.idade} anos</span> <br />
        <span>{user.email}</span> <br />
      </div>
    </div>
  );
};

export default App;
