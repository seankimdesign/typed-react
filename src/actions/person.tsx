import { Action } from "flux-standard-action"

export type PersonAction = "FETCH_PERSON" | "REQUEST_PERSON" | "RECEIVE_PERSON" | "FAILED_PERSON"

export const FETCH_PERSON: PersonAction = "FETCH_PERSON"
export const REQUEST_PERSON: PersonAction = "REQUEST_PERSON"
export const RECEIVE_PERSON: PersonAction = "RECEIVE_PERSON"
export const FAILED_PERSON: PersonAction = "FAILED_PERSON"

export interface PersonFSA extends Action<any>{
	type: PersonAction
	payload?: {
		name: string,
		picture: string
	}
}

export interface PersonIncoming{
	name: string,
	picture: string
}

export const fetchPerson = () => ({
	type: FETCH_PERSON
})

export const requestPerson = (): PersonFSA => ({
	type: REQUEST_PERSON
})

export const receivePerson = (person: PersonIncoming): PersonFSA => ({
	type: RECEIVE_PERSON,
	payload: {
		name: person.name,
		picture: person.picture
	}
})
