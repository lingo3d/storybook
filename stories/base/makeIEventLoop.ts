export default (Item: any, defaults: any) => {
    const IEventLoop = Item.bind({})
    IEventLoop.args ={
        onLoop:""
    }
    return {IEventLoop} 
}