import { css } from "styled-components";
import theme from "styled-theming";


export const microsoftPallette = theme("mode", {
	light: css`
		--themePrimary: #0078d4;
		--themeLighterAlt: #eff6fc;
		--themeLighter: #deecf9;
		--themeLight: #c7e0f4;
		--themeTertiary: #71afe5;
		--themeSecondary: #2b88d8;
		--themeDarkAlt: #106ebe;
		--themeDark: #005a9e;
		--themeDarker: #004578;
		--neutralLighterAlt: #faf9f8;
		--neutralLighter: #f3f2f1;
		--neutralLight: #edebe9;
		--neutralQuaternaryAlt: #e1dfdd;
		--neutralQuaternary: #d0d0d0;
		--neutralTertiaryAlt: #c8c6c4;
		--neutralTertiary: #a19f9d;
		--neutralSecondary: #605e5c;
		--neutralPrimaryAlt: #3b3a39;
		--neutralPrimary: #323130;
		--neutralDark: #201f1e;
		--black: #000000;
		--white: #ffffff;
		--errorBackgroundFill: rgba(245, 135, 145, 0.2);
		--statusError: #A4262C;
		--successBackgroundFill: rgba(95, 210, 85, 0.2);
		--statusSuccess: #107C10;
		--severeWarningBackgroundFill: rgba(250, 65, 0, 0.2);
		--statusSevereWarning: #D83B01;
		--warningBackgroundFill: rgba(255, 200, 10, 0.2);
		--overlay: rgba(255, 255, 255, 0.4);
		--statusWarning: #797775;
		--bodyBackground: var(--neutralLighter);
		--bodyFrameBackground: var(--neutralLight);
		--buttonBackground: var(--neutralQuaternaryAlt);
		--primaryButtonText: var(--white);
		--primaryButtonTextHovered: var(--white);
		--primaryButtonTextPressed: var(--white);
		--inputBackground: var(--white);
		--inputForegroundChecked: var(--neutralLighter);
		--listBackground: var(--neutralLighter);
		--menuBackground: var(--white);
		--bodyTextChecked: var(--black);
		--buttonTextCheckedHover: var(--black);
		--link: var(--black);
		--primaryButtonBackground: var(--themePrimary);
		--inputBackgroundChecked: var(--themePrimary);
		--inputIcon: var(--themeDarkAlt);
		--inputFocusBorderAlt: var(--themeDarkAlt);
		--link_menuIcon: var(--themeDarkAlt);
		--link_primaryButtonBackgroundPressed: var(--themeDarkAlt);
		--link_menuHeader: var(--themeDarkAlt);
		--link_inputBackgroundCheckedHovered: var(--themeDarker);
		--button_inputIconHovered: var(--themeDarker);
		--button_linkHovered: var(--themeDarker);
		--button_primaryButtonBackgroundChecked: var(--themeDarkAlt);
	`,
	dark: css`
	--themePrimary: #0078d4;
	--themeLighterAlt: #eff6fc;
	--themeLighter: #deecf9;
	--themeLight: #c7e0f4;
	--themeTertiary: #71afe5;
	--themeSecondary: #2b88d8;
	--themeDarkAlt: #106ebe;
	--themeDark: #005a9e;
	--themeDarker: #004578;
	--neutralLighterAlt: #faf9f8;
	--neutralLighter: #f3f2f1;
	--neutralLight: #edebe9;
	--neutralQuaternaryAlt: #e1dfdd;
	--neutralQuaternary: #d0d0d0;
	--neutralTertiaryAlt: #c8c6c4;
	--neutralTertiary: #a19f9d;
	--neutralSecondary: #605e5c;
	--neutralPrimaryAlt: #3b3a39;
	--neutralPrimary: #323130;
	--neutralDark: #201f1e;
	--black: #000000;
	--white: #ffffff;
	--overlay: rgba(0, 0, 0, 0.4);
	--errorBackgroundFill: rgba(245, 135, 145, 0.2);
	--statusError: #A4262C;
	--successBackgroundFill: rgba(95, 210, 85, 0.2);
	--statusSuccess: #107C10;
	--severeWarningBackgroundFill: rgba(250, 65, 0, 0.2);
	--statusSevereWarning: #D83B01;
	--warningBackgroundFill: rgba(255, 200, 10, 0.2);
	--statusWarning: #797775;
	--bodyBackground: var(--themePrimary);
	--bodyFrameBackground: var(--themeDarkAlt);
	--buttonBackground: var(--themePrimary);
	--primaryButtonText: var(--themePrimary);
	--primaryButtonTextHovered: var(--themeDark);
	--primaryButtonTextPressed: var(--themeDark);
	--inputBackground: var(--white);
	--inputForegroundChecked: var(--themeDark);
	--listBackground: var(--themePrimary);
	--menuBackground: var(--themePrimary);
	--bodyTextChecked: var(--neutralLighterAlt);
	--buttonTextCheckedHover: var(--neutralLighterAlt);
	--link: var(--white);
	--primaryButtonBackground: var(--white);
	--inputBackgroundChecked: var(--white);
	--inputIcon: var(--white);
	--inputFocusBorderAlt: var(--themeTertiary);
	--link_menuIcon: var(--white);
	--link_primaryButtonBackgroundPressed: var(--themeLight);
	--link_menuHeader: var(--white);
	--link_inputBackgroundCheckedHovered: var(--themePrimary);
	--button_inputIconHovered: var(--neutralLighterAlt);
	--button_linkHovered: var(--white);
	--button_primaryButtonBackgroundChecked: var(--themeLighter);
	`,
});


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
			--tPrimary: #0078d4;
			--tLightAlt: #eff6fc;
			--tLighter: #deecf9;
			--tLight: #c7e0f4;
			--tTertiary: #71afe5;
			--tSecondary: #2b88d8;
			--tDarkAlt: #106ebe;
			--tDark: #005a9e;
			--tDarker: #004578;
			--white: #FFF;
			--black: #000;
			--nlLighterAlt: #faf9f8;
			--nLighter: #f3f2f1;
			--nLight: #edebe9;
			--nQuaternaryAlt: #e1dfdd;
			--nQuaternary: #d0d0d0;
			--nTertiaryAlt: #c8c6c4;
			--nTertiary: #a19f9d;
			--nSecondary: #605e5c;
			--nPrimaryAlt: #3b3a39;
			--nPrimary: #323130;
			--nDark: #201f1e;
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
			--tPrimary: #0078d4;
			--tLightAlt: #eff6fc;
			--tLighter: #deecf9;
			--tLight: #c7e0f4;
			--tTertiary: #71afe5;
			--tSecondary: #2b88d8;
			--tDarkAlt: #106ebe;
			--tDark: #005a9e;
			--TDarker: #004578;
			--white: #FFF;
			--nlLighterAlt: #faf9f8;
			--nLighter: #f3f2f1;
			--nLight: #edebe9;
			--nQuaternaryAlt: #e1dfdd;
			--nQuaternary: #d0d0d0;
			--nTertiaryAlt: #c8c6c4;
			--nTertiary: #a19f9d;
			--nSecondary: #605e5c;
			--nPrimaryAlt: #3b3a39;
			--nPrimary: #323130;
			--nDark: #201f1e;
	`,
});

export const createClickerStyles = (background, color, backgroundHover = color, colorHover = background) => {
	// const colors = {
	// 	background,
	// 	color,
	// 	backgroundHover,
	// 	colorHover,
	// };

	return css`
		background-color: ${background};
		color: ${color};
		transition: all 0.4s ease;
		&:hover {
			cursor: pointer;
			background-color: ${backgroundHover};
			color: ${colorHover};
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