import React from "react";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		color: #ed145b;
	}

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
			<img alt="" src={process.env.PUBLIC_URL+"/img/me2.png"}/>
		</div>
		<div className="descricao">
			<p>Meu nome é Matheus Vicente, sou <span>Game Developer</span>, me graduei em 
			Tecnologia em Jogos digitias pelo <span>Centro Universitário SENAC Santo Amaro</span> no 
			primeiro semestre de 2020. Durante a faculdade desenvolvi alguns projetos sem o uso de engines, outros utilizando da <span>Unity</span> e
			evolui nas minhas habilidades como programador e como Game Dev.</p> 

			<p>Trablahei com freelaces utilizando da <span>Unreal Engine</span> desenvolvendo mecânicas utilizando das <span>BluePrints</span>.</p>
			
			<p>Em paralelo com a faculdade eu trabalhei como <span>Web Developer</span>,
			de Janeiro de 2018 até Maio de 2020. Aprendi e trabalhei com diversas tecnologias de desenvolvimento Web durante esse período
			como <span>HTML/CSS</span>, <span>JavaScript</span>, <span>JQuery</span>, <span>ReactJS</span> e <span>Laravel Framework com PHP</span>.
			Trabalhei desenvolvendo novos sites, fazendo correções de bugs nos sistemas dos clientes da empresa e desenvolvendo novas funcionalidades.</p>
		</div>
	</Container>
}

export default QuemSou;