import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Plane as LingoComponent } from "lingo3d-react"

const Plane = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Plane",
  component: Plane
}

export const { General,Transform, InnerTransform,Display, ShaderEditor, Physics } = makePrimitive(Plane, primitiveDefaults)