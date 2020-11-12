const truncate = require('../utils/truncate')
const controller = require('../../src/app/controller/controller')
const { User } = require('../../src/app/models');


beforeEach(async () => {
    await truncate()
});


describe('create user', () => {
    it('should create a test', async () => {
        const user = await User.create({ name: 'Lucas', email: 'lucas@email.com', password_hash: '123456' });

        expect(user.email).toBe('lucas@email.com');
    });
});


describe('list user', () => {
    it('should list the created user', async (done) => {
        const user = await User.create({ name: 'Lucas', email: 'lucas@email.com', password_hash: '123456' });
        const listedUser = await controller.listUser('lucas@email.com');
        console.log(listedUser);

        expect(listedUser).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String)
            }));
        done();
    });
});


describe('delete user', () => {
    it('should delete a created user', async (done) => {
        const user = await User.create({ name: 'Lucas', email: 'lucas@email.com', password_hash: '123456' });

        const userToDelete = await controller.deleteUser('lucas@email.com');

        expect(userToDelete).toBeTruthy();

        done();
    });
});


