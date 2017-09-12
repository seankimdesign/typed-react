import * as React from "react"
import { Provider } from "react-redux"

import store from "./Store"
import EntryView from "../views/EntryView"

class App extends React.Component{
	public render(){
		return(
			<Provider store={store}>
				<EntryView/>
			</Provider>
		)
	}
}

export default App
