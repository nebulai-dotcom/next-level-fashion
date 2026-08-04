const express = require("express");
const path = require("path");

const app = express();


// Serve all website files
app.use(express.static(__dirname));


// Home page
app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "index.html")
    );

});


// Render provides PORT automatically
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

    console.log(
        `NEXT LEVEL website running on port ${PORT}`
    );

});