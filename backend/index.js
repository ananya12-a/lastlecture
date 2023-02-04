var express = require('express')
var path = require('path');



const app = express()
const port = 3000 //|| args['port']

 
// // Static Middleware
//app.use(express.static(path.join(__dirname, 'public')))
   
// app.get('/', function (req, res, next) {
//     res.render('home.ejs');
// })
 
// app.listen(port, function(err){
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);




// app.use((req, res, next=undefined) => {
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.setHeader('Access-Control-Allow-Credentials', false)
//   if (next) next();
// })

// Body Parser allows us to process json/url-encoded requests properly
// app.use(bp.json());
// app.use(bp.urlencoded({ extended: true }));

// Allows us to use our API on websites not on the same origin
// app.use(cors());

// Add in routers
app.use('/gpt', require('./gpt.js'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})