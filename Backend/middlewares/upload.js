const multer = require("multer");
const {
  handleUpload,
  handlePostsUpload,
} = require("../config/utils/cloudinary");

const storage = multer.memoryStorage();
const upload = multer({ storage });
const mulUploads = multer({
  storage,
  limits: { fileSize: 1000000, files: 10 },
});
const myUploadMiddleware = upload.single("displayImage");
const myPostsUpload = mulUploads.array("posts");

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const handler = async (req, res, next) => {
  try {
    await runMiddleware(req, res, myUploadMiddleware);
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    const { public_id, url } = cldRes;
    // return res.json(cldRes);
    req.avatar = {
      public_id,
      url,
    };
    next();
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};

const postsHandler = async (req, res, next) => {
  try {
    await runMiddleware(req, res, myPostsUpload);
    const allMedia = req.files;
    const newResponse = await allMedia.map(async (image) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      let dataURI = "data:" + image.mimetype + ";base64," + b64;
      const cldRes = await handlePostsUpload(dataURI);
      const { public_id, url } = cldRes;
      return {
        public_id,
        url,
      };
    });
    Promise.all(newResponse)
      .then((postsData) => {
        req.posts = postsData;
        next();
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};
const config = {
  api: {
    bodyParser: false,
  },
};
module.exports = { handler, config, postsHandler };
