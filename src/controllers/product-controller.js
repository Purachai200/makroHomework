exports.getProductsLanding = (req, res, next) => {
  res.json({ message: "Get Product Landing Page" });
};

exports.getProducts = (req, res, next) => {
  res.json({ message: "Get Filterd Products" });
};

exports.getProductById = (req, res, next) => {
  res.json({ message: "Get Product By Id" });
};
