import * as usersModel from "../models/users.js";
export { getAllUsers, createUser };

async function getAllUsers(req, res) {
    res.json(await usersModel.getAll());
}

async function createUser(req, res) {
    const user = await usersModel.createUser(req.body.name, req.body.lastName, req.body.mail, false)

    res.json(user)
}

async function createTech(req, res) {
    const tech = await techModel.createUser(req.body.name, req.body.lastName, req.body.mail, true)

    res.json(tech)
}