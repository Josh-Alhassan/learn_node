const fs = require("fs");
const http = require("http");
const url = require("url");

// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error!");

//   console.log(data1);

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2} \n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your File has been written");
//         }
//       );
//     });
//   });
// });

// ///////////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  // console.log(req);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW Page");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT Page");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello-world",
    });

    res.end("<h1>PAGE NOT FOUND!</h1>");
  }
  // res.end("Hello from the server");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on Port 8000");
});
