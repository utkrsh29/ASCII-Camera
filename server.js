import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app=express();
const port=3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(port,()=>{
    console.log("AYO TS IS ON");
})