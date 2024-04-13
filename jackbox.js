// simple vote manipulation: increases your audience vote weight for voting-based games
// feel free to minify before pasting into console 
(() => {
    // store the original WebSocket.send function
    const originalSend = WebSocket.prototype.send;

    // Override the WebSocket.send function
    WebSocket.prototype.send = function(data) {
        // manipulate data
        let modifiedData = data;
        let jsonData = JSON.parse(data);
        jsonData.params.times = 1000; // desired vote worth
        modifiedData = JSON.stringify(jsonData);

        // call the original send function with the modified data
        originalSend.call(this, modifiedData);
    };
})();