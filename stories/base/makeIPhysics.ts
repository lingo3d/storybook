import makeIAnimation from "./makeIAnimation"

export default (Item: any, defaults: any) => {
    const IPhysics = Item.bind({})
    IPhysics.argTypes ={
        maxAngularVelocityX:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxAngularVelocityY:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxAngularVelocityZ:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityX:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityY:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        maxVelocityZ:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        velocity:{
            x: 0,
            y:0,
            z: 0,
        },
        noTumble:false ,
        slippery:false ,
        mass:{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        } ,
        physicsGroup :{
            control: "number",
            defaultValue:0,
            table: {
                type: { 
                    // summary: 'true="orbit" | false = "stationary"' ,
                  },
                defaultValue: { summary: "0" ,},
              }
        },
        ignorePhysicsGroups: [0,1,2,3,4,5],
        physics:{
            control:{
                options: ["2d" , "map" , "map-debug" , "character"],
                 type: 'radio'
            } ,
            defaultValue:false,
            description: "physics Model have '2d' , 'map' , 'map-debug' , 'character'",
            table: {
                type: { 
                    summary: 'string' ,
                  },
                defaultValue: { summary: "false(close)" ,},
              }
        } ,
        physicsShape:{
            control: "",
        },
    }
    const IAnimation = makeIAnimation(Item,defaults)
    return {IPhysics, ...IAnimation}
}