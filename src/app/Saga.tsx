import { all, put, takeEvery } from "redux-saga/effects"

import { FETCH_PERSON, receivePerson, requestPerson } from "../actions/person"
import { fetchPersonAPI } from "../api/person"

export function* fetchPersonSaga(request: any) {
	yield put(requestPerson())
	let gender = "male"
	if (request.id > 20000){
		gender = "female"
	}
	const person = yield fetchPersonAPI(gender)
	yield put(receivePerson(person, request.id))
}

export function* watchPerson() {
	yield takeEvery(FETCH_PERSON, fetchPersonSaga)
}

export default function* saga(){
	yield all([
		watchPerson()
	])
}
