import { ThemeMetadataType } from "./ThemeMetadata"
import { ThemeType } from "./ThemeModel"

export type ThemeProviderProps = {
    children?: React.ReactNode
    themesMetadata: Record<ThemeType, ThemeMetadataType>
}