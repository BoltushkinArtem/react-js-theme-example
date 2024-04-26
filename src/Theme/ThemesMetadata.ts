
import { ThemeMetadataType } from "../Modules/ThemeModule";
import { DefaultThemeMetadata } from "./DefaultTheme/DefaultThemeMetadata";
import { OneThemeMetadata } from "./OneTheme/OneThemeMetadata";
import { ThreeThemeMetadata } from "./ThreeTheme/ThreeThemeMetadata";
import { TwoThemeMetadata } from "./TwoTheme/TwoThemeMetadata";

export const ThemesMetadata: Record<string, ThemeMetadataType> = {
    DefaultTheme: DefaultThemeMetadata,
    OneTheme: OneThemeMetadata,
    TwoTheme: TwoThemeMetadata,
    ThreeTheme: ThreeThemeMetadata
};