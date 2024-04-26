export const getThemName = (themeNames: string[]): string => {
    const themeName = process.env.REACT_APP_THEME_NAME
    
    return !themeName?.toString()?.length
        ? themeNames[0]
        : themeNames.includes(themeName) 
            ? themeName
            : themeNames[0]
}