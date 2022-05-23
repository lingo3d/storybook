import makeIObjectManager from "./makeIObjectManager"

export default (Item: any, defaults: any) => {

    const Loaded = Item.bind({})
    Loaded.args ={
        src: defaults.src?? "",
        onLoad:  defaults.onLoad?? "",
        boxVisible: defaults.boxVisible?? "",
    }
    const IObjectManager = makeIObjectManager(Item,defaults);

    return { Loaded , ...IObjectManager}
}