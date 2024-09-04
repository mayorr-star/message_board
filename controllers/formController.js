const year = require('../date');
const getForm = (req, res) => {
    res.render('form', {header: 'Add New Message', year: year});
}
module.exports = getForm;