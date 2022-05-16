import React from "react"

export const MyComponent = ({ name, booleanTest }) => {
    return (
        <div style={{ background: booleanTest ? "yellow" : "none" }}>hello world, {name}</div>
    )
}