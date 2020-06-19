import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const FooterContainer = styled(Row)`
	width: 100%;
	height: 60px;
	background-color: #ed145b;
	align-items: center;
	margin: 0;

	.social {
		display: flex;

		.github {
			text-align: left;

			img {
				width 6%;
			}
		}
	
		.linkedin {
			img {
				width: 35%;
				margin-right: 10px;
			}
		}
	}

	.contato {
		display: flex;
		padding-right: 30px;
		align-items: center;
		justify-content: flex-end;

		img {
			width: 5%;
			margin-right: 10px;
		}
	}

	@media only screen and (max-width: 600px) {
		.social {
			display: block;
			.linkedin {
				margin-left: 10px;
				img {
					width: 25%;
				}
			}
		}

		.contato {

		}
	}
`;

const Footer = () => {
	return <FooterContainer>
		<Col md="6" className="social">
			<div className="linkedin">
				<a href="https://www.linkedin.com/in/matheus-vicente-b87957180/" target="_blank">
					<img src={process.env.PUBLIC_URL+'/img/linkedinLogo.svg'} alt="" />
				</a>
			</div>
			<div className="github">
				<a href="https://github.com/MatthewVicente" target="_blank">
					<img src={process.env.PUBLIC_URL+'/img/githubLogo.svg'} alt="" />
				</a>
			</div>
		</Col>
		<Col md="6" className="contato">
			<img src={process.env.PUBLIC_URL+'/img/phone.svg'} alt="" />
			<span>(11) 98975-9354</span>
		</Col>
	</FooterContainer>
}

export default Footer;