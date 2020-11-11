import React from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { useTheme } from "../context/ThemeContext";
import { staticVars, createClickerStyles, createModeStyles } from "../theme/theme";

const buttonTheme = theme("mode", {
	dark: createClickerStyles("var(--sLight)", "var(--pText)", "var(--pLight)", "var(--sTextDark)"),
	light: createClickerStyles("var(--sLight)", "var(--sDark)"),
});
const SHeader = styled.header`
	background-color: var(--pDark);
	color: var(--pText);
	button {
		${buttonTheme};
		display: inline-block;
		width: 200px;
		height: 50px;
		font-size: 20px;
		border-radius: 10px;
		background-color: var(--sLight);
		border: 0;
	}



`;

const Header = props => {
	const { toggle, mode } = useTheme();

	return (
		<SHeader>
			<button onClick={toggle}>Toggle</button>
		</SHeader>
	)
}

export default Header;