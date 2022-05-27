import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Torus as LingoComponent } from "lingo3d-react"

const Torus = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives原始模型/Torus",
  component: Torus
}

export const { General,Transform, InnerTransform,Display, ShaderEditor, Physics } = makePrimitive(Torus, primitiveDefaults)