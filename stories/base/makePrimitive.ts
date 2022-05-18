import { resolvePlugin } from "@babel/core"
import { Primary } from "@storybook/addon-docs"

export default (Cube: any, primitiveDefaults: any) => {


    const General = Cube.bind({})
    General.args ={
        name: primitiveDefaults.name,
        id: primitiveDefaults.id
    }
    
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

    const Display = Cube.bind({})
    Display.args ={
        bloom: primitiveDefaults.bloom,
        reflection: primitiveDefaults.reflection,
        outline: primitiveDefaults.outline,
        visible: primitiveDefaults.visible,
        innerVisible: primitiveDefaults.innerVisible,
        frustumCulled: primitiveDefaults.frustumCulled,
        metalnessFactor: primitiveDefaults.metalnessFactor,
        roughnessFactor: primitiveDefaults.roughnessFactor,
        environmentFactor: primitiveDefaults.environmentFactor,
        toon: primitiveDefaults.toon,
        pbr: primitiveDefaults.pbr
    }

    const Base = Cube.bind({})
    Base.args ={
        color: primitiveDefaults.color,
        vertexColors: primitiveDefaults.vertexColors,
        fog: primitiveDefaults.fog,
        opacity: primitiveDefaults.opacity,
        texture: primitiveDefaults.texture,
        videoTexture: primitiveDefaults.videoTexture,
        alphaMap: primitiveDefaults.alphaMap,
        textureRepeat: primitiveDefaults.textureRepeat,
        flatShading: primitiveDefaults.flatShading,
        wireframe: primitiveDefaults.wireframe,
        envMap: primitiveDefaults.envMap,
        aoMap: primitiveDefaults.aoMap,
        aoMapIntensity: primitiveDefaults.aoMapIntensity,
        bumpMap: primitiveDefaults.bumpMap,
        bumpScale: primitiveDefaults.bumpScale,
        displaycementMap: primitiveDefaults.displaycementMap,
        displaycementScale: primitiveDefaults.displaycementScale,
        displaycementBias: primitiveDefaults.displaycementBias,
        emissiveColor: primitiveDefaults.emissiveColor,
        emissiveMap: primitiveDefaults.emissiveMap,
        emissiveIntensity: primitiveDefaults.emissiveIntensity,
        metalnessMap: primitiveDefaults.metalnessMap,
        metalness: primitiveDefaults.metalness,
        roughnessMap: primitiveDefaults.roughnessMap,
        roughness: primitiveDefaults.roughness,
        normalMap: primitiveDefaults.normalMap,
        normalScale: primitiveDefaults.normalScale,
        normalMapType: primitiveDefaults.normalMapType
        
    }

  

    return { General, Transform, InnerTransform, Display, Base }
}