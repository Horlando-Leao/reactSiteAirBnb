const User = require('../models/User');              
//dentro do controle tem os seguintes métodos
//index, show, store, update, destroy
//criando uma sessão
module.exports = {
  async store(req, res) {   
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (!user){
      user = await User.create({ email });
    }

    //const user = await User.create({ email });

    return res.json(user);
    }   
};