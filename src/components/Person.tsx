import * as React from "react"

import { Text } from "."

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
