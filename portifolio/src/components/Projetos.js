import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const Container = styled.div`
	margin-top: 50px;
`;

const Project = styled.div`
	display: flex;
	margin: 70px 0;

	&.reverse {
		flex-direction: row-reverse;
	}

	img {
		width: 500px;
		border: 3px #ed145b solid;
		border-radius: 10%;
	}

	.desc-container {
		display: flex;
		justify-content: flex-end;
	}

	.descricao {
		margin: 0 20px;
		font-size: 20px;
	}

	.title-desc {
		display: flex;
		justify-content: center;

		.title {
			color: #ed145b; 
			font-size: 25px;
			font-weight: bold;
			margin-bottom: 10px;
		}
	}
`;

const Projetos = ({ projects }) => {
  return <Container>
		<h1 id="projetos">Projetos</h1>
		<Row className="projetos">
			{projects.map(project => {
				return <Project key={project.id} className={project.id % 2 == 0 ? 'reverse' : ''}>
					<div>
						<img src={process.env.PUBLIC_URL+'/img'+project.image} alt=""/>
					</div>
					<div className={project.id % 2 == 1 ? 'desc-container title-desc' : 'title-desc'}>
						<div>
							<div className="title">
								{project.title}
							</div>
							<div className="descricao">
								{project.description}
							</div>
						</div>
					</div>
				</Project>
			})}
		</Row>
	</Container>
}

export default Projetos;