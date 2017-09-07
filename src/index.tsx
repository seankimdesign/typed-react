import * as React from "react"
import * as ReactDOM from "react-dom"

import { Greet } from "./components/Greet"

ReactDOM.render(
    <Greet compiler="Typescript" framework="React"/>,
    document.getElementById("main")
)