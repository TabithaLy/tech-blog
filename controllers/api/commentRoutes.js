// taken from UPENN-VIRT-FSF-FT-07-2022-U-LOLC\14-MVC\01-Activities\28-Stu_Mini-Project\Main\controllers\api\projectRoutes.js
// changed every instance of "project" to "comment"
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// modified from UPENN-VIRT-FSF-FT-07-2022-U-LOLC\13-ORM\01-Activities\09-Ins_Async-Await\routes\api\bookRoutes.js
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({});
    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;