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
`;

const QuemSou = () => {
	return <Container>
		<div className="foto">
			<img alt="" src={process.env.PUBLIC_URL+"/img/me.jpg"}/>
		</div>
		<div className="descricao">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut elementum purus. 
			Etiam pharetra magna ligula, non vulputate felis dignissim et. Praesent porta sodales 
			nisl maximus finibus. Donec rutrum urna ut est consequat pharetra. Maecenas in elit elit. 
			Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
			Curabitur bibendum tortor ut dignissim laoreet. Curabitur vehicula vitae nibh sit amet 
			posuere. Donec non lectus ante. Proin vehicula elit ornare mi commodo faucibus.
		</div>
	</Container>
}

export default QuemSou;