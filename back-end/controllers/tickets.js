import * as ticketsModel from "../models/tickets.js";

export async function getTickets(req, res) {
	const tickets = await ticketsModel.getTickets(req?.query?.limit, req?.query?.offset, req?.query?.rand);
	if (!tickets) {
		return res.status(400).json({ messaege: "No tickets found" });
	}
	return res.status(200).json({
		success : true,
		data : tickets
	});
}

export async function getTicket(req, res) {
	const ticket = await ticketsModel.getTicket(req.params.id);
	return res.status(200).json({
		success : true,
		data : ticket
	});
}

export async function createTicket(req, res) {
	const ticket = await ticketsModel.createTicket(req.body.mail, req.body.name, req.body.lastName, req.body.content, req.body.priority);
	return res.status(200).json({
		success : true,
		data : ticket
	});
}

export async function updateTicket(req, res) {
	const body = req.body;
	const id = req.params.id;

	if (body.close_date) {
		await ticketsModel.closeTicket(id);
	} else if (body.technician_id) {
		await ticketsModel.affectTech(id, technician_id);
	} else if (body.answer) {
		await ticketsModel.answerTicket(id, body.answer);
	} else {
		return res.status(401).json({ error: "Bad argument", message: "The query has to be close, affect or answer" });
	}
	return res.status(200).json({
		success : true
	});
}