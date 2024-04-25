import React, { ReactElement } from "react";
import { ThemeMetadataType, ThemeType, useTheme } from "../Theme";

export const Footer = (): ReactElement => {
    const { themeType, displayName, setCurrentTheme, themeMetadataType } = useTheme()

    return (
        <>
            <>Theme type is '{themeType}' - '{displayName}'</>
            {
                Object.keys(themeMetadataType)?.map(theme => {
                    const themeType: ThemeType = theme as ThemeType
                    const themesMetadata: ThemeMetadataType = themeMetadataType[themeType];
                    return <input key={theme} type="button" value={themesMetadata?.displayName} onClick={_ => setCurrentTheme(themeType)}/>
                })
            }
        </>
    )
}