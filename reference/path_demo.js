const path = require('path')

//Base file name 
console.log(__filename) // /Users/vienpham/Desktop/three.js/reference/path_demo.js
console.log(path.basename(__filename)) // path_demo.js

// Directory name 
console.log(__dirname) // /Users/vienpham/Desktop/three.js/reference
console.log(path.dirname(__filename)) // /Users/vienpham/Desktop/three.js/reference

// File Extention 
console.log(path.extname(__filename)) // .js