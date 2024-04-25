import React from "react";
import { ThemeMetadataType } from "../../ThemeContext";

const ThemeComponent = React.lazy(() => import("./DefaultTheme"));

export const DefaultThemeMetadata: ThemeMetadataType = {
    displayName: 'Тема по умолчанию',
    themeComponent: ThemeComponent
};