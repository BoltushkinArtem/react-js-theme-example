import React, { ReactElement, Suspense } from 'react';
import { ThemeContextProps } from './ThemeContextProps';
import { ThemeProviderProps } from './ThemeProviderProps';
import { getThemName } from '../utils/env';
import { ThemeMetadataType } from './ThemeMetadata';

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
    const { children, themesMetadata } = props

    const [ currentTheme, setCurrentTheme ] = React.useState<string>(getThemName(Object.keys(themesMetadata)));
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