import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Model as LingoComponent } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makePrimitive from "./base/makePrimitive"

const Model = props => {
    return (
        <World>
            <LingoComponent {...props} src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx" />
        </World>
    )
}

export default {
  title: "Model/Model模型",
  component: Model
}

export const model = Model.bind({})
model.argTypes={
    src:{
        control:{
            type:'text',
        },
        defaultValue:"https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx" ,
        description: "模型地址",
        table: {
            type: { 
                summary: 'string' ,
              },
            defaultValue: { summary: "" ,},
          }
    },
    boxVisible: {
        control:{
            type:'boolean',
        },
        defaultValue:false,
        description: "模型盒显示",
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "true" ,},
          }
    },
    loadedScale:{

    },
    loadedX:{

    },
    loadedY:{

    },
    loadedZ:{

    },
    
}

export const {General,Transform,InnerTransform,Display}  = makePrimitive(Model,primitiveDefaults)
export const {Loaded,IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeILoaded(Model, primitiveDefaults)