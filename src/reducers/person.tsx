import {RECEIVE_PERSON, REQUEST_PERSON, FAILED_PERSON, PersonFSA, RESET_PERSON} from "../actions/person"
import { PersonProps } from "../components/Person"

export interface PersonState{
	people: Array<{ id: number, props: PersonProps }>
	error: Error
	fetching: boolean
}

const defaultState: PersonState = {
	people: [],
	error: null,
	fetching: false
}

const person = (state: PersonState = defaultState, action: PersonFSA): PersonState => {
	switch (action.type){
		case REQUEST_PERSON:
			return{
				...state,
				fetching: true,
				error: null
			}
		case RECEIVE_PERSON:
			const people = state.people.filter((singlePerson) => singlePerson.id !== action.payload.id)
			people.push({
				props: {
					name: action.payload.name,
					picture: action.payload.picture
				},
				id: action.payload.id
			})
			return{
				...state,
				fetching: false,
				error: null,
				people
			}
		case RESET_PERSON:
			return{
				...state,
				people: []
			}
		case FAILED_PERSON:
			return{
				...state,
				fetching: true,
				error: null
			}
		default:
			return state
	}
}

export default person
