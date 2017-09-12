import { all, put, takeEvery } from "redux-saga/effects"

import { FETCH_PERSON, receivePerson, requestPerson } from "../actions/person"
import { fetchPersonAPI } from "../api/person"

export function* fetchPersonSaga() {
	yield put(requestPerson())
	const person = yield fetchPersonAPI()
	yield put(receivePerson(person))
}

export function* watchPerson() {
	yield takeEvery(FETCH_PERSON, fetchPersonSaga)
}

export default function* saga(){
	yield all([
		watchPerson()
	])
}
