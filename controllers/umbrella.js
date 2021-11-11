var umbrella = require('../models/umbrella');
// List of all umbrella
exports.umbrella_list = async function(req, res) {
    try{
        theumbrella = await umbrella.find();
        res.send(theumbrella);
    }
    catch(err){
        res.status(500)
        res.send(`{"error": ${err}}`); 
    }
//res.send('NOT IMPLEMENTED: umbrella list');
};

// for a specific umbrella.
exports.umbrella_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await umbrella.findById(req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};

// Handle hat create on POST.
exports.umbrella_create_post = async function (req, res) {
    console.log(req.body)
    let document = new umbrella();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"hat_name":"beret hat", "colour":"white", "price":"Thirty-four USD"}
    document.brand = req.body.brand;
    document.color = req.body.color;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle hat delete form on DELETE.
exports.umbrella_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await umbrella.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
//Handle bakery update form on PUT.
exports.umbrella_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try {
        let toUpdate = await hat.findById(req.params.id);
        // Do updates of properties
        if (req.body.brand)
            toUpdate.brand = req.body.brand;
        if (req.body.color)
            toUpdate.colour = req.body.colour;
        if (req.body.cost)
            toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result);
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.umbrella_view_all_Page = async function (req, res) {
    try {
        thehat = await hat.find();
        res.render('umbrella', { title: 'umbrella Search Results', results: theumbrella });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query
exports.umbrella_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await hat.findById( req.query.id)
        res.render('umbrelladetail', { title: 'umbrella Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a hat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.umbrella_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('umbrellacreate', { title: 'umbrella Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};

// Handle building the view for updating a fish.
// query provides the id
exports.umbrella_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await hat.findById(req.query.id)
        res.render('umbrellaupdate', { title: 'umbrella Update', toShow: result });
    }
    catch(err){
        res.status(500)
        
    }
};

// Handle a delete one view with id from query
exports.umbrella_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await hat.findById(req.query.id)
        res.render('umbrelladelete', { title: 'umbrella Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};