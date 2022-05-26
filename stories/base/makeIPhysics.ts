import makeIAnimation from "./makeIAnimation"

export default (Item: any, defaults: any) => {
    const IPhysics = Item.bind({})
    IPhysics.argTypes ={
        maxAngularVelocityX:{
            control: "number",
            defaultValue:0,
            description: "X轴最大角速度",
            table: {
                type: { 
                    summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxAngularVelocityY:{
            control: "number",
            description: "Y轴最大角速度",
            defaultValue:0,
            table: {
                type: { 
                  summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxAngularVelocityZ:{
            control: "number",
            defaultValue:0,
            description: "Z轴最大角速度",
            table: {
                type: { 
                  summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityX:{
            control: "number",
            defaultValue:0,
            description: "X轴最大速度",
            table: {
                type: { 
                  summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityY:{
            control: "number",
            defaultValue:0,
            description: "Y轴最大速度",
            table: {
                type: { 
                  summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityZ:{
            control: "number",
            defaultValue:0,
            description: "Z轴最大速度",
            table: {
                type: { 
                  summary: "number" ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        velocity:{
          control: "number",
          defaultValue:0,
          description: "移动速度，分别 x y z 三个轴。例如:velocity.x=10",
          table: {
              type: { 
                summary: "number",
                },
              defaultValue: { summary: "0" ,},
            }
        },
        noTumble:{
          control:{
            type:'boolean',
        },
        description: "物体直立不倒",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
        } ,
        slippery:{
          control:{
            type:'boolean',
        },
        description: "光滑",
        defaultValue: false,
        table: {
            type: { 
                summary: 'boolean' ,
              },
            defaultValue: { summary: "false",},
          }
        } ,
        mass:{
            control: "number",
            defaultValue:0,
            description: "质量",
            table: {
                type: { 
                    summary: "number", 
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        physicsGroup :{
            control: "number",
            defaultValue:0,
            description: "物理组",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        ignorePhysicsGroups:{
          control: "number",
            defaultValue:0,
            description: "忽略物理组",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        physics:{
            control:{
                options: ["2d" , "map" , "map-debug" , "character"],
                 type: 'select'
            } ,
            defaultValue:false,
            description: "物理包含两种模式一种是'2d' , 'map' , 'map-debug' , 'character'。另一种是 boolean的true开启false关闭，两种之间不产生作用 ",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "false(close)" ,},
              }
        } ,
    }
    const IAnimation = makeIAnimation(Item,defaults)
    return {IPhysics, ...IAnimation}
}