import { ThemeNames } from "../../../Theme";

export type ThemeType = (typeof ThemeNames)[number];
export const isThemeType = (x: any): x is ThemeType => ThemeNames.includes(x);