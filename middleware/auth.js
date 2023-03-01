const auth = (req, res, next) => {
  let authorization = req.headers.authorization;
  if (!authorization) {
    var err = new Error("you don't have permission");
    err.status = 401;
    return res.json({message:"you don't have permission", status:err.status});
  }

  if (authorization?.split(" ")[0] !== "Bearer") {
    var err = new Error("you don't have token");
    err.status = 404;
    return res.json({message:"you don't have token", status:err.status});
  } else {
    next();
  }
};

module.exports = auth;