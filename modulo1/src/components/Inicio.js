import Nome from "./Nome";
import Nome2 from "./Nome2";

const App = () => {
  return (
    <div>
      <h1>Meu primerio aplicativo React</h1>
      <Nome aluno="Oscar" />
      <br />
      {/* Dessa forma posso dinamizar melhor as propriedade chamando apenas as que eu quero que apareçam na pagina */}
      <Nome2 aluno="Lucas" idade="25" anos />
    </div>
  );
};

export default App;
