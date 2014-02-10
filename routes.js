module.exports = function(app) {
	var handlers = require('./handlers');
	app.get('/', handlers.index);
	app.get('/watch', handlers.watch);

	app.get('/SYS2202_HW1', handlers.sys2202);

}