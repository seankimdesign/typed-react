import * as React from "react"

import {Heading, Text, Panel, Page, Button} from "../components"
import PersonLoader from "../components/PersonLoader"
import { PersonParams } from "../actions/person"
import $ from "../style"

class EntryPage extends React.Component{
	constructor(){
		super()
	}

	public dispatchFetchPerson(id: number, params: PersonParams){
		// TODO: Resolve `this.props` type mismatch by addressing EntryView.tsx
		(this.props as any).doFetchPerson(id, params)
	}

	public dispatchResetPersons(){
		(this.props as any).doResetPersons()
	}

	public render(){
		// TODO: Resolve `this.props` type mismatch by addressing EntryView.tsx
		const { person } = (this.props as any)
		return(
			<Page>
				<Heading size="L">Typed React Example</Heading>
				<Text>To do: add Jest / Enzyme testing. add routing.</Text>
				<Panel justify={"space-around"}>
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
				<Button type="warning" onClick={this.dispatchResetPersons.bind(this)}>Reset all Boxes</Button>
			</Page>
		)
	}
}

export default EntryPage
