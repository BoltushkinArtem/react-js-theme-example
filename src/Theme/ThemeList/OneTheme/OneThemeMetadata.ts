import React from "react";
import { ThemeMetadataType } from "../../ThemeContext";

const ThemeComponent = React.lazy(() => import("./OneTheme"));

export const OneThemeMetadata: ThemeMetadataType = {
    displayName: 'Первая тема',
    themeComponent: ThemeComponent
};