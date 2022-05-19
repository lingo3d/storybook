import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Cylinder as LingoComponent } from "lingo3d-react"

const Cylinder = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Cylinder",
  component: Cylinder
}

export const { General,Transform, InnerTransform,Display, ShaderEditor, Physics, Animation } = makePrimitive(Cylinder, primitiveDefaults)