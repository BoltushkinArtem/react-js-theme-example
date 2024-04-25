import { ThemeMetadataType, ThemeType } from "../ThemeContext";
import { DefaultThemeMetadata } from "../ThemeList/DefaultTheme/DefaultThemeMetadata";
import { OneThemeMetadata } from "../ThemeList/OneTheme/OneThemeMetadata";
import { ThreeThemeMetadata } from "../ThemeList/ThreeTheme/ThreeThemeMetadata";
import { TwoThemeMetadata } from "../ThemeList/TwoTheme/TwoThemeMetadata";

export const ThemeNames = ['DefaultTheme', 'OneTheme', 'TwoTheme', 'ThreeTheme'] as const

export const ThemesMetadata: Record<ThemeType, ThemeMetadataType> = {
    DefaultTheme: DefaultThemeMetadata,
    OneTheme: OneThemeMetadata,
    TwoTheme: TwoThemeMetadata,
    ThreeTheme: ThreeThemeMetadata
};