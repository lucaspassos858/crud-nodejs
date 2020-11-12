const { User } = require("../models/");

module.exports = {
    async listUser(email) {

        const result = await User.findOne({ where: { email: email } });
        return result;
    },

    async deleteUser(email) {
        const result = await User.destroy({ where: { email: email } });
        console.log(result);
        return result;
    },

    async updateUser(email,newName) {
        await User.update({ name: newName }, {
            where: {
              email: email
            }
          });
          const result = await User.findOne({ where: { name: newName } });
        return result;
    }
}