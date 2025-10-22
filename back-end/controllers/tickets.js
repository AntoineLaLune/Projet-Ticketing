import * as ticketsModel from "../models/tickets.js";
export { getAllTickets };

async function getAllTickets(req, res) {
    res.send(await ticketsModel.getAll());
}