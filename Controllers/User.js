const User = require("../Models/User");
const catchAsync = require("../Utils/catchAsync");
const { hashPassword } = require("../Utils/password");

exports.create = catchAsync(async (req, res) => {
  const { password, ...rest } = req.body;
  const hashedPassword = await hashPassword(password || rest.phoneNumber);

  const user = new User({ ...rest, role: "monitor" });
  user.password = hashedPassword;

  await user.save();

  res.send(user);
});

exports.update = catchAsync(async (req, res) => {
  const { password, ...rest } = req.body;
  const { _id } = req.params;
  const user = await User.findOne({ _id });
  user.update(...rest);

  const hashedPassword = await hashPassword(req.body.phoneNumber);
  user.password = hashedPassword;

  await user.save();

  res.send(user);
});
