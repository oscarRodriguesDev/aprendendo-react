import React from "react";
import { Container, Head, Titulo, BemVindo } from "./styles_styled";

function App() {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

      <BemVindo cor="00ff00" tamanho={200}>
        Bem vindo ao sistema
      </BemVindo>
    </Container>
  );
}

export default App;

/*
<div className="container">
  <header className="header">
      <a className="titulo">Projeto Styled</a>
  </header>
  <h1>Bem vindo ao sistema!</h1>
</div>
*/
