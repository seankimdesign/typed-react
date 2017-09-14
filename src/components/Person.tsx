/*
 * Person component displays the name and image passed in as a prop
 */

import * as React from "react"

import { Text } from "."

// This interface is imported and used by the `person` actions as well
export interface PersonProps{
	name: string
	picture: string
}

export default class Person extends React.Component<PersonProps, {}>{
	public render() {
		return(
			<div>
				<img src={this.props.picture}/>
				<Text>{this.props.name}</Text>
			</div>
		)
	}
}
