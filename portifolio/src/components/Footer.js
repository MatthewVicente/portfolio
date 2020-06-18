import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	width: 100%;
	height: 60px;
	background-color: #ed145b;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.social {
		display: flex;

		.github {
			text-align: left;

			img {
				width 4%;
			}
		}
	
		.linkedin {
			img {
				width: 25%;
				margin-right: 10px;
			}
		}
	}

	.contato {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 15%;
			margin-right: 10px;
		}
	}
`;

const Footer = () => {
	return <FooterContainer>
		<div className="social">
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
		</div>
		<div className="contato">
			<img src={process.env.PUBLIC_URL+'/img/phone.svg'} alt="" />
			(11) 98975-9354
		</div>
	</FooterContainer>
}

export default Footer;