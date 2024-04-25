import { Dispatch, SetStateAction } from "react";
import { ThemeType } from "./ThemeModel";
import { ThemeMetadataType } from "./ThemeMetadata";

export type ThemeContextProps = {
    themeType: ThemeType;
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
    themeMetadataType: Record<ThemeType, ThemeMetadataType>
    displayName: string
  }