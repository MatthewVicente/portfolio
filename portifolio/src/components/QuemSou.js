import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	.foto img {
		margin: 50px 0;
		border: 5px solid #ed145b;
		border-radius: 50%;
	}

	.descricao {
		width: 50%;
	}

	@media only screen and (max-width: 600px) {
		.descricao {
			width: 100%;
			font-size: 16px;
		}
	}
`;

const QuemSou = () => {
	return <Container>
		<div className="foto">
			<img alt="" src={process.env.PUBLIC_URL+"/img/me.jpg"}/>
		</div>
		<div className="descricao">
			Meu nome é Matheus Vicente, sou <span>Game Developer</span>, me graduei em 
			Tecnologia em Jogos digitias pelo <span>Centro Universitário SENAC Santo Amaro</span>
			no primeiro semestre de 2020. Durante a faculdade desenvolvi alguns projetos e evolui nas minhas
			habilidades como programador e como Game Dev.
		</div>
	</Container>
}

export default QuemSou;