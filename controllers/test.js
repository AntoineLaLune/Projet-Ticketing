import * as testModel from "../models/test.js";
export { getTest, postTest, getAll, putTest, deleteTest };

async function getTest(req, res) {
    res.send(await testModel.getOne(req.params.id));
}

async function postTest(req, res) {
    await testModel.createOne(req.body.name, req.body.country, req.body.zip_code);
}

async function getAll(req, res) {
    res.send(await testModel.getAll());
}

async function putTest(req, res) {
    await testModel.updateOne(req.body.name, req.body.country, req.body.zip_code, req.body.id);
}

async function deleteTest(req, res) {
    await testModel.deleteOne(req.body.id)
}