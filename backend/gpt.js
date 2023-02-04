//https://stackoverflow.com/questions/38605878/javascript-promise-all-returns-last-promise-only
//https://www.geeksforgeeks.org/javascript-promise-finally-method/

const app = require('express').Router()
// import { serp } from './serpai.js';
// import {summ} from './summary.js';
// import {test_question} from './gpt3.js';
const serpai = require("./serpai");
const summary = require("./summary");
const gpt3 = require("./gpt3")
const fs = require("fs");
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

function calls(paras){
    //var retval = [];
    let retval = [fs.readFileSync('./jsons/summary.txt', 'utf8').toString(), fs.readFileSync('./jsons/image.txt', 'utf8').toString()]
    //console.log("RETVAL", retval)
    // console.log(retval[i], [fs.readFileSync('./jsons/summary.txt', 'utf8').toString(), fs.readFileSync('./jsons/image.txt', 'utf8').toString()])
    //console.log(paras)
    let cap = fs.readFileSync('./jsons/caption.txt', 'utf8').toString()
    //console.log("cap for serpai:",cap)
    let sp = serpai.serp(cap)
    sp.then(res => {
        fs.writeFileSync('./jsons/image.txt', res, 'utf8');
        // console.log("serpai:\n", res)
    })
    .catch(err => {console.log(err)});
    let tq = gpt3.test_question(paras)
    tq.then(res => {
        fs.writeFileSync('./jsons/caption.txt', res, 'utf8');
        // console.log("gpt3:\n", res)
    })
    .catch(err => {console.log(err)});
    let s = summary.summ(paras)
    s.then(res => {
        fs.writeFileSync('./jsons/summary.txt', res, 'utf8');
        // console.log("summary:\n", res)
    })
    .catch(err => {console.log(err)});
    //read same file, put in array
    //console.log(paras[i])
    //console.log(retval)
    return retval
}

function call(paras) {
    Promise.all(
        paras.map(p => summary.summ(p))
      ).then(res => {
        fs.writeFileSync('./jsons/summaries.txt', JSON.stringify(res), 'utf8');
        // console.log("summary:\n", res)
    })
    .catch(err => {console.log(err)});
    //console.log(caps)

    Promise.all(
        paras.map(p => gpt3.test_question(p))
      ).then(res => {
        fs.writeFileSync('./jsons/captions.txt', JSON.stringify(res), 'utf8');
        // console.log("summary:\n", res)
    })
    .catch(err => {console.log(err)});


    let temp =fs.readFileSync('./jsons/captions.txt', 'utf8')
    temp = temp.substring(2, temp.length-2);
    let caps = temp.split('","')
    console.log(caps)
    //let caps = [temp]

    Promise.all(
        caps.map(c => serpai.serp(c))
      ).then(res => {
        fs.writeFileSync('./jsons/images.txt', JSON.stringify(res), 'utf8');
        // console.log("summary:\n", res)
    })
    .catch(err => {console.log(err)});
}
// const fs = require('fs');
// let text = fs.readFileSync('./texts/Lipids.txt', 'utf8').toString()
// let split=text.split('\n\n')
// let paras = []
// split.forEach(function(item){paras.push(item)})
// //console.log(paras)
// let results = calls(paras)
// console.log(JSON.stringify(results))

app.post('/', (req, res) => {
    // console.log(req)
    let text = req.body.data
    let split=text.split('\n') //split up
    
    //logging every new line:
    let paras = []
    split.forEach(function(item){paras.push(item)})
    // console.log("paras\n:", paras)
    let results = []
    // for(let i = paras.length-1;i>=0;i--){
    //     if (paras[i]!=''){
    //         //console.log("paras[", i, "] passed", paras[i])
    //         //console.log("para", i, ": ",calls(paras[i]))
    //         results.push(calls(paras[i]))
    //     }
    // }
    call(paras)
    console.log(paras)
    let summaryArr = fs.readFileSync('./jsons/summaries.txt', 'utf8')
    summaryArr = summaryArr.substring(2, summaryArr.length-2);
    summaryArr = summaryArr.split('","')
    let imageArr = fs.readFileSync('./jsons/images.txt', 'utf8')
    imageArr = imageArr.substring(2, imageArr.length-2);
    imageArr = imageArr.split('","')
    for(let i =0;i<paras.length;i++){
        if(paras[i] != ''){
            results.push([summaryArr[i], imageArr[i]])
        }
    }
    console.log("results obj in post:", results)
    //console.log("RESULT ARR", results)
    //let final_results = []
    // console.log("results: \n", JSON.stringify(results))
    // for (let i=0; i<results.length; i++){
    //     if (results[i][0] != "" & results[i][1]!=""){
    //         final_results.push([results[i][0], results[i][1]])
    //     }
    // }
    // console.log("fin results: \n", JSON.stringify(final_results))
    res.json(JSON.stringify(results)) //alternatively, JSON.stringify(results)
})


module.exports = app