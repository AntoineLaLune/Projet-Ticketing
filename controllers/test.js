import * as testModel from "../models/test.js";
export { getTest, postTest, getAll, putTest, deleteTest };

async function getTest(req, res) {
    res.send(await testModel.getOne(req.params.id));
}

async function postTest(req) {
    await testModel.createOne(req.body.name, req.body.country, req.body.zip_code);
}

async function getAll(_, res) {
    res.send(await testModel.getAll());
}

async function putTest(req) {
    await testModel.updateOne(req.body.name, req.body.country, req.body.zip_code, req.body.id);
}

async function deleteTest(req) {
    await testModel.deleteOne(req.params.id)
}