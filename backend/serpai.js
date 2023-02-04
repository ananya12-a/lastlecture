// https://serpapi.com/integrations/node

// const SerpApi = require('google-search-results-nodejs');
// const search = new SerpApi.GoogleSearch("secret_api_key");

//import { getJson } from "serpapi";

// EXPIRED: fc0457ba9effb998ca950a629fe826fff0533cc9490af25b96651fcc27aecfb7

const {getJson} = require('serpapi')
const fs = require('fs');

function serp(caption, API_KEY='fc0457ba9effb998ca950a629fe826fff0533cc9490af25b96651fcc27aecfb7'){
  // const caption = fs.readFileSync(`./Captions/${caption_file}.txt`,"utf8").toString();
  let response = async() => {
    const inresponse = await getJson("google", {
      api_key: API_KEY, // Get your API_KEY from https://serpapi.com/manage-api-key
      tbm: "isch",
      q: caption,
      location: "Pittsburgh, Pennsylvania",
    })
    // console.log(Object.keys(inresponse))
    //console.log(inresponse["images_results"])
    return inresponse["images_results"];
  };
  //console.log(response());

  let runAPIValue = response().then(
    res => {
      //console.log(res)
      return res[0]["original"];
       
    }
  )

  return runAPIValue
}

//serp("urmom")


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

module.exports = {serp} 