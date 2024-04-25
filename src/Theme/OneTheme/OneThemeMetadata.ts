import React from "react";
import { ThemeMetadataType } from "../../Modules/ThemeModule";

const ThemeComponent = React.lazy(() => import("./OneTheme"));

export const OneThemeMetadata: ThemeMetadataType = {
    displayName: 'Первая тема',
    themeComponent: ThemeComponent
};