import * as usersModel from "../models/users.js";

export async function getAllUsers(req, res) {
	const users = await usersModel.getAll();
	if (!users) {
		return res.status(400).json({ messaege: "No users found" });
	}
	return res.status(200).json({
		success : true,
		data : users
	});
}

export async function getUser(req, res) {
	const user = await usersModel.getUser(req.params.id);
	return res.status(200).json({
		success : true,
		data : user
	});
}

export async function createUser(req, res) {
	const user = await usersModel.createUser(req.body.name, req.body.lastName, req.body.mail, false);
	return res.status(200).json({
		success : true,
		data : user
	});
}

export async function createTech(req, res) {
	const tech = await techModel.createUser(req.body.name, req.body.lastName, req.body.mail, true);
	return res.status(200).json({
		success : true,
		data : tech
	});
}