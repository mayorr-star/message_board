const getForm = (req, res) => {
    res.render('form', {header: 'Add New Message'});
}
module.exports = getForm;