const { task2 } = require('./task2');
import {
  LessonResponse,
  Content,
  Lesson,
  ByYear,
  BySubject,
} from './type-definition';
import { groupByYear, groupBySubject, formatLesson } from './utilities';

// use deepClone for safety
// const deepClone = <T>(object: T): T => JSON.parse(JSON.stringify(object));

const contentToPrintFormat = (content: Content) => {
  const formatted = content.data.contentBrowser.topics.flatMap((topic) =>
    topic.units.flatMap((unit) => unit.lessons.flatMap(formatLesson))
  );

  // {lesson[]} -> {[year]: {lesson[]}}
  const byYear: ByYear = groupByYear(formatted);

  // {[year]: {lesson[]}} -> {[year]: {[subject]: {lesson[]}}}
  const bySubject: BySubject = groupBySubject(byYear);

  let outputString = '';
  for (const [year, subjects] of Object.entries(bySubject)) {
    outputString += year + '\n';
    for (const [subject, lessons] of Object.entries(subjects)) {
      outputString += `\t${subject}\n`;
      for (const lesson of lessons) {
        outputString += `\t\t${lesson.Lesson}\n`;
      }
    }
  }
  return outputString;
};

export const task3 = async () => {
  const apiResponse = await task2();
  console.log(contentToPrintFormat(apiResponse));
};
