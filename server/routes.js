var index  = "../public/index";

module.exports.initialize = function(app) {
    app.get('/', function(req, res){
        res.render(index);
    });
}