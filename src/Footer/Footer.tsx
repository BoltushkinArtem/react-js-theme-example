import { ReactElement } from "react";
import { ThemeMetadataType, useTheme } from "../Modules/ThemeModule";

export const Footer = (): ReactElement => {
    const { currentTheme, setCurrentTheme, themeDisplayName, themeMetadata } = useTheme()

    return (
        <>
            <>Theme type is '{currentTheme}' - '{themeDisplayName}'</>
            {
                Object.keys(themeMetadata)?.map(theme => {
                    const themesMetadata: ThemeMetadataType = themeMetadata[theme];
                    return <input data-test-id={`button-${theme}`} key={theme} type="button" value={themesMetadata?.displayName} onClick={_ => setCurrentTheme(theme)}/>
                })
            }
        </>
    )
}