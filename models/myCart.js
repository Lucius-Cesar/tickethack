const mongoose =  require('mongoose');

const myCartSchema = mongoose.Schema({
    trip : {type: mongoose.Schema.Types.ObjectId, ref: 'trips'},
    isPurchased : Boolean,
});

const MyCart = mongoose.model('myCarts',myCartSchema);

module.exports = MyCart; 