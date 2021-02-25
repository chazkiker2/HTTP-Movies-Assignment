import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { createClickerStyles, createBackgroundStyles } from "../../theme/theme";
import SButton from "../Layout/SButton";

const formStyles = theme("mode",
	createBackgroundStyles("var(--pDark)", "var(--pText)")
);

const Form = styled.form`
	${formStyles};
	border: 0;
	width: 80%;
	margin: 3rem auto;
	height: 10rem;
	border-radius: 50px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-evenly;
	align-items: center;
	h1 {
		font-size: 1.5rem;
		font-weight: 600;
	}
	form {
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		div.input-container {
			width: 15%;
			min-width: 230px;
		label {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
		}
		}
	}
`;
//  button {
//  ${buttonStyles}; 
// 	display: inline-block;
// 	border: 0;
// 	width: 120px;
// 	height: 25px;
// 	margin: 0 1rem;
// 	border-radius: 5px;
// 	font-size: 1.02rem;
// 	text-transform: uppercase;
// } 

export default Form;