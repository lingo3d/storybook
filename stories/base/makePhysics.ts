export default (Item: any, defaults: any) => {
    const Physics = Item.bind({})
    Physics.args ={
        maxAngularVelocityX: defaults.maxAngularVelocityX ?? "",
        maxAngularVelocityY: defaults.maxAngularVelocityY ?? "",
        maxAngularVelocityZ: defaults.maxAngularVelocityZ ?? "",

        maxVelocityX: defaults.maxVelocityX ?? "",
        maxVelocityY: defaults.maxVelocityY ?? "",
        maxVelocityZ: defaults.maxVelocityZ ?? "",

        velocity: defaults.velocity ?? "",

        noTumble: defaults.noTumble ?? "",
        slippery: defaults.slippery ?? "",
        mass: defaults.mass ?? "",
        physicsGroup: defaults.physicsGroup ?? "",
        ignorePhysicsGroups: defaults.ignorePhysicsGroups ?? "",

        physics: defaults.physics ?? "",
        physicsShape: defaults.physicsShape ?? "",
    }


    return { Physics}
}