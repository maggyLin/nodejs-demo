var aa =1;  //未使用 exports ,外部js無法呼叫到

var version = 1;

var tools = {

    add:function(x,y){
        return x+y;
    },
    sayHello:function(){
        return 'hello';
    }

}

//定義外部可呼叫部分
//方法1 
// exports.tools = tools;
//方法2
// module.exports = tools;
module.exports = {
    tools,
    version
}