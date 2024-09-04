const year = require('../utilis/date');
const getForm = (req, res) => {
    res.render('form', {header: 'Add New Message', year: year});
}
module.exports = getForm;