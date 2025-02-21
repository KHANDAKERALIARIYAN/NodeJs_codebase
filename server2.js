import { createServer } from "http";
import { parse } from "path";

const PORT=process.env.PORT || 8000;

const users=[
    {id:1, name:"Ariyan"},
    {id:2, name:"Rohan"},
    {id:3, name:"Rahik"}
];

// logger middleware
const logger=(req,res,next)=>{
   console.log(`${req.method} ${req.url}`);
   next();
}

// JSON middleware
const jsonMiddleware=(req,res,next)=>{
    res.setHeader("Content-Type", "application/json");
    next();
}

// route handler for get/api/users
const getUsers=(req,res)=>{
    res.end(JSON.stringify(users));
    res.end();
}

// router handler for get/api/users/:id
const getUserByIdHandler=(req,res)=>{
    const id=req.url.split("/")[3];
    const user=users.find((user)=>user.id===parseInt(id));

    if(user){
        res.end(JSON.stringify(user));
    }else{
        res.statusCode=404;
        res.end(JSON.stringify({message:"User Not Found"}));
    }
    res.end();
}

// Not found handler
const notFoundHandler=(req,res)=>{
    res.statusCode=404;
    res.end(JSON.stringify({message:"Page Not Found"}));
    res.end();
};

// route hanlder for post/api/users
const postUserHandler=(req,res)=>{
    let body=" ";
    // listen for data
    req.on("data", (chunk) => {
        body+=chunk.toString();
    });

    req.on("end", () => {
        const newUser=JSON.parse(body);
        users.push(newUser);
        res.statusCode=201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
};

const server =createServer((req,res)=>{
    logger(req,res,() => {
        jsonMiddleware(req,res,() => {
            if(req.url==="/api/users" && req.method==="GET"){
                return getUsers(req,res);
            }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==="GET"){
                return getUserByIdHandler(req,res);
            }else if(req.url==="/api/users" && req.method==="POST"){
                return postUserHandler(req,res);
            }else{
                return notFoundHandler(req,res);
            }
        });
    });
});
    

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});