import { Router } from "express";
import { getTicket, getAllTickets, createTicket, updateTicket } from "./controllers/tickets.js";
import { getAllUsers, createUser } from "./controllers/users.js";

const router = Router();

export default router;
router.route("/tickets")
    .get((req, res) => {
        getAllTickets(req, res)
    })
    .post((req, res) => {
        createTicket(req, res)
    })

router.route("/tickets/:id")
    .get((req, res) => {
        getTicket(req, res)
    })
    .put((req, res) => {
        updateTicket(req, res)
    })

router.route("/users")
    .get((req, res) => {
        getAllUsers(req, res)
    })
    .post((req, res) => {
        createUser(req, res)
    })


