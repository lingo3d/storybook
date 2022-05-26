import makeIEventLoop from "./makeIEventLoop"

export default (Item: any, defaults: any) => {
    const IAnimation = Item.bind({})
    IAnimation.argTypes ={
        animations:{
            control:{
                 type: 'text'
            },
            defaultValue:"",
            description: "动画组，导入动画文件和设置对应动画名称",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        animation:{
            control:{
                 type: 'text'
            },
            defaultValue:"",
            description: "动画组，导入动画文件和设置对应动画名称",
            table: {
                type: { 
                    summary: 'number' ,
                  },
                defaultValue: { summary: "" ,},
              }
        },
        animationPaused: {
            control:{
                type:'boolean',
            },
            description: "动画暂停，true为暂停",
            defaultValue: false,
            table: {
                type: { 
                    summary: 'boolean' ,
                  },
                defaultValue: { summary: "false",},
              }
        }
    }
    const IEventLoop = makeIEventLoop(Item,defaults)
    return {IAnimation, ...IEventLoop} 
}