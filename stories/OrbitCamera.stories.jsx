import { primitiveDefaults } from "lingo3d/lib/interface/IPrimitive"
import React from "react"
import { World, OrbitCamera as LingoComponent,Cube, Model } from "lingo3d-react"
import makeILoaded from "./base/makeILoaded"
import makeICameraMixin from "./base/makeICameraMixin"
import makeIObjectManager from "./base/makeIObjectManager"
import makePrimitive from "./base/makePrimitive"

export default {
  title: "Camera相机/OrbitCamera轨道相机",
  component: OrbitCamera,
}

const onload=()=>{

}

const OrbitCamera = props => {
    return (
        <World>
            <Model src="https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx"/>
            <LingoComponent {...props} active  z={500}  />
        </World>
    )
}

export const orbitCamera = OrbitCamera.bind({})

orbitCamera.argTypes={
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
        defaultValue:2,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 2 ,},
                }
    },
    minAzimuthAngle: {
        control:{ 
            type:"number"
        },
        description: "最小方位角度",
        defaultValue:-9999.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: -9999.00 ,},
                }
    },
    maxAzimuthAngle: {
        control:{ 
            type:"number"
        },
        description: "最大方位角度",
        defaultValue:9999.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 9999.00 ,},
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
        defaultValue:90.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 90.00 ,},
                }
    },
}

export const { General} = makePrimitive(OrbitCamera,primitiveDefaults)

export const transform = OrbitCamera.bind({})
transform.argTypes={
    x: {
        control:{ 
            type:"number"
        },
        description: "x轴坐标",
        defaultValue:0.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0.00 ,},
                }
    },
    y: {
        control:{ 
            type:"number"
        },
        description: "y轴坐标",
        defaultValue:0.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 0.00 ,},
                }
    },
    z: {
        control:{ 
            type:"number"
        },
        description: "z轴坐标",
        defaultValue:500.00,
        table: {
                  type: { summary: "number" },
                  defaultValue: { summary: 500.00 ,},
                }
    },
}


export const {ICameraMixin} = makeICameraMixin(OrbitCamera, primitiveDefaults)


export const SimpleObjectManager = OrbitCamera.bind({})

SimpleObjectManager.argTypes={
    name:{
        control:{
            type:'text',
        },
        defaultValue:" ",
        description: "名称",
        table: {
            type: { 
                summary: 'string' ,
              },
            defaultValue: { summary: "" ,},
          }
    },
    id:{
        control:{
            type:'text',
        },
        defaultValue:" ",
        description: "ID",
        table: {
            type: { 
                summary: 'string' ,
              },
            defaultValue: { summary: "" ,},
          }
    },
    x:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "X轴坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: 0 ,},
          }
    } ,
    y:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "Y轴坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: 0 ,},
          }
    } ,
    z:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "Z轴坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: 0 ,},
          }
    },
    bloom:{
        control:{
            type:'boolean',
        },
        description: "模型发光",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    reflection:{
        control:{
            type:'boolean',
        },
        description: "模型表面反射",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    outline:{
        control:{
            type:'boolean',
        },
        description: "模型描边",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    visible:{
        control:{
            type:'boolean',
        },
        description: "模型显示",
        defaultValue: true,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "true",},
          }
    } ,
    innerVisible:{
        control:{
            type:'boolean',
        },
        description: "模型内部显示，对绑定的多模型进行显示管理",
        defaultValue: true,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "true",},
          }
    } ,
    frustumCulled:{
        control:{
            type:'boolean',
        },
        description: "模型距离镜头太近或者太远的时候不会被减除",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    metalnessFactor:{
        control:{
            type:'number',
            step:0.1
        },
        defaultValue:1,
        description: "金属度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "1" ,},
          }
    } ,
    roughnessFactor:{
        control:{
            type:'number',
             
        },
        defaultValue:1,
        description: "粗糙度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "1" ,},
          }
    } ,
    environmentFactor:{
        control:{
            type:'number',
             step:0.1
        },
        defaultValue:1,
        description: "环境曝光度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "1" ,},
          }
    } ,
    toon:{
        control:{
            type:'boolean',
        },
        description: "卡通效果模式",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    pbr:{
        control:{
            type:'boolean',
        },
        description: "pbr材质模式(模型材质需要包含pbr,开启后会有效果）",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
    } ,
    onClick:{
        control:{
            type:'object',
        },
        description: "鼠标点击触发",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    },
    onMouseDown:{
        control:{
            type:'object',
        },
        description: "鼠标点下触发",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    },
    onMouseUp:  {
        control:{
            type:'object',
        },
        description: "鼠标放开触发",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    }, 
    onMouseOver:{
        control:{
            type:'object',
        },
        description: "鼠标指针指到",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    }, 
    onMouseOut:{
        control:{
            type:'object',
        },
        description: "鼠标指针离开",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    }, 
    onMouseMove:{
        control:{
            type:'object',
        },
        description: "鼠标指针移动触发",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    }, 
    onIntersect:{
        control:{
            type:'object',
        },
        description: "当物体和制定id的物体相交（碰撞）的时候触发的事件",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    }, 
    onIntersectOut:{
        control:{
            type:'object',
        },
        description: "当物体和制定id的物体没有相交（碰撞）的时候触发的事件",
        defaultValue: onload,
        table: {
            type: { 
                summary: 'object' ,
              },
            defaultValue: { summary: {},},
          }
    },
}


export const {IObjectManager,IPhysics,IAnimation,IEventLoop} = makeIObjectManager(OrbitCamera,primitiveDefaults)
