import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Sphere as LingoComponent } from "lingo3d-react"

const Sphere = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives原始模型/Sphere",
  component: Sphere
}

export const { General,Transform, InnerTransform,Display, ShaderEditor, Physics } = makePrimitive(Sphere, primitiveDefaults)