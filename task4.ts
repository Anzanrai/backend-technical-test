import { Content } from './type-definition';
import { task2 } from './task2';
import { formatLesson } from './utilities';

// import { IindividualData } from './interfaces';
const fs = require('fs');
const converter = require('json-2-csv');

export const task4 = async (content: Content): Promise<void> => {
  const formatted = content.data.contentBrowser.topics.flatMap((topic) =>
    topic.units.flatMap((unit) => unit.lessons.flatMap(formatLesson))
  );

  console.log('From Task 4', JSON.stringify(formatted.slice(0, 2), null, 2));

  const options = {
    prependHeader: true,
    keys: ['Year', 'Subject', 'Lesson'],
  };

  const csv = await converter.json2csvAsync(formatted, options);
  if (!csv) {
    console.log('Error formatting data.');
  }
  const outputDir = './Anjan-Rai/';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  const outputFile = fs.writeFileSync(`${outputDir}/output.csv`, csv);
};
