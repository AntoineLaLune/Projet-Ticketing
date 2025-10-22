import Database from "npm:mysql2-async";

const db = new Database({
    host: "10.96.23.78",
    user: "yey",
    password: "4521",
    database: "ticket",
    skiptzfix: true,
});

export default db;