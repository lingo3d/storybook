import React from "react"
import { World, Cube } from "lingo3d-react"

export const MyComponent = ({ name, booleanTest }) => {
    return (
        <World>
            <Cube animation={{ rotationY: [0, 90, 0] }} />
        </World>
    )
}