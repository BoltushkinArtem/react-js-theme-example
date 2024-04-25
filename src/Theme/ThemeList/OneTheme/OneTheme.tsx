import React, { ReactElement } from "react";
import { createUseDisableImportedStyles } from "../../ThemeSwitcher";
import "./OneTheme.css";

const useDisableImportedStyles = createUseDisableImportedStyles()

const OneTheme = (): ReactElement => {
    useDisableImportedStyles()
    return <></>
}
export default OneTheme;