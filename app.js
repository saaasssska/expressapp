const express = require("express");

const app = express();

var user = {name: 'Дмитрий'};

app.use(express.json());

// Middleware для парсинга URL-encoded данных
app.use(express.urlencoded({ extended: true }));

app.get("/text", function(request, response) {
    response.send("<h1>Привет, это я работаю!<h1>");
});

app.get("/json", function(request, response) {
    response.send("<h1>" + JSON.stringify(user) + "</h1>");
});

app.get("/hello", function(request, response) {
    response.send("<h1>Hello, " + request.query.name + "</h1>");
});

app.get("/tasks/:id", function(request, response) {
    response.send("<h1>Task id is " + request.params["id"] + "</h1>");
});

app.post("/add-book", function(request, response) {
    console.log(request.body);
    response.send(request.body.name);
});

app.listen(3000);