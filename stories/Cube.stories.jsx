import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Cube as LingoComponent } from "lingo3d-react"

const Cube = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives原始模型/Cube",
  component: Cube
}

export const { General,Transform, InnerTransform,Display, ShaderEditor,Physics } = makePrimitive(Cube, primitiveDefaults)
