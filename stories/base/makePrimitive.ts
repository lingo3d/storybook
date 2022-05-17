export default (Cube: any, primitiveDefaults: any) => {
    
    const Transform = Cube.bind({})
    Transform.args = {
        x: primitiveDefaults.x,
        y: primitiveDefaults.y,
        z: primitiveDefaults.z,

        scale: primitiveDefaults.scale,
        scaleX: primitiveDefaults.scaleX,
        scaleY: primitiveDefaults.scaleY,
        scaleZ: primitiveDefaults.scaleZ,
        
        rotationX: primitiveDefaults.rotationX,
        rotationY: primitiveDefaults.rotationY,
        rotationZ: primitiveDefaults.rotationZ
    }

    const InnerTransform = Cube.bind({})
    InnerTransform.args = {
        innerX: primitiveDefaults.innerX,
        innerY: primitiveDefaults.innerY,
        innerZ: primitiveDefaults.innerZ,

        width: primitiveDefaults.width,
        height: primitiveDefaults.height,
        depth: primitiveDefaults.depth,

        innerRotationX: primitiveDefaults.innerRotationX,
        innerRotationY: primitiveDefaults.innerRotationY,
        innerRotationZ: primitiveDefaults.innerRotationZ
    }

    return { Transform, InnerTransform }
}