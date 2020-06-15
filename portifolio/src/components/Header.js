import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	margin: 40px 0;
	justify-content: space-around;

	a {
		color: white;
		font-size: 22px;
		text-decoration: none;
	}
`;

const Header = () => {
  return <Container>
		<a href="#QuemSou">Quem sou</a>
		<a href="#Projetos">Projetos</a>
		<a href="#Contato">Contato</a>
	</Container>
}

export default Header;