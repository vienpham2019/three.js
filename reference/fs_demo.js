const path = require('path')
const fs = require('fs')

// Create folder 
// fs.mkdir(path.join(__dirname, "/test") , {} , err => {
//     if(err) throw err 
//     console.log("folder created ... ")
// })

// Create write file 
// fs.writeFile(
//     path.join(__dirname , '/test' , 'hello.txt') , 
//     "Hello world \n" , 
//     error => {
//         if(error) throw error
//         console.log("write file created ..")

//         // File append 
//         fs.appendFile(
//             path.join(__dirname, '/test' , 'hello.txt'), 
//             "I love Node.js \n",
//             err => {
//                 if(err) throw err
//                 console.log("Append text to file .... ")
//             }
//         )
//     }
// )


// Read file 
// fs.readFile(
//     path.join(__dirname , '/test' , 'hello.txt'), 
//     'utf8',
//     (error,data) => {
//         if(error) throw error 
//         console.log(data)
//     }
// )

// File rename 
fs.rename(
    path.join(__dirname, '/test' , 'hello.txt'),
    path.join(__dirname, '/test' , 'helloworld.txt'),
    error => {
        if(error) throw error 
        console.log("file name ... ")
    }
)