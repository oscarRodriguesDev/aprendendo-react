import { useEffect, useState } from "react";

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
    <div>
      <div> {returnValue}</div>
    </div>
  );
}

export default App;
