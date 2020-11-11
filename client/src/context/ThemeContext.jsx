import React, { createContext, useContext } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { rootVars, variables, staticVars } from "../theme/theme";
import { useLocalThemes } from "../utils/hooks/useLocalThemes";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";
import theme from "styled-theming";
// const { backgroundColor, textColor } = mainTheme;

const { dark, light } = staticVars;

const ThemeToggleContext = createContext();
export const useTheme = () => useContext(ThemeToggleContext);


export const XThemeProvider = ({ children }) => {
	const [themeState, setThemeState] = useLocalStorage("mode", "dark");

	const wrapTheme = theme("mode", {
		dark: css`
			background-color: var(--pBase);
			color: var(--pText);
		`,
		light: css`
			background-color: var(--pBase);
			color: var(--pText);
		`,
	})
	const Wrapper = styled.div`
		${rootVars};
		${wrapTheme};
		min-height: 100vh;
		min-width: 100vw;
		h1, h2, h3, h4, h5, h6 {
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
			font-size: 60px;
		}
		p {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-size: 60px;
		}
		transition: all 3s ease;
	`;

	const toggle = () => {
		const mode = (themeState === "light" ? "dark" : "light");
		setThemeState(mode);
	}

	return (
		<ThemeToggleContext.Provider value={{ toggle: toggle, mode: themeState, }}>
			<ThemeProvider theme={{ mode: themeState }}>
				<Wrapper>
					{children}
				</Wrapper>
			</ThemeProvider>
		</ThemeToggleContext.Provider>
	);
}

export default ThemeProvider;