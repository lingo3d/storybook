import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, FirstPersonCamera as LingoComponent,Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"
import makePrimitive from "./base/makePrimitive"

export default {
  title: "Camera相机/FirstPersonCamera第一人称相机",
  component: Camera,
}

const Camera = props => {
    return (
        <World>
            <LingoComponent {...props}  z={300} >
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"/>
            </LingoComponent>
           

        </World>
    )
}


export const firstPersonCamera = Camera.bind({})

firstPersonCamera.argTypes={
    fov: {
        control:{
            type:'number',
        },
        defaultValue:75,
        description: "视角",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "75" ,},
          }
    },
    zoom: {
        control:{
            type:'number',
        },
        defaultValue:1,
        description: "视角放大",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "75" ,},
          }
    },
    near: {
        control:{
            type:'number',
            step:0.1
        },
        defaultValue:0.1,
        description: "视角近",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "1" ,},
          }
    },
    far: {
        control:{
            type:'number',
            step:0.1
        },
        defaultValue:10000.00,
        description: "视角远",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "10000.00" ,},
          }
    },
    active: {
        control:{
            type:'boolean',
        },
        defaultValue:false,
        description: "开启关闭相机，ture为开启",
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false" ,},
          }
    },
    bokeh:{
        control:{
            type:'boolean',
        },
        defaultValue:false,
        description: "背景虚化",
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false" ,},
          }
    },
    bokehFocus: {
        control:{
            type:'number',
        },
        defaultValue:1,
        description: "背景虚化强度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "1" ,},
          }
    },
    bokehMaxBlur: {
        control:{
            type:'number',
            step:0.1
        },
        defaultValue:0.1,
        description: "背景虚化最大虚化度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0.1" ,},
          }
    },
    bokehAperture: {
        control:{
            type:'number',
            step:0.1
        },
        defaultValue:0.3,
        description: "背景虚化光圈",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0.3" ,},
          }
    },
    minPolarAngle: {
        control:{
            type:'number',
        },
        defaultValue:5,
        description: "最小极角",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "5" ,},
          }
    },
    maxPolarAngle: {
        control:{
            type:'number',
        },
        defaultValue:175,
        description: "最大极角",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "175" ,},
          }
    },
    mouseControl: {
        control:{
            type:'boolean',
        },
        defaultValue:false,
        description: "开启鼠标控制",
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false" ,},
          }
    },
    mouseControlMode: {
        control:{
            options: ["orbit" , "stationary"],
            type: 'select'
        },
        defaultValue:false,
        description: "鼠标控制模式：orbit 和 stationary",
        table: {
            type: { 
                summary: 'string' ,
              },
            defaultValue: { summary: "" ,},
          }
    },
    target: {
        control:{
            type:'text',
        },
        defaultValue:"",
        description: "看相目标",
        table: {
            type: { 
                summary: 'string' ,
              },
            defaultValue: { summary: "" ,},
          }
    },
    lockTargetRotaion: {
        control:{
            type:'boolean',
        },
        defaultValue:true,
        description: "锁定目标旋转",
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "true" ,},
          }
    },
   
}
export const { General,Transform,InnerTransform,Display} = makePrimitive(Camera,primitiveDefaults)
export const {ICameraMixin} = makeICameraMixin(Camera, primitiveDefaults)
export const {IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeIObjectManager(Camera,primitiveDefaults)
