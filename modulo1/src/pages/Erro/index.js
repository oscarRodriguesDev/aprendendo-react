import { Link } from "react-router-dom";
const Erro = () => {
  return (
    <div>
      <h3>
        Parece que a pagina que você esta procurando não existe ou pode ter sido
        movida para outro endereço
      </h3>
      <span className="title post"> você pode estar procurando por</span> <br />
      <Link to="/home">Home</Link> <br />
      <Link to="/sobre">About Us</Link> <br />
      <Link to="/contatos">Contatos</Link> <br />
    </div>
  );
};

export default Erro;
