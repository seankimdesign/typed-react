/*
 * PersonLoader component uses the Button basic component and Person component to control the
 * flow of request-response data into their correct components
 */

import * as React from "react"

import { PersonParams } from "../actions/person"

// Utility functions imported as `_`
import * as _ from "../util"
import { Panel, Button } from "."
import Person from "./Person"

const ProfileImage =  require("../../static/img/profile.png")

export interface PersonLoaderProps{
	person: any
	buttonText: string
	onClick: any // TODO: more restrictive type should be defined
	id: number // TODO: enforce uniqueness
	params: PersonParams
}

export default class PersonLoader extends React.Component<PersonLoaderProps, {}>{

	public render() {

		const notFoundName = "Person is not loaded"
		const notFoundImg = ""
		const {person, id} = this.props
		const params = {...this.props.params}
		const ownPerson = person.filter((singlePerson: any) => singlePerson.id === id)[0]
		const personName = (ownPerson && ownPerson.props && _.capitalize(ownPerson.props.name.first)) || notFoundName
		const personPicture = (ownPerson && ownPerson.props && ownPerson.props.picture.large) || ProfileImage
		return(
			<Panel darker={true} child={true}>
				<Person name={personName} picture={personPicture}/>
				<Button onClick={() => this.props.onClick(id, params)}>{this.props.buttonText}</Button>
			</Panel>
		)
	}
}
