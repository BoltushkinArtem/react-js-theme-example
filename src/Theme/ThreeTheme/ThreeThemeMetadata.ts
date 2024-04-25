import React from "react";
import { ThemeMetadataType } from "../../Modules/ThemeModule";

const ThemeComponent = React.lazy(() => import("./ThreeTheme"));

export const ThreeThemeMetadata: ThemeMetadataType = {
    displayName: 'Третья тема',
    themeComponent: ThemeComponent
};