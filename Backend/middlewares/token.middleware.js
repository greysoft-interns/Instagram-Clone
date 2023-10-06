const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_SECRET_KEY, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "7d",
  });
};

const generateHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const checkHashedPassword = async (user, password) => {
  if (user && (await bcrypt.compare(password, user.password))) {
    return true;
  } else {
    return false;
  }
};

const verifyRefresh = async(refreshToken) => {
  try {
    const decoded = await jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET_KEY
    );
    return decoded;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      let expiredMessage = "You must Log in, Session expired!";
      return expiredMessage;
    }
    console.log(`Error: ${error}`);
  }
}

const protect = async (req, res, next) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

      //Get user from the token
      const userId = await User.findById(decoded.id).select("-password");
      req.user = {
        user: userId._id,
        accessToken: token,
      };
      next();
    } catch (error) {
      console.log('Érror');
      if (error.name === "TokenExpiredError") {
        const refreshToken = req.query.refreshToken;
        const checkUser = await User.findOne({ refreshToken: refreshToken });
        if (!checkUser) {
          return res
            .status(403)
            .json({ message: "Invalid Request, Login again" });
        }
        const decoded = await verifyRefresh(checkUser.refreshToken);
        if (!decoded) {
          return res.status(403).json({ message: "You must login again" });
        }
        if (decoded.id !== checkUser._id.toString()) {
          return res.status(400).json({ message: "You must login again" });
        }
        const accessToken = await generateAccessToken(checkUser._id);
        req.user = { user: checkUser._id, accessToken: accessToken };
        next();
        return null;
      }
      console.log(`Error:`, error);
      return res.status(401).send("Not authorized");
    }
  }

  if (!token) {
    return res.status(401).send("Not authorized, no token!");
  }
};

const adminProtect = async (req, res, next) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get token from header
      token = req.headers.authorization.split(" ")[1];

      //Verify token
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET_KEY);

      //Get user from the token
      const user = await userModel.findById(decoded.id).select("-password");
      if (!user.isAdmin) {
        return res.status(401).send("Not Authorized!");
      }

      req.user = user;
      next();
    } catch (error) {
      console.log(`Error:`, error);
      return res.status(401).send("Not authorized");
    }
  }

  if (!token) {
    return res.status(401).send("Not authorized, no token!");
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateHashedPassword,
  checkHashedPassword,
  protect,
  adminProtect,
};