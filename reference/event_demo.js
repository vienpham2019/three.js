const EventEmitter = require("events")

// Create class  
class MyEmitter extends EventEmitter { }

// init Obj 
const myEmitter = new MyEmitter()

// Event Listener 
myEmitter.on("event" , () => console.log("my Event"))

// Init Event 
myEmitter.emit("event")