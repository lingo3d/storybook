import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Model as LingoComponent } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"


const Model = props => {
    return (
        <World>
            <LingoComponent  {...props} />
        </World>
    )
}

export default {
  title: "Model/Model",
  component: Model,
}

export const {ILoaded} = makeILoaded(Model,primitiveDefaults)

