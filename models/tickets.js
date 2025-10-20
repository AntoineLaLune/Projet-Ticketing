import db from '../db/config.js';

export async function getAll() {
    return await db.getall("SELECT * FROM tickets");
}