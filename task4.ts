import { Content } from './type-definition';
import { task2 } from './task2';
import { formatLesson } from './utilities';

// import { IindividualData } from './interfaces';
const fs = require('fs');
const converter = require('json-2-csv');

const csvGenerator = (content: Content): void => {
  const formatted = content.data.contentBrowser.topics.flatMap((topic) =>
    topic.units.flatMap((unit) => unit.lessons.flatMap(formatLesson))
  );

  console.log(JSON.stringify(formatted.slice(0, 2), null, 2));

  const options = {
    prependHeader: true,
    keys: ['Year', 'Subject', 'Lesson'],
  };
  let json2csvCallback = function (err: Error, csv: string) {
    if (err) throw err;
    const dir = './Anjan-Rai';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFileSync(`${dir}/output.csv`, csv);
  };
  converter.json2csv(formatted, json2csvCallback, options);
};

export const task4 = async () => {
  const apiResponse = await task2();
  csvGenerator(apiResponse);
};

task4();
