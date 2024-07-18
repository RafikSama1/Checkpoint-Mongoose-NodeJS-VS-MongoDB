const {model} = require('mongoose');

module.exports = mongoose.model('User', {
    name: string [require],
    age: number,
    favoriteFoods: Array
});