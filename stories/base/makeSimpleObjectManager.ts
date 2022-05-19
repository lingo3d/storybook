import makeIPhysics from "./makeIPhysics"

export default (Item: any, defaults: any) => {

    const SimpleObjectManager = Item.bind({})
    SimpleObjectManager.args ={
        onClick:defaults.onClick ?? "",
        onMouseDown:defaults.onMouseDown ?? "",
        onMouseUp:defaults.onMouseUp?? "", 
        onMouseOver:defaults.onMouseOver?? "", 
        onMouseOut:defaults.onMouseOut?? "", 
        onMouseMove:defaults.onMouseMove?? "", 
        onIntersect:defaults.onIntersect?? "", 
        onIntersectOut:defaults.onIntersectOut ?? "",
        name:defaults.name ,
        id:defaults.id ??"",
        intersectIDs:defaults.intersectIDs ??"",
        width:defaults.width ,
        height:defaults.height ,
        depth:defaults.depth ,
        x:defaults.x ,
        y:defaults.y ,
        z:defaults.z ,
        scaleX:defaults.scaleX ,
        scaleY:defaults.scaleY ,
        scaleZ:defaults.scaleZ ,
        scale:defaults.scale ,
        rotationX:defaults.rotationX ,
        rotationY:defaults.rotationY ,
        rotationZ:defaults.rotationZ ,
        rotation:defaults.rotation ,
        bloom:defaults.bloom ,
        reflection:defaults.reflection ,
        outline:defaults.outline ,
        visible:defaults.visible ,
        innerVisible:defaults.innerVisible ,
        frustumCulled:defaults.frustumCulled ,
        metalnessFactor:defaults.metalnessFactor ,
        roughnessFactor:defaults.roughnessFactor ,
        environmentFactor:defaults.environmentFactor ,
        toon:defaults.toon ,
        pbr:defaults.pbr ,
    }

    const IPhysics = makeIPhysics(Item,defaults)
    return { SimpleObjectManager, ...IPhysics}
}