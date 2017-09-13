import * as React from "react"

import { Heading, Text, Panel } from "../components"
import PersonLoader from "../components/PersonLoader"

class EntryPage extends React.Component{
	constructor(){
		super()
	}

	public dispatchFetchPerson(id: number){
		(this.props as any).doFetchPerson(id)
	}

	public render(){

		const {person} = (this.props as any)
		return(
			<Panel>
				<Heading size="S">Great, now I'm a heading</Heading>
				<Text>Fantastic, now I'm a text</Text>
				<Panel>
					<PersonLoader
						id={10001}
						person={person.people}
						buttonText="Click to load a random guy"
						onClick={(id: number) => this.dispatchFetchPerson(id)}
					/>
					<PersonLoader
						id={20001}
						person={person.people}
						buttonText="Click to load a random girl"
						onClick={(id: number) => this.dispatchFetchPerson(id)}
					/>
				</Panel>
			</Panel>
		)
	}
}

export default EntryPage
