import { IindividualData } from './interfaces';
const fs = require('fs');
const converter = require('json-2-csv');

export function task4(rawData: IindividualData[]): void {
  const options = {
    prependHeader: true,
    keys: ['Year', 'Subject', 'Lesson'],
  };
  let json2csvCallback = function (err: Error, csv) {
    if (err) throw err;
    console.log(csv);
    fs.writeFileSync('output.csv', csv);
  };
  converter.json2csv(rawData, json2csvCallback, options);
}
