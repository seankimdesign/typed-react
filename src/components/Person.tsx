/*
 * Person component displays the name and image passed in as a prop
 */

import * as React from "react"
import { css } from "glamor"

import { Text } from "."
import $ from "../style"

// This interface is imported and used by the `person` actions as well
export interface PersonProps{
	name: string
	picture: string
}

export default class Person extends React.Component<PersonProps, {}>{
	public render() {
		const imageStyle = {
			"width": "128px",
			"height": "128px"
		}
		return(
			<div {...$.flexColumn()} {...$.flexAlignCenter()}>
				<img {...css(imageStyle)} src={this.props.picture}/>
				<Text size="L" bold={true}>{this.props.name}</Text>
			</div>
		)
	}
}
