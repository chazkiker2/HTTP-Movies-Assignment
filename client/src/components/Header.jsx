import React from "react";
import styled, { css, withTheme } from "styled-components";
import theme from "styled-theming";
import { useTheme } from "../context/ThemeContext";
import { staticVars, createClickerStyles, createModeStyles } from "../theme/theme";

const buttonTheme = theme("mode", {
	dark: createClickerStyles("var(--pBase)", "var(--pText)", "var(--pLight)", "var(--sTextDark)"),
	light: createClickerStyles("var(--pBase)", "var(--pBase)"),
});
const SHeader = styled.header`
	background-color: var(--pDark);
	color: var(--pText);
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	h1.title {
			font-size: 30px;
		}

	div.icon-container {
		${buttonTheme};
		border-radius: 50%;
		margin: 20px;
		width: 50px; height: 50px;
		display: flex;
		flex-flow: row nowrap;
		justify-content: center; align-items: center;
		/* transition: all 4s ease-in-out; */

	}
	/* button {
		${buttonTheme};
		display: inline-block;
		width: 200px;
		height: 50px;
		font-size: 20px;
		border-radius: 10px;
		background-color: var(--sLight);
		border: 0;
	} */



`;

const Header = props => {
	const { toggle, mode } = useTheme();

	return (
		<SHeader>
			<div>
				<h1 className="title">Watching Movies w/ the Sound Off</h1>
			</div>
			<div className="icon-container" onClick={toggle}>
				{
					mode === "dark" ?
						<img src={require('../assets/OverflowButton/moonFilled.svg')} alt="dark mode icon" style={{ height: 30, }} />
						: <img src={require('../assets/OverflowButton/moon.svg')} alt="light mode icon" style={{ height: 30, }} />
				}
			</div>

			{/* <img src={require('../assets/OverflowButton/-Icon.svg')} alt="" style={{ height: 50, }} /> */}
			{/* <div onClick={toggle}><img src="../assets/OverflowButton/-Icon.png" /></div> */}
			{/* <button onClick={toggle}>Toggle</button> */}
		</SHeader>
	)
}

export default Header;