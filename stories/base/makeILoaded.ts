import makeIObjectManager from "./makeIObjectManager"

const onload=()=>{

}

export default (Item: any, defaults: any) => {
    const Loaded = Item.bind({})
    Loaded.argTypes ={
        src: {
            control: {
                type: 'text'
              },
            description: "模型文件地址,支持模型类型Fbx,Glb,Gltf",
            defaultValue: "https://unpkg.com/lingo3d-dummy@1.0.0/assets/ybot.fbx",
            table: {
                      type: { 
                          summary: 'String' ,
                        },
                      defaultValue: { summary: " " ,},
                    }
        },
        onLoad: {
            control:{
                type:'object',
            },
            description: "模型加载后执行此函数",
            defaultValue: onload,
            table: {
                type: { 
                    summary: 'object' ,
                  },
                defaultValue: { summary: "object" ,},
              }
        },
        boxVisible: {
            control:{
                type:'boolean',
            },
            description: "模型显示",
            defaultValue: true,
            table: {
                type: { 
                    summary: 'boolean' ,
                  },
                defaultValue: { summary: "true",},
              }
        },
    }
     const IObjectManager = makeIObjectManager(Item,defaults);

    return { Loaded , ...IObjectManager}
}

