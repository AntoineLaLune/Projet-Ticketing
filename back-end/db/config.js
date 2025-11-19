import Database from "npm:mysql2-async";

const db = new Database({
    host: Deno.env.get("DB_HOST"),
    user: Deno.env.get("DB_USER"),
    password: Deno.env.get("DB_PASSWORD"),
    database: Deno.env.get("DB_TABLE"),
    skiptzfix: true,
    dateStrings: true,
});

export default db;