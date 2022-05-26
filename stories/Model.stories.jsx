import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Model as LingoComponent } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"

const Model = props => {
    return (
        <World>
            <LingoComponent {...props} src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx" />
        </World>
    )
}

export default {
  title: "Model/Model",
  component: Model
}

export const {Loaded,IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeILoaded(Model, primitiveDefaults)