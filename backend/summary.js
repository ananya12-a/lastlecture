const got = require('got');
const fs = require('fs');

function summ(text){
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);

  const runAPI = async () => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Summarize this for a high school student: ${text}`,
      temperature: 0.8,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    //console.log(response.data.choices[0].text)
    return response
  }
  
  runAPI().then(
    response => {
      //console.log(response.data.choices[0].text);
      return response.data.choices[0].text
    }
  )
}

//const text = fs.readFileSync("./texts/Lipids.txt","utf8").toString();

//FROM OPENAI WEBSITE
//const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: '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',
// });
// const openai = new OpenAIApi(configuration);

// const runAPI = async () => {
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Summarize this for a high school student: ${text}`,
//     temperature: 0.8,
//     max_tokens: 150,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0.6,
//     stop: [" Human:", " AI:"],
//   });
//   //console.log(response.data.choices[0].text)
//   return response
// }

// runAPI().then(
//   response => {
//     //console.log(response.data.choices[0].text);
//     fs.writeFileSync('./Summaries/lipids.txt', response.data.choices[0].text, err => {
//       if (err) {
//         console.error(err);
//       }
//       // file written successfully
//     });
//   }
// )

module.exports = {summ} 