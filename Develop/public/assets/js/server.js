let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
let fs = require("fs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});