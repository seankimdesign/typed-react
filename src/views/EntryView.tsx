import {connect, Dispatch} from "react-redux"

import { fetchPerson } from "../actions/person"
import EntryPage from "../pages/EntryPage"

const mapState = (state: any) => ({
	person: state.person
})

const mapDispatch = (dispatch: Dispatch<any>) => ({
	doFetchPerson: (id: number) => {
		dispatch(fetchPerson(id))
	}
})

const EntryView = connect(
	mapState,
	mapDispatch
)(EntryPage as any)

export default EntryView
