import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, SpotLight as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"
import makePrimitive from "./base/makePrimitive"


export default {
  title: "Light灯光/SpotLight聚光灯",
  component: SpotLight,
}

const SpotLight = props => {
    return (
        <World defaultLight={false}>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"  pbr/>
            <LingoComponent {...props} y={70}/>
        </World>
    )
}

export const spotLight = SpotLight.bind({})

spotLight.argTypes={
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
     angle:{
        control:{ 
            type:"number"
        },
        description: "角度",
        defaultValue:1.05,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 1.05 ,},
                }
    },
    penumbra:{
        control:{ 
            type:"number"
        },
        description: "半影，由不透明对象投射的阴影的部分阴影外部区域",
        defaultValue:0,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0 ,},
                }
    },


}


export const { General,Transform,InnerTransform,Display} = makePrimitive(SpotLight,primitiveDefaults)
