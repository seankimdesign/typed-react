import * as styledComponents from "styled-components"
import { ThemedStyledComponentsModule } from "styled-components"

export default interface ThemeInterface {
	fontSize: number
	fontFamily: string
	primaryColor: string
	backgroundColor: string
	lightGray: string
	darkGray: string
	textColor: string
	spaceH: number
	spaceV: number
}

const {
	default: styled,
	css,
	injectGlobal,
	keyframes,
	ThemeProvider,
} = styledComponents as
	ThemedStyledComponentsModule<any> as
	ThemedStyledComponentsModule<ThemeInterface>

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled
