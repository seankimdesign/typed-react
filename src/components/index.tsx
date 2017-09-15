/*
 *  Index file within components folder is used for all basic-level components that will be used by
 * other components and pages. Many of them inherit from React's Stateless Functional Components type.
 */

import * as React from "react"
import { css } from "glamor"

import $ from "../style"

const defaultFont = $.font()

// Heading component - size prop is optional
interface Heading{
	size?: "L" | "M" | "S"
	children: string
}
const headingStyle = css({
	color: $.primaryColor
})
const Heading: React.SFC<Heading> = (props) => {
	let dynamicSize = $.headingSizeMedium
	switch (props.size) {
		case "L":
			dynamicSize = $.headingSizeLarge
			break
		case "S":
			dynamicSize = $.headingSizeSmall
	}
	const dynamicSizeStyle = css({fontSize: dynamicSize})
	return <h1 {...defaultFont} {...headingStyle} {...dynamicSizeStyle}>{props.children}</h1>
}
export { Heading }

// Text component - Inherits from Heading interface and adds an optional Bold boolean
interface Text extends Heading{
	bold?: boolean
}
const textBaseRules = {
	color: $.textColor
}
const textBoldRules = {
	fontWeight: "bold"
}
const Text: React.SFC<Text> = (props) => {
	let textStyle: any = textBaseRules
	let dynamicSize = $.fontSize
	switch (props.size) {
		case "L":
			dynamicSize = $.fontSize + 3
			break
		case "S":
			dynamicSize = $.fontSize - 2
	}
	if (props.bold){
		textStyle = {...textStyle, ...textBoldRules}
	}
	const dynamicSizeStyle = css({fontSize: dynamicSize})
	return <p {...defaultFont} {...css(textStyle)} {...dynamicSizeStyle}>{props.children}</p>
}
// export declaration is called out separately due to Rect Dev Tools compatibility
export { Text }

// Panel component
interface Panel{
	children: JSX.Element[] | JSX.Element
	darker?: boolean
	column?: boolean
	justify?: string
}
const panelBaseRules = {
	"backgroundColor": $.lightGray,
	"borderRadius": `${$.roundedCorner}px`,
	"display": "flex",
	"flexWrap": "wrap"
}
const panelDarkerRules = {
	"backgroundColor": $.mediumGray,
	"border": `1px solid ${$.darkGray}`,
}
const panelColumnRules = {
	"flexDirection": "column",
}
const Panel: React.SFC<Panel> = (props) => {
	let panelStyle: any = panelBaseRules
	if (props.darker){
		panelStyle = {...panelStyle, ...panelDarkerRules}
	}
	if (props.column){
		panelStyle = {...panelStyle, ...panelColumnRules}
	}
	if (props.justify && props.justify.length){
		panelStyle = {...panelStyle, ...{"justifyContent": props.justify}}
	}
	return <div {...css(panelStyle)} {...$.margin(2)} {...$.padding()}>{props.children}</div>
}
export { Panel }

// Page component
interface Page{
	children: JSX.Element[] | JSX.Element
}
const pageStyle = css({
	"backgroundColor": $.offWhite,
	"boxSizing": "border-box",
	"minHeight": "100vh",
	"display": "flex",
	"flexDirection" : "column"
})
const Page: React.SFC<Panel> = (props) => {
	return <div {...pageStyle} {...$.padding(8)}>{props.children}</div>
}
export { Page }

// Button component - display string must be passed in as a child
export type ButtonType = "primary" | "secondary" | "warning" | "disabled"
interface Button{
	children: string
	onClick: any // TODO: more restrictive type should be defined
	type?: ButtonType
}
const buttonBaseRules = {
	"backgroundColor": $.primaryColor,
	"color": $.white,
	"width": "220px",
	"height": "80px",
	"borderRadius": $.roundedCorner,
	"border": 0,
	"outline": "none",
	":hover": {
		"backgroundColor": $.darker($.primaryColor),
		"color": $.offWhite,
		"cursor": "pointer",
	}
}
const buttonWarningRules = {
	"backgroundColor": $.warningColor,
	"fontSize": $.fontSize + 5,
	"fontWeight": "bold",
	"alignSelf": "flex-end",
	":hover": {
		"backgroundColor": $.darker($.warningColor),
		"cursor": "pointer",
	}
}
const Button: React.SFC<Button> = (props) => {
	let buttonStyle: any = buttonBaseRules
	if (props.type === "warning"){
		buttonStyle = {...buttonStyle, ...buttonWarningRules}
	}
	return <button {...css(buttonStyle)} {...$.padding(2)} {...$.margin(2)} {...$.shadow(6)} onClick={props.onClick}>{props.children}</button>
}
export { Button }
