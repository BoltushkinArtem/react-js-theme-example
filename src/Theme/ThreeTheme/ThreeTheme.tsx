import { FC } from "react";
import { createUseDisableImportedStyles } from "../../Modules/ThemeModule";
import "./ThreeTheme.css";


const useDisableImportedStyles = createUseDisableImportedStyles()

const ThreeTheme: FC<{}> = () => {
    useDisableImportedStyles()
    return null
}
export default ThreeTheme;