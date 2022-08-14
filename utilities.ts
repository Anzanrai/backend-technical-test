import { Lesson, ByYear, LessonResponse } from './type-definition';

const { groupBy, mapValues } = require('lodash');

export const groupByYear = (formattedData: Array<Lesson>) =>
  groupBy(formattedData, (data: Lesson) => data.Year);

export const groupBySubject = (dataGroupedByYear: ByYear) =>
  mapValues(dataGroupedByYear, (lesson: Lesson) =>
    groupBy(lesson, (data: Lesson) => data.Subject)
  );

const toSentanceCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const formatLesson = (lesson: LessonResponse) => ({
  Lesson: toSentanceCase(lesson.name),
  Subject: toSentanceCase(lesson.subjects[0].name),
  Year: 'Year ' + lesson.years[0].name,
});
