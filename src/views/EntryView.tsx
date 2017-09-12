import { connect } from "react-redux"

import { fetchPerson } from "../actions/person"
import EntryPage from "../pages/EntryPage"

const mapState = (state: any) => ({
	person: state.person
})

const mapDispatch = (dispatch: any) => ({
	doFetchPerson: () => {
		dispatch(fetchPerson())
	}
})

// TODO: Address type conflict
const EntryView = connect(
	mapState,
	mapDispatch
)(EntryPage)

export default EntryView
