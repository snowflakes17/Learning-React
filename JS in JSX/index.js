import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date()
    const name= "Shikha"
    
    return (
        <h1>It is currently about {new Date().getHours() % 12} o'clock!</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))