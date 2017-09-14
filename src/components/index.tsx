/*
 *  Index file within components folder is used for all basic-level components that will be used by
 * other components and pages. Many of them inherit from React's Stateless Functional Components type.
 */

import * as React from "react"

// Heading component - size prop is optional
export interface Heading{
	size?: "L" | "M" | "S"
	children: string
}
export const Heading: React.SFC<Heading> = (props) => {
	let fontSize = 30
	switch (props.size) {
		case "L":
			fontSize = 36
			break
		case "S":
			fontSize = 24
	}
	return <h1 style={{fontSize}}>{props.children}</h1>
}

// Text component
export interface Text{
	children: string
}
export const Text: React.SFC<Heading> = (props) => {
	return <p>{props.children}</p>
}

// Panel component
export interface Panel{
	children: JSX.Element[]
}
export const Panel: React.SFC<Panel> = (props) => {
	return <div>{props.children}</div>
}

// Button component - display string must be passed in as a child
export interface Button{
	children: string
	onClick: any // TODO: more restrictive type should be defined
}
export const Button: React.SFC<Button> = (props) => {
	return <button onClick={props.onClick}>{props.children}</button>
}
