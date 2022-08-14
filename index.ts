import { task1 } from './task1';
import { task2 } from './task2';
import { task3 } from './task3';
import { task5 } from './task5';
import { task4 } from './task4';

const main = async (): Promise<void> => {
  console.log('Hello World');
  await task1();
  await task2();
  await task3();
  await task4();
  await task5();
};
main();
