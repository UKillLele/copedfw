let csvToJson = require('convert-csv-to-json');

let fileInputName = 'cope-team-members.csv';
let fileOutputName = 'cope-team-members.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
