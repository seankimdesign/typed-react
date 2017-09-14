// Using Flux Standard Action, but only the type definitions and syntax
import { Action } from "flux-standard-action"

import { PersonProps } from "../components/Person"

// New type declaration to limit the actions being passed to the `person` reducer
type PersonAction = "FETCH_PERSON" | "REQUEST_PERSON" | "RECEIVE_PERSON" | "FAILED_PERSON"

export const FETCH_PERSON: PersonAction = "FETCH_PERSON"
export const REQUEST_PERSON: PersonAction = "REQUEST_PERSON"
export const RECEIVE_PERSON: PersonAction = "RECEIVE_PERSON"
export const FAILED_PERSON: PersonAction = "FAILED_PERSON"

// The parameters of request are scoped as below
export interface PersonParams {
	gender?: string
	nat?: string
	lego?: string,
	[key: string]: string
}

// All actions being passed as a `person` action must conform to the below interface
export interface PersonFSA extends Action<any>{
	type: PersonAction
	payload?: {
		id: number,
		name?: string,
		picture?: string,
		params?: PersonParams
	}
}

export const fetchPerson = (id: number, params: PersonParams): PersonFSA => ({
	type: FETCH_PERSON,
	payload: {
		id,
		params
	}
})

export const requestPerson = (id: number): PersonFSA => ({
	type: REQUEST_PERSON,
	payload: {
		id
	}
})

export const receivePerson = (person: PersonProps, id: number): PersonFSA => ({
	type: RECEIVE_PERSON,
	payload: {
		id,
		name: person.name,
		picture: person.picture
	}
})
