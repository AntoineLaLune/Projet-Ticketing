import db from "../db/config.js";

export async function getTickets(limit, offset, rand) {
	const params = [];
	rand_stmt = "", limit_stmt = "", offset_stmt = "";
	if (rand) {
		rand_stmt = "ORDER BY RAND()";
	}
	if (limit) {
		limit_stmt = "LIMIT ?";
		params.push(limit);
	} else {
		limit_stmt = "LIMIT 20";
	}
	if (offset) {
		offset_stmt = "OFFSET ?";
		params.push(offset);
	}
	return await db.getall(
		`SELECT *
		FROM tickets ${rand_stmt} ${limit_stmt} ${offset_stmt} 
			JOIN users.name, users.last_name USING (technician_id)`,
		params
	);
}

export async function getTicket(id) {
	return await db.getrow(`SELECT * FROM tickets WHERE id = ?`, id);
}

export async function createTicket(mail, name, lastName, content, priority) {
	return await db.insert("INSERT INTO tickets (user_mail, creation_date, asked_by_name, asked_by_last_name, content, priority) VALUES (?,NOW(),?,?,?,?)", [mail, name, lastName, content, priority]);
}

export async function closeTicket(id) {
	return await db.update(`UPDATE tickets SET closing_date=NOW(), latest_update=NOW() WHERE id=?`, [id]);
}

export async function answerTicket(id, answer) {
	return await db.update(`UPDATE tickets SET answer_date=NOW(), technician_answer=?, latest_update=NOW() WHERE id=?`, [answer, id]);
}

export async function affectTech(id, tech_id) {
	return await db.update(`UPDATE tickets SET technician_id=?, latest_update=NOW() WHERE id=?`, [tech_id, id]);
}

export async function deleteTicket(id) {
	return await db.delete(`DELETE FROM tickets WHERE id=?`, [id]);
}