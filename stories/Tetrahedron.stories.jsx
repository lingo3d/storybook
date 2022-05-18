import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Tetrahedron as LingoComponent } from "lingo3d-react"

const Tetrahedron = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Tetrahedron",
  component: Tetrahedron
}

export const { General,Transform, InnerTransform,Display, Base, Physics, Animation } = makePrimitive(Tetrahedron, primitiveDefaults)