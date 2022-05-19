import makeIObjectManager from "./makeIObjectManager"

export default (Item: any, defaults: any) => {

    const ILoaded = Item.bind({})
    ILoaded.args ={
        src: defaults.src?? "",
        onLoad:  defaults.onLoad?? "",
        boxVisible: defaults.boxVisible?? "",
    }
    const IObjectManager = makeIObjectManager(Item,defaults);

    return { ILoaded , ...IObjectManager}
}