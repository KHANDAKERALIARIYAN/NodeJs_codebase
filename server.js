import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

// get current path
// const __filename=url.fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename); //__dirname

// console.log(__filename,__dirname);

// method 1
// const server = http.createServer((req, res) => {
//     // res.write("hello Ariyan");
//     // res.end();

//     // req.setHeader("Content-Type", "text/html");
//     // res.statusCode = 404;
//     // res.end("<h1>hello Ariyan</h1>");
    
//     // res.writeHead(500, {"Content-Type": "application/json"});
//     // res.end(JSON.stringify({name: "Ariyan"}));

//     // console.log(req.url)
//     // console.log(req.method);

//     // res.writeHead(200, {"Content-Type": "text/html"});
//     // res.write("<h1>hello Ariyan</h1>");
//     // res.end();

//     try{
//         // check if get request
//         if(req.method === "GET"){
//             // router
//             if(req.url==="/"){
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.write("<h1>Home Page</h1>");
//                 res.end();
//             }else if (req.url==="/about"){
//                 res.writeHead(200, {"Content-Type": "text/html"});
//                 res.write("<h1>About Page</h1>");
//                 res.end();
//             }else{
//                 res.writeHead(404, {"Content-Type": "text/html"});
//                 res.write("<h1>Page Not Found</h1>");
//                 res.end();
//             }

//         }else{
//         throw new Error("Method Not Allowed");
//         }

//     }

//     catch(error){
//         res.writeHead(500, {"Content-Type": "text/plain"});
//         res.write("Server Error");
//         res.end();
//     }
    
// });

// method 2
const server = http.createServer(async(req, res) => {
    

    try{
        // check if get request
        if(req.method === "GET"){
            let filePath;
            // router
            if(req.url==="/"){
                filePath=path.join(__dirname,"public","index.html");
            }else if (req.url==="/about"){
                filePath=path.join(__dirname,"public","about.html");
            }else{
                throw new Error("Page Not Found");
            }

            const data=await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();

        }else{
        throw new Error("Method Not Allowed");
        }

    }

    catch(error){
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.write("Server Error");
        res.end();
    }
    
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})