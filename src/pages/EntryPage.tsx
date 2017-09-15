import * as React from "react"

import { Heading, Text, Panel, Page } from "../components"
import PersonLoader from "../components/PersonLoader"
import { PersonParams } from "../actions/person"

class EntryPage extends React.Component{
	constructor(){
		super()
	}

	public dispatchFetchPerson(id: number, params: PersonParams){
		// TODO: Resolve `this.props` type mismatch by addressing EntryView.tsx
		(this.props as any).doFetchPerson(id, params)
	}

	public render(){
		// TODO: Resolve `this.props` type mismatch by addressing EntryView.tsx
		const { person } = (this.props as any)
		return(
			<Page>
				<Heading size="L">Typed React Example</Heading>
				<Text>To do: add Jest / Enzyme testing. add styles via Styled-Components.</Text>
				<Panel>
					<PersonLoader
						id={1001}
						person={person.people}
						buttonText="Click to load a random guy"
						onClick={this.dispatchFetchPerson.bind(this)}
						params={{
							gender: "male",
							nat: "gb,us"
						}}
					/>
					<PersonLoader
						id={1002}
						person={person.people}
						buttonText="Click to load a random girl"
						onClick={this.dispatchFetchPerson.bind(this)}
						params={{
							gender: "female",
							nat: "gb,us"
						}}
					/>
					<PersonLoader
						id={1003}
						person={person.people}
						buttonText="Click to load a random Dutch person"
						onClick={this.dispatchFetchPerson.bind(this)}
						params={{
							nat: "nl"
						}}
					/>
					<PersonLoader
						id={1004}
						person={person.people}
						buttonText="Click to load a random lego"
						onClick={this.dispatchFetchPerson.bind(this)}
						params={{
							lego: ""
						}}
					/>
				</Panel>
			</Page>
		)
	}
}

export default EntryPage
