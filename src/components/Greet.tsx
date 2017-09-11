import * as React from "react"

export interface Greeter{
	compiler: string
	framework: string
}

export class Greet extends React.Component<Greeter, {}>{
	public render() {
		return(
			<h1>{this.props.compiler} and {this.props.framework}</h1>
		)
	}
}
