import React, { ReactElement, Suspense } from 'react';
import { ThemeContextProps } from './ThemeContextProps';
import { ThemeProviderProps } from './ThemeProviderProps';
import { getThemType } from '../utils/env';
import { ThemeMetadataType } from './ThemeMetadata';
import { ThemeType } from './ThemeModel';

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
    const { children, themesMetadata } = props
    const [currentTheme, setCurrentTheme] = React.useState<ThemeType>(getThemType());
    const currentThemesMetadata: ThemeMetadataType = themesMetadata[currentTheme];

    const ThemeComponent = currentThemesMetadata.themeComponent

    return (
        <ThemeContext.Provider value={{
            themeType: currentTheme,
            displayName: currentThemesMetadata?.displayName,
            setCurrentTheme,
            themeMetadataType: themesMetadata
        }}>
            <Suspense fallback={null}>
                <ThemeComponent />
            </Suspense>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => React.useContext(ThemeContext);