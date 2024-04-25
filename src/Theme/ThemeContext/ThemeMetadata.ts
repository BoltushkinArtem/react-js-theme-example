import { JSXElementConstructor, LazyExoticComponent, ReactElement } from 'react';
export type ThemeMetadataType = {
    displayName: string;
    themeComponent: LazyExoticComponent<() => ReactElement<any, string | JSXElementConstructor<any>>>
  }