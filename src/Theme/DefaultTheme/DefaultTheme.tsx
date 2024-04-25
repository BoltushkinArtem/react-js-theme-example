import { FC } from "react";
import "./DefaultTheme.css";
import { createUseDisableImportedStyles } from "../../Modules/ThemeModule";

const useDisableImportedStyles = createUseDisableImportedStyles()

const DefaultTheme: FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default DefaultTheme;