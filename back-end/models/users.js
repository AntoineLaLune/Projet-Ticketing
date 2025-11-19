import db from '../db/config.js';

export async function getAll() {
    return await db.getall("SELECT * FROM users");
}

export async function createUser(name, lastName, mail, isTech) {

    return await db.insert("INSERT INTO users (name,last_name,mail,technician) VALUES (?,?,?,?)", [name, lastName, mail, isTech])
}

export async function affectTech(id, tech_id) {
    return await db.update('UPDATE users SET technician_id=?, latest_update=NOW() WHERE id=? ', [tech_id, id])
}