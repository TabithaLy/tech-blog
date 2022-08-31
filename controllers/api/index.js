// taken and modified from UPENN-VIRT-FSF-FT-07-2022-U-LOLC\14-MVC\01-Activities\28-Stu_Mini-Project\Main\controllers\api\index.js
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;