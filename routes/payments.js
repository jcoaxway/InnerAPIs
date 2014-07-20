module.exports = function(app) {

var detalleFacturas=[{"id":"1233212", "emisor":"Empresa de Electricidad", "concepto":"Recibo de electricidad", "basei":"32,12","vat":"6%","cantidad":"34,32",  },
					 {"id":"1234217", "emisor":"Distribuidora de Gas", "concepto":"Recibo de gas", "basei":"75,54","vat":"6%","cantidad":"80,07"},
					 {"id":"5657342", "emisor":"SuperGym", "concepto":"Recibo de gimnasio", "basei":"98,54","vat":"11%", "cantidad":"109,37"}];


// Find all invoices
findAllInvoices = function (req, res) {
	res.json( detalleFacturas );
}

// Search an item by its id
findInvoiceById = function(req, res) {
	console.log('Invoice By Id ' + req.params.id);
	var emptyItem={"status": "1","error":"Invoice not found"};
    var item = null;
    var l = detalleFacturas.length;
    for (var i=0; i < l; i++) {
        if (detalleFacturas[i].id === req.params.id) {
            item = detalleFacturas[i];
			res.json(item);
            break;
            }
        }
	res.json(emptyItem);
	}
	
saveInvoice = function (req, res) {
	console.log('Saving Invoice ' + req.params.id);
	var emptyItem={"status": "0","comment":"Invoice saved"};
	res.json(emptyItem);
}


//Link routes and functions
app.get ('/listafacturas', findAllInvoices);
app.get ('/facturas/:id', findInvoiceById);
app.post ('/facturas/:id', saveInvoice);
}