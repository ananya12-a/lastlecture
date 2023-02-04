// https://serpapi.com/integrations/node

// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("secret_api_key");

//import { getJson } from "serpapi";

const {getJson} = require('serpapi')
const fs = require('fs');
const caption = fs.readFileSync("./Captions/atp.txt","utf8").toString();



const API_KEY = 'fc0457ba9effb998ca950a629fe826fff0533cc9490af25b96651fcc27aecfb7';
const response = async() => {
  const inresponse = await getJson("google", {
    api_key: API_KEY, // Get your API_KEY from https://serpapi.com/manage-api-key
    tbm: "isch",
    q: caption,
    location: "Pittsburgh, Pennsylvania",
  })
  // console.log(Object.keys(inresponse))
  return inresponse["images_results"];
};
//console.log(response());


response().then(
  inresponse => {
    fs.writeFileSync('./serpapi_output/atp_caption.json', JSON.stringify(inresponse), err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    
  }

)

// const params = {
//   q: "Coffee",
//   location: "Austin, Texas, United States",
//   hl: "en",
//   gl: "us",
//   google_domain: "google.com"
// };

// const callback = function(data) {
//   console.log(data);
// };

// // Show result as JSON
// search.json(params, callback);