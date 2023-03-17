import fs from "fs";

function callback(err, data) {
  console.log("err", err);
  console.log("data", data);
}
fs.readFile("./data.txt", { encoding: "utf8" }, callback);
console.log("hello");

// express example
// function userEndpoint(request, response) {
//   const name = request.query.name;
//   response.send("hello");
// }
// app.get("/users", userEndpoint);
