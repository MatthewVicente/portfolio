import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
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
				width 5%;
			}
		}
	
		.linkedin {
			img {
				width: 30%;
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
			width: 15%;
			margin-right: 10px;
		}
	}

	@media only screen and (max-width: 600px) {
		display: flex;
		.social {
			width: 100%;
			.linkedin {
				margin-left: 10px;
				img {
					width: 100%;
				}
			}
			.github {
				margin-left: 30px;
				img {
					width: 16%;
				}
			}
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
	</FooterContainer>
}

export default Footer;