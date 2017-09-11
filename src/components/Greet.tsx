import * as React from "react"

export interface Greeter{
    compiler: string
    framework: string
}

/** @augments {React.Component<object, object>} */
export class Greet extends React.Component<Greeter, undefined>{
    public render() {
        return(
            <h1>{this.props.compiler} and {this.props.framework}</h1>
        )
    }
}
