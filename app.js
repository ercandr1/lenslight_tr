import express from "express"

const app = express();
const port = 8083;

app.get("/", (req,res)=> {
    res.send("INDEX SAYFASI")
})


app.listen(port, () => {
    console.log(`App started on ${port}`);
})