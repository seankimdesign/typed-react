import {connect, Dispatch} from "react-redux"

import { fetchPerson, PersonParams } from "../actions/person"
import EntryPage from "../pages/EntryPage"

const mapState = (state: any) => ({
	person: state.person
})

const mapDispatch = (dispatch: Dispatch<any>) => ({
	doFetchPerson: (id: number, params: PersonParams) => {
		dispatch(fetchPerson(id, params))
	}
})

const EntryView = connect(
	mapState,
	mapDispatch
)(EntryPage as any) // TODO: Resolve type ambiguity

export default EntryView
