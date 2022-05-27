import makePhysics from "./makePhysics"

export default (Item: any, defaults: any) => {

    const General = Item.bind({})
    General.argTypes ={
        name: {
            control:{ 
                type:"text"
            },
            description: "名称",
            defaultValue:"",
            table: {
                      type: { summary: "string" },
                      defaultValue: { summary: "" ,},
                    }
        },
        id: {
            control:{ 
                type:"text"
            },
            description: "ID",
            defaultValue:"",
            table: {
                      type: { summary: "string" },
                      defaultValue: { summary: "" ,},
                    }
        },
    }
    
    const Transform = Item.bind({})
    Transform.argTypes = {
        scale: {
            control:{ 
                type:"number"
            },
            description: "比例",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1.00 ,},
                    }
        },
        scaleX: {
            control:{ 
                type:"number"
            },
            description: "比例X轴放大",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1.00 ,},
                    }
        },
        scaleY: {
            control:{ 
                type:"number"
            },
            description: "比例Y轴放大",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1.00 ,},
                    }
        },
        scaleZ: {
            control:{ 
                type:"number"
            },
            description: "比例Z轴放大",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1.00 ,},
                    }
        },
    
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
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        rotationX: {
            control:{ 
                type:"number"
            },
            description: "绕X轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        rotationY: {
            control:{ 
                type:"number"
            },
            description: "绕Y轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        rotationZ: {
            control:{ 
                type:"number"
            },
            description: "绕Z轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
    }

    const InnerTransform = Item.bind({})
    InnerTransform.argTypes = {
        innerX:  {
            control:{ 
                type:"number"
            },
            description: "内部x轴坐标",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        innerY: {
            control:{ 
                type:"number"
            },
            description: "内部Y轴坐标",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        innerZ: {
            control:{ 
                type:"number"
            },
            description: "内部Z轴坐标",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },

        width: {
            control:{ 
                type:"number"
            },
            description: "宽",
            defaultValue:100,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 100 ,},
                    }
        },
        height: {
            control:{ 
                type:"number"
            },
            description: "高",
            defaultValue:100,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 100 ,},
                    }
        } ,
        depth:{
            control:{ 
                type:"number"
            },
            description: "长（深）",
            defaultValue:100,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 100 ,},
                    }
        },

        innerRotationX: {
            control:{ 
                type:"number"
            },
            description: "内部X轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        innerRotationY: {
            control:{ 
                type:"number"
            },
            description: "内部Y轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
        innerRotationZ:{
            control:{ 
                type:"number"
            },
            description: "内部Z轴旋转 -360度到360度",
            defaultValue:0.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 0.00 ,},
                    }
        },
    }

    
    const Display = Item.bind({})
    Display.argTypes ={
        bloom:{
            control:{ 
                type:"boolean"
            },
            description: "发光",
            defaultValue:false,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: false ,},
                    }
        },
        reflection: {
            control:{ 
                type:"boolean"
            },
            description: "反射",
            defaultValue:false,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: false ,},
                    }
        },
        outline: {
            control:{ 
                type:"boolean"
            },
            description: "外框线",
            defaultValue:false,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: false ,},
                    }
        },
        visible: {
            control:{ 
                type:"boolean"
            },
            description: "开启可见",
            defaultValue:true,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: true ,},
                    }
        },
        innerVisible: {
            control:{ 
                type:"boolean"
            },
            description: "内部开启可见",
            defaultValue:true,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: true ,},
                    }
        },
        frustumCulled: {
            control:{ 
                type:"boolean"
            },
            description: "模型距离镜头太近或者太远的时候不会被减除",
            defaultValue:true,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: true ,},
                    }
        },
        metalnessFactor: {
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
        },
        roughnessFactor: {
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
        },
        environmentFactor: {
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
        },
        toon: {
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
        },
        pbr: {
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
        },
    }

    const ShaderEditor = Item.bind({})
    ShaderEditor.argTypes ={
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
        vertexColors:{
            control:{ 
                type:"boolean"
            },
            description: "开启顶点颜色",
            defaultValue:false,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: false ,},
                    }
        },
        fog:{
            control:{ 
                type:"boolean"
            },
            description: "雾效",
            defaultValue:false,
            table: {
                      type: { summary: "boolean" },
                      defaultValue: { summary: false ,},
                    }
        },
        opacity:{
            control:{
                type:'number',
            },
            defaultValue:1,
            description: "不透明",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "1" ,},
              }
        },
        texture:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "贴图图片",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        videoTexture:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "贴图视频",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        alphaMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "alphaMap",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        textureRepeat:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "纹理替换",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        flatShading:{
            control:{
                type:'boolean',
            },
            defaultValue:false,
            description: "开启平面着色",
            table: {
                type: { 
                    summary: 'boolean' ,
                  },
                defaultValue: { summary: "false" ,},
              }
        },
        wireframe:{
            control:{
                type:'boolean',
            },
            defaultValue:false,
            description: "开启线框",
            table: {
                type: { 
                    summary: 'boolean' ,
                  },
                defaultValue: { summary: "false" ,},
              }
        },
        envMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "envMap（环境贴图）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        aoMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "ao贴图（环境闭塞贴图：描绘物体和物体相交或靠近的时候遮挡周围漫反射光线的效果）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        aoMapIntensity:{
            control:{
                type:'number',
                step:0.1
            },
            defaultValue:1,
            description: "ao贴图强度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "1" ,},
              }
        },
        bumpMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "bumpMap（凹凸贴图）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        bumpScale:{
            control:{
                type:'number',
            },
            defaultValue:1,
            description: "bumpMap（凹凸贴图）比例",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        },
        displaycementMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "displaycementMap（位移贴图）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        displaycementScale:{
            control:{
                type:'number',
            },
            defaultValue:1,
            description: "displaycementMap（位移贴图）比例",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        },
        displaycementBias:{
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "显示水泥偏差",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        emissiveColor:{
            control:{ 
                type:"color"
            },
            description: "发光颜色 字符型 或 RGB格式 或 十六进制颜色代码",
            defaultValue:"#000000",
            table: {
                      type: { summary: "string" },
                      defaultValue: { summary: "#000000" ,},
                    }
        },
        emissiveMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "emissiveMap（自发光贴图）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        emissiveIntensity:{
            control:{
                type:'number',
            },
            defaultValue:1,
            description: "发光强度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "1" ,},
              }
        },
        metalnessMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "emissiveMap（自发光贴图）",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        metalness:{
            control:{ 
                type:"number",
                step:0.1
            },
            description: "金属度",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1 ,},
                    }
        },
        roughnessMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "roughnessMap(粗糙贴图)",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        roughness:{
            control:{ 
                type:"number",
                step:0.1
            },
            description: "粗糙度",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1 ,},
                    }
        },
        normalMap:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "normalMap(法线贴图：是一种模拟凹凸处光照效果的贴图)",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        normalScale:{
            control:{ 
                type:"number",
                step:0.1
            },
            description: "法线贴图比例",
            defaultValue:1.00,
            table: {
                      type: { summary: "number" },
                      defaultValue: { summary: 1 ,},
                    }
        },
        normalMapType:{
            control:{
                type:'text',
            },
            defaultValue:"",
            description: "法线贴图类型",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        
    }

    const Super = makePhysics(Item, defaults)

    return { General, Transform, InnerTransform, Display, ShaderEditor, ...Super }
}