import * as React from "react"

class EntryPage extends React.Component{
	constructor(){
		super()
	}
	public render(){
		return(
			<div>
				<h2>Turn me into a heading</h2>
				<p>Turn me into a text block</p>
				<div className="Turn me into a hollow container component">
					<div>Turn me into a person component</div>
					<button>Turn me into a button component (random guy)</button>
					<div>Turn me into a person component</div>
					<button>Turn me into a button component (random girl)</button>
				</div>
			</div>
		)
	}
}

export default EntryPage
