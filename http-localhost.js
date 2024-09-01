import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 4000;

console.log(__dirname)

const server = http.createServer((req, res) => {
    
    const filePath = path.join(__dirname,"file.html");
    fs.readFile(filePath, "utf8", (err,data) => {
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end("Server error")
        }else{
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.end(data);
        }
    })

})
server.listen(PORT, () => {
 
    console.log(`Server listening on localhost${PORT}`);
});