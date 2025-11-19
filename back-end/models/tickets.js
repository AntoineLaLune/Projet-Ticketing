import db from '../db/config.js';

export async function getAll() {
    return await db.getall("SELECT * FROM tickets");
}

export async function getTicket(id) {
    return await db.getall('SELECT * FROM tickets WHERE id = ?', id);
}

export async function createTicket(mail, name, lastName, content, priority) {
    return await db.insert("INSERT INTO tickets (user_mail,creation_date,asked_by_name,asked_by_last_name,content,priority) VALUES (?,NOW(),?,?,?,?)", [mail, name, lastName, content, priority])

}

export async function closeTicket(id) {
    return await db.update('UPDATE tickets SET closing_date=NOW(),latest_update=NOW() WHERE id=? ', [id])
}

export async function answerTicket(id, answer) {
    return await db.update('UPDATE tickets SET answer_date=NOW(),technician_answer=?, latest_update=NOW() WHERE id=? ', [answer, id])
}

export async function affectTech(id, tech_id) {
    return await db.update('UPDATE tickets SET technician_id=?, latest_update=NOW() WHERE id=? ', [tech_id, id])
}
