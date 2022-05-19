import makePhysics from "./makePhysics"

export default (Item: any, defaults: any) => {

    const General = Item.bind({})
    General.args ={
        name: defaults.name,
        id: defaults.id
    }
    
    const Transform = Item.bind({})
    Transform.args = {
        x: defaults.x ?? "",
        y: defaults.y ?? "",
        z: defaults.z ?? "",

        scale: defaults.scale ?? "",
        scaleX: defaults.scaleX ?? "",
        scaleY: defaults.scaleY ?? "",
        scaleZ: defaults.scaleZ ?? "",
        
        rotationX: defaults.rotationX ?? "",
        rotationY: defaults.rotationY ?? "",
        rotationZ: defaults.rotationZ ?? "",
    }

    const InnerTransform = Item.bind({})
    InnerTransform.args = {
        innerX: defaults.innerX ?? "",
        innerY: defaults.innerY ?? "",
        innerZ: defaults.innerZ ?? "",

        width: defaults.width ?? "",
        height: defaults.height ?? "",
        depth: defaults.depth ?? "",

        innerRotationX: defaults.innerRotationX ?? "",
        innerRotationY: defaults.innerRotationY ?? "",
        innerRotationZ: defaults.innerRotationZ ?? "",
    }

    const Display = Item.bind({})
    Display.args ={
        bloom: defaults.bloom ?? "",
        reflection: defaults.reflection ?? "",
        outline: defaults.outline ?? "",
        visible: defaults.visible ?? "",
        innerVisible: defaults.innerVisible ?? "",
        frustumCulled: defaults.frustumCulled ?? "",
        metalnessFactor: defaults.metalnessFactor ?? "",
        roughnessFactor: defaults.roughnessFactor ?? "",
        environmentFactor: defaults.environmentFactor ?? "",
        toon: defaults.toon ?? "",
        pbr: defaults.pbr ?? "",
    }

    const ShaderEditor = Item.bind({})
    ShaderEditor.args ={
        color: defaults.color ?? "",
        vertexColors: defaults.vertexColors ?? "",
        fog: defaults.fog ?? "",
        opacity: defaults.opacity ?? "",
        texture: defaults.texture ?? "",
        videoTexture: defaults.videoTexture ?? "",
        alphaMap: defaults.alphaMap ?? "",
        textureRepeat: defaults.textureRepeat ?? "",
        flatShading: defaults.flatShading ?? "",
        wireframe: defaults.wireframe ?? "",
        envMap: defaults.envMap ?? "",
        aoMap: defaults.aoMap ?? "",
        aoMapIntensity: defaults.aoMapIntensity ?? "",
        bumpMap: defaults.bumpMap ?? "",
        bumpScale: defaults.bumpScale ?? "",
        displaycementMap: defaults.displaycementMap ?? "",
        displaycementScale: defaults.displaycementScale ?? "",
        displaycementBias: defaults.displaycementBias ?? "",
        emissiveColor: defaults.emissiveColor ?? "",
        emissiveMap: defaults.emissiveMap ?? "",
        emissiveIntensity: defaults.emissiveIntensity ?? "",
        metalnessMap: defaults.metalnessMap ?? "",
        metalness: defaults.metalness ?? "",
        roughnessMap: defaults.roughnessMap ?? "",
        roughness: defaults.roughness ?? "",
        normalMap: defaults.normalMap ?? "",
        normalScale: defaults.normalScale ?? "",
        normalMapType: defaults.normalMapType ?? "",
        
    }

    const Super = makePhysics(Item, defaults)

    return { General, Transform, InnerTransform, Display, ShaderEditor, ...Super }
}