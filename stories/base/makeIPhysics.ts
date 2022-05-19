import makeIAnimation from "./makeIAnimation"

export default (Item: any, defaults: any) => {

    const IPhysics = Item.bind({})
    IPhysics.args ={
        maxAngularVelocityX:0 ,
        maxAngularVelocityY:0 ,
        maxAngularVelocityZ:0 ,
        maxVelocityX:0 ,
        maxVelocityY:0 ,
        maxVelocityZ:0 ,
        velocity:{
            x: 0,
            y:0,
            z: 0,
        },
        noTumble:false ,
        slippery:false ,
        mass:0 ,
        physicsGroup :[0,1,2,3,4,5] ,
        ignorePhysicsGroups: [0,1,2,3,4,5],
        physics:[ "2d" , "map" , "map-debug" , "character"] ??"" ,
        physicsShape:"",
    }

     const IAnimation = makeIAnimation(Item,defaults)
    
    return { IPhysics }
}