//https://www.twilio.com/blog/getting-started-with-openai-s-gpt-3-in-node-js
// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//   apiKey: "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" //process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);
// const response = async () => {
//   await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Write a caption for images to be inserted into text inputs. For example, for the following text input:\n\"Organisms encode the information\nspecifying the amino acid sequences\nof their proteins as sequences of nucleotides in the DNA. This method\nof encoding information is very similar to that by which the sequences\nof letters encode information in a\nsentence. While a sentence written\nin English consists of a combination\nof the 26 different letters of the alphabet in a specific order, the code\nof a DNA molecule consists of different combinations of the four\ntypes of nucleotides in specific sequences such as CGCTTACG. The\ninformation encoded in DNA is used\nin the everyday metabolism of the\norganism and is passed on to the organism’s descendants.\nDNA molecules in organisms exist not as single chains folded into\ncomplex shapes, like proteins, but\nrather as double chains. Two DNA\npolymers wind around each other\nlike the outside and inside rails of a\ncircular staircase. Such a winding\nshape is called a helix, and a helix\ncomposed of two chains winding\nabout one another, as in DNA, is\ncalled a double helix. Each step of\nDNA’s helical staircase is a basepair, consisting of a base in one\nchain attracted by hydrogen bonds\nto a base opposite it on the other\nchain. These hydrogen bonds hold\nthe two chains together as a duplex\n(figure 3.15). The base-pairing rules\nare rigid: adenine can pair only with\nthymine (in DNA) or with uracil (in\nRNA), and cytosine can pair only\nwith guanine. The bases that participate in base-pairing are said to be\ncomplementary to each other. Additional details of the structure of\nDNA and how it interacts with RNA\nin the production of proteins are\npresented in chapters 14 and 15.\"\nThe caption would be \"Image of a DNA molecule\"\n\nAI:\n\nThe caption for this image could be \"A Visual Representation of the DNA Double Helix Structure\".\nHuman: In addition to serving as subunits of DNA and RNA, nucleotide bases play other critical roles in the life of a cell.\nFor example, adenine is a key component of the molecule\nadenosine triphosphate (ATP; figure 3.17), the energy currency of the cell. It also occurs in the molecules nicotinamide adenine dinucleotide (NAD+) and flavin adenine dinucleotide (FAD+), which carry electrons whose energy is used\nto make ATP.\nLipids are a loosely defined group of molecules with one\nmain characteristic: they are insoluble in water. The most\nfamiliar lipids are fats and oils. Lipids have a very high proportion of nonpolar carbon-hydrogen (C—H) bonds, and so\nlong-chain lipids cannot fold up like a protein to sequester\ntheir nonpolar portions away from the surrounding aqueous\nenvironment. Instead, when placed in water many lipid molecules will spontaneously cluster together and expose what\npolar groups they have to the surrounding water while sequestering the nonpolar parts of the molecules together\nwithin the cluster. This spontaneous assembly of lipids is of\nparamount importance to cells, as it underlies the structure\nof cellular membranes\n\nAI: The caption for this image could be \"Molecules of Lipids Forming a Cellular Membrane\".\nHuman: In addition to serving as subunits of DNA and RNA, nucleotide bases play other critical roles in the life of a cell.\nFor example, adenine is a key component of the molecule\nadenosine triphosphate (ATP; figure 3.17), the energy currency of the cell. It also occurs in the molecules nicotinamide adenine dinucleotide (NAD+) and flavin adenine dinucleotide (FAD+), which carry electrons whose energy is used\nto make ATP.\nLipids are a loosely defined group of molecules with one\nmain characteristic: they are insoluble in water. The most\nfamiliar lipids are fats and oils. Lipids have a very high proportion of nonpolar carbon-hydrogen (C—H) bonds, and so\nlong-chain lipids cannot fold up like a protein to sequester\ntheir nonpolar portions away from the surrounding aqueous\nenvironment. Instead, when placed in water many lipid molecules will spontaneously cluster together and expose what\npolar groups they have to the surrounding water while sequestering the nonpolar parts of the molecules together\nwithin the cluster. This spontaneous assembly of lipids is of\nparamount importance to cells, as it underlies the structure\nof cellular membranes The caption for this image could be \"Molecules of Lipids Forming a Cellular Membrane Structure\".",
//     temperature: 0.17,
//     max_tokens: 150,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0.6,
//     stop: [" Human:", " AI:"],
//   });
//}
// const response2 = await openai.Completion.create({
//     model:"text-davinci-003",
//     prompt:"write a caption for a diagram of cellular respiration",
//     temperature:0.7,
//     max_tokens:256,
//     top_p:1,
//     frequency_penalty:0,
//     presence_penalty:0
// });








const got = require('got');
const fs = require('fs');


const question = fs.readFileSync("./texts/Lipids.txt","utf8").toString();
const chatLog = fs.readFileSync("./texts/DNA+Cap.txt", "utf8").toString();

//FROM OPENAI WEBSITE
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const runAPI = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${chatLog}\nHuman: ${question}`,//"Write a caption for images to be inserted into text inputs. For example, for the following text input:\n\"Organisms encode the information\nspecifying the amino acid sequences\nof their proteins as sequences of nucleotides in the DNA. This method\nof encoding information is very similar to that by which the sequences\nof letters encode information in a\nsentence. While a sentence written\nin English consists of a combination\nof the 26 different letters of the alphabet in a specific order, the code\nof a DNA molecule consists of different combinations of the four\ntypes of nucleotides in specific sequences such as CGCTTACG. The\ninformation encoded in DNA is used\nin the everyday metabolism of the\norganism and is passed on to the organism’s descendants.\nDNA molecules in organisms exist not as single chains folded into\ncomplex shapes, like proteins, but\nrather as double chains. Two DNA\npolymers wind around each other\nlike the outside and inside rails of a\ncircular staircase. Such a winding\nshape is called a helix, and a helix\ncomposed of two chains winding\nabout one another, as in DNA, is\ncalled a double helix. Each step of\nDNA’s helical staircase is a basepair, consisting of a base in one\nchain attracted by hydrogen bonds\nto a base opposite it on the other\nchain. These hydrogen bonds hold\nthe two chains together as a duplex\n(figure 3.15). The base-pairing rules\nare rigid: adenine can pair only with\nthymine (in DNA) or with uracil (in\nRNA), and cytosine can pair only\nwith guanine. The bases that participate in base-pairing are said to be\ncomplementary to each other. Additional details of the structure of\nDNA and how it interacts with RNA\nin the production of proteins are\npresented in chapters 14 and 15.\"\nThe caption would be \"Image of a DNA molecule\"",
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
    fs.writeFileSync('./Captions/lipids.txt', response.data.choices[0].text.match(/"Image of([^']+)"/)[1], err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  }
)



// (async () => {
//   const url = 'https://api.openai.com/v1/engines/davinci/completions';
//   const prompt = `${chatLog}\nHuman: ${question}`;
//   // console.log(prompt)
//   const params = {
    // "prompt": prompt,
    // "model": "text-davinci-003",
//     "max_tokens": 256,
//     "top_p": 1,
//     "temperature": 0.14,
//     "frequency_penalty": 0.5,
//     "presence_penalty":0,
//     'stop': [" Human:", " AI:"],
//   };
//   const headers = {
//     'Authorization': `Bearer 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`,//
//   };

//   try {
//     const response = await got.post(url, { json: params, headers: headers }).json();
//     output = `${prompt}\n\n${response.choices[0].text}`;
//     const result = output;
//     console.log(output);
//   } catch (err) {
//     console.log(err);
//   }
// })();
