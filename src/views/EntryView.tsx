import {connect, StatelessComponent} from "react-redux"

import { fetchPerson } from "../actions/person"
import EntryPage from "../pages/EntryPage"
import {ReactElement} from "react"

const mapState = (state: any) => ({
	person: state.person
})

const mapDispatch = (dispatch: any) => ({
	doFetchPerson: () => {
		dispatch(fetchPerson())
	}
})

// TODO: Address type conflict

const asd = connect(
	mapState,
	mapDispatch
)

const EntryView = connect(
	mapState,
	mapDispatch
)(EntryPage as any)

export default EntryView
