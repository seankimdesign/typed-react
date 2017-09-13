import * as React from "react"

import { Panel, Button } from "."
import Person, { PersonProps } from "./Person"

export interface PersonLoaderProps{
	person: any
	buttonText: string
	onClick: any
	id: number
}

export default class PersonLoader extends React.Component<PersonLoaderProps, {}>{

	public render() {
		const {person, id} = this.props
		const ownPerson = person.filter((singlePerson: any) => singlePerson.id === id)[0]
		const personName = (ownPerson && ownPerson.props && ownPerson.props.name.first) || "Person is not loaded"
		const personPicture = (ownPerson && ownPerson.props && ownPerson.props.picture.large) || "Person is not loaded"
		return(
			<Panel>
				<Person name={personName} picture={personPicture}/>
				<Button onClick={() => this.props.onClick(id)}>{this.props.buttonText}</Button>
			</Panel>
		)
	}
}
