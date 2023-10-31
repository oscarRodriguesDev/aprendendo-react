//consigo pegar apenas a propiedade desejada usando a notação abaixo
/* Dessa forma posso dinamizar melhor as propriedade chamando apenas as que eu quero que apareçam na pagina */
const Nome2 = ({ aluno, idade }) => {
  return (
    <span>
      seja bem vindo {aluno} idade {idade}
    </span>
  );
};
export default Nome2;
