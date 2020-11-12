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
    }
}