import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Octahedron as LingoComponent } from "lingo3d-react"

const Octahedron = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Octahedron",
  component: Octahedron
}

export const { General,Transform, InnerTransform,Display, ShaderEditor, Physics } = makePrimitive(Octahedron, primitiveDefaults)