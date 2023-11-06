import { useEffect, useState } from "react";
import "./style.css";
function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  function returnValue() {
    return nutri;
  }
  return (
    <div className="container">
      <strong className="titulo">React Nutry</strong>
      {nutri.map((item) => {
        return (
          <article key={item.id}>
            <h2 className="title-post">{item.titulo}</h2>
            <p className="categoria">{item.categoria}</p>
            <div className="conteudo">
              <img className="imagens" src={item.capa} alt={"description"} />
              <p className="paragrafo"> {item.subtitulo}</p>
            </div>

            <a className="botão">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
