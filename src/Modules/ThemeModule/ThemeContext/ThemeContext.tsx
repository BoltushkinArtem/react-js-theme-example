import React, { ReactElement, Suspense } from 'react';
import { ThemeContextProps } from './ThemeContextProps';
import { ThemeProviderProps } from './ThemeProviderProps';
import { ThemeMetadataType } from './ThemeMetadata';

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

const getThemName = (themeNames: string[], themeName?: string): string => !themeName?.toString()?.length
    ? themeNames[0]
    : themeNames.includes(themeName)
        ? themeName
        : themeNames[0]

export const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
    const { children, themesMetadata, defaultThemeName } = props

    const [currentTheme, setCurrentTheme] = React.useState<string>(getThemName(Object.keys(themesMetadata), defaultThemeName));
    const currentThemesMetadata: ThemeMetadataType = themesMetadata[currentTheme];

    const ThemeComponent = currentThemesMetadata.themeComponent

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            setCurrentTheme,
            themeDisplayName: currentThemesMetadata?.displayName,
            themeMetadata: themesMetadata
        }}>
            <Suspense fallback={null}>
                <ThemeComponent />
            </Suspense>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);