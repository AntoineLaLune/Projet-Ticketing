import * as usersModel from "../models/users.js";
export { getAllUsers };

async function getAllUsers(req, res) {
    res.send(await usersModel.getAll());
}

async function createUser(params) {

}