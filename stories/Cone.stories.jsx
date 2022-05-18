import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import makePrimitive from "./base/makePrimitive"
import React from "react"
import { World, Cone as LingoComponent } from "lingo3d-react"

const Cone = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Cone",
  component: Cone
}

export const { General,Transform, InnerTransform,Display, Base} = makePrimitive(Cone, primitiveDefaults)