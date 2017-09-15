import { css } from "glamor"
import * as color from "tinycolor2"

const config = {
	fontSize: 14,
	headingSizeLarge: 36,
	headingSizeMedium: 30,
	headingSizeSmall: 26,
	fontFamily: "'Slabo 27px', sans-serif",
	primaryColor: "#2468D7",
	warningColor: "#C41821",
	backgroundColor: "#F1F1E5",
	lightGray: "#E7E7E7",
	mediumGray: "#D9D9D9",
	darkGray: "#949494",
	textColor: "#333333",
	white: "#FBFBFB",
	offWhite: "#F4F4F4",
	roundedCorner: 6,
	spaceH: 7,
	spaceV: 5
}

const fn = {
	font: () => css({fontFamily: config.fontFamily}),
	margin: (multiplier: number = 1) => css({margin: `${config.spaceV * multiplier}px ${config.spaceH * multiplier}px`}),
	padding: (multiplier: number = 1) => css({padding: `${config.spaceV * multiplier}px ${config.spaceH * multiplier}px`}),
	shadow: (shadowDepth: number = 5) => css({
		"boxShadow": `0px ${Math.floor(shadowDepth / 1.5)}px ` +
						`${Math.floor((shadowDepth + 5) / 2)}px ` +
						`-${Math.floor((shadowDepth + 1) / 3)}px rgba(0,0,0,0.25)`
	}),
	lighter: (col: string) => color(col).lighten(20).saturate(12).toString(),
	darker: (col: string) => color(col).darken(20).desaturate(12).toString(),
	flexColumn: () => css({"display": "flex", "flexDirection": "column"}),
	flexRow: () => css({"display": "flex", "flexDirection": "row"}),
	flexAlignCenter: () => css({"display": "flex", "alignItems": "center"}),
	flexJustifyCenter: () => css({"display": "flex", "justifyContent": "center"}),
	flexJustifyBetween: () => css({"display": "flex", "justifyContent": "space-between"})
}

export default {...config, ...fn}
