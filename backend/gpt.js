const app = require('express').Router()
// import { serp } from './serpai.js';
// import {summ} from './summary.js';
// import {test_question} from './gpt3.js';
const serp = require("./serpai");
const summ = require("./summary");
const test_question = require("./gpt3")
/*app.get('/:type/:id', (req, res) => {
    if (req.params.type==="html")
    res.send(`Hello World!<br>${req.params.id}`)
    else if (req.params.type==="json")
    res.json({test: true, try: 1, id: req.params.id})
    else 
    res.send("<h3>Error: Could not parse the type of request.</h3> <p>Use html or json.</p>").status(404)
})*/
//req.body, x-www-form-urlencoded

// async function call_gpt (req, res){
    
// } 

app.post('/gpt', (req, res) => {
    console.log(req.data)
    text = req.data
    let split=text.split('\n\n') //split up
    //logging every new line:
    let paras = []
    split.forEach(function(item){paras.push(item)})
    console.log(paras)
    let results = []
    for(let i=0;i<arrayBuffer.length(paras);i++){
        results.push({image:serp(test_question(paras[i])), text:summ(paras[i])})
    }

    res.json(JSON.stringify(results)) //alternatively, JSON.stringify(results)
})


module.exports = app