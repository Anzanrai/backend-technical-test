import { task1 } from './task1';
import { task2 } from './task2';
import { task3 } from './task3';
import { task5 } from './task5';
import { task4 } from './task4';

const main = async (): Promise<void> => {
  console.log('Hello World');
  await task1();
  const apiResponse = await task2();
  console.log(await task3(apiResponse));
  await task4(apiResponse);
  await task5();
};
main();
