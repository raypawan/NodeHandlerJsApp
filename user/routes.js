const router = require('express').Router();
const auth = require('../middleware/auth');
const { fetchUsers,  renderAddUser, renderAbout, renderEdit, addUser, deleteUser, editUser } = require('./controlers');

router.route('/').get(fetchUsers);
router.route('/add').get(renderAddUser);
router.route('/edit').get(renderEdit);
router.route('/about').get(renderAbout);
router.route('/add').post(auth, addUser);
router.route('/edit').put(auth, editUser);
router.route('/delete/:id').delete(auth, deleteUser);


module.exports = router;
