module.exports = function(app) {

var itemsi=[{"status": "0","id":"1233212", "nombre":"minombre0"},{"status": "0","id":"5533212", "nombre":"minombre1"},{"status": "0","id":"5533212", "nombre":"minombre1"}];

// Find all items
findAll = function (req, res) {
	//var itemsi=[{"status": "0","id":"1233212", "nombre":"minombre0"},{"status": "0","id":"5533212", "nombre":"minombre1"}];
	console.log('Location By Id ' + itemsi[0].id);
    res.json(itemsi);
}

// Search an item by its id
findById = function(req, res) {
	console.log('Location By Id ' + req.params.id);
	var items=[{"status": "0","id":"1233212", "nombre":"minombre1"},{"status": "0","id":"5533212", "nombre":"minombre2"}];
	var emptyItem={"status": "1","error":"item not found"};
    var employees = this.employees;
    var item = null;
    var l = items.length;
    for (var i=0; i < l; i++) {
        if (items[i].id === req.params.id) {
            item = items[i];
			res.json(item);
            break;
            }
        }
	res.json(emptyItem);
	}

//Link routes and functions
//app.get ('', );
app.get ('/itemslist', findAll);
app.get ('/items/:id', findById);

}