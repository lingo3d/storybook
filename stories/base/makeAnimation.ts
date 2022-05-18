export default (Item: any, defaults: any) => {

    const Animation = Item.bind({})
    Animation.args ={
        test: ""
    }

    return { Animation }
}