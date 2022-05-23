export default (Item: any, defaults: any) => {
    const ICameraMixin = Item.bind({})
    ICameraMixin.args ={
        fov: 0,
        zoom: 0,
        near: 0,
        far: 0,
        active: false,
        bokeh: false,
        bokehFocus: 0,
        bokehMaxBlur: 0,
        bokehAperture: 0,
        minPolarAngle: 0,
        maxPolarAngle: 0,
    }
   
    return {ICameraMixin} 
}