var http = require('http');

var server = http.createServer(function(petition, response) {
    let testObject = {
        id : Math.floor(Math.random() * (11 - 1) + 1),
        title : "Producto " + Math.floor(Math.random() * (11 - 1) + 1),
        price : Math.random() * (10000.00 - 0.00) + 0.00,
        thumbnail : "Foto " + Math.floor(Math.random() * (11 - 1) + 1),
    };
    response.end(JSON.stringify(testObject));
});

server.listen(3030, function(){
    console.log('Server working on address: ' + this.address().port);
})