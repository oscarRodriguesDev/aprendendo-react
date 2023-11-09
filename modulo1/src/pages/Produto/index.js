import { useParams } from "react-router-dom";
const Produto = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h2 className="titulo">Pagina dos produtos</h2>
      <p style={{ fontSize: 50, color: "#005100" }}>
        Produto selecionado: {id}
      </p>
    </div>
  );
};

export default Produto;
