import { css } from "glamor"
import * as color from "tinycolor2"

const config = {
	fontSize: 14,
	headingSizeLarge: 36,
	headingSizeMedium: 30,
	headingSizeSmall: 26,
	fontFamily: "'Slabo 27px', sans-serif",
	primaryColor: "#2468D7",
	backgroundColor: "#F1F1E5",
	lightGray: "#E7E7E7",
	mediumGray: "#D9D9D9",
	darkGray: "#949494",
	textColor: "#333333",
	white: "#FBFBFB",
	offWhite: "#F4F4F4",
	roundedCorner: 6,
	spaceH: 7,
	spaceV: 5,
	shadowDepth: 8
}

const fn = {
	font: () => css({fontFamily: config.fontFamily}),
	margin: (multiplier: number = 1) => css({margin: `${config.spaceH * multiplier}px ${config.spaceV * multiplier}px`}),
	padding: (multiplier: number = 1) => css({padding: `${config.spaceH * multiplier}px ${config.spaceV * multiplier}px`}),
	shadow: (offset: number = 0) => css({
		"box-shadow": `${offset}px ${Math.floor(config.shadowDepth / 2)}px` +
						`-${Math.floor(config.shadowDepth / 3)}px rgba(0,0,0,0.4)`
	}),
	lighter: (col: string) => color(col).lighten(16).saturate(8).toString(),
	darker: (col: string) => color(col).darken(16).desaturate(8).toString()
}

export default {...config, ...fn}
