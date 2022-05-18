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
  title: "primitives/Sphere",
  component: Sphere
}

export const { General,Transform, InnerTransform,Display, Base, Physics, Animation } = makePrimitive(Sphere, primitiveDefaults)