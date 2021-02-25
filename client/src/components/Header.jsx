import React, { useState } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
// import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import SButton from "./Layout/SButton";
import SLink from "./Layout/SLink";
import Flex from "./Layout/Flex";
import { staticVars, createClickerStyles, createModeStyles } from "../theme/theme";
import SavedList from "../Movies/SavedList";

const buttonTheme = theme("mode", {
	dark: createClickerStyles("var(--pBase)", "var(--pText)", "var(--pLight)", "var(--sTextDark)"),
	light: createClickerStyles("var(--pBase)", "var(--pBase)"),
});
const menuOpenerTheme = theme("mode", {
	dark: createClickerStyles("var(--tPrimary)", "var(--sText)"),
	light: createClickerStyles("var(--tPrimary)", "var(--sText)"),
})
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
	}
	/* button {
	${menuOpenerTheme};
	} */
	`;


const Header = ({ list }) => {
	const { toggle, mode } = useTheme();
	const [isSavedOpen, setIsSavedOpen] = useState(false);

	const toggleSavedOpen = () => {
		setIsSavedOpen(!isSavedOpen);
	};

	return (
		<>
			<SHeader>
				<div>
					<h1 className="title">Watching Movies w/ the Sound Off</h1>
				</div>
				<Flex>
					<SLink to="/">Home</SLink>
					<SButton onClick={toggleSavedOpen}>Saved</SButton>
				</Flex>
				<div className="icon-container" onClick={toggle}>
					{mode === "dark"
						? <img src={require('../assets/OverflowButton/moonFilled.svg')} alt="dark mode icon" style={{ height: 30, }} />
						: <img src={require('../assets/OverflowButton/moon.svg')} alt="light mode icon" style={{ height: 30, }} />
					}
				</div>
			</SHeader>
			{isSavedOpen &&
				<SavedList list={list} />
			}
		</>
	);
}

export default Header;