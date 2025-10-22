import db from '../db/config.js';

export async function getAll() {
    return await db.getall("SELECT * FROM test");
}

export async function getOne(id) {
    return await db.getall('SELECT * FROM test WHERE id = ?', id);
}

export async function createOne(name, country, zip_code) {
    return await db.insert('INSERT INTO test (name,country,zip_code) VALUES (?,?,?) ', [name, country, zip_code]);
}

export async function updateOne(name, country, zip_code, id) {
    return await db.update('UPDATE test SET name=?, country=?, zip_code=? WHERE id=? ', [name, country, zip_code, id])
}

export async function deleteOne() {
    return await db.delete('DELETE FROM test WHERE id=?', id)
}