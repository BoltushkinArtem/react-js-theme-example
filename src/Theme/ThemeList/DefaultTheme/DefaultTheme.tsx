import React, { ReactElement } from "react";
import "./DefaultTheme.css";
import { createUseDisableImportedStyles } from "../../ThemeSwitcher";

const useDisableImportedStyles = createUseDisableImportedStyles()

const DefaultTheme = (): ReactElement => {
    useDisableImportedStyles()
    return <></>
}
export default DefaultTheme;