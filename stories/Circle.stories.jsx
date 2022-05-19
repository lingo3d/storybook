import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Circle as LingoComponent } from "lingo3d-react"

const Circle = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Circle",
  component: Circle
}

export const { General,Transform, InnerTransform, Display, ShaderEditor, Physics, Animation } = makePrimitive(Circle, primitiveDefaults)