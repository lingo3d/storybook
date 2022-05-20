import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Camera as LingoComponent,Cube } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"


export default {
  title: "Camera/Camera",
  component: Camera,
}

const Camera = props => {
    console.log(props)
    return (
        <World>
            <Cube />
            <LingoComponent {...props}  z={300} />
        </World>
    )
}


export const Camerabase = Camera.bind({})

Camerabase.argTypes={
    mouseControl:{
        control: "boolean",
        description: "mouse Control camera move",
        defaultValue:false,
        table: {
                  type: { summary: 'false | true="drag" ' },
                  defaultValue: { summary: false ,},
                }

    } ,
    mouseControlMode:{
        control: "boolean",
        description: "mouse Control Mode",
        defaultValue:true,
        table: {
                  type: { 
                      summary: 'true="orbit" | false = "stationary"' ,
                    },
                  defaultValue: { summary: "orbit" ,},
                }

    } ,
   
}

export const {ICameraMixin} = makeICameraMixin(Camera, primitiveDefaults)
export const {IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeIObjectManager(Camera,primitiveDefaults)
