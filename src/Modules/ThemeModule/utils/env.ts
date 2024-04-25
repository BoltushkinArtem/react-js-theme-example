import { ThemeType, isThemeType } from ".."


export const getThemType = (): ThemeType => {
    const themeName = process.env.REACT_APP_THEME_NAME
    
    return isThemeType(themeName) ? themeName as ThemeType : 'DefaultTheme'
}