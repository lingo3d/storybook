import makeIPhysics from "./makeIPhysics"
const onload=()=>{

}
export default (Item: any, defaults: any) => {

    const SimpleObjectManager = Item.bind({})
    SimpleObjectManager.argTypes ={
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
        intersectIDs:defaults.intersectIDs ??"",
        width:{
            control:{
                type:'number',
            },
            defaultValue:100,
            description: "宽",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 100 ,},
              }
        } ,
        height:{
            control:{
                type:'number',
            },
            defaultValue:100,
            description: "高",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 100 ,},
              }
        } ,
        depth:{
            control:{
                type:'number',
            },
            defaultValue:100,
            description: "长",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 100 ,},
              }
        } ,
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
        scaleX:{
            control:{
                type:'number',
                step:0.1
            },
            defaultValue:1,
            description: "X轴放大倍数",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        } ,
        scaleY:{
            control:{
                type:'number',
                step:0.1
            },
            defaultValue:1,
            description: "Y轴放大倍数",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        } ,
        scaleZ:{
            control:{
                type:'number',
                step:0.1
            },
            defaultValue:1,
            description: "Z轴放大倍数",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        } ,
        scale:{
            control:{
                type:'number',
                step:0.1
            },
            defaultValue:1,
            description: "X Y Z轴整体放大倍数",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: 1 ,},
              }
        } ,
        rotationX:{
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "绕坐标X轴旋转,旋转范围(-360-0-360)度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        rotationY:{
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "绕坐标Y轴旋转,旋转范围(-360-0-360)度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        rotationZ:{
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "绕坐标Z轴旋转,旋转范围(-360-0-360)度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        rotation:{
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "绕坐标Z轴旋转,旋转范围(-360-0-360)度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
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

    const IPhysics = makeIPhysics(Item,defaults)
    return { SimpleObjectManager, ...IPhysics}
}