const router = require("express").Router();
let Post = require("../model/post-model");

router.route("/").get((req, res) => {
  Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json("Error" + err));
});
//Add post:
router.route("/add").post((req, res) => {
  const quangduongdi = req.body.quangduongdi;
  const quangduongden = req.body.quangduongden;
  const ngaythang = req.body.ngaythang;
  const thoigian = req.body.thoigian;
  const thongtinkhac = req.body.thongtinkhac;
  const newPost = new Post({
    quangduongdi,
    quangduongden,
    ngaythang,
    thoigian,
    thongtinkhac
  });
  newPost
    .save()
    .then(() => res.json("Post Add Succesfull !"))
    .catch(err => res.status(400).json("Error" + err));
});
module.exports = router;
