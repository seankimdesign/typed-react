import { all, put, takeEvery } from "redux-saga/effects"

import {FETCH_PERSON, receivePerson, requestPerson, PersonFSA} from "../actions/person"
import { fetchPersonAPI } from "../api/person"

export function* fetchPersonSaga(request: PersonFSA) {
	yield put(requestPerson(request.payload.id))
	const person = yield fetchPersonAPI(request.payload.params)
	yield put(receivePerson(person, request.payload.id))
}

export function* watchPerson() {
	yield takeEvery(FETCH_PERSON, fetchPersonSaga)
}

export default function* saga(){
	yield all([
		watchPerson()
	])
}
