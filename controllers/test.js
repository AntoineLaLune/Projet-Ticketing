import * as testModel from "../models/test.js";
export { getTest, postTest, getAll };

function getTest(req, res) {
    res.send(`Slt : ${req.params.id}`)
}

function postTest(req, res) {
    res.send(`PostSLT : ${req.params.id}`)
}

async function getAll(req, res) {
    res.send(await testModel.getAll())
}