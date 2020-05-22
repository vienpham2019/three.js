const url = require('url')

const myUrl = new URL('http://myWebsite.com/hello.html?id=100&status=active')

//Serialized URL
console.log(myUrl.href) // 'http://myWebsite.com/hello.html?id=100&status=active'
console.log(myUrl.toString()) // 'http://myWebsite.com/hello.html?id=100&status=active'

// Host (root domain)
console.log(myUrl.host) // mywebsite.com "include port"

// Hostname 
console.log(myUrl.hostname) // mywebSite.com "not include port"

//Pathname 
console.log(myUrl.pathname) // /hello.html

//Serialized query
console.log(myUrl.search) // ?id=100&status=active

// Params object 
console.log(myUrl.searchParams) // URLSearchParams { 'id' => '100', 'status' => 'active' }

//Add params
myUrl.searchParams.append("abc" , "123")
console.log(myUrl.href) // http://mywebsite.com/hello.html?id=100&status=active&abc=123

//Loop through params 
myUrl.searchParams.forEach((value , name ) => console.log(`${name}:${value}`)) // id:100, status:active, abc:123