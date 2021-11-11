// API for our resources 
exports.api = function(_req, res) { 
    res.write('['); 
    res.write('{"resource":"umbrella", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
};