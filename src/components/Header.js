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

		&:hover {
			color: #ed145b;
		}
	}
`;

const Header = () => {
  return <Container>
		<a href="#quemSou">Quem sou</a>
		<a href="#projetos">Projetos</a>
		<a href="#contato">Contato</a>
	</Container>
}

export default Header;