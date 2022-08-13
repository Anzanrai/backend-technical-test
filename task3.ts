interface IResponseData {
  data: {
    contentBrowser: {
      topics: [
        {
          units: [
            {
              lessons: [
                {
                  id: number;
                  name: string;
                  subjects: [
                    {
                      id: number;
                      name: string;
                    }
                  ];
                  years: [{ id: number; name: string }];
                }
              ];
            }
          ];
        }
      ];
    };
  };
}

interface IindividualData {
  Year: string;
  Subject: string;
  Lesson: string;
}

export const task3 = (dataObj: IResponseData): [string, IindividualData[]] => {
  let data: IindividualData[] = [];
  dataObj.data.contentBrowser.topics.forEach((topic) => {
    topic.units.forEach((unit) => {
      unit.lessons.forEach((lesson) => {
        data.push({
          Lesson: lesson.name.charAt(0).toUpperCase() + lesson.name.slice(1),
          Subject:
            lesson.subjects[0].name.charAt(0).toUpperCase() +
            lesson.subjects[0].name.slice(1),
          Year: 'Year ' + lesson.years[0].name,
        });
      });
    });
  });

  let copyData = data.map((a) => Object.assign({}, a));
  // console.log('Copied Data', copyData);
  // console.log('Data', data);

  const groupByYear = data.reduce((group: any, datum) => {
    let year = datum.Year;
    delete datum.Year;
    group[year] = group[year] ?? [];
    group[year].push(datum);
    return group;
  }, {});

  // console.log('Group By Year', groupByYear);

  let formattedData: any = {};
  for (let k in groupByYear) {
    let groupBySubject = groupByYear[k].reduce((group: any, datum: any) => {
      let subject = datum.Subject;
      delete datum.Subject;
      group[subject] = group[subject] ?? [];
      group[subject].push(datum);
      return group;
    }, {});
    formattedData[k] = groupBySubject;
  }

  // console.log('Formatted Data', JSON.stringify(formattedData, null, 2));

  let formattedText = '';
  for (let k in formattedData) {
    formattedText += k;
    for (let key in formattedData[k]) {
      formattedText += '\n  ' + key;
      const lessons = formattedData[k][key].reduce((group, lessonObj) => {
        group =
          group instanceof Object
            ? '\n    ' + group.Lesson + '\n    ' + lessonObj.Lesson
            : group + '\n    ' + lessonObj.Lesson;
        return group;
      });
      formattedText += lessons;
    }
  }

  console.log(formattedText);
  return [formattedText, copyData];
};
