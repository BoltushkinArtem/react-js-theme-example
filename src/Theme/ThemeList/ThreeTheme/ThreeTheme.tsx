import React, { ReactElement } from "react";
import { createUseDisableImportedStyles } from "../../ThemeSwitcher";
import "./ThreeTheme.css";


const useDisableImportedStyles = createUseDisableImportedStyles()

const ThreeTheme = (): ReactElement => {
    useDisableImportedStyles()
    return <></>
}
export default ThreeTheme;