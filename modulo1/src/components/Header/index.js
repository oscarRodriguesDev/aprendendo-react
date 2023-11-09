import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container2">
      <Link className="title-post" to="/home">
        Home |
      </Link>
      <Link className="title-post" to="/sobre">
        About Us |
      </Link>
      <Link className="title-post" to="/contatos">
        Contatos |
      </Link>
      <Link className="title-post" to="/produto">
        Produtos |
      </Link>
    </div>
  );
};

export default Header;
