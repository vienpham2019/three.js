// const http = require('http')
// const path = require('path')
// const fs = require('fs')

// const server = http.createServer((req,res) => {
//     // if(req.url === "/"){
//     //     fs.readFile(path.join(__dirname, 'public', 'index.html') , (error,content) => {
//     //         if(error) throw error 
//     //         res.writeHead(200, {"Content-Type": "text/html"})
//     //         res.end(content)
//     //     })
//     // }

//     // if(req.url === "/about"){
//     //     fs.readFile(path.join(__dirname,'public', 'about.html') , (error, content) => {
//     //         if(error) throw error
//     //         res.writeHead(200, {'Content-Type': 'text/html'})
//     //         res.end(content)
//     //     })
//     // }

//     // if(req.url === "/api/users"){
//     //     const users = [
//     //         {username: "vien" , age: 22},
//     //         {username: "viet" , age: 18}
//     //     ]

//     //     res.writeHead(200, {'Content-Type': 'application/json'})
//     //     res.end(JSON.stringify(users))
//     // }

//     //build File Path 

//     let filePath = path.join(__dirname, 'public' , req.url === "/" ? "index.html" : req.url)

//     // Extention of file 
//     let extName = path.extname(filePath)

//     // Initial Content Type
//     let content_type = "text/html"

//     switch (extName) {
//         case ".js":
//             content_type = "text/javascript"
//             break 
//         case ".css":
//             content_type = "text/css"
//             break 
//         case ".html": 
//             content_type = "text/html"
//             break 
//         case ".json": 
//             content_type = "application/json"
//             break 
//         case ".png": 
//             content_type = "image/png"
//             break
//         case ".jpg": 
//             content_type = "image/jpg"
//             break 
//     }

//     // Read File
//     fs.readFile(filePath , (error , content) => {
//         if(error){
//             if(error.code === "ENOENT"){
//                 // Page not fond
//                 fs.readFile(path.join(__dirname, 'public' , '404.html') , (error , content) => {
//                     if(error) throw error
//                     res.writeHead(200 , {"Content-Type" : "text/html"})
//                     res.end(content , 'utf8')
//                 })
//             }else{
//                 // Some server error 
//                 res.writeHead(500)
//                 res.end(`Some server error: ${error.code}`)
//             }
//         }else{
//             // Success res 
//             res.writeHead(200 , {"Content-Type": content_type})
//             res.end(content , 'utf8')
//         }
//     })
// })

// const PORT = process.env.PORT || 5000 

// server.listen(PORT , () => console.log(`Server running in port: ${PORT}`))

// const fs = require('fs')
// const http = require('http')

// http.createServer((req,res) => {
//     const readStream = fs.createReadStream('./user.json')
//     if(req.url === '/users'){
//         res.writeHead(200, {'Content-Type': "application/json"})
//         readStream.pipe(res)
//     }else{
//         res.end('Using other domain')
//     }
// }).listen(3000)

const express = require('express')
const path = require('path')
const Joi = require('joi')
const bodyParser = require('body-parser')
const app = express()

app.use('/public' , express.static(path.join(__dirname , 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public' , 'index.html'))
})

app.get('/about', (req,res) => {
    res.send('about page')
})

app.post('/' , (req,res) => {
    console.log(req.body)
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    })
    Joi.validate(req.body,schema,(error,result) => {
        if(error){
            console.log(error)
            res.send('Error')
        }else{
            console.log(result)
            res.send('Sucess')
        }
    })
})

app.get('/example/:name/:age', (req, res) => {
    let {name, age} = req.params
    let query = req.query
    console.log(query)
    res.send(`Hello ${name} and you are ${age} years old.`)
})

app.listen(3000)