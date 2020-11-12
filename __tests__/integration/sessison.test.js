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
        const user = await User.create({ name: 'Lucas', email: 'lucaslist@email.com', password_hash: '123456' });
        const listedUser = await controller.listUser('lucaslist@email.com');

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
        const user = await User.create({ name: 'Lucas', email: 'lucasdelete@email.com', password_hash: '123456' });

        const userToDelete = await controller.deleteUser('lucasdelete@email.com');

        expect(userToDelete).toBeTruthy();

        done();
    });
});


describe('update user', () => {
    it('should update a created user', async (done) => {
        const user = await User.create({ name: 'Lucas', email: 'lucasupdate@email.com', password_hash: '123456' });

        const userToUpdate = await controller.updateUser('lucasupdate@email.com', 'Lucas Update');

        expect(userToUpdate.name).toBe('Lucas Update');
        done();
    });
});