import { RECEIVE_PERSON, REQUEST_PERSON, FAILED_PERSON, PersonFSA } from "../actions/person"

export interface PersonState{
	name: string,
	picture: string,
	error: Error,
	fetching: boolean
}

const defaultState: PersonState = {
	name: null,
	picture: null,
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
			return{
				...state,
				fetching: false,
				error: null,
				name: action.payload.name,
				picture: action.payload.picture
			}
		case FAILED_PERSON:
			return{
				...state,
				fetching: true,
				error: null
			}
	}
}

export default person
