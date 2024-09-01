import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 4000;

const details = {
    key: fs.readFileSync(path.join(__dirname, "certs/server.key")),
    cert: fs.readFileSync(path.join(__dirname, "certs/server.cert"))
};

const server = https.createServer(details,(req, res) => {
    
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