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
        <p>{item}</p>;
      })}
    </div>
  );
}

export default App;
