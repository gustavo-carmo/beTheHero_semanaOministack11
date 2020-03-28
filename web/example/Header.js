import React from 'react';

function Header(props) {

  const { title, children } = props;

  return (
    <header>
      <h1>{title}</h1>
      <hr/>
      Exibindo as crianças
      <hr/>
      {/* props.children recebe Tudo o que for passado dentro do componente, seja html ou texto */}
      <h1>{children}</h1>
    </header>
  );
}

export default Header;