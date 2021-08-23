// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();


//監聽事件
eventEmitter.on('some_event', function(data) { 
    console.log('some_event 事件触发 , get data: '+data); 
}); 

// 1 秒後發送事件
setTimeout(function() { 
    eventEmitter.emit('some_event','data'); 
}, 1000); 