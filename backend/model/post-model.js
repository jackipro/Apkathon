const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    quangduongdi: { type: String, required: true },
    quangduongden: { type: String, required: true },
    ngaythang: { type: String, required: true },
    thoigian: { type: String, required: true },
    thongtinkhac: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
