import { FC } from "react";
import "./TwoTheme.css";
import { createUseDisableImportedStyles } from "../../Modules/ThemeModule";

const useDisableImportedStyles = createUseDisableImportedStyles()

const TwoTheme: FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default TwoTheme;