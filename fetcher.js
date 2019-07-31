const request = require('request');
const fs = require('fs');
const args = process.argv.splice(2);
const url = args[0];
const path = args[1];

const reqDl = function(url, path) {
    request(url, (error, response, body) => {
        fs.writeFile(path, body, (error) => {
          let stats = fs.statSync(path);
          let fileSize = stats['size']
          console.log(`Downloaded and saved ${fileSize} bytes to ${path}`) 
        if(error) {throw error} 
        })
    })
};
module.exports = reqDl;

reqDl(url, path);

