import React, { ReactElement } from "react";
import { createUseDisableImportedStyles } from "../../ThemeSwitcher";
import "./TwoTheme.css";

const useDisableImportedStyles = createUseDisableImportedStyles()

const TwoTheme = (): ReactElement => {
    useDisableImportedStyles()
    return <></>
}
export default TwoTheme;