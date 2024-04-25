import React from "react";
import { ThemeMetadataType } from "../../Modules/ThemeModule";

const ThemeComponent = React.lazy(() => import("./TwoTheme"));

export const TwoThemeMetadata: ThemeMetadataType = {
    displayName: 'Вторая тема',
    themeComponent: ThemeComponent
};