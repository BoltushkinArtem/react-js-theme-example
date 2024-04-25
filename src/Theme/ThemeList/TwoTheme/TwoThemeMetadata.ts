import React from "react";
import { ThemeMetadataType } from "../../ThemeContext";

const ThemeComponent = React.lazy(() => import("./TwoTheme"));

export const TwoThemeMetadata: ThemeMetadataType = {
    displayName: 'Вторая тема',
    themeComponent: ThemeComponent
};