var path = require("path");
var fs = require("fs");
var http = require("http");
var jsonpath = path.join(__dirname,"data","portfolioData.json")
var jsonData = fs.readFileSync(jsonpath,"utf8");

var personalData = JSON.parse(jsonData)
console.log(personalData.personal_information.Skills.Programming[0]);
var data_on = JSON.stringify(personalData)
http.createServer((req,res)=>{
    if(req.url=="/"){

    }
    else if(req.url=="/about"){

    }
    else if(req.url=="/skills"){

    }
    else if(req.url=="/projects"){

    }
    else if(req.url=="/education"){

    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>Page Not Found</h1>");
        res.end();
    }
}).listen(8080);