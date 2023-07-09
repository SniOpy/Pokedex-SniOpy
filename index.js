const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");



app.get("/", (req,res) => {
    
    res.send("Hello world");

});



app.listen(3000, () => {
    console.log("Starting to http://localhost:3000")
});
