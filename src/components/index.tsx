import * as React from "react"

export interface Heading{
	size?: "L" | "M" | "S" | "l" | "m" | "s"
	children: string
}
export const Heading: React.SFC<Heading> = (props) => {
	let fontSize = 30
	switch (props.size.toUpperCase()) {
		case "L":
			fontSize = 36
			break
		case "S":
			fontSize = 24
	}
	return <h1 style={{fontSize}}>{props.children}</h1>
}

export interface Text{
	children: string
}
export const Text: React.SFC<Heading> = (props) => {
	return <p>{props.children}</p>
}

export interface Panel{
	children: JSX.Element[]
}
export const Panel: React.SFC<Panel> = (props) => {
	return <div>{props.children}</div>
}

export interface Button{
	children: string
	onClick: any
}
export const Button: React.SFC<Button> = (props) => {
	return <button onClick={props.onClick}>{props.children}</button>
}
