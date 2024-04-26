import { ThemeMetadataType } from "./ThemeMetadata"

export type ThemeProviderProps = {
    children?: React.ReactNode
    themesMetadata: Record<string, ThemeMetadataType>
    defaultThemeName: string | undefined
}