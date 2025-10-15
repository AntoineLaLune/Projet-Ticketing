import express from "npm:express";

const app = express();

app.listen(4000);

app.use(express.static('html'));
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

app.route('/test/:id')
  .get((req, res) => {
    getTest(req, res);

  })
  .post((req, res) => {
    postTest(req, res)
  })


function getTest(req, res) {
  res.send(`Slt : ${req.params.id}`)
}

function postTest(req, res) {
  res.send(`PostSLT : ${req.params.id}`)
}