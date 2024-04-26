import { Dispatch, SetStateAction } from "react";
import { ThemeMetadataType } from "./ThemeMetadata";

export type ThemeContextProps = {
    currentTheme: string;
    setCurrentTheme: Dispatch<SetStateAction<string>>
    themeMetadata: Record<string, ThemeMetadataType>
    themeDisplayName: string
  }