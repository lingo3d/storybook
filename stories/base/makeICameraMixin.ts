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
            defaultValue:1.1,
            description: "视角远",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "1" ,},
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
            defaultValue:0,
            description: "背景虚化强度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        bokehMaxBlur: {
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "背景虚化最大虚化度",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        bokehAperture: {
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "背景虚化光圈",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        minPolarAngle: {
            control:{
                type:'number',
            },
            defaultValue:0,
            description: "最小极角",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        maxPolarAngle: {
            control:{
                type:'number',
            },
            defaultValue:360,
            description: "最大极角",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "360" ,},
              }
        },
    }
   
    return {ICameraMixin} 
}