const router = require('express').Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usersController');

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser);

router.route('/:id/friends/:friendsId')
  .delete(removeFriend)
  .post(addFriend);


module.exports = router;

