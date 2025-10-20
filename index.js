import express from "npm:express";
import { getTest, postTest, getAll, putTest, deleteTest } from "./controllers/test.js";

const app = express();

app.use(express.json());
//app.use(express.static('html'));
/*
app.set('view engine', 'pug');
app.set('views','./html');

app.route('/submit')
  .get((req, res) => {
    res.render('submit');
    })
  .post((req,res) =>{
    const username=req.body.username;
    console.log(username);  

});
*/

app.route('/test')
  .get((req, res) => {
    getAll(req, res);

  })
  .post((req, res) => {
    postTest(req, res)
  })
  .put((req, res) => {
    putTest(req, res)
  })
  .delete((req, res) => {
    deleteTest(req, res)
  })

app.get('/test/:id', getTest)
app.listen(4000);