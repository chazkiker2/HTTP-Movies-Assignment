import { css } from "styled-components";
import theme from "styled-theming";

export const rootVars = theme("mode", {
	dark: css`
			--pBase: #37474F;
			--pLight: #62727B;
			--pDark: #102027;
			--sBase: #01579B;
			--sLight: #4f83cc;
			--sDark: #002f6c;
			--pText: #ffffff;
			--sText: #ffffff;
			--sTextDark: #000000;
	`,
	light: css`
			--pBase: #f5f5f5;
			--pLight: #ffffff;
			--pDark: #c2c2c2;
			--sBase: #4fc3f7;
			--sLight: #8bf6ff;
			--sDark: #0093c4;
			--pText: #000000;
			--sText: #000000;
			--sTextDark: #000000;
	`,
});
export const variables = {
	pBase: "var(--pBase)",
	pLight: "var(--pLight)",
	pDark: "var(--pDark)",
	sBase: "var(--sBase)",
	sLight: "var(--sLight)",
	sDark: "var(--sDark)",
	pText: "var(--pText)",
	sText: "var(--sText)",
	sTextDark: "var(--sTextDark)",
}
export const staticVars = {
	dark: {
		pBase: "#37474F",
		pLight: "#62727B",
		pDark: "#102027",
		sBase: "#01579B",
		sLight: "#4f83cc",
		sDark: "#002f6c",
		pText: "#ffffff",
		sText: "#ffffff",
		sTextDark: "#000000",
		errBase: "#B00020",
	},
	light: {
		pBase: "#f5f5f5",
		pLight: "#ffffff",
		pDark: "#c2c2c2",
		sBase: "#4fc3f7",
		sLight: "#8bf6ff",
		sDark: "#0093c4",
		pText: "#000000",
		sText: "#000000",
		sTextDark: "#000000",
		errBase: "#B00020",
	},

}

export const createClickerStyles = (background, color, backgroundHover = color, colorHover = background) => {
	const colors = {
		background,
		color,
		backgroundHover,
		colorHover,
	};

	return css`
		background-color: ${colors.background};
		color: ${colors.color};
		transition: all 0.4s ease;
		&:hover {
			cursor: pointer;
			background-color: ${colors.backgroundHover};
			color: ${colors.colorHover};
			transition: all 0.4s ease;
		}
	`;
}

export const createBackgroundStyles = (darkBackground, darkColor, lightBackground, lightColor) => {
	return {
		dark: css`
			background-color: ${darkBackground};
			color: ${darkColor};
		`,
		light: css`
			background-color: ${lightBackground};
			color: ${lightColor};
		`,
	}
}

export const createModeStyles = (cssDark, cssLight) => {
	return {
		dark: cssDark,
		light: cssLight,
	}
}