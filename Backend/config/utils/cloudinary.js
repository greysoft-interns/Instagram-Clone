const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const handleUpload = async(file) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "Instagram/Display"
  });
  return res;
}

const handlePostsUpload = async(file) => {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      folder: "Instagram/Posts"
    });
    return res;
  }

module.exports = {
    handleUpload,
    handlePostsUpload
}
