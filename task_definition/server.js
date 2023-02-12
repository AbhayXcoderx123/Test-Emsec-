const http = require('http');  // import the http module 
const app = require('./app');    // import our application 
const port = 3000;            //port on which server will be running , currently hardcored

const server= http.createServer(app);

server.listen(
    port,
    ()=> console.log(`its alive at http://localhost:${port}`)
    ) // to access the port