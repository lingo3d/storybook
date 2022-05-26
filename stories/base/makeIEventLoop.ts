
const onload=()=>{

}

export default (Item: any, defaults: any) => {
    const IEventLoop = Item.bind({})
    IEventLoop.argTypes ={
        onLoop:{
            control:{
                type:'object',
            },
            description: "模型加载触发",
            defaultValue: onload,
            table: {
                type: { 
                    summary: 'object' ,
                  },
                defaultValue: { summary: {},},
              }
        }
    }
    return {IEventLoop} 
}