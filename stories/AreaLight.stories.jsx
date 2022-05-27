import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, AreaLight as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"
import makePrimitive from "./base/makePrimitive"


export default {
  title: "Light灯光/AreaLight区域光",
  component: AreaLight,
}

const AreaLight = props => {
    return (
        <World defaultLight={false}>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx" pbr/>
            <LingoComponent {...props} z={20}/>
        </World>
    )
}

export const arealight = AreaLight.bind({})

arealight.argTypes={
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
    helper:{
        control:{ 
            type:"boolean"
        },
        description: "可见面板",
        defaultValue:true,
        table: {
                  type: { summary: "boolean" },
                  defaultValue: { summary: true ,},
                }
    }
    

}


export const { General,Transform,InnerTransform,Display} = makePrimitive(AreaLight,primitiveDefaults)
