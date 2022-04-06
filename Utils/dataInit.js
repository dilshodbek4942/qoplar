const User = require("../Models/User");
const { hashPassword } = require("./password");

exports.createInitAdmin = async () => {
  try {
    const user = await User.findOne({ role: "admin" });
    if (!user) {
      let admin = new User({
        name: "Khodjakov Dilshodbek",
        phoneNumber: "+998900094942",
        password: await hashPassword("iamadmin"),
        role: "admin",
      });
      await admin.save();
    }
  } catch (err) {
    console.log(err);
  }
};
