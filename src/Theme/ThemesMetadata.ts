
import { ThemeMetadataType, ThemeType } from "../Modules/ThemeModule";
import { DefaultThemeMetadata } from "./DefaultTheme/DefaultThemeMetadata";
import { OneThemeMetadata } from "./OneTheme/OneThemeMetadata";
import { ThreeThemeMetadata } from "./ThreeTheme/ThreeThemeMetadata";
import { TwoThemeMetadata } from "./TwoTheme/TwoThemeMetadata";

export const ThemeNames = ['DefaultTheme', 'OneTheme', 'TwoTheme', 'ThreeTheme'] as const

export const ThemesMetadata: Record<ThemeType, ThemeMetadataType> = {
    DefaultTheme: DefaultThemeMetadata,
    OneTheme: OneThemeMetadata,
    TwoTheme: TwoThemeMetadata,
    ThreeTheme: ThreeThemeMetadata
};