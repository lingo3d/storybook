import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, Camera as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"


export default {
  title: "Camera/Camera",
  component: Camera,
}

const Camera = props => {
    return (
        <World>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"/>
            <LingoComponent {...props} active  z={100}  />
        </World>
    )
}


export const Camerabase = Camera.bind({})

Camerabase.argTypes={
  mouseControl:{
    control: "boolean",
    description: "开启鼠标控制",
    defaultValue:false,
    table: {
              type: { summary: 'false | true="drag"拖拽 ' },
              defaultValue: { summary: false ,},
            }

} ,
mouseControlMode:{
    control: "boolean",
    description: "鼠标控制模式",
    defaultValue:true,
    table: {
              type: { 
                  summary: 'true="orbit"轨道 | false = "stationary"静止' ,
                },
              defaultValue: { summary: "orbit" ,},
            }

} ,
   
}

export const {ICameraMixin} = makeICameraMixin(Camera, primitiveDefaults)
export const {IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeIObjectManager(Camera,primitiveDefaults)
