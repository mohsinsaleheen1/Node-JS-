const checkAge = (req, res, next) => {
  const age = req.query.age;
  if (!age) {
    res.send("Please Enter You Age");
  } else if (age < 18) {
    res.send("You are Not Allowed to visit this page");
  } else {
    next();
  }
};
module.exports = checkAge;
