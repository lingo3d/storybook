import makeIEventLoop from "./makeIEventLoop"

export default (Item: any, defaults: any) => {
    const IAnimation = Item.bind({})
    IAnimation.args ={
        animations: "",
        animation:"",
        animationPaused: false
    }
    const IEventLoop = makeIEventLoop(Item,defaults)
    return {IAnimation, ...IEventLoop} 
}