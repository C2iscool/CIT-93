import { KEY } from "./keys.js";

const options = {
    KEY: `Authorization: Bearer ${KEY}`
};

fetch('https://api.openai.com/v1/chat/completions', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))