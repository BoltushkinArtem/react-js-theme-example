import { FC } from "react";
import { createUseDisableImportedStyles } from "../../Modules/ThemeModule";
import "./OneTheme.css";

const useDisableImportedStyles = createUseDisableImportedStyles()

const OneTheme: FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default OneTheme;