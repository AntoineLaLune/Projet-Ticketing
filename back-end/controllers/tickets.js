import * as ticketsModel from "../models/tickets.js";

export async function getAllTickets(req, res) {
    res.json(await ticketsModel.getAll());
}

export async function getTicket(req, res) {
    const ticket = await ticketsModel.getTicket(req.params.id)

    res.json(ticket)
}

export async function createTicket(req, res) {
    const ticket = await ticketsModel.createTicket(req.body.mail, req.body.name, req.body.lastName, req.body.content.req.body.priority)

    res.json(ticket)
}

export async function updateTicket(req, res) {
    const action = req.query.action

    if (action == "close") {
        ticketsModel.closeTicket(req, res);
    } else if (action == "affect") {
        ticketsModel.affectTech(req, res);
    } else if (action == "answer") {
        ticketsModel.answerTicket(req, res);
    } else {
        res.status(401).json({ error: "Bad argument", message: "The query has to be close, affect or answer" })
    }
}

export async function closeTicket(req, res) {
    const ticket = await ticketsModel.closeTicket(req.params.id)

    res.json(ticket)
}

export async function answerTicket(req, res) {
    const ticket = await ticketsModel.answerTicket(req.params.id, req.body.answer)

    res.json(ticket)
}

export async function affectTech(req, res) {
    const ticket = await ticketsModel.affectTech(req.params.id, req.body.technician_id)

    res.json(ticket)
}