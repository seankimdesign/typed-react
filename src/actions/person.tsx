import { Action } from "flux-standard-action"

type PersonAction = "FETCH_PERSON" | "REQUEST_PERSON" | "RECEIVE_PERSON" | "FAILED_PERSON"

export const FETCH_PERSON: PersonAction = "FETCH_PERSON"
export const REQUEST_PERSON: PersonAction = "REQUEST_PERSON"
export const RECEIVE_PERSON: PersonAction = "RECEIVE_PERSON"
export const FAILED_PERSON: PersonAction = "FAILED_PERSON"

export interface PersonFSA extends Action<any>{
	type: PersonAction
	payload?: {
		name: string,
		picture: string,
		id: number
	}
}

export interface PersonProps{
	name: string,
	picture: string
}

export const fetchPerson = (id: number) => ({
	type: FETCH_PERSON,
	id
})

export const requestPerson = (): PersonFSA => ({
	type: REQUEST_PERSON
})

export const receivePerson = (person: PersonProps, id: number): PersonFSA => ({
	type: RECEIVE_PERSON,
	payload: {
		name: person.name,
		picture: person.picture,
		id: id
	}
})
