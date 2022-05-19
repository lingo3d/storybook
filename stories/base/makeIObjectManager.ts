import makeSimpleObjectManager from "./makeSimpleObjectManager"

export default (Item: any, defaults: any) => {

    const IObjectManager = Item.bind({})
    IObjectManager.args ={
    innerRotationX:defaults.innerRotationX,
    innerRotationY:defaults.innerRotationY,
    innerRotationZ:defaults.innerRotationZ,
    innerRotation:defaults.innerRotation,
    innerX:defaults.innerX,
    innerY:defaults.innerY,
    innerZ:defaults.innerZ,
    }
    const SimpleObjectManager = makeSimpleObjectManager(Item,defaults)
    return { IObjectManager,...SimpleObjectManager}
}