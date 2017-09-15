/*
 *  Index file within components folder is used for all basic-level components that will be used by
 * other components and pages. Many of them inherit from React's Stateless Functional Components type.
 */

import * as React from "react"
import { css } from "glamor"

import $ from "../style"

const defaultFont = $.font()

// Text component
interface Text{
	children: string
}
const textStyle = css({
	color: $.textColor
})
export const Text: React.SFC<Text> = (props) => {
	return <p {... defaultFont} {...textStyle}>{props.children}</p>
}

// Heading component - size prop is optional
interface Heading{
	size?: "L" | "M" | "S"
	children: string
}
const headingStyle = css({
	color: $.primaryColor
})
export const Heading: React.SFC<Heading> = (props) => {
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

// Panel component
interface Panel{
	children: JSX.Element[] | JSX.Element,
	darker?: boolean,
	child?: boolean
}
const panelBaseRules = {
	"backgroundColor": $.lightGray,
	"borderRadius": `${$.roundedCorner}px`,
	"display": "flex"
}
const panelDarkerRules = {
	"backgroundColor": $.mediumGray,
	"border": `1px solid ${$.darkGray}`,
}
const panelChildRules = {
	"display": "block"
}
let panelStyle: any = panelBaseRules
export const Panel: React.SFC<Panel> = (props) => {
	if (props.darker){
		panelStyle = {...panelStyle, ...panelDarkerRules}
	}
	if (props.child){
		panelStyle = {...panelStyle, ...panelChildRules}
	}
	return <div {...css(panelStyle)} {...$.margin(2)} {...$.padding()}>{props.children}</div>
}

// Page component
interface Page{
	children: JSX.Element[] | JSX.Element
}
const pageStyle = css({
	"backgroundColor": $.offWhite,
	"boxSizing": "border-box",
	"minHeight": "100vh"
})
export const Page: React.SFC<Panel> = (props) => {
	return <div {...pageStyle} {...$.padding(8)}>{props.children}</div>
}

// Button component - display string must be passed in as a child
interface Button{
	children: string
	onClick: any // TODO: more restrictive type should be defined
}
const buttonStyle = css({
	"backgroundColor": $.primaryColor,
	"color": $.white,
	":hover": {
		"backgroundColor": $.darker($.primaryColor),
		"color": $.offWhite,
	}
})
export const Button: React.SFC<Button> = (props) => {
	return <button {...buttonStyle} onClick={props.onClick}>{props.children}</button>
}
