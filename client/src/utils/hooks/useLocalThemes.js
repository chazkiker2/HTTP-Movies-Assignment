import { useLocalStorage } from "./useLocalStorage";
import { useMedia } from "./useMedia";

const usePrefersDarkMode = () => {
	return useMedia(['(prefers-color-scheme: dark)'], [true], true);
};

export const useLocalThemes = (modeToSet) => {
	// const prefersDark = usePrefersDarkMode();
	// const boolToSet = typeof darkByDefault !== "undefined" ? darkByDefault : prefersDark;
	const [darkMode, setDarkMode] = useLocalStorage("mode", modeToSet);
	return [darkMode, setDarkMode];
};