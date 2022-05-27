import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, PointLight as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"
import makePrimitive from "./base/makePrimitive"


export default {
  title: "Light灯光/PointLight点光",
  component: PointLight,
}

const PointLight = props => {
    return (
        <World defaultLight={false}>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"  pbr/>
            <LingoComponent {...props} y={70}/>
        </World>
    )
}

export const pointLight = PointLight.bind({})

pointLight.argTypes={
    color:{
        control:{ 
            type:"color"
        },
        description: "颜色 字符型 或 RGB格式 或 十六进制颜色代码",
        defaultValue:"#ffffff",
        table: {
                  type: { summary: "string" },
                  defaultValue: { summary: "#ffffff" ,},
                }
    },
    intensity:{
        control:{ 
            type:"number"
        },
        description: "灯光强度",
        defaultValue:1,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 1 ,},
                }
    },
     decay:{
        control:{ 
            type:"number"
        },
        description: "衰变",
        defaultValue:1,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 1 ,},
                }
    },
    distance:{
        control:{ 
            type:"number"
        },
        description: "距离",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },


}


export const { General,Transform,InnerTransform,Display} = makePrimitive(PointLight,primitiveDefaults)
