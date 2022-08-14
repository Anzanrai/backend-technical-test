export type LessonResponse = {
  id: number;
  name: string;
  subjects: [
    {
      id: number;
      name: string;
    }
  ];
  years: [{ id: number; name: string }];
};

export type Unit = { lessons: LessonResponse[] };

export type Topic = { units: Unit[] };

export type Content = {
  data: {
    contentBrowser: {
      topics: Topic[];
    };
  };
};

export type Lesson = {
  Lesson: string;
  Subject: string;
  Year: string;
};

export type ByYear = Record<Lesson['Year'], Lesson[]>;
export type BySubject = Record<
  Lesson['Year'],
  Record<Lesson['Subject'], Lesson[]>
>;
