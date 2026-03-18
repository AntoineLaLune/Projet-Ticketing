import { Router } from "express";
import { getTicket, getAllTickets, createTicket, updateTicket } from "./controllers/tickets.js";
import { getUser, getAllUsers, createUser } from "./controllers/users.js";

const router = Router();

export default router;
router.route("/tickets")
	.get(getAllTickets)
	.post(createTicket)

router.route("/tickets/:id")
	.get(getTicket)
	.put(updateTicket)

router.route("/users")
	.get(getAllUsers)
	.post(createUser)

router.route("/users/:id")
	.get(getUser)