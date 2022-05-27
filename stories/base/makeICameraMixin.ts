export default (Item: any, defaults: any) => {
    const ICameraMixin = Item.bind({})
    ICameraMixin.argTypes ={
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
    }
   
    return {ICameraMixin} 
}