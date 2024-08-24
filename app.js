const express = require("express");

const app = express();

var user = {name: 'Дмитрий'};

app.get("/text", function(request, response) {
    response.send("<h1>Привет, это я работаю!<h1>");
});
git 
app.get("/json", function(request, response) {
    response.send("<h1>" + JSON.stringify(user) + "</h1>");
});

app.get("/hello", function(request, response) {
    response.send("<h1>Hello, " + request.query.name + "</h1>");
});

app.get("/tasks/:id", function(request, response) {
    response.send("<h1>Task id is " + request.params["id"] + "</h1>");
});

app.listen(3000);