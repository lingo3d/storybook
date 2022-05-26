import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, OrbitCamera as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"


export default {
  title: "Camera/OrbitCamera",
  component: OrbitCamera,
}

const OrbitCamera = props => {
    return (
        <World>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"/>
            <LingoComponent {...props} active  z={100}  />
        </World>
    )
}

export const Camerabase = OrbitCamera.bind({})

Camerabase.argTypes={
    targetX: {
        control:{ 
            type:"number"
        },
        description: "目标X距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    targetY: {
        control:{ 
            type:"number"
        },
        description: "目标Y距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    targetZ: {
        control:{ 
            type:"number"
        },
        description: "目标Z距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    x: {
        control:{ 
            type:"number"
        },
        description: "X距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    y: {
        control:{ 
            type:"number"
        },
        description: "Y距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    z: {
        control:{ 
            type:"number"
        },
        description: "Z距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    enableDamping: {
        control:{ 
            type:"boolean"
        },
        description: "开启关闭移动减震，true为开启",
        defaultValue:false,
        table: {
                  type: { summary: "boolean" },
                  defaultValue: { summary: false ,},
                }
    },
    enablePan: {
        control:{ 
            type:"boolean"
        },
        description: "开启平移，true为开启",
        defaultValue:false,
        table: {
                  type: { summary: "boolean" },
                  defaultValue: { summary: false ,},
                }
    },
    enableZoom: {
        control:{ 
            type:"boolean"
        },
        description: "开启缩放，true为开启",
        defaultValue:false,
        table: {
                  type: { summary: "boolean" },
                  defaultValue: { summary: false ,},
                }
    },
    autoRotate: {
        control:{ 
            type:"boolean"
        },
        description: "开启自动旋转，true为开启",
        defaultValue:false,
        table: {
                  type: { summary: "boolean" },
                  defaultValue: { summary: false ,},
                }
    },
    autoRotateSpeed: {
        control:{ 
            type:"number"
        },
        description: "自动旋转速度",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    minAzimuthAngle: {
        control:{ 
            type:"number"
        },
        description: "最小方位角度",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    maxAzimuthAngle: {
        control:{ 
            type:"number"
        },
        description: "最大方位角度",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    azimuthAngle: {
        control:{ 
            type:"number"
        },
        description: "方位角度",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },
    polarAngle: {
        control:{ 
            type:"number"
        },
        description: "极角",
        defaultValue:90,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 90 ,},
                }
    },
}

export const {ICameraMixin} = makeICameraMixin(OrbitCamera, primitiveDefaults)
export const {IObjectManager,SimpleObjectManager,IPhysics,IAnimation,IEventLoop} = makeIObjectManager(OrbitCamera,primitiveDefaults)
