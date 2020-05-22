const path = require('path')

//Base file name 
console.log(__filename) // /Users/vienpham/Desktop/three.js/reference/path_demo.js
console.log(path.basename(__filename)) // path_demo.js

// Directory name 
console.log(__dirname) // /Users/vienpham/Desktop/three.js/reference
console.log(path.dirname(__filename)) // /Users/vienpham/Desktop/three.js/reference

// File Extention 
console.log(path.extname(__filename)) // .js

// Create path obj 
console.log(path.parse(__filename)) //{ root: '/', dir: '/Users/vienpham/Desktop/three.js/reference', base: 'path_demo.js', ext: '.js',name: 'path_demo'}

//Concatenate paths 
console.log(path.join(__dirname , "test" , "hello.html")) // /Users/vienpham/Desktop/three.js/reference/test/hello.html