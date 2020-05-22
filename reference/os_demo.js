const os = require('os')

//Platform  
console.log(os.platform()) // darwin

// CPU arch
console.log(os.arch()) // x64

// CPU core info 
console.log(os.cpus()) // cpu core info object 

//Free memory 
console.log(os.freemem())

// Total memory 
console.log(os.totalmem())

//Home dir 
console.log(os.homedir())