
export default (Item: any, defaults: any) => {

    const IAnimation = Item.bind({})
    IAnimation.args ={
        animations: "",
        animation:"",
        animationPaused: false
    }


    return { IAnimation }
}