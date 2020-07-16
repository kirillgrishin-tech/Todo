var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cors = require('cors');

router.use(cors());
router.options('*', cors());
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

const {Client} = require("pg")
const conn = new Client({
  user: 'root',
  host: 'localhost',
  database: 'myapp',
  password: 'ZXCasQ123',
  port: 5432
})
conn.connect()
let QUERY= 'SELECT * FROM Todo;'

/* GET home page. */
router.get('/do', function(req, res, next) {
  conn.query(QUERY, (err,result) => {
    if (err) {
                return res.send(err)
            } else {
                res.header('Access-Control-Allow-Origin', '*')
                return res.json({data: result})
                }
});
});

router.post('/add', (req,res)=>{
    if (req.body.About.trim()){
      conn.query(`INSERT INTO Todo (dodo,about) VALUES ('${req.body.do}','${req.body.About}')`);
    } else {
      conn.query(`INSERT INTO Todo (dodo) VALUES ('${req.body.do}')`);
    }
    conn.query(QUERY, (err,result) => {
      if (err) {
                  return res.send(err)
              } else {
                  res.header('Access-Control-Allow-Origin', '*')
                  return res.json({data: result})
                  }
});
});

router.post('/del', (req,res)=>{
  console.log(req.body.id_do)
  conn.query(`DELETE FROM Todo WHERE id_do=${req.body.id_do}`);
  conn.query(QUERY, (err,result) => {
    if (err) {
                return res.send(err)
            } else {
                res.header('Access-Control-Allow-Origin', '*')
                return res.json({data: result})
                }
});
});

router.post('/complete', (req,res)=>{
  conn.query(`UPDATE Todo SET complete=${req.body.boolean} WHERE id_do=${req.body.id_do}`);
  conn.query(QUERY, (err,result) => {
    if (err) {
                return res.send(err)
            } else {
                res.header('Access-Control-Allow-Origin', '*')
                return res.json({data: result})
                }
});
});

module.exports = router;
