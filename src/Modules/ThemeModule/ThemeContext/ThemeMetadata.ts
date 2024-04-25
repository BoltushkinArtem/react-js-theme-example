import { LazyExoticComponent, FC } from 'react';
export type ThemeMetadataType = {
  displayName: string;
  themeComponent: LazyExoticComponent<FC>
}