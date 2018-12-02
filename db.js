//1st Draft Data Model
const mongoose = require('mongoose');

//users
//requires username and password
const User = new mongoose.Schema({
	// username provided by authentication plugin
	// password hash provided by authentication plugin
	list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List'}]
});

//an anime list
//the list must have a related user
//a list can have 0 or more items
const List = new mongoose.Schema([
	user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	name: {type: String, required: true},
	lastUpdated: {type: Date, required: true},
	items: [Item]
])

//an anime in the list
//includes the rating the user gives the show and the genres of the show
//items in the list can be toggled to be shown to the user or not when they filter the list
const Item = new mongoose.Schema({
	name: {type: String, required: true},
	rating: {type: Number, min: 1, max: 10, required: true},
	genres: {type: String, required: true},
	show: {type: Boolean, default: true, required: true}
}, {
	_id: true
})