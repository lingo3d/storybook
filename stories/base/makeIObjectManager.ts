import makeSimpleObjectManager from "./makeSimpleObjectManager"

export default (Item: any, defaults: any) => {

    const IObjectManager = Item.bind({})
    IObjectManager.argTypes ={
    innerX:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部X坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    innerY:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部Y坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    innerZ:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部Z坐标",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    innerRotationX:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部绕坐标X轴旋转,旋转范围(-360-0-360)度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    innerRotationY:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部绕坐标Y轴旋转,旋转范围(-360-0-360)度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    innerRotationZ:{control:{
        type:'number',
    },
    defaultValue:0,
    description: "内部绕坐标Z轴旋转,旋转范围(-360-0-360)度",
    table: {
        type: { 
            summary: 'number' ,
          },
        defaultValue: { summary: "0" ,},
      }},
    innerRotation:{
        control:{
            type:'number',
        },
        defaultValue:0,
        description: "内部绕坐标Z轴旋转,旋转范围(-360-0-360)度",
        table: {
            type: { 
                summary: 'number' ,
              },
            defaultValue: { summary: "0" ,},
          }
    },
    }
    const SimpleObjectManager = makeSimpleObjectManager(Item,defaults)
    return { IObjectManager,...SimpleObjectManager}
}