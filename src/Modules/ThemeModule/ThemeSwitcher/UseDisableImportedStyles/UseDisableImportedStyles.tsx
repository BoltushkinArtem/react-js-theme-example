import { useEffect } from 'react'

// global list of all the StyleSheets that are touched in useDisableImportedStyles
const switchableGlobalStyleSheets: StyleSheet[] = []

// just to clarify what createUseDisableImportedStyles() returns
type useDisableImportedStyles = () => void

export const createUseDisableImportedStyles = (
    immediatelyUnloadStyle: boolean = true
): useDisableImportedStyles => {
    let localStyleSheet: StyleSheet
    return () => {
        useEffect(() => {

            // if there are no stylesheets, you did something wrong...
            if (document.styleSheets.length < 1) return

            // set the localStyleSheet if this is the first time this instance of this useEffect is called
            if (localStyleSheet == null) {
                localStyleSheet = document.styleSheets[document.styleSheets.length - 1]
                switchableGlobalStyleSheets.push(localStyleSheet)
            }

            // if we are switching StyleSheets, disable all switchableGlobalStyleSheets
            if (!immediatelyUnloadStyle) {
                switchableGlobalStyleSheets.forEach(styleSheet => styleSheet.disabled = true)
            }

            // enable our StyleSheet!
            localStyleSheet.disabled = false

            // if we are NOT switching StyleSheets, disable this StyleSheet when the component is unmounted
            if (immediatelyUnloadStyle) return () => {
                if (localStyleSheet != null) localStyleSheet.disabled = true
            }

        })
    }
}