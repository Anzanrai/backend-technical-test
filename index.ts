import { task1 } from './task1';
import { task2 } from './task2';
import { task3 } from './task3';
import { task5 } from './task5';
import { IindividualData } from './interfaces';
import { task4 } from './task4';
const converter = require('json-2-csv');
const fs = require('fs');

const hello = async (): Promise<void> => {
  console.log('Hello World');
  await task1();
  const apiResponse = await task2();
  const [formattedText, rawData] = task3(apiResponse);
  task4(rawData);
};
hello();

async function runTask5(): Promise<void> {
  await task5();
}

runTask5();
