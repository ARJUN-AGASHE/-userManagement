const userModel=require("../model/userModel")



const renderLoginpage = (req, res) => {
  res.render("registration");
};

const singupController = async(req, res) => {
  try {
    const { name, password, email } = req.body;
    console.log(name, password, email);

    const newUser=new userModel({
        username:name,
        password,
        email,
    })
   await newUser.save()
   res.status(200).json("successfull saved")

  } catch (error) {
      res.status(500).json("error")
  }
};
module.exports = { renderLoginpage, singupController };
