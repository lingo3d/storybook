import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Model as LingoComponent } from "lingo3d-react"

const Model = props => {
    return (
        <World>
            <LingoComponent {...props} />
        </World>
    )
}

export default {
  title: "primitives/Model",
  component: Model
}

 
export const General = Model.bind({})
General.args={
    x:1
}